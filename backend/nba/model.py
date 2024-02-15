import pandas as pd
from sklearn.model_selection import train_test_split, GridSearchCV
from sklearn.preprocessing import LabelEncoder
from xgboost import XGBClassifier

df = pd.read_csv("games.csv")
df = df[df['WL'].isin(['W', 'L'])]

features = ['BEFORE_ELO',  'SLIDING_FG_PCT','SLIDING_FG3A',
            'SLIDING_DREB', 'SLIDING_REB', 'SLIDING_AST',
            'SLIDING_STL', 'SLIDING_BLK', 'SLIDING_PLUS_MINUS']



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
    'n_estimators': [30],
    'max_depth': [3],
    'min_child_weight': [8],
    'gamma': [4.7]
}
xgb = XGBClassifier(use_label_encoder=False, eval_metric='logloss')
grid_search = GridSearchCV(estimator=xgb, param_grid=param_grid, cv=3, scoring='accuracy')
grid_search.fit(X_train, y_train)

best_xgb = grid_search.best_estimator_
y_pred_xgb = best_xgb.predict(X_test)
#accuracy = accuracy_score(y_test, y_pred_xgb)
#print(f"Accuracy: {accuracy:.4f}")

#print("\nClassification Report:")
#print(classification_report(y_test, y_pred_xgb))
