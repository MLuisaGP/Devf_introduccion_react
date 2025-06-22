from werkzeug.security import generate_password_hash, check_password_hash
from extensions import db
class User:
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(255),nullable=True)
    pwd_hash = db.Column(db.String(255))
# 1. Almacenar (hashear)
    def hashearPwd(self, password_plana):
        self.pwd_hash = generate_password_hash(password_plana)
        
    def check_password(self, pwd_plano):
        return check_password_hash(self.pwd_hash, pwd_plano)

