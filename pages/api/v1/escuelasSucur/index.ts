import { NextApiRequest, NextApiResponse } from "next";
import { ModelEscuela_sucursal } from "../../../../models";
// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      /**
       * @swagger
       * /api/v1/escuelasSucur:
       *  get:
       *    summary: date
       *    tags: [escuela_sucursal]
       *    responses:
       *      200:
       *        description: lista de docentes
       *        content:
       *          application/json:
       *            schema:
       *              type: array
       *              items:
       *                $ref: '#/components/schemas/escuela_sucursal'
       *
       */
      try {
        const escuelasSucur = await ModelEscuela_sucursal.findAll();
        return res.status(200).json(escuelasSucur);
      } catch (error) {
        return res.status(500).json({ message: error });
      }
    case "POST":
      /**
       * @swagger
       * /api/v1/escuelasSucur:
       *  post:
       *    summary: date
       *    tags: [escuela_sucursal]
       *    requestBody:
       *      required: true
       *      content:
       *        application/json:
       *          schema:
       *            $ref: "#/components/schemas/escuela_sucursal"
       *    responses:
       *      200:
       *        description: date
       *        content:
       *          application/json:
       *            schema:
       *              $ref: "#/components/schemas/escuela_sucursal"
       *      500:
       *        description: error
       *
       */
      try {
        const { id_escuela, id_sucursal, estado } = req.body;
        const newEscuelaSucur = await ModelEscuela_sucursal.create({
          id_escuela,
          id_sucursal,
          estado,
        });
        return res.status(200).json(newEscuelaSucur);
      } catch (error) {
        return res.status(500).json({ message:error});
      }
    default:
      return res.status(405).json("Method not allowed");
  }
};
