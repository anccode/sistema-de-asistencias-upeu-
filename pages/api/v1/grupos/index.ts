import { NextApiRequest, NextApiResponse } from 'next';
import { ModelGrupo } from '../../../../models';
// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
	const { method } = req;
	switch (method) {
		case 'GET':
			/**
       * @swagger
       * /api/v1/grupos:
       *  get:
       *    summary: date
       *    tags: [grupos]
       *    responses:
       *      200:
       *        description: lista de docentes
       *        content:
       *          application/json:
       *            schema:
       *              type: array
       *              items:
       *                $ref: '#/components/schemas/grupos'
       *
       */
			try {
				const grupos = await ModelGrupo.findAll();
				return res.status(200).json(grupos);
			} catch (error) {
				return res.status(500).json({ message: error });
			}
		case 'POST':
			/**
       * @swagger
       * /api/v1/grupos:
       *  post:
       *    summary: date
       *    tags: [grupos]
       *    requestBody:
       *      required: true
       *      content:
       *        application/json:
       *          schema:
       *            $ref: "#/components/schemas/grupos"
       *    responses:
       *      200:
       *        description: date
       *        content:
       *          application/json:
       *            schema:
       *              $ref: "#/components/schemas/grupos"
       *      500:
       *        description: error
       *
       */
			try {
				const { nombre, estado, alias } = req.body;
				const newEscuelaSucur = await ModelGrupo.create({
					nombre,
					estado,
					alias,
				});
				return res.status(200).json(newEscuelaSucur); //
			} catch (error) {
				console.log({ error });
				return res.status(500).json({ message: error });
			}
		default:
			return res.status(405).json('Method not allowed');
	}
};
