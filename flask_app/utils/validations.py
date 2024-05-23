import re
import filetype
            
def validate_tipo_producto(tipo_producto):
    return  tipo_producto != "0"

def validate_productos(lenProductos):
    return lenProductos<=5 and lenProductos>=1

def validate_descripcion(descripcion):
    if descripcion is None or descripcion == "":
        return True
    else:
        malas = ["malo", "tonto", "pesao"]
        return bool(re.search(r"\d", descripcion)) and not descripcion in malas

def validate_fotos(fotos):
    ALLOWED_EXTENSIONS = {"png", "jpg", "jpeg", "gif"}
    ALLOWED_MIMETYPES = {"image/jpeg", "image/png", "image/gif"}
    # check if a file was submitted
    if fotos is None:
        return False

    # check if the browser submitted an empty file
    if fotos.filename == "":
        return False
    
    # check file extension
    ftype_guess = filetype.guess(fotos)
    if ftype_guess.extension not in ALLOWED_EXTENSIONS:
        return False
    # check mimetype
    if ftype_guess.mime not in ALLOWED_MIMETYPES:
        return False
    return True

def validate_region(region):
    return region != "0"

def validate_comuna(comuna):
    return comuna != "Seleccione una comuna"

def validate_nombre(nombre):
    return nombre and len(nombre) > 2 and len(nombre) < 81

def validate_mail(mail):
    pattern = r'^[^\s@]+@[^\s@]+\.com$'
    return bool(re.match(pattern, mail))

def validate_celular(celular):
    pattern = r'^\+569 (\d{4}) (\d{4})$'
    return bool(re.match(pattern, celular))


def validate_form(tipo_producto, lenArtesanias, descripcion, fotos, region,
                     comuna, nombre, mail, celular):
    return validate_tipo_producto(tipo_producto
            ) and validate_productos(lenArtesanias
            ) and validate_descripcion(descripcion
            ) and validate_fotos(fotos
            ) and validate_region(region
            ) and validate_comuna(comuna
            ) and validate_nombre(nombre
            ) and validate_mail(mail
            ) and validate_celular(celular)
