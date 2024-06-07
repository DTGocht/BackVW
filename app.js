/**
 * @swagger
 * /eventos:
 *   get:
 *     summary: Recupera una lista de eventos
 *     description: Devuelve un arreglo con todos los eventos almacenados en la base de datos.
 *     responses:
 *       200:
 *         description: Un arreglo de eventos, cada uno con detalles completos.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Evento'
 */

/**
 * @swagger
 * /eventos:
 *   post:
 *     summary: Crea un nuevo evento
 *     description: Agrega un nuevo evento a la base de datos con la información proporcionada.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Evento'
 *     responses:
 *       201:
 *         description: Evento creado exitosamente. Retorna los detalles del evento creado.
 */

/**
 * @swagger
 * /eventos/{id}:
 *   delete:
 *     summary: Elimina un evento
 *     description: Elimina el evento especificado por el ID proporcionado en la ruta.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           description: El ID del evento a eliminar.
 *     responses:
 *       200:
 *         description: Evento eliminado exitosamente.
 */

/**
 * @swagger
 * /noticias:
 *   get:
 *     summary: Recupera una lista de noticias
 *     description: Devuelve un arreglo con todas las noticias almacenadas en la base de datos.
 *     responses:
 *       200:
 *         description: Un arreglo de noticias, cada una con sus detalles correspondientes.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Noticia'
 */

/**
 * @swagger
 * /noticias:
 *   post:
 *     summary: Crea un nuevo artículo de noticias
 *     description: Agrega un nuevo artículo de noticias a la base de datos con la información proporcionada.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Noticia'
 *     responses:
 *       201:
 *         description: Artículo de noticias creado exitosamente. Retorna los detalles del artículo creado.
 */

/**
 * @swagger
 * /noticias/{id}:
 *   delete:
 *     summary: Elimina un artículo de noticias
 *     description: Elimina el artículo de noticias especificado por el ID proporcionado en la ruta.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           description: El ID del artículo de noticias a eliminar.
 *     responses:
 *       200:
 *         description: Artículo de noticias eliminado exitosamente.
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Evento:
 *       type: object
 *       required:
 *         - titulo
 *         - descripcion
 *         - imagen
 *         - duracion_f
 *         - duracion_i
 *         - dia_evento
 *         - restante
 *         - lugar
 *       properties:
 *         _id:
 *           type: string
 *           description: Identificador único del evento.
 *         titulo:
 *           type: string
 *           description: Título del evento.
 *         descripcion:
 *           type: string
 *           description: Descripción detallada del evento.
 *         imagen:
 *           type: string
 *           description: Ruta de acceso a la imagen representativa del evento.
 *         duracion_f:
 *           type: string
 *           description: Hora de finalización del evento.
 *         duracion_i:
 *           type: string
 *           description: Hora de inicio del evento.
 *         dia_evento:
 *           type: string
 *           description: Fecha en la que se llevará a cabo el evento.
 *         restante:
 *           type: integer
 *           description: Número de lugares o entradas restantes para el evento.
 *         lugar:
 *           type: string
 *           description: Ubicación del evento.
 *     Noticia:
 *       type: object
 *       required:
 *         - Titulo
 *         - imagen
 *       properties:
 *         _id:
 *           type: string
 *           description: Identificador único de la noticia.
 *         Titulo:
 *           type: string
 *           description: Título de la noticia.
 *         imagen:
 *           type: string
 *           description: Ruta de acceso a la imagen representativa de la noticia.
 */

