import { NextApiRequest, NextApiResponse } from "next";
import { ModelVinculacion } from "../../../../models";
// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      /**
       * @swagger
       * /api/v1/vinculaciones:
       *  get:
       *    summary: date
       *    tags: [vinculaciones]
       *    responses:
       *      200:
       *        description: lista de docentes
       *        content:
       *          application/json:
       *            schema:
       *              type: array
       *              items:
       *                $ref: '#/components/schemas/vinculaciones'
       *
       */
      try {
        const vinculaciones = await ModelVinculacion.findAll();
        return res.status(200).json(vinculaciones);
      } catch (error) {
        return res.status(500).json({ message: error });
      }
    case "POST":
      /**
       * @swagger
       * /api/v1/vinculaciones:
       *  post:
       *    summary: date
       *    tags: [vinculaciones]
       *    requestBody:
       *      required: true
       *      content:
       *        application/json:
       *          schema:
       *            $ref: "#/components/schemas/vinculaciones"
       *    responses:
       *      200:
       *        description: date
       *        content:
       *          application/json:
       *            schema:
       *              $ref: "#/components/schemas/vinculaciones"
       *      500:
       *        description: error
       *
       */
      try {
        const { id_vinculacion, nombre, detalle, tipo, archivo, estado } =
          req.body;
        const newVinculacion = await ModelVinculacion.create({
          id_vinculacion,
          nombre,
          detalle,
          tipo,
          archivo,
          estado,
        });
        return res.status(200).json(newVinculacion); //
      } catch (error) {
        return res.status(500).json({ message: error });
      }
    default:
      return res.status(405).json("Method not allowed");
  }
};
