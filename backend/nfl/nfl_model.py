import pandas as pd
from sklearn.model_selection import train_test_split, GridSearchCV
from xgboost import XGBClassifier
from sklearn.metrics import accuracy_score, classification_report
from sklearn.preprocessing import LabelEncoder
import numpy as np

df = pd.read_csv("nfl_games.csv", index_col = 0)

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
