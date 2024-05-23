from flask import Flask, request, render_template, redirect, url_for
from database import db
from utils.validations import *
from werkzeug.utils import secure_filename
import hashlib
import filetype
import os

UPLOAD_FOLDER = 'static/uploads'

frutas = {
  'Arándano': 1,
  'Frambuesa': 2,
  'Frutilla': 3,
  'Grosella': 4,
  'Mora': 5,
  'Limón': 6,
  'Mandarina': 7,
  'Naranja': 8,
  'Pomelo': 9,
  'Melón': 10,
  'Sandía': 11,
  'Palta': 12,
  'Chirimoya': 13,
  'Coco': 14,
  'Dátil': 15,
  'Kiwi': 16,
  'Mango': 17,
  'Papaya': 18,
  'Piña': 19,
  'Plátano': 20,
  'Damasco': 21,
  'Cereza': 22,
  'Ciruela': 23,
  'Higo': 24,
  'Kaki': 25,
  'Manzana': 26,
  'Durazno': 27,
  'Nectarin': 28,
  'Níspero': 29,
  'Pera': 30,
  'Uva': 31,
  'Almendra': 32,
  'Avellana': 33,
  'Maní': 34,
  'Castaña': 35,
  'Nuez': 36,
  'Pistacho': 36
}

verduras = {
    "Brócoli": 1,
    "Repollo": 2,
    "Coliflor": 3,
    "Rábano": 4,
    "Alcachofa": 5,
    "Lechuga": 6,
    "Zapallo": 7,
    "Pepino": 8,
    "Haba": 9,
    "Maíz": 10,
    "Champiñón": 11,
    "Acelga": 12,
    "Apio": 13,
    "Espinaca": 14,
    "Perejil": 15,
    "Ajo": 16,
    "Cebolla": 17,
    "Espárrago": 18,
    "Puerro": 19,
    "Remolacha": 20,
    "Berenjena": 21,
    "Papa": 22,
    "Pimiento": 23,
    "Tomate": 24,
    "Zanahoria": 25
}

app = Flask(__name__)

app.secret_key = "s3cr3t_k3y"
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['MAX_CONTENT_LENGTH'] = 16 * 1000 * 1000

@app.errorhandler(413)
def request_entity_too_large(error):
    return 'El archivo excede el tamaño máximo permitido (16 MB)', 413

@app.route("/")
def index():
    return render_template("home/index.html")

@app.route("/agregarProducto", methods=["GET", "POST"])
def agregarProducto():
    if request.method == "GET":
        return render_template("productos/agregar-producto.html")
    elif request.method == "POST":
        tipo_producto = request.form.get("tipo-producto")
        productos = request.form.getlist("productos")
        descripcion = request.form.get("descripcion")
        fotos = request.files.get("fotos")
        region = request.form.get("region")
        comuna = request.form.get("comuna")
        nombre = request.form.get("nombre")
        mail = request.form.get("mail")
        celular = request.form.get("celular")
        productos = productos[0].split(',')
        productosID =[]
        if tipo_producto == 1:
            for tipo in productos:
                productosID.append(frutas[tipo])
            
        elif tipo_producto == 2:
            for tipo in productos:
                productosID.append(verduras[tipo])
        
        if validate_form(tipo_producto, len(productos), descripcion, fotos, region,
                     comuna, nombre, mail, celular) :
            _filename = hashlib.sha256(
                secure_filename(fotos.filename)
                .encode("utf-8")
                ).hexdigest()
            _extension = filetype.guess(fotos).extension
            img_filename = f"{_filename}.{_extension}"

            fotos.save(os.path.join(app.config["UPLOAD_FOLDER"], img_filename))

            #save product in db
            db.insert_producto(tipo, descripcion, comuna, nombre, mail, celular)
            lastid = db.get_last_insert_id()
            print(lastid)
            for tipo in productosID:
                db.insert_pt(lastid, tipo)
            db.insert_foto(img_filename, nombre, lastid)
        return render_template("index.html")   

@app.route('/verProductos/<int:page>')
def verProductos(page):
    offset= 5 * page
    productos = db.get_productos_5i(offset)
    comunas = []
    tp = []
    fotos = []
    for producto in productos:
        id = producto[0]
        x = db.get_comuna_by_id(id)
        y = db.get_tp_by_id(id)
        print(db.get_fotos_by_id(id))
        z = 'uploads/' + db.get_fotos_by_id(id)[0]
        fotos.append(z)
        tp.append(y)
        comunas.append(x)

    return render_template("productos/ver-productos.html", page=page, productos=productos, offset=offset, comunas=comunas, largo = len(productos), tp=tp, fotos = fotos)

@app.route('/informacionProducto/<int:page>/<int:id>')
def verProducto(page, id):
    producto = db.get_producto_by_id(id)
    region = db.get_region_by_id(id)
    comuna = db.get_comuna_by_id(id)
    tp = db.get_tp_by_id(id)
    foto = 'uploads/' + db.get_fotos_by_id(id)[0]
    print(producto, region, comuna, tp, foto)

    return render_template("informacion_producto.html", producto=producto, region=region, comuna=comuna, tp=tp, foto=foto)

@app.route("/agregarPedido", methods=["GET", "POST"])
def agregarPedido():
    return render_template("pedidos/agregar-pedido.html")

@app.route("/verPedidos", methods=["GET", "POST"])
def verPedidos():
    return render_template("pedidos/ver-pedidos.html")
 
if __name__ == "__main__":
    app.run(debug=True)