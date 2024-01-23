import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split, GridSearchCV
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report
from sklearn.preprocessing import LabelEncoder
from sklearn.model_selection import StratifiedKFold 


features = ['BEFORE_ELO', 'SLIDING_PTS', 'SLIDING_FGM', 'SLIDING_FGA', 'SLIDING_FG_PCT',
            'SLIDING_FG3M', 'SLIDING_FG3A', 'SLIDING_FG3_PCT', 'SLIDING_FTM', 'SLIDING_FTA',
            'SLIDING_FT_PCT', 'SLIDING_OREB', 'SLIDING_DREB', 'SLIDING_REB', 'SLIDING_AST',
            'SLIDING_STL', 'SLIDING_BLK', 'SLIDING_TOV', 'SLIDING_PF', 'SLIDING_PLUS_MINUS']

df = pd.read_csv("games.csv")

label = 'WL'  
le = LabelEncoder()
df[label] = le.fit_transform(df[label])
train_data, test_data = train_test_split(df, test_size=0.2, random_state=42)

train_data, validation_data = train_test_split(train_data, test_size=0.25, random_state=42)

X_train = train_data[features]
y_train = train_data[label]

X_validation = validation_data[features]
y_validation = validation_data[label]

X_test = test_data[features]
y_test = test_data[label]

param_grid = {
    'n_estimators': [150, 200, 250],
    'max_depth': [8, 11, 14],
    'min_samples_split': [8, 11, 14],
    'min_samples_leaf': [1, 2, 4]
}

rf = RandomForestClassifier(random_state=42)
grid_search = GridSearchCV(estimator=rf, param_grid=param_grid, cv=3, scoring='accuracy')
grid_search.fit(X_train, y_train)

best_rf = grid_search.best_estimator_
y_pred_rf = best_rf.predict(X_test)
accuracy = accuracy_score(y_test, y_pred_rf)
print(f"Accuracy: {accuracy:.4f}")

print("\nClassification Report:")
print(classification_report(y_test, y_pred_rf))

best_params = grid_search.best_params_
print("Best Hyperparameters:", best_params)
