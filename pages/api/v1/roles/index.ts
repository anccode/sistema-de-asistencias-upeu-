import { NextApiRequest, NextApiResponse } from "next";
import { ModelRol } from "../../../../models";
// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      /**
       * @swagger
       * /api/v1/roles:
       *  get:
       *    summary: date
       *    tags: [roles]
       *    responses:
       *      200:
       *        description: lista de docentes
       *        content:
       *          application/json:
       *            schema:
       *              type: array
       *              items:
       *                $ref: '#/components/schemas/roles'
       *
       */
      try {
        const roles = await ModelRol.findAll();
        return res.status(200).json(roles);
      } catch (error) {
        return res.status(500).json({ message: error });
      }
    case "POST":
      /**
       * @swagger
       * /api/v1/roles:
       *  post:
       *    summary: date
       *    tags: [roles]
       *    requestBody:
       *      required: true
       *      content:
       *        application/json:
       *          schema:
       *            $ref: "#/components/schemas/roles"
       *    responses:
       *      200:
       *        description: date
       *        content:
       *          application/json:
       *            schema:
       *              $ref: "#/components/schemas/roles"
       *      500:
       *        description: error
       *
       */
      try {
        const { id_rol, nombre, estado } = req.body;
        const newRol = await ModelRol.create({
          id_rol,
          nombre,
          estado,
        });
        return res.status(200).json(newRol); //
      } catch (error) {
        return res.status(500).json({ message: error });
      }
    default:
      return res.status(405).json("Method not allowed");
  }
};
