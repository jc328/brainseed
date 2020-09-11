from flask import Blueprint, jsonify, request, redirect, url_for
from starter_app.models import User
from werkzeug.security import generate_password_hash
from ..models import User, db
from flask_jwt_extended import jwt_optional, create_access_token, get_jwt_identity, jwt_required, get_raw_jwt

user_routes = Blueprint('users', __name__)

@user_routes.route('/')
def index():
  response = User.query.all()
  return { "users": [user.to_dict() for user in response]}

@user_routes.route('/signup', methods=['POST'])
def sign_up():
  data = request.get_json()
  hash = generate_password_hash(data['password'])

  try:
    user = User(
      first_name=data['firstName'],
      last_name=data['lastName'],
      email=data['email'],
      hashed_password=hash,
      picUrl=data['picture'])

    # user.set_password(data[hash])

    db.session.add(user)
    db.session.commit()
    email = user.email
    access_token = create_access_token(identity=email)
    return {"token": access_token, "user": user.to_dict()}, 200
  except AssertionError as exception_message:
    return jsonify(msg='Error: {}. '.format(exception_message)), 400


@user_routes.route('/signin', methods=['POST'])
def sign_in():
    try:
      if not request.is_json:
        return jsonify({"msg": "Missing JSON in request"}), 400

      email = request.json.get('email', None)
      password = request.json.get('password', None)

      user= User.query.filter(User.email==email).one()

      if (user.check_password(password)):
      # if (True):
        access_token = create_access_token(identity=email)
        return {"token": access_token, "user": user.to_dict()}, 200
      else:
        return jsonify({"msg": "Bad email or password"}), 400
    except:
      return jsonify({"msg": "Bad email or password"}), 400
