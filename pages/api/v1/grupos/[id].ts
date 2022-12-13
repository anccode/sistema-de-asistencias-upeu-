import { NextApiRequest, NextApiResponse } from 'next';
import { ModelGrupo } from '../../../../models';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
	const { method } = req;

	switch (method) {
		case 'GET':
			/**
       * @swagger
       * /api/v1/grupos/{id}:
       *  get:
       *    summary: esta funcion muestra una lista de escuela sucursal por el id
       *    tags: [grupos]
       *    parameters:
       *      - $ref: "#/components/parameters/id"
       *    responses:
       *      200:
       *        description: sucursal encontrada
       *        content:
       *          application/json:
       *            schema:
       *              $ref: "#/components/schemas/grupos"
       *      404:
       *        description: asistencia no encontrada
       *        content:
       *          application/json:
       *            schema:
       *              $ref: '#/components/schemas/nofound'
       *
       */
			try {
				const id_grupo = [req.query.id];
				const getGrupo = await ModelGrupo.findOne({
					where: { id_grupo },
				});
				return res.status(200).json(getGrupo);
			} catch (error) {
				return res.status(500).json({ message: error });
			}
		case 'PUT':
			/**
       * @swagger
       * /api/v1/grupos/{id}:
       *  put:
       *    summary: actualizar por id
       *    tags: [grupos]
       *    parameters:
       *      - $ref: "#/components/parameters/id"
       *    requestBody:
       *      required: true
       *      content:
       *        application/json:
       *          schema:
       *            $ref: "#/components/schemas/grupos"
       *    responses:
       *      200:
       *        description: actualizo el dato
       *        content:
       *          application/json:
       *            schema:
       *              $ref: "#/components/schemas/grupos"
       *      404:
       *        description: error
       *        content:
       *          application/json:
       *            schema:
       *              $ref: "#/components/schemas/nofound"
       *
       *
       */
			try {
				const id_grupo = [req.query.id];
				const { nombre, estado, alias } = req.body;
				const newGrupo = await ModelGrupo.update(
					{ nombre, estado, alias },
					{ where: { id_grupo } }
				);
				const grupo = await ModelGrupo.findOne({
					where: { id_grupo },
				});
				return res.status(200).json(grupo);
			} catch (error) {
				console.log({ error });
				return res.status(500).json({ message: error });
			}
		case 'DELETE':
			/**
       * @swagger
       * /api/v1/grupos/{id}:
       *  delete:
       *    summary: eliminar asistencia
       *    tags: [grupos]
       *    parameters:
       *      - $ref: "#/components/parameters/id"
       *    responses:
       *      200:
       *        description: la asistencia fue eliminada
       *        content:
       *          application/json:
       *            schema:
       *              $ref: "#components/schemas/grupos"
       *      404:
       *        decription: asistencia no encontrada
       *        content:
       *          application/json:
       *            schema:
       *              $ref: "#components/schemas/nofound"
       */
			try {
				const id_grupo = [req.query.id];
				await ModelGrupo.destroy({
					where: {
						id_grupo,
					},
				});
				return res.send(200);
			} catch (error) {
				return res.status(500).json({ message: error });
			}
		default:
			return res.status(405).json('Method not allowed');
	}
};
