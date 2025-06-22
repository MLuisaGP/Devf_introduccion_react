from flask import jsonify, Blueprint,request
from extensions import db
from models.planets import Planets

planets_bp = Blueprint('planets',__name__)

@planets_bp.route('/planets',methods=['GET'])
def index():
    byName = request.args.get('name');
    if(byName):
        planets=Planets.query.filter(Planets.name.ilike(f"%{byName}%"))
    else:
        planets=Planets.query.all()
    return jsonify([p.to_dict() for p in planets])

@planets_bp.route('/planets/<int:id>',methods=['GET'])
def find(id):
    planets= Planets.query.get(id)
    if not planets:
        return jsonify({'error':'Planeta no encontrado'})
    
    return jsonify(planets.to_dict())

@planets_bp.route('/planets',methods=['POST'])
def store():
    data = request.get_json()
    data.pop('id',None)
    nuevo_planeta = Planets(data)
    alertas = nuevo_planeta.validacion()
    if(alertas):
        return jsonify({'error':alertas}),400
    
    nuevo_planeta.create()
    return jsonify(nuevo_planeta.to_dict()),201

@planets_bp.route('/planets/<int:id>',methods=['PUT'])
def update(id):
    data = request.get_json()
    planeta = Planets.query.get(id)
    if not planeta:
        return jsonify({'error':'Planeta no registrado'}),404
    planeta.syncronizar(data)
    alertas = planeta.validacion()
    if(alertas):
        return jsonify({'error':alertas}),400
    planeta.actualizar()
    return jsonify(planeta.to_dict()),200

@planets_bp.route('/planets/<int:id>',methods=['DELETE'])
def delete(id):
    planeta = Planets.query.get(id)
    if not planeta:
        return jsonify({'error':'Planeta no registrado'}),400
    planeta.eliminar()
    return jsonify({'message':'planeta eliminado'}),200