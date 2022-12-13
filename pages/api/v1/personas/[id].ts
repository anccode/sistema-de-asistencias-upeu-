import { NextApiRequest, NextApiResponse } from 'next';
import {
  ModelCargaPlan,
	ModelDocente,
	ModelParticipante,
	ModelPersona,
	ModelPersona_rol,
	ModelPlan_participante,
	ModelUsuario,
} from '../../../../models';
import { useRouter } from 'next/router';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
	const { method } = req;

	switch (method) {
		case 'GET':
			/**
       * @swagger
       * /api/v1/personas/{id}:
       *  get:
       *    summary: esta funcion muestra una lista de escuela sucursal por el id
       *    tags: [personas]
       *    parameters:
       *      - $ref: "#/components/parameters/id"
       *    responses:
       *      200:
       *        description: sucursal encontrada
       *        content:
       *          application/json:
       *            schema:
       *              $ref: "#/components/schemas/personas"
       *      404:
       *        description: asistencia no encontrada
       *        content:
       *          application/json:
       *            schema:
       *              $ref: '#/components/schemas/nofound'
       *
       */
			try {
				const id_persona = [req.query.id];
				const getPersona = await ModelPersona.findOne({
					where: { id_persona },
				});
				return res.status(200).json(getPersona);
			} catch (error) {
				return res.status(500).json({ message: error });
			}
		case 'PUT':
			/**
       * @swagger
       * /api/v1/personas/{id}:
       *  put:
       *    summary: actualizar por id
       *    tags: [personas]
       *    parameters:
       *      - $ref: "#/components/parameters/id"
       *    requestBody:
       *      required: true
       *      content:
       *        application/json:
       *          schema:
       *            $ref: "#/components/schemas/personas"
       *    responses:
       *      200:
       *        description: actualizo el dato
       *        content:
       *          application/json:
       *            schema:
       *              $ref: "#/components/schemas/personas"
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
				const id_persona = [req.query.id];
				const {
					nombre,
					appaterno,
					apmaterno,
					dni,
					direccion,
					correo,
					numero,
					fecha_registro,
				} = req.body;
				const newPersona = await ModelPersona.update(
					{
						nombre,
						appaterno,
						apmaterno,
						dni,
						direccion,
						correo,
						numero,
						fecha_registro,
					},
					{ where: { id_persona } }
				);
				const persona = await ModelPersona.findOne({
					where: { id_persona },
				});
				return res.status(200).json(persona);
			} catch (error) {
				return res.status(500).json({ message: error });
			}
		case 'DELETE':
			/**
       * @swagger
       * /api/v1/personas/{id}:
       *  delete:
       *    summary: eliminar asistencia
       *    tags: [personas]
       *    parameters:
       *      - $ref: "#/components/parameters/id"
       *    responses:
       *      200:
       *        description: la asistencia fue eliminada
       *        content:
       *          application/json:
       *            schema:
       *              $ref: "#components/schemas/personas"
       *      404:
       *        decription: asistencia no encontrada
       *        content:
       *          application/json:
       *            schema:
       *              $ref: "#components/schemas/nofound"
       */
			try {
				const id_persona = [req.query.id];
				await ModelPlan_participante.destroy({
					where: {
						id_persona,
					},
				});
        await ModelCargaPlan.destroy({
					where: {
						id_persona,
					},
				});
        await ModelDocente.destroy({
					where: {
						id_persona,
					},
				});
				await ModelParticipante.destroy({
					where: {
						id_persona,
					},
				});
				await ModelUsuario.destroy({
					where: {
						id_persona,
					},
				});
				await ModelPersona_rol.destroy({
					where: {
						id_persona,
					},
				});
				await ModelPersona.destroy({
					where: {
						id_persona,
					},
				});
				return res.send(200);
			} catch (error) {
				console.log(error);
				return res.status(500).json({ message: error });
			}
		default:
			return res.status(405).json('Method not allowed');
	}
};
