import time
import pandas as pd
from nba_api.stats.endpoints import leaguegamefinder, commonteamroster

def determine_winning_team(row):
    if row['PTS_HOME'] > row['PTS_AWAY']:
        return row['HOME_TEAM']
    elif row['PTS_HOME'] < row['PTS_AWAY']< 0:
        return row['AWAY_TEAM']

seasons = ['2014-15', '2015-16', '2016-17', 
           '2017-18', '2018-19', '2019-20', '2020-21', 
           '2021-22', '2022-23', '2023-24']

combined_games_df = pd.DataFrame()

team_names = ['Atlanta Hawks', 'Boston Celtics', 'Brooklyn Nets', 'Charlotte Hornets', 'Chicago Bulls', 
              'Cleveland Cavaliers', 'Dallas Mavericks', 'Denver Nuggets', 'Detroit Pistons', 
              'Golden State Warriors', 'Houston Rockets', 'Indiana Pacers', 'LA Clippers', 'Los Angeles Clippers',  
              'Los Angeles Lakers', 'Memphis Grizzlies', 'Miami Heat', 'Milwaukee Bucks', 
              'Minnesota Timberwolves', 'New Orleans Pelicans', 'New York Knicks', 
              'Oklahoma City Thunder', 'Orlando Magic', 'Philadelphia 76ers', 'Phoenix Suns', 
              'Portland Trail Blazers', 'Sacramento Kings', 'San Antonio Spurs', 'Toronto Raptors', 
              'Utah Jazz', 'Washington Wizards']

for season in seasons:
    gamefinder = leaguegamefinder.LeagueGameFinder(season_nullable=season, league_id_nullable='00', 
                                                   season_type_nullable='Regular Season', 
                                                   date_from_nullable='10/01/2014', date_to_nullable='04/30/2024')
    games = gamefinder.get_data_frames()[0]
    games = games.sort_values(by=['GAME_DATE'])

    games['TEAM_NAME'] = games['TEAM_NAME'].replace({'Los Angeles Clippers': 'LA Clippers'})
    games = games[games['TEAM_NAME'].str.lower().isin([name.lower() for name in team_names])]

    home_team_data = games[games['MATCHUP'].str.contains('vs.')].copy()
    away_team_data = games[games['MATCHUP'].str.contains('@')].copy()

    aggregated_games = pd.merge(home_team_data, away_team_data, on=['GAME_ID'], suffixes=('_HOME', '_AWAY'))

    home_cols = ['SEASON_ID_HOME', 'GAME_ID', 'GAME_DATE_HOME', 'TEAM_ABBREVIATION_HOME', 'PTS_HOME', 'MIN_HOME',
                 'FGM_HOME', 'FGA_HOME', 'FG_PCT_HOME', 'FG3M_HOME', 'FG3A_HOME', 'FG3_PCT_HOME',
                 'FTM_HOME', 'FTA_HOME', 'FT_PCT_HOME', 'OREB_HOME', 'DREB_HOME', 'REB_HOME',
                 'AST_HOME', 'STL_HOME', 'BLK_HOME', 'TOV_HOME', 'PF_HOME', 'PLUS_MINUS_HOME', 'WL_HOME']

    away_cols = ['SEASON_ID_AWAY', 'GAME_ID', 'GAME_DATE_AWAY', 'TEAM_ABBREVIATION_AWAY', 'PTS_AWAY', 'MIN_AWAY',
                 'FGM_AWAY', 'FGA_AWAY', 'FG_PCT_AWAY', 'FG3M_AWAY', 'FG3A_AWAY', 'FG3_PCT_AWAY',
                 'FTM_AWAY', 'FTA_AWAY', 'FT_PCT_AWAY', 'OREB_AWAY', 'DREB_AWAY', 'REB_AWAY',
                 'AST_AWAY', 'STL_AWAY', 'BLK_AWAY', 'TOV_AWAY', 'PF_AWAY', 'PLUS_MINUS_AWAY', 'WL_AWAY']

    games_df = pd.merge(aggregated_games[home_cols], aggregated_games[away_cols], on='GAME_ID', 
                        suffixes=('_HOME', '_AWAY'))

    games_df['SEASON_ID'] = games_df['SEASON_ID_HOME'].combine_first(games_df['SEASON_ID_AWAY'])
    games_df = games_df.drop(columns=['SEASON_ID_HOME', 'SEASON_ID_AWAY'])

    games_df['HOME_TEAM'] = games_df['TEAM_ABBREVIATION_HOME']
    games_df['AWAY_TEAM'] = games_df['TEAM_ABBREVIATION_AWAY']

    games_df['WINNER'] = games_df.apply(determine_winning_team, axis=1)
    column_names = [
        'SEASON_ID', 'GAME_ID', 'GAME_DATE_HOME', 'HOME_TEAM', 'PTS_HOME', 'MIN_HOME',
        'FGM_HOME', 'FGA_HOME', 'FG_PCT_HOME', 'FG3M_HOME', 'FG3A_HOME', 'FG3_PCT_HOME',
        'FTM_HOME', 'FTA_HOME', 'FT_PCT_HOME', 'OREB_HOME', 'DREB_HOME', 'REB_HOME',
        'AST_HOME', 'STL_HOME', 'BLK_HOME', 'TOV_HOME', 'PF_HOME', 'PLUS_MINUS_HOME', 'WL_HOME',
        'GAME_DATE_AWAY', 'AWAY_TEAM', 'PTS_AWAY', 'MIN_AWAY', 'FGM_AWAY', 'FGA_AWAY',
        'FG_PCT_AWAY', 'FG3M_AWAY', 'FG3A_AWAY', 'FG3_PCT_AWAY', 'FTM_AWAY', 'FTA_AWAY',
        'FT_PCT_AWAY', 'OREB_AWAY', 'DREB_AWAY', 'REB_AWAY', 'AST_AWAY', 'STL_AWAY',
        'BLK_AWAY', 'TOV_AWAY', 'PF_AWAY', 'PLUS_MINUS_AWAY', 'WL_AWAY'
    ]

    games_df = games_df[column_names]

    games_df.rename(columns={'GAME_DATE_HOME': 'GAME_DATE'}, inplace=True)
    games_df.drop(columns=['GAME_DATE_AWAY'], inplace=True)
    games_df.drop(columns=['WL_HOME'], inplace=True)
    games_df.drop(columns=['WL_AWAY'], inplace=True)
    games_df['WINNING_TEAM'] = games_df.apply(determine_winning_team, axis=1)
    games_df = games_df.sort_values(by=['GAME_DATE'])
    combined_games_df = pd.concat([combined_games_df, games_df], ignore_index=True)

combined_games_df.to_csv("games.csv")
# print(combined_games_df)
df = combined_games_df
home_data = df.groupby(['HOME_TEAM', 'SEASON_ID']).agg({
    'PTS_HOME': 'mean',
    'MIN_HOME': 'mean',
    'FGM_HOME': 'mean',
    'FGA_HOME': 'mean',
    'FG_PCT_HOME': 'mean',
    'FG3M_HOME': 'mean',
    'FG3A_HOME': 'mean',
    'FG3_PCT_HOME': 'mean',
    'FTM_HOME': 'mean',
    'FTA_HOME': 'mean',
    'FT_PCT_HOME': 'mean',
    'OREB_HOME': 'mean',
    'DREB_HOME': 'mean',
    'REB_HOME': 'mean',
    'AST_HOME': 'mean',
    'STL_HOME': 'mean',
    'BLK_HOME': 'mean',
    'TOV_HOME': 'mean',
    'PF_HOME': 'mean',
    'PLUS_MINUS_HOME': 'mean',
}).reset_index()

home_data.rename(columns={
    'PTS_HOME': 'Average_PTS_Home',
    'MIN_HOME': 'Average_MIN_Home',
    'FGM_HOME': 'Average_FGM_Home',
    'FGA_HOME': 'Average_FGA_Home',
    'FG_PCT_HOME': 'Average_FG_PCT_Home',
    'FG3M_HOME': 'Average_FG3M_Home',
    'FG3A_HOME': 'Average_FG3A_Home',
    'FG3_PCT_HOME': 'Average_FG3_PCT_Home',
    'FTM_HOME': 'Average_FTM_Home',
    'FTA_HOME': 'Average_FTA_Home',
    'FT_PCT_HOME': 'Average_FT_PCT_Home',
    'OREB_HOME': 'Average_OREB_Home',
    'DREB_HOME': 'Average_DREB_Home',
    'REB_HOME': 'Average_REB_Home',
    'AST_HOME': 'Average_AST_Home',
    'STL_HOME': 'Average_STL_Home',
    'BLK_HOME': 'Average_BLK_Home',
    'TOV_HOME': 'Average_TOV_Home',
    'PF_HOME': 'Average_PF_Home',
    'PLUS_MINUS_HOME': 'Average_PLUS_MINUS_Home',  
}, inplace=True)

away_data = df.groupby(['AWAY_TEAM', 'SEASON_ID']).agg({
    'PTS_AWAY': 'mean',
    'MIN_AWAY': 'mean',
    'FGM_AWAY': 'mean',
    'FGA_AWAY': 'mean',
    'FG_PCT_AWAY': 'mean',
    'FG3M_AWAY': 'mean',
    'FG3A_AWAY': 'mean',
    'FG3_PCT_AWAY': 'mean',
    'FTM_AWAY': 'mean',
    'FTA_AWAY': 'mean',
    'FT_PCT_AWAY': 'mean',
    'OREB_AWAY': 'mean',
    'DREB_AWAY': 'mean',
    'REB_AWAY': 'mean',
    'AST_AWAY': 'mean',
    'STL_AWAY': 'mean',
    'BLK_AWAY': 'mean',
    'TOV_AWAY': 'mean',
    'PF_AWAY': 'mean',
    'PLUS_MINUS_AWAY': 'mean', 
}).reset_index()

away_data.rename(columns={
    'PTS_AWAY': 'Average_PTS_Away',
    'MIN_AWAY': 'Average_MIN_Away',
    'FGM_AWAY': 'Average_FGM_Away',
    'FGA_AWAY': 'Average_FGA_Away',
    'FG_PCT_AWAY': 'Average_FG_PCT_Away',
    'FG3M_AWAY': 'Average_FG3M_Away',
    'FG3A_AWAY': 'Average_FG3A_Away',
    'FG3_PCT_AWAY': 'Average_FG3_PCT_Away',
    'FTM_AWAY': 'Average_FTM_Away',
    'FTA_AWAY': 'Average_FTA_Away',
    'FT_PCT_AWAY': 'Average_FT_PCT_Away',
    'OREB_AWAY': 'Average_OREB_Away',
    'DREB_AWAY': 'Average_DREB_Away',
    'REB_AWAY': 'Average_REB_Away',
    'AST_AWAY': 'Average_AST_Away',
    'STL_AWAY': 'Average_STL_Away',
    'BLK_AWAY': 'Average_BLK_Away',
    'TOV_AWAY': 'Average_TOV_Away',
    'PF_AWAY': 'Average_PF_Away',
    'PLUS_MINUS_AWAY': 'Average_PLUS_MINUS_Away', 
}, inplace=True)


average = pd.merge(home_data, away_data, left_on=['HOME_TEAM', 'SEASON_ID'], 
                   right_on=['AWAY_TEAM', 'SEASON_ID'], suffixes=('_HOME', '_AWAY'))

cols_to_avg = ['PTS', 'MIN', 'FGM', 'FGA', 'FG_PCT', 'FG3M', 'FG3A', 
               'FG3_PCT', 'FTM', 'FTA', 'FT_PCT', 'OREB', 'DREB', 'REB', 
               'AST', 'STL', 'BLK', 'TOV', 'PF', 'PLUS_MINUS']

for col in cols_to_avg:
    average[f'Average_{col}'] = (average[f'Average_{col}_Home'] + average[f'Average_{col}_Away']) / 2
    
average = average[['HOME_TEAM', 'SEASON_ID'] + [f'Average_{col}' for col in cols_to_avg]]

average.rename(columns={
    'HOME_TEAM' : 'TEAM' 
}, inplace=True)


average.to_csv("game_averages.csv")


# performance for each player's performance this season + moving average

from nba_api.stats.endpoints import leaguegamefinder, commonteamroster, PlayerGameLog
import pandas as pd
from requests.exceptions import ReadTimeout
from datetime import datetime
import time

def retry_request(request_func, max_retries=3, timeout=60, delay=0):
    retries = 0
    while retries < max_retries:
        try:
            return request_func()
        except ReadTimeout:
            print(f"delay")
            time.sleep(delay)
            retries += 1
    raise Exception("can't retry")


season = "2023-24"
game_finder = leaguegamefinder.LeagueGameFinder(season_nullable="2023-24")
games_data = retry_request(game_finder.get_data_frames)[0]

all_team_ids = list(set(games_data['TEAM_ID'].unique()))

all_rosters = pd.DataFrame()

batch_size = 10

for i in range(0, len(all_team_ids), batch_size):
    batch_team_ids = all_team_ids[i:i+batch_size]
    for team_id in batch_team_ids:
        roster_data = retry_request(lambda: commonteamroster.CommonTeamRoster(team_id=team_id, season=season).get_data_frames()[0])
        all_rosters = all_rosters.append(roster_data, ignore_index=True)
        time.sleep(.125)

unique_players = all_rosters['PLAYER_ID'].unique()

all_player_logs = pd.DataFrame()
last_10_player_logs = pd.DataFrame()

for player_id in unique_players:
    try:
        player_game_log = PlayerGameLog(player_id=player_id, season=season, season_type_all_star='Regular Season')
        player_game_log_data = player_game_log.get_data_frames()[0]
        player_game_log_data = player_game_log_data.sort_values(by='GAME_DATE', ascending=True)
        all_player_logs = all_player_logs.append(player_game_log_data, ignore_index=True)
        last_10_games_data = player_game_log_data.head(10)
        last_10_player_logs = last_10_player_logs.append(last_10_games_data, ignore_index=True)
    except Exception as e:
        print(f"Error for player_id {player_id}: {str(e)}")
    time.sleep(.125)

all_player_logs.to_csv("all_games.csv", index=False)
last_10_player_logs.to_csv("last10games.csv", index=False)

# Calculate averages for last 10 games
moving_average = pd.read_csv("last10games.csv", index_col=[0])
columns_to_drop = ["Game_ID", "GAME_DATE", "MATCHUP", "WL", "VIDEO_AVAILABLE"]
moving_average = moving_average.drop(columns=columns_to_drop)
moving_average.to_csv("player_avg_last10.csv", index=False)

# team 10 game moving average

gamefinder = leaguegamefinder.LeagueGameFinder(season_nullable=season, league_id_nullable='00', season_type_nullable='Regular Season',
                                                   date_from_nullable='10/01/2023', date_to_nullable='04/30/2024')
games = gamefinder.get_data_frames()[0]

games = games.sort_values(by=['GAME_DATE'])
team_names = ['Atlanta Hawks', 'Boston Celtics', 'Brooklyn Nets', 'Charlotte Hornets', 'Chicago Bulls', 
                  'Cleveland Cavaliers', 'Dallas Mavericks', 'Denver Nuggets', 'Detroit Pistons', 
                  'Golden State Warriors', 'Houston Rockets', 'Indiana Pacers', 'LA Clippers', 
                  'Los Angeles Lakers', 'Memphis Grizzlies', 'Miami Heat', 'Milwaukee Bucks', 
                  'Minnesota Timberwolves', 'New Orleans Pelicans', 'New York Knicks', 
                  'Oklahoma City Thunder', 'Orlando Magic', 'Philadelphia 76ers', 'Phoenix Suns', 
                  'Portland Trail Blazers', 'Sacramento Kings', 'San Antonio Spurs', 'Toronto Raptors', 'Utah Jazz', 'Washington Wizards']
    
    #remove all rows that are not NBA games
games = games[games['TEAM_NAME'].isin(team_names)]
    
print(games)

