import pandas as pd
from sklearn.model_selection import train_test_split, GridSearchCV
from xgboost import XGBClassifier
from sklearn.metrics import accuracy_score, classification_report
from sklearn.preprocessing import LabelEncoder
import numpy as np

#df = pd.read_csv("nfl_games.csv", index_col = 0)
df = games_df

features = ['ELO','Sliding_Pts','Sliding_Cmp',
            'Sliding_Att','Sliding_Pass_Yds',
            'Sliding_TD','Sliding_Int',
            'Sliding_Sk','Sliding_Sk_Att',
            'Sliding_Y/A','Sliding_NY/A',
            'Sliding_Cmp%','Sliding_Rate',
            'Sliding_Car','Sliding_Rush_Yds',
            'Sliding_Rush_Avg','Sliding_Rush_TD',
            'Sliding_FGM','Sliding_FGA','Sliding_XPM',
            'Sliding_XPA','Sliding_Pnt',
            'Sliding_Punt_Yds','Sliding_3DConv',
            'Sliding_3DAtt','Sliding_4DConv',
            'Sliding_4DAtt','Sliding_Plus_Minus']

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

#param_grid = {
    #'n_estimators': np.arange(50, , 5),
    #'max_depth': np.arange(0, 20, 2),
    #'min_child_weight': np.arange(1, 11, 2),
    #'gamma': np.arange(0, 5, 0.2)
#}

param_grid = {
    "n_estimators": [50, 55, 60],
    "max_depth": [0, 5, 10],
    "min_child_weight": [1, 5, 10], 
    "gamma": [0, 1, 5] 
}

xgb = XGBClassifier(use_label_encoder=False, eval_metric='logloss')
grid_search = GridSearchCV(estimator=xgb, param_grid=param_grid, cv=3, scoring='accuracy')
grid_search.fit(X_train, y_train)

best_xgb = grid_search.best_estimator_
y_pred_xgb = best_xgb.predict(X_test)
accuracy = accuracy_score(y_test, y_pred_xgb)
print(f"Accuracy: {accuracy:.4f}")

print("\nClassification Report:")
print(classification_report(y_test, y_pred_xgb))
print(grid_search.best_params_)
                                                 