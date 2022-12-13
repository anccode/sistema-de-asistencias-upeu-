import { NextApiRequest, NextApiResponse } from 'next';
import { ModelPersona } from '../../../../models';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
	const { method } = req;

	switch (method) {
		case 'GET':
			/**
       * @swagger
       * /api/v1/personas:
       *  get:
       *    summary: date
       *    tags: [personas]
       *    responses:
       *      200:
       *        description: lista de docentes
       *        content:
       *          application/json:
       *            schema:
       *              type: array
       *              items:
       *                $ref: '#/components/schemas/personas'
       *
       */
			try {
				const personas = await ModelPersona.findAll();
				return res.status(200).json(personas);
			} catch (error) {
				return res.status(500).json({ message: error });
			}
		case 'POST':
			/**
       * @swagger
       * /api/v1/personas:
       *  post:
       *    summary: date
       *    tags: [personas]
       *    requestBody:
       *      required: true
       *      content:
       *        application/json:
       *          schema:
       *            $ref: "#/components/schemas/personas"
       *    responses:
       *      200:
       *        description: date
       *        content:
       *          application/json:
       *            schema:
       *              $ref: "#/components/schemas/personas"
       *      500:
       *        description: error
       *
       */
			try {
				const {
					id_persona,
					nombre,
					appaterno,
					apmaterno,
					dni,
					direccion,
					correo,
					numero,
				} = req.body;

				const newPersonas = await ModelPersona.create({
					id_persona,
					nombre,
					appaterno,
					apmaterno,
					dni,
					direccion,
					correo,
					numero,
					fecha_registro: new Date(),
				});
				return res.status(200).json(newPersonas); //
			} catch (error) {
				console.error(error);
				return res.status(500).json({ message: error });
			}
		default:
			return res.status(405).json('Method not allowed');
	}
};
