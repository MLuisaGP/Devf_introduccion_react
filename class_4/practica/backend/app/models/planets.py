from extensions import db
#Modelo
class Planets(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(45), nullable=False)
    description = db.Column(db.Text, nullable=False)
    
    def __init__(self,arg=None):
        if arg is None:
            arg = {}
        self.name = arg.get('name','')
        self.description = arg.get('description','')
    
    def to_dict(self):
        return{
            "id":self.id,
            "name":self.name,
            "description":self.description
        }
    def syncronizar(self, data=None):
        if data is None:
            data = {}
        self.name = data.get('name',self.name)
        self.description = data.get('description',self.description)
    
    def validacion(self):
        alerts=[]
        if(self.name is None or self.name == ''):
            alerts.append('El nombre es obligarorio')
        if(len(self.name)>45):
            alerts.append('El nombre debe de ser menora 45 caracteres')
        if(self.description is None or self.description ==''):
            alerts.append('Descripcion obligatoria')
        return alerts
    
    def create(self):
        db.session.add(self)
        db.session.commit()
        
    def actualizar(self):
        db.session.commit()
    
    def eliminar(self):
        db.session.delete(self)
        db.session.commit()