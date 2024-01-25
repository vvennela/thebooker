from flask import Flask, request, jsonify
import pandas as pd
from model import features, best_xgb

app = Flask(__name__)

df = pd.read_csv("games.csv")
stored_features = features

@app.route('/predict', methods=['GET'])
def predict():
    team_name = request.args.get('team')
    opp_name = request.args.get('opponent')

    team_data1 = df[df['TEAM'] == team_name]
    team_data2 = df[df['TEAM'] == opp_name]
    team_data1 = team_data1[stored_features]
    team_data2 = team_data2[stored_features]

    team_data1_array = team_data1[stored_features].values[-1].reshape(1, -1)
    team_data2_array = team_data2[stored_features].values[-1].reshape(1, -1)

    probabilities_team1 = best_xgb.predict_proba(team_data1_array)[0][1] 
    probabilities_team2 = best_xgb.predict_proba(team_data2_array)[0][1]  

    winner = team_name if probabilities_team1 > probabilities_team2 else opp_name

    return jsonify({"winner": winner})

if __name__ == '__main__':
    app.run(debug=True)
