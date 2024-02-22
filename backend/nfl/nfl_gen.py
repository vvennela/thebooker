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

games_df = pd.DataFrame()


for season in seasons:
    for team in team_abbrs:
        url = "https://www.pro-football-reference.com/teams/" + team + "/" + season + "/gamelog/"
        offense_stats = pd.read_html(url, header = 1, attrs = {"id": "gamelog" + season})[0]
        #defense_stats = pd.read_html(url, header = 1, attrs = {"id": "gamelog_opp" + season})[0]
        offense_stats.drop(columns=['Day', 'Date', 'Unnamed: 3', 'OT', 'Unnamed: 6'], inplace=True)
        offense_stats = offense_stats.rename(columns={'Unnamed: 4': 'WL'})
        #team_stats = pd.concat([offense_stats, defense_stats], axis = 1)

        offense_stats.insert(loc = 0, column = 'Season', value = season)
        offense_stats.insert(loc = 2, column = 'Team', value = team.upper())
        games_df = pd.concat([games_df, offense_stats], ignore_index=True)

        time.sleep(3)
# nfl_df.to_csv("nfl_games.csv", index = False)
end = datetime.now()
timing = end - start
print(timing)

games_df.rename(columns={'Tm': 'Pts', 'Opp.1': 'Opp_Pts', "Yds" : "Pass_Yds",
                         "Yds.1" : "Sk_Att", "Att.1": "Car", "Yds.2":"Rush_Yds",
                        "Y/A.1": "Rush_Avg", "TD.1":"Rush_TD", "Yds.3": "Punt_Yds"}, inplace=True)

games_df.to_csv("nfl_games.csv")
