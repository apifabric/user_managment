# coding: utf-8
from sqlalchemy import DECIMAL, DateTime  # API Logic Server GenAI assist
from sqlalchemy import Boolean, Column, DateTime, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

########################################################################################################################
# Classes describing database for SqlAlchemy ORM, initially created by schema introspection.
#
# Alter this file per your database maintenance policy
#    See https://apilogicserver.github.io/Docs/Project-Rebuild/#rebuilding
#
# Created:  November 04, 2024 08:15:44
# Database: sqlite:////tmp/tmp.XdahINXFkr/user_managment/database/db.sqlite
# Dialect:  sqlite
#
# mypy: ignore-errors
########################################################################################################################
 
from database.system.SAFRSBaseX import SAFRSBaseX
from flask_login import UserMixin
import safrs, flask_sqlalchemy
from safrs import jsonapi_attr
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.sql.sqltypes import NullType
from typing import List

db = SQLAlchemy() 
Base = declarative_base()  # type: flask_sqlalchemy.model.DefaultMeta
metadata = Base.metadata

#NullType = db.String  # datatype fixup
#TIMESTAMP= db.TIMESTAMP

from sqlalchemy.dialects.sqlite import *



class User(SAFRSBaseX, Base):
    """
    description: This table stores user account information.
    """
    __tablename__ = 'user'
    _s_collection_name = 'User'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    username = Column(String, nullable=False, unique=True)
    email = Column(String, nullable=False, unique=True)
    password_hash = Column(String, nullable=False)
    is_active = Column(Boolean)

    # parent relationships (access parent)

    # child relationships (access children)
    ApiKeyList : Mapped[List["ApiKey"]] = relationship(back_populates="user")
    GoogleLoginList : Mapped[List["GoogleLogin"]] = relationship(back_populates="user")
    LoginHistoryList : Mapped[List["LoginHistory"]] = relationship(back_populates="user")
    NotificationList : Mapped[List["Notification"]] = relationship(back_populates="user")
    OtpList : Mapped[List["Otp"]] = relationship(back_populates="user")
    PasswordResetList : Mapped[List["PasswordReset"]] = relationship(back_populates="user")
    UserActivityList : Mapped[List["UserActivity"]] = relationship(back_populates="user")
    UserProfileList : Mapped[List["UserProfile"]] = relationship(back_populates="user")
    UserSettingList : Mapped[List["UserSetting"]] = relationship(back_populates="user")
    UserUserRoleList : Mapped[List["UserUserRole"]] = relationship(back_populates="user")



class UserRole(SAFRSBaseX, Base):
    """
    description: This table defines roles that can be assigned to users.
    """
    __tablename__ = 'user_role'
    _s_collection_name = 'UserRole'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    role_name = Column(String, nullable=False, unique=True)

    # parent relationships (access parent)

    # child relationships (access children)
    UserUserRoleList : Mapped[List["UserUserRole"]] = relationship(back_populates="role")



class ApiKey(SAFRSBaseX, Base):
    """
    description: This table manages API keys for third-party integrations.
    """
    __tablename__ = 'api_key'
    _s_collection_name = 'ApiKey'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    user_id = Column(ForeignKey('user.id'), nullable=False)
    api_key = Column(String, nullable=False, unique=True)
    created_at = Column(DateTime)

    # parent relationships (access parent)
    user : Mapped["User"] = relationship(back_populates=("ApiKeyList"))

    # child relationships (access children)



class GoogleLogin(SAFRSBaseX, Base):
    """
    description: This table stores details of users who signed up using Google OAuth.
    """
    __tablename__ = 'google_login'
    _s_collection_name = 'GoogleLogin'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    user_id = Column(ForeignKey('user.id'), nullable=False)
    google_id = Column(String, nullable=False, unique=True)
    google_email = Column(String, nullable=False)

    # parent relationships (access parent)
    user : Mapped["User"] = relationship(back_populates=("GoogleLoginList"))

    # child relationships (access children)



class LoginHistory(SAFRSBaseX, Base):
    """
    description: This table records login history for users.
    """
    __tablename__ = 'login_history'
    _s_collection_name = 'LoginHistory'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    user_id = Column(ForeignKey('user.id'), nullable=False)
    login_time = Column(DateTime)
    ip_address = Column(String)

    # parent relationships (access parent)
    user : Mapped["User"] = relationship(back_populates=("LoginHistoryList"))

    # child relationships (access children)



class Notification(SAFRSBaseX, Base):
    """
    description: This table stores notifications to be sent to users.
    """
    __tablename__ = 'notification'
    _s_collection_name = 'Notification'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    user_id = Column(ForeignKey('user.id'), nullable=False)
    message = Column(String, nullable=False)
    is_read = Column(Boolean)

    # parent relationships (access parent)
    user : Mapped["User"] = relationship(back_populates=("NotificationList"))

    # child relationships (access children)



class Otp(SAFRSBaseX, Base):
    """
    description: This table stores OTP details for user verification.
    """
    __tablename__ = 'otp'
    _s_collection_name = 'Otp'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    user_id = Column(ForeignKey('user.id'), nullable=False)
    otp_code = Column(String, nullable=False)
    created_at = Column(DateTime)
    expires_at = Column(DateTime, nullable=False)

    # parent relationships (access parent)
    user : Mapped["User"] = relationship(back_populates=("OtpList"))

    # child relationships (access children)



class PasswordReset(SAFRSBaseX, Base):
    """
    description: This table manages password reset requests.
    """
    __tablename__ = 'password_reset'
    _s_collection_name = 'PasswordReset'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    user_id = Column(ForeignKey('user.id'), nullable=False)
    reset_token = Column(String, nullable=False)
    expires_at = Column(DateTime, nullable=False)

    # parent relationships (access parent)
    user : Mapped["User"] = relationship(back_populates=("PasswordResetList"))

    # child relationships (access children)



class UserActivity(SAFRSBaseX, Base):
    """
    description: This table logs user actions for audit and tracking purposes.
    """
    __tablename__ = 'user_activity'
    _s_collection_name = 'UserActivity'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    user_id = Column(ForeignKey('user.id'), nullable=False)
    activity_type = Column(String, nullable=False)
    timestamp = Column(DateTime)

    # parent relationships (access parent)
    user : Mapped["User"] = relationship(back_populates=("UserActivityList"))

    # child relationships (access children)



class UserProfile(SAFRSBaseX, Base):
    """
    description: This table stores additional user profile information.
    """
    __tablename__ = 'user_profile'
    _s_collection_name = 'UserProfile'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    user_id = Column(ForeignKey('user.id'), nullable=False)
    first_name = Column(String)
    last_name = Column(String)

    # parent relationships (access parent)
    user : Mapped["User"] = relationship(back_populates=("UserProfileList"))

    # child relationships (access children)



class UserSetting(SAFRSBaseX, Base):
    """
    description: This table stores user-specific application settings.
    """
    __tablename__ = 'user_setting'
    _s_collection_name = 'UserSetting'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    user_id = Column(ForeignKey('user.id'), nullable=False)
    setting_name = Column(String, nullable=False)
    setting_value = Column(String)

    # parent relationships (access parent)
    user : Mapped["User"] = relationship(back_populates=("UserSettingList"))

    # child relationships (access children)



class UserUserRole(SAFRSBaseX, Base):
    """
    description: This linking table associates users with roles.
    """
    __tablename__ = 'user_user_role'
    _s_collection_name = 'UserUserRole'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    user_id = Column(ForeignKey('user.id'), nullable=False)
    role_id = Column(ForeignKey('user_role.id'), nullable=False)

    # parent relationships (access parent)
    role : Mapped["UserRole"] = relationship(back_populates=("UserUserRoleList"))
    user : Mapped["User"] = relationship(back_populates=("UserUserRoleList"))

    # child relationships (access children)
