import pymysql
import json

DB_NAME = "tarea2"
DB_USERNAME = "cc5002"
DB_PASSWORD = "programacionweb"
DB_HOST = "localhost"
DB_PORT = 3306
DB_CHARSET = "utf8"

with open('database/querys.json', 'r') as querys:
	QUERY_DICT = json.load(querys)

# -- conn ---

def get_conn():
	conn = pymysql.connect(
		db=DB_NAME,
		user=DB_USERNAME,
		passwd=DB_PASSWORD,
		host=DB_HOST,
		port=DB_PORT,
		charset=DB_CHARSET
	)
	return conn

# -- querys --

def insert_producto(tipo, descripcion, comuna_id, nombre_productor, email_productor, celular_productor):
    conn = get_conn()
    cursor = conn.cursor()
    cursor.execute(QUERY_DICT["insert_producto"], (tipo, descripcion, comuna_id, nombre_productor, email_productor, celular_productor))
    conn.commit()
    
def get_productos():
    conn = get_conn()
    cursor = conn.cursor()
    cursor.execute(QUERY_DICT["get_productos"])
    productos = cursor.fetchall()
    return productos

def get_productos_5():
    conn = get_conn()
    cursor = conn.cursor()
    cursor.execute(QUERY_DICT["get_productos_5"])
    productos = cursor.fetchall()
    return productos

def get_productos_5i(offset):
    conn = get_conn()
    cursor = conn.cursor()
    cursor.execute(QUERY_DICT["get_productos_5i"], (offset,))
    productos = cursor.fetchall()
    return productos

def get_productos_5_next():
    conn = get_conn()
    cursor = conn.cursor()
    cursor.execute(QUERY_DICT["get_productos_5_next"])
    productos = cursor.fetchall()
    return productos

def get_productos_5_with_name_comuna():
    conn = get_conn()
    cursor = conn.cursor()
    cursor.execute(QUERY_DICT["get_productos_5_with_name_comuna"])
    productos = cursor.fetchall()
    return productos

def get_productos_5_with_name_comuna_next():
    conn = get_conn()
    cursor = conn.cursor()
    cursor.execute(QUERY_DICT["get_productos_5_with_name_comuna_next"])
    productos = cursor.fetchall()
    return productos


def insert_pt(producto_id, tipo_verdura_fruta_id):
    conn = get_conn()
    cursor = conn.cursor()
    cursor.execute(QUERY_DICT["insert_pt"], (producto_id, tipo_verdura_fruta_id))
    conn.commit()

def get_tp_by_id(id_producto):
    conn = get_conn()
    cursor = conn.cursor()
    cursor.execute(QUERY_DICT["get_tp_by_id"], (id_producto,))
    tipo = cursor.fetchone()
    return tipo

def insert_foto(ruta_archivo, nombre_archivo, producto_id):
    conn = get_conn()
    cursor = conn.cursor()
    cursor.execute(QUERY_DICT["insert_foto"], (ruta_archivo, nombre_archivo, producto_id))
    conn.commit()

def get_fotos_by_id(id_producto):
    conn = get_conn()
    cursor = conn.cursor()
    cursor.execute(QUERY_DICT["get_foto_by_id"], (id_producto,))
    fotos = cursor.fetchone()
    return fotos

def get_last_insert_id():
	conn = get_conn()
	cursor = conn. cursor()
	cursor.execute(QUERY_DICT["get_last_insert_id"])
	id = cursor.fetchone()[0]
	return id

def get_comuna_by_id(id):
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["get_comuna_by_id"], (id,))
	comuna = cursor.fetchone()[0]
	return comuna

def get_producto_by_id(id):
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["get_producto_by_id"], (id,))
	producto = cursor.fetchone()
	return producto

def get_region_by_id(id):
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["get_region_by_id"], (id,))
	region = cursor.fetchone()[0]
	return region

