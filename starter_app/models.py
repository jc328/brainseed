from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
from sqlalchemy.orm import validates, relationship
import datetime
import re

db = SQLAlchemy()

# Status codes: 0=pending, 1=accepted
class User(db.Model):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key = True)
  first_name = db.Column(db.String(40), nullable = False)
  last_name = db.Column(db.String(40), nullable = False)
  email = db.Column(db.String(255), nullable = False, unique = True)
  hashed_password = db.Column(db.String, nullable = False)
  picUrl = db.Column(db.String)
  created_at = db.Column(db.DateTime, default=datetime.datetime.now)
  updated_at = db.Column(db.DateTime, onupdate=datetime.datetime.now)

  decks = db.relationship("Deck", back_populates="user")

  def to_dict(self):
    return {
      "id": self.id,
      "first_name": self.first_name,
      "last_name": self.last_name,
      "email": self.email,
      "picUrl": self.picUrl,
      "created_at": self.created_at.strftime("%b %Y")
    }

  @property
  def password(self):
      return self.hashed_password

  def set_password(self, password):
      if not re.match('\d.*[A-Z]|[A-Z].*\d', password):
          raise AssertionError('Password must contain 1 capital letter and 1 number')
      if len(password) < 8 or len(password) > 50:
          raise AssertionError('Password must be between 8 and 50 characters')
      self.hashed_password = generate_password_hash(password)

  def check_password(self, password):
    return check_password_hash(self.password, password)

  @validates('email')
  def validate_email(self, key, email):
    userFound = User.query.filter(User.email==email).first()
    if userFound:
      print(userFound.picUrl)
      if ("lh3.googleusercontent" in userFound.picUrl):
        assert False, ('Google Account Created Previously.  Logging In')
      else:
        raise AssertionError('Email already in use')

    if not re.match("[^@]+@[^@]+\.[^@]+", email):
      raise AssertionError('Provided email is not an email address')

    return email


class Deck(db.Model):
  __tablename__='decks'

  id = db.Column(db.Integer, primary_key = True)
  deck = db.Column(db.String(300))
  user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
  deck_photo = db.Column(db.String(300))
  created_at = db.Column(db.DateTime, default=datetime.datetime.now)
  updated_at = db.Column(db.DateTime, onupdate=datetime.datetime.now)

  user = db.relationship("User", back_populates="decks")
  card = db.relationship("Card", back_populates="decks")

  def to_dict(self):
    return {
      "id": self.id,
      "deck": self.deck,
      "user_id": self.user_id,
      "deck_photo": self.deck_photo,
      "created_at": self.created_at,
      "updated_at": self.updated_at,
    }

class Card(db.Model):
  __tablename__='cards'

  id = db.Column(db.Integer, primary_key = True)
  card = db.Column(db.String(300))
  card_front = db.Column(db.String(300))
  card_back = db.Column(db.String(300))
  card_photo = db.Column(db.String(300))
  card_audio = db.Column(db.String(300))
  card_url = db.Column(db.String(300))
  deck_id = db.Column(db.Integer, db.ForeignKey("decks.id"))
  created_at = db.Column(db.DateTime, default=datetime.datetime.now)
  updated_at = db.Column(db.DateTime, onupdate=datetime.datetime.now)

  decks = db.relationship("Deck", back_populates="card")


  def to_dict(self):
    return {
      "id": self.id,
      "card": self.card,
      "card_front": self.card_front,
      "card_back": self.card_back,
      "card_photo": self.card_photo,
      "card_audio": self.card_audio,
      "card_url": self.card_url,
      "deck_id": self.deck,
      "created_at": self.created_at,
      "updated_at": self.updated_at
    }
