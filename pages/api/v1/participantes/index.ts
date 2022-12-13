import { NextApiRequest, NextApiResponse } from "next";
import { ModelParticipante } from "../../../../models";
// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      /**
       * @swagger
       * /api/v1/participantes:
       *  get:
       *    summary: date
       *    tags: [participantes]
       *    responses:
       *      200:
       *        description: lista de docentes
       *        content:
       *          application/json:
       *            schema:
       *              type: array
       *              items:
       *                $ref: '#/components/schemas/participantes'
       *
       */
      try {
        const participantes = await ModelParticipante.findAll();
        return res.status(200).json(participantes);
      } catch (error) {
        return res.status(500).json({ message: error });
      }
    case "POST":
      /**
       * @swagger
       * /api/v1/participantes:
       *  post:
       *    summary: date
       *    tags: [participantes]
       *    requestBody:
       *      required: true
       *      content:
       *        application/json:
       *          schema:
       *            $ref: "#/components/schemas/participantes"
       *    responses:
       *      200:
       *        description: date
       *        content:
       *          application/json:
       *            schema:
       *              $ref: "#/components/schemas/participantes"
       *      500:
       *        description: error
       *
       */
      try {
        const { id_persona, codigo, horas_total } = req.body;
        const newParticipante = await ModelParticipante.create({
          id_persona,
          codigo,
          horas_total,
        });
        return res.status(200).json(newParticipante); //
      } catch (error) {
        return res.status(500).json({ message: error });
      }
    default:
      return res.status(405).json("Method not allowed");
  }
};
