# created from response - used to create database and project
#  should run without error
#  if not, check for decimal, indent, or import issues

import decimal

import logging



logging.getLogger('sqlalchemy.engine.Engine').disabled = True  # remove for additional logging

import sqlalchemy



from sqlalchemy.sql import func  # end imports from system/genai/create_db_models_inserts/create_db_models_prefix.py

from logic_bank.logic_bank import Rule

from sqlalchemy import create_engine, Column, Integer, String, Boolean, ForeignKey, DateTime
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import datetime

Base = declarative_base()

# Table Definitions

class User(Base):
    """description: This table stores user account information."""
    __tablename__ = 'user'
    id = Column(Integer, primary_key=True, autoincrement=True)
    username = Column(String, nullable=False, unique=True)
    email = Column(String, nullable=False, unique=True)
    password_hash = Column(String, nullable=False)
    is_active = Column(Boolean, default=True)

class GoogleLogin(Base):
    """description: This table stores details of users who signed up using Google OAuth."""
    __tablename__ = 'google_login'
    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('user.id'), nullable=False)
    google_id = Column(String, nullable=False, unique=True)
    google_email = Column(String, nullable=False)

class OTP(Base):
    """description: This table stores OTP details for user verification."""
    __tablename__ = 'otp'
    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('user.id'), nullable=False)
    otp_code = Column(String, nullable=False)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)
    expires_at = Column(DateTime, nullable=False)

class UserProfile(Base):
    """description: This table stores additional user profile information."""
    __tablename__ = 'user_profile'
    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('user.id'), nullable=False)
    first_name = Column(String)
    last_name = Column(String)

class UserRole(Base):
    """description: This table defines roles that can be assigned to users."""
    __tablename__ = 'user_role'
    id = Column(Integer, primary_key=True, autoincrement=True)
    role_name = Column(String, nullable=False, unique=True)

class UserUserRole(Base):
    """description: This linking table associates users with roles."""
    __tablename__ = 'user_user_role'
    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('user.id'), nullable=False)
    role_id = Column(Integer, ForeignKey('user_role.id'), nullable=False)

class LoginHistory(Base):
    """description: This table records login history for users."""
    __tablename__ = 'login_history'
    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('user.id'), nullable=False)
    login_time = Column(DateTime, default=datetime.datetime.utcnow)
    ip_address = Column(String)

class PasswordReset(Base):
    """description: This table manages password reset requests."""
    __tablename__ = 'password_reset'
    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('user.id'), nullable=False)
    reset_token = Column(String, nullable=False)
    expires_at = Column(DateTime, nullable=False)

class UserActivity(Base):
    """description: This table logs user actions for audit and tracking purposes."""
    __tablename__ = 'user_activity'
    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('user.id'), nullable=False)
    activity_type = Column(String, nullable=False)
    timestamp = Column(DateTime, default=datetime.datetime.utcnow)

class Notification(Base):
    """description: This table stores notifications to be sent to users."""
    __tablename__ = 'notification'
    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('user.id'), nullable=False)
    message = Column(String, nullable=False)
    is_read = Column(Boolean, default=False)

class APIKey(Base):
    """description: This table manages API keys for third-party integrations."""
    __tablename__ = 'api_key'
    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('user.id'), nullable=False)
    api_key = Column(String, nullable=False, unique=True)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

class UserSetting(Base):
    """description: This table stores user-specific application settings."""
    __tablename__ = 'user_setting'
    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('user.id'), nullable=False)
    setting_name = Column(String, nullable=False)
    setting_value = Column(String)

# Database Connection and Initialization
DATABASE_URI = 'sqlite:///system/genai/temp/create_db_models.sqlite'
engine = create_engine(DATABASE_URI)
Base.metadata.create_all(engine)
Session = sessionmaker(bind=engine)
session = Session()

# Sample Data Inserts
# Users
user1 = User(username="johndoe", email="john@example.com", password_hash="hashed_password_1")
user2 = User(username="janedoe", email="jane@example.com", password_hash="hashed_password_2")
session.add_all([user1, user2])

# Google Logins
google_login1 = GoogleLogin(user_id=1, google_id="google_id_1", google_email="google_john@example.com")
google_login2 = GoogleLogin(user_id=2, google_id="google_id_2", google_email="google_jane@example.com")
session.add_all([google_login1, google_login2])

# OTPs
otp1 = OTP(user_id=1, otp_code="123456", expires_at=datetime.datetime.utcnow() + datetime.timedelta(minutes=10))
otp2 = OTP(user_id=2, otp_code="654321", expires_at=datetime.datetime.utcnow() + datetime.timedelta(minutes=10))
session.add_all([otp1, otp2])

# User Profiles
profile1 = UserProfile(user_id=1, first_name="John", last_name="Doe")
profile2 = UserProfile(user_id=2, first_name="Jane", last_name="Doe")
session.add_all([profile1, profile2])

# User Roles
role_admin = UserRole(role_name="admin")
role_user = UserRole(role_name="user")
session.add_all([role_admin, role_user])

# User-Role Associations
user_role1 = UserUserRole(user_id=1, role_id=1)
user_role2 = UserUserRole(user_id=2, role_id=2)
session.add_all([user_role1, user_role2])

# Login Histories
login_history1 = LoginHistory(user_id=1, ip_address="192.168.1.1")
login_history2 = LoginHistory(user_id=2, ip_address="192.168.1.2")
session.add_all([login_history1, login_history2])

# Password Resets
password_reset1 = PasswordReset(user_id=1, reset_token="token_1", expires_at=datetime.datetime.utcnow() + datetime.timedelta(days=1))
password_reset2 = PasswordReset(user_id=2, reset_token="token_2", expires_at=datetime.datetime.utcnow() + datetime.timedelta(days=1))
session.add_all([password_reset1, password_reset2])

# User Activities
activity1 = UserActivity(user_id=1, activity_type="login")
activity2 = UserActivity(user_id=2, activity_type="logout")
session.add_all([activity1, activity2])

# Notifications
notification1 = Notification(user_id=1, message="Welcome, John!", is_read=False)
notification2 = Notification(user_id=2, message="Welcome, Jane!", is_read=False)
session.add_all([notification1, notification2])

# API Keys
api_key1 = APIKey(user_id=1, api_key="api_key_1")
api_key2 = APIKey(user_id=2, api_key="api_key_2")
session.add_all([api_key1, api_key2])

# User Settings
setting1 = UserSetting(user_id=1, setting_name="theme", setting_value="dark")
setting2 = UserSetting(user_id=2, setting_name="theme", setting_value="light")
session.add_all([setting1, setting2])

# Commit all changes
session.commit()
