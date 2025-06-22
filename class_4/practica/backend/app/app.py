from flask import Flask,jsonify
from flask_cors import CORS
from extensions import db
import os
from dotenv import load_dotenv


def create_app():
    load_dotenv()#cargar variables de entorno
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = f'mysql+pymysql://{os.getenv("DB_USER")}:{os.getenv("DB_PWD")}@{os.getenv("DB_HOST")}:{os.getenv("DB_PORT")}/{os.getenv("DB_NAME")}'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    db.init_app(app)
    CORS(app) #permite peticiones desde la app
    
    #Registrar blueprint de rutas
    from routes.planetasRoute import planets_bp
    app.register_blueprint(planets_bp)
    
    from handler.errors import register_error_handlers 
    register_error_handlers(app)
    return app

if __name__ == '__main__':
    app = create_app()
    app.run(debug=True)
    