import { NextApiRequest, NextApiResponse } from "next";
import { ModelCiclo } from "../../../../models";
// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      /**
       * @swagger
       * /api/v1/ciclos:
       *  get:
       *    summary: date
       *    tags: [ciclos]
       *    responses:
       *      200:
       *        description: lista de ciclos
       *        content:
       *          application/json:
       *            schema:
       *              type: array
       *              items:
       *                $ref: '#/components/schemas/ciclos'
       *
       */
      try {
        const ciclos = await ModelCiclo.findAll();
        return res.status(200).json(ciclos);
      } catch (error) {
        return res.status(500).json({ message: error });
      }
    case "POST":
      /**
       * @swagger
       * /api/v1/ciclos:
       *  post:
       *    summary: date
       *    tags: [ciclos]
       *    requestBody:
       *      required: true
       *      content:
       *        application/json:
       *          schema:
       *            $ref: "#/components/schemas/ciclos"
       *    responses:
       *      200:
       *        description: date
       *        content:
       *          application/json:
       *            schema:
       *              $ref: "#/components/schemas/ciclos"
       *      500:
       *        description: error
       *
       */
      try {
        const { id_ciclo, nombre, alias } = req.body;
        const newCiclo = await ModelCiclo.create({ id_ciclo, nombre, alias });
        return res.status(200).json(newCiclo);
      } catch (error) {
        return res.status(500).json({ message: error });
      }
    default:
      return res.status(405).json("Method not allowed");
  }
};
