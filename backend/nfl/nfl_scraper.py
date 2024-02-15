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
        #defense_stats = pd.read_html(url, header = 1, attrs = {"id": "gamelog_opp" + season})[0]
        offense_stats.drop(columns=['Day', 'Date', 'Unnamed: 3', 'OT', 'Unnamed: 6'], inplace=True)
        offense_stats = offense_stats.rename(columns={'Unnamed: 4': 'WL'})
        #team_stats = pd.concat([offense_stats, defense_stats], axis = 1)

        offense_stats.insert(loc = 0, column = 'Season', value = season)
        offense_stats.insert(loc = 2, column = 'Team', value = team.upper())
        nfl_df = pd.concat([nfl_df, offense_stats], ignore_index=True)
        
        time.sleep(3)
nfl_df.to_csv("nfl_games.csv", index = False)
end = datetime.now()
timing = end - start
print(timing)
