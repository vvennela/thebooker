# import time
import pandas as pd 
from nba_api.stats.endpoints import leaguegamefinder


# equations, methodology sourced from Josh Weiner's team @ UPenn

def calculate_elo(df):
    before_elo_ratings = {}  
    after_elo_ratings = {}   
    before_elo_list = []
    after_elo_list = []

    for _, row in df.iterrows():
        team = row['TEAM']
        opponent_team = row['OPP']
        before_elo_team = before_elo_ratings.get(team, 1500)
        before_elo_opponent = before_elo_ratings.get(opponent_team, 1500)

        if row.name == 0:
            k_factor = 20 * ((abs(row['PLUS_MINUS']) + 3) ** 0.08) / (7.5 + 0.006 * abs(before_elo_team - before_elo_opponent))
            expected_win = 1 / (1 + 10**((before_elo_opponent - before_elo_team) / 400))
            after_elo_game = before_elo_team + k_factor * (int(row['WL'] == 'W') - expected_win)
        else:
            k_factor = 20 * ((abs(row['PLUS_MINUS']) + 3) ** 0.08) / (7.5 + 0.006 * abs(before_elo_team - before_elo_opponent))
            expected_win = 1 / (1 + 10**((before_elo_opponent - before_elo_team) / 400))
            after_elo_game = before_elo_team + k_factor * (int(row['WL'] == 'W') - expected_win)

        before_elo_ratings[team] = after_elo_game
        after_elo_ratings[team] = after_elo_game
        after_elo_list.append(after_elo_game)
        before_elo_list.append(before_elo_team)

    df['BEFORE_ELO'] = before_elo_list
    df['AFTER_ELO'] = after_elo_list

    return df

seasons = ['2014-15', '2015-16', '2016-17', 
           '2017-18', '2018-19', '2019-20', '2020-21', 
           '2021-22', '2022-23', '2023-24']

games_df = pd.DataFrame()

selected_stats = ['PTS', 'FGM', 'FGA', 'FG_PCT',
                  'FG3M', 'FG3A', 'FG3_PCT', 'FTM',
                  'FTA', 'FT_PCT', 'OREB', 'DREB', 'REB',
                  'AST', 'STL', 'BLK', 'TOV', 'PF', 'PLUS_MINUS']

team_names = ['Atlanta Hawks', 'Boston Celtics', 'Brooklyn Nets', 'Charlotte Hornets', 'Chicago Bulls', 
              'Cleveland Cavaliers', 'Dallas Mavericks', 'Denver Nuggets', 'Detroit Pistons', 
              'Golden State Warriors', 'Houston Rockets', 'Indiana Pacers', 'LA Clippers', 
              'Los Angeles Clippers',  'Los Angeles Lakers', 'Memphis Grizzlies', 'Miami Heat', 
              'Milwaukee Bucks', 'Minnesota Timberwolves', 'New Orleans Pelicans', 'New York Knicks', 
              'Oklahoma City Thunder', 'Orlando Magic', 'Philadelphia 76ers', 'Phoenix Suns', 
              'Portland Trail Blazers', 'Sacramento Kings', 'San Antonio Spurs', 
              'Toronto Raptors', 'Utah Jazz', 'Washington Wizards']


for season in seasons:
    gamefinder = leaguegamefinder.LeagueGameFinder(season_nullable=season, 
                                                   league_id_nullable='00',
                                                   season_type_nullable='Regular Season', 
                                                   date_from_nullable='10/01/2014', 
                                                   date_to_nullable='04/30/2024')
    games = gamefinder.get_data_frames()[0]
    games = games.sort_values(by = ['GAME_DATE'])
    games['TEAM_NAME'] = games['TEAM_NAME'].replace({'Los Angeles Clippers': 'LA Clippers'})
    games = games[games['TEAM_NAME'].str.lower().isin([name.lower() for name in team_names])]
    
    games_df = pd.concat([games_df, games], ignore_index=True)

games_df['MATCHUP'] = games_df['MATCHUP'].str[-3:]
games_df = games_df.rename(columns={'MATCHUP': 'OPP', "TEAM_ABBREVIATION": "TEAM"})
games_df = games_df.drop(columns=['TEAM_NAME', 'MIN'])
games_df = round(calculate_elo(games_df),2)

games_df['GAME_DATE'] = pd.to_datetime(games_df['GAME_DATE'])

for stat in selected_stats:
    games_df[f"SLIDING_{stat}"] = games_df.groupby('TEAM')[stat].transform(lambda x: x.rolling(window=10, min_periods=1).mean().shift())
for stat in selected_stats:
    games_df.loc[games_df.groupby('TEAM').cumcount() <= 1, f"SLIDING_{stat}"] = games_df[stat]
games_df = games_df.round({'SLIDING_' + stat: 2 for stat in selected_stats})

games_df.to_csv("games.csv")
