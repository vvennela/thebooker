import pandas as pd
from model import rf 

df = pd.read_csv("games.csv")

features = ['BEFORE_ELO', 'SLIDING_PTS', 'SLIDING_FGM', 'SLIDING_FGA', 'SLIDING_FG_PCT',
            'SLIDING_FG3M', 'SLIDING_FG3A', 'SLIDING_FG3_PCT', 'SLIDING_FTM', 'SLIDING_FTA',
            'SLIDING_FT_PCT', 'SLIDING_OREB', 'SLIDING_DREB', 'SLIDING_REB', 'SLIDING_AST',
            'SLIDING_STL', 'SLIDING_BLK', 'SLIDING_TOV', 'SLIDING_PF', 'SLIDING_PLUS_MINUS']

team_name = 'BOS'  # Replace 'YourTeam' with the actual team name
opp_name = 'MIN'
# Filter the dataset for the specified team
team_data1 = df[df['TEAM'] == team_name]
team_data2 = df[df['TEAM'] == opp_name]
team_data1 = team_data1[features]
team_data2 = team_data2[features]

team_data1_array = team_data1[features].values[-1].reshape(1, -1)
team_data2_array = team_data2[features].values[-1].reshape(1, -1)

# Set feature names for RandomForestClassifier
rf.feature_names_in_ = features

# Predict probabilities
probabilities_team1 = rf.predict_proba(team_data1_array)[0][1]  # Probability for class 1 (win)
probabilities_team2 = rf.predict_proba(team_data2_array)[0][1]  # Probability for class 1 (win)

# Determine the winner based on the higher probability
winner = team_name if probabilities_team1 > probabilities_team2 else opp_name

# Display the results
print(f"Predicted Probability for {team_name}: {probabilities_team1:.4f}")
print(f"Predicted Probability for {opp_name}: {probabilities_team2:.4f}")
print(f"The winner is: {winner}")
