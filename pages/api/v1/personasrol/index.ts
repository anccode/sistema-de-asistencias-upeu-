import { NextApiRequest, NextApiResponse } from "next";
import { ModelPersona_rol } from "../../../../models";
// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      /**
       * @swagger
       * /api/v1/personasrol:
       *  get:
       *    summary: date
       *    tags: [personas_rol]
       *    responses:
       *      200:
       *        description: lista de docentes
       *        content:
       *          application/json:
       *            schema:
       *              type: array
       *              items:
       *                $ref: '#/components/schemas/personasrol'
       *
       */
      try {
        const personas_rol = await ModelPersona_rol.findAll();
        return res.status(200).json(personas_rol);
      } catch (error) {
        return res.status(500).json({ message: error });
      }
    case "POST":
      /**
       * @swagger
       * /api/v1/personasrol:
       *  post:
       *    summary: date
       *    tags: [personas_rol]
       *    requestBody:
       *      required: true
       *      content:
       *        application/json:
       *          schema:
       *            $ref: "#/components/schemas/personasrol"
       *    responses:
       *      200:
       *        description: date
       *        content:
       *          application/json:
       *            schema:
       *              $ref: "#/components/schemas/personasrol"
       *      500:
       *        description: error
       *
       */
      try {
        const { id_persona_rol, id_persona, id_rol, estado } = req.body;
        const newPersonas_rol = await ModelPersona_rol.create({
          id_persona_rol,
          id_persona,
          id_rol,
          estado,
        });
        return res.status(200).json(newPersonas_rol);
      } catch (error) {
        return res.status(500).json({ message: error });
      }
    default:
      return res.status(405).json("Method not allowed");
  }
};
