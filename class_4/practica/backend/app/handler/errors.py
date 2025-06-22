from flask import jsonify

def register_error_handlers(app):

    @app.errorhandler(404)
    def not_found(error):
        return jsonify({'error':'Ruta no encontrada'}),404

    @app.errorhandler(401)
    def not_authorice(error):
        return jsonify({'error':'Ruta no autorizada'}),401
    
    @app.errorhandler(405)
    def not_allowed(error):
        return jsonify({'error':'Accion no permitida'}),405