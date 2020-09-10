from dotenv import load_dotenv
from datetime import datetime, timedelta
load_dotenv()

from starter_app import app, db
from starter_app.models import User

with app.app_context():
  db.drop_all()
  db.create_all()

  u_list = [
    User( email = "demo@brainseed.com", hashed_password = "password", first_name = "Teresa", last_name = "Knupp",   picUrl = "https://zenmo-bucket.s3-us-west-1.amazonaws.com/profile-photos/profile_photo_1.png",created_at = datetime.now() - timedelta(days = 370) ),
    User( email = "RandiJVarney@teleworm.us", hashed_password = "password", first_name = "Randi", last_name = "Varney",   picUrl = "https://zenmo-bucket.s3-us-west-1.amazonaws.com/profile-photos/profile_photo_2.png",created_at = datetime.now() - timedelta(days = 370) ),
    User( email = "CarrieRLuongo@teleworm.us", hashed_password = "password", first_name = "Carrie", last_name = "Luongo",   picUrl = "https://zenmo-bucket.s3-us-west-1.amazonaws.com/profile-photos/profile_photo_3.png",created_at = datetime.now() - timedelta(days = 370) ),
    User( email = "DiannaBCoulter@cuvox.de",hashed_password = "password", first_name = "Dianna", last_name = "Coulter",   picUrl = "https://zenmo-bucket.s3-us-west-1.amazonaws.com/profile-photos/profile_photo_4.png", created_at = datetime.now() - timedelta(days = 370) )
  ]

  for u in u_list:
    db.session.add(u)
    # u.set_password('P4ssword')
  db.session.commit()