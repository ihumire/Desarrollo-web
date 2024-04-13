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

**Respuesta**: Un "Cross Site Scripting" (XSS) es un tipo de inyección de un script malicioso. Generalmente, la inyección puede venir en un segmento de JavaScript, pero también puede incluir HTML, Flash o cualquier otro tipo de código que el navegador pueda ejecutar.

Para prevenir los ataques XSS podemos recurrir a revisar nuestro código y buscar dónde las solicitudes de HTML o texto podrían permitir que se devuelva información privada, tal como cookies o contraseñas de usuarios u otra información sensible, en el HTML o texto que se genera.

Otra manera de prevenir estos ataques es realizar una validación a las request que realizamos en nuestra página web.

Un escenario peligroso podría ser el robo de cookies (archivos de datos, preferencias de usuarios, etc.) a algún usuario autenticado o registrado en la aplicación web. En tal situación, el atacante podría realizar acciones maliciosas (ej: suplantación de identidad).

## Pregunta 2
Como se mencionó en auxiliar, existen varias herramientas que se pueden utilizar para programar aplicaciones web más complejas que las que hemos visto en el curso. Esta pregunta busca que ud. investigue 3 librerías de javascript o *frameworks* de front-end y describa sus principales características, ventajas, desventajas y ejemplos de uso. Finalmente, indique cuál de las tecnologías presentadas utilizaria para implementar su página web personal y por qué.

**Nota:** Se espera que ud. escriba un breve resumen de cada tecnología, seguido de al menos 2 ventajas y 2 desventajas de cada una.

**Respuesta**:

React:
- Descripción: React es un DOM virtual que se puede trabajar con un gran número de bloques (secciones de navegación, botones, etc.) que responden a distintos estados, como activo/inactivo.
- Ventajas: Es open source. Los componentes de React agilizan la creación de una interfaz sensible a cualquier cambio en un sitio web o una aplicación de cualquier complejidad.
- Desventajas: Necesitas un conocimiento sólido de HTML y JavaScript para aprender la sintaxis de JXS. La biblioteca puede aumentar el tamaño de tu aplicación.

Vue.js:
- Descripción: Sirve para desarrollar webs, aplicaciones móviles y aplicaciones web progresivas con simpleza y flexibilidad. 
- Ventajas: Ofrece código reutilizable y una integración simple. Existe extensa documentación sobre el framework.
- Desventajas: No cuenta con apoyo para grandes proyectos. La barrera del lenguaje, la mayoria de documentación esta escrita en chino.

Svelte:
- Descripción: Más que un framework o librería, Svelte es un compilador. Esta considerado como uno de los frameworks más rápidos que existen y es bastante ligero para el desarrollo frontend. 
- Ventajas: Permite crear HTML, CSS y TypeScript y combinarlas en JavaScript. Dado que no demanda recursos, la aplicación tarda menos en cargarse.
- Desventajas: Tiene poca documentación y herramientas para ocuparlo lo mejor posible. Necesita desarrollar conocimiento adicional para algunas funcionalidades ademas del conociemiento de HTML, CSS y TypeScript.

Opinión uso personal: 

Creo que personalmente trabajaré con React, esto se debe a que en la investigación me di cuenta de que puede ser aprendido de manera fácil teniendo un conocimiento sólido de HTML y JavaScript. Además, es muy útil para el ámbito laboral y de mercado.

Referencias: 

https://4geeksacademy.com/es/aprender-a-programar/los-5-frameworks-fundamentales-para-frontend

https://ebac.mx/blog/que-es-react

https://rootstack.com/es/blog/vuejs-ventajas-desventajas
