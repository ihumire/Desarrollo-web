# Ejercicio 2
**Nombre**: Ignacio Humire

---

## Observaciones
Tenga en cuenta las siguientes observaciones al realizar el ejercicio:

- El ejercicio es de carácter **personal**; la copia será penalizada con **nota mínima**.
- De ser necesario investigar, usted esta **autorizado a utilizar internet** como herramienta. Sin embargo, **debe citar** toda fuente que utilice para responder las preguntas.
- El uso de modelos generativos de lenguaje como **ChatGPT está estrictamente prohibido** y será penalizado con **nota mínima**

## Pregunta 1

¿Qué es el ataque de "Cross Site Scripting" (XSS) y cómo podría prevenirse? Describa un escenario en el cual este tipo de ataque podría ser especialmente peligroso. Para responder esta pregunta, puede basarse en [este articulo de la OWASP](https://owasp.org/www-community/attacks/xss/).

**Respuesta**: Un "Cross Site Scripting" (XSS) es un tipo de inyección de un script malicioso. Generalmente la inyeccin puede venir en un segmento de JavaScript, pero también puede incluir HTML, Flash o cualquier otro tipo de código que el navegador pueda ejecutar.

Para prevenir los ataques XSS podemos recurrir a revisar nuestro código y buscar dónde las solicitudes de HTML o texto podrían permitir que se devuelva información privada, tal como cookies o contraseñas de usuarios u otra información sensible, en el HTML o texto que se genera.

Otra manera de prevenir estos ataques es realizar una validación a las request que realizamos en nuestra página web.

Un escenario peligroso podria ser cuando un atacante busca robar nuestras cookies. Aqui si no realizamos una correcta validación 



## Pregunta 2
Como se mencionó en auxiliar, existen varias herramientas que se pueden utilizar para programar aplicaciones web más complejas que las que hemos visto en el curso. Esta pregunta busca que ud. investigue 3 librerías de javascript o *frameworks* de front-end y describa sus principales características, ventajas, desventajas y ejemplos de uso. Finalmente, indique cuál de las tecnologías presentadas utilizaria para implementar su página web personal y por qué.

**Nota:** Se espera que ud. escriba un breve resumen de cada tecnología, seguido de al menos 2 ventajas y 2 desventajas de cada una.

**Respuesta**:
