import numpy as np
import pandas as pd
import random
import time
import ssl
from datetime import datetime

start = datetime.now()
ssl._create_default_https_context = ssl._create_unverified_context

start_of_season = 2014
end_of_season = 2024
seasons = [str(season) for season in range (start_of_season,end_of_season)]
team_abbrs = ['crd','atl','rav','buf','car','chi','cin','cle','dal','den','det',
              'gnb','htx','clt','jax','kan','sdg','ram','rai','mia','min','nwe',
              'nor','nyg','nyj','phi','pit','sea','sfo','tam','oti','was']
nfl_df = pd.DataFrame()


for season in seasons:
    for team in team_abbrs:
        url = "https://www.pro-football-reference.com/teams/" + team + "/" + season + "/gamelog/"
        offense_stats = pd.read_html(url, header = 1, attrs = {"id": "gamelog" + season})[0]
        defense_stats = pd.read_html(url, header = 1, attrs = {"id": "gamelog_opp" + season})[0]
        offense_stats.drop(columns=['Day', 'Date', 'Unnamed: 3', 'OT', 'Unnamed: 6'], inplace=True)
        offense_stats = offense_stats.rename(columns={'Unnamed: 4': 'WL'})
        team_stats = pd.concat([offense_stats, defense_stats], axis = 1)

        offense_stats.insert(loc = 0, column = 'Season', value = season)
        offense_stats.insert(loc = 2, column = 'Team', value = team.upper())
        nfl_df = pd.concat([nfl_df, offense_stats], ignore_index=True)

        time.sleep(5)
nfl_df.to_csv("nfl_games.csv", index = False)
end = datetime.now()
timing = end - start
# print(timing)

def calc_elo(df):
    before_elo = {}
    before_elo_list = []
    after_elo = {}
    after_elo_list = []

    for _, row in df.iterrows():
        team = row["Team"]
        opp = row["Opp"]
        before_elo_team = before_elo.get(team, 1500)
        before_elo_opp = before_elo.get(opp, 1500)

        if row.name == 0:
            k_factor = 20 * ((abs(row['Plus_Minus']) + 3) ** 0.08) / (7.5 + 0.006 * abs(before_elo_team - before_elo_opp))
            expected_win = 1 / (1 + 10 ** ((before_elo_opp - before_elo_team) / 400))
            after_elo_game = before_elo_team + k_factor * (int(row["WL"] == "W") - expected_win)
        else:
            k_factor = 20 * ((abs(row['Plus_Minus']) + 3) ** 0.08) / (7.5 + 0.006 * abs(before_elo_team - before_elo_opp))
            expected_win = 1 / (1 + 10 ** ((before_elo_opp - before_elo_team) / 400))
            after_elo_game = before_elo_team + k_factor * (int(row['WL'] == 'W') - expected_win)

        before_elo[team] = round(after_elo_game, 2)
        after_elo[team] = after_elo_game
        after_elo_list.append(after_elo_game)
        before_elo_list.append(before_elo_team)

    df['ELO'] = before_elo_list
    return df

games_df = pd.read_csv("nfl_games.csv", index_col = 0)
games_df.rename(columns={'Tm': 'Pts', 'Opp.1': 'Opp_Pts', "Yds" : "Pass_Yds",
                         "Yds.1" : "Sk_Att", "Att.1": "Car", "Yds.2":"Rush_Yds",
                        "Y/A.1": "Rush_Avg", "TD.1":"Rush_TD", "Yds.3": "Punt_Yds"}, inplace=True)
opp_abr = {
    "Arizona Cardinals": "CRD", "Atlanta Falcons" : "ATL", "Baltimore Ravens" : "RAV",
    "Buffalo Bills" : "BUF", "Carolina Panthers" : "CAR", "Chicago Bears": "CHI",
    "Cincinnati Bengals" : "CIN", "Cleveland Browns" : "CLE", "Dallas Cowboys" : "DAL",
    "Denver Broncos" : "DEN", "Detroit Lions": "DET", "Green Bay Packers" : "GNB",
    "Houston Texans" : "HTX", "Indianapolis Colts" : "CLT", "Jacksonville Jaguars" : "JAX",
    "Kansas City Chiefs" : "KAN", "San Diego Chargers" : "SDG", "St. Louis Rams" : "RAM",
    "Los Angeles Rams" : "RAM", "Oakland Raiders" : "RAI", "Las Vegas Raiders": "RAI",
    "Miami Dolphins" : "MIA", "Minnesota Vikings": "MIN", "New England Patriots": "NWE",
    "New Orleans Saints" : "NOR", "New York Giants" : "NYG", "New York Jets" : "NYJ",
    "Philadelphia Eagles" : "PHI", "Pittsburgh Steelers" : "PIT", "Seattle Seahawks" : "SEA",
    "San Francisco 49ers" : "SFO", "Tampa Bay Buccaneers" : "TAM", "Tennessee Titans" : "OTI",
    "Washington Commanders" : "WAS", "Washington Redskins" : "WAS", "Washington Football Team" : "WAS",
    "Los Angeles Chargers" : "SDG"

}


games_df["Opp"].replace(opp_abr, inplace = True)

for rows in games_df:
    games_df["Plus_Minus"] = games_df["Pts"] - games_df["Opp_Pts"]

# games_df.to_csv("nfl_games.csv")
calc_elo(games_df)
print(games_df)


selected_stats = ['Pts', 'Cmp', 'Att',
       'Pass_Yds', 'TD', 'Int', 'Sk', 'Sk_Att', 'Y/A', 'NY/A', 'Cmp%', 'Rate',
       'Car', 'Rush_Yds', 'Rush_Avg', 'Rush_TD', 'FGM', 'FGA', 'XPM', 'XPA',
       'Pnt', 'Punt_Yds', '3DConv', '3DAtt', '4DConv', '4DAtt',
       'Plus_Minus']

for stat in selected_stats:
    games_df[f"Sliding_{stat}"] = games_df.groupby("Team")[stat].transform(lambda x: x.rolling(window = 3,min_periods = 1).mean().shift())
for stat in selected_stats:
    games_df.loc[games_df.groupby("Team").cumcount() <= 1, f"Sliding_{stat}"] = games_df[stat]
games_df = games_df.round({'Sliding_' + stat: 2 for stat in selected_stats})

print(games_df)
