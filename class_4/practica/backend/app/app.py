from flask import Flask,jsonify
from flask_cors import CORS
from extensions import db

def create_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:root@localhost/exploracion_espacial'
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
    