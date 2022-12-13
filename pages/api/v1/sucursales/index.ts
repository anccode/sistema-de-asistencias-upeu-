import { NextApiRequest, NextApiResponse } from "next";
import { ModelSucursal } from "../../../../models";
// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      /**
       * @swagger
       * /api/v1/sucursales:
       *  get:
       *    summary: date
       *    tags: [sucursales]
       *    responses:
       *      200:
       *        description: lista de docentes
       *        content:
       *          application/json:
       *            schema:
       *              type: array
       *              items:
       *                $ref: '#/components/schemas/sucursales'
       *
       */
      try {
        const sucursales = await ModelSucursal.findAll();
        return res.status(200).json(sucursales);
      } catch (error) {
        return res.status(500).json({ message: error });
      }
    case "POST":
      /**
       * @swagger
       * /api/v1/sucursales:
       *  post:
       *    summary: date
       *    tags: [sucursales]
       *    requestBody:
       *      required: true
       *      content:
       *        application/json:
       *          schema:
       *            $ref: "#/components/schemas/sucursales"
       *    responses:
       *      200:
       *        description: date
       *        content:
       *          application/json:
       *            schema:
       *              $ref: "#/components/schemas/sucursales"
       *      500:
       *        description: error
       *
       */
      try {
        const { id_sucursal, nombre, estado } = req.body;
        const newSucursal= await ModelSucursal.create({
          id_sucursal, 
          nombre, 
          estado,
        });
        return res.status(200).json(newSucursal); //
      } catch (error) {
        return res.status(500).json({ message:error})
      }
    default:
      return res.status(405).json("Method not allowed");
  }
};
