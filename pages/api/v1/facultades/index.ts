import { NextApiRequest, NextApiResponse } from "next";
import { ModelFacultad } from "../../../../models";
// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      /**
       * @swagger
       * /api/v1/facultades:
       *  get:
       *    summary: date
       *    tags: [facultades]
       *    responses:
       *      200:
       *        description: lista de docentes
       *        content:
       *          application/json:
       *            schema:
       *              type: array
       *              items:
       *                $ref: '#/components/schemas/facultades'
       *
       */
      try {
        const facultades = await ModelFacultad.findAll();
        return res.status(200).json(facultades);
      } catch (error) {
        return res.status(500).json({ message: error });
      }
    case "POST":
      /**
       * @swagger
       * /api/v1/facultades:
       *  post:
       *    summary: date
       *    tags: [facultades]
       *    requestBody:
       *      required: true
       *      content:
       *        application/json:
       *          schema:
       *            $ref: "#/components/schemas/facultades"
       *    responses:
       *      200:
       *        description: date
       *        content:
       *          application/json:
       *            schema:
       *              $ref: "#/components/schemas/facultades"
       *      500:
       *        description: error
       *
       */
      try {
        const { nombre, estado, alias } = req.body;
        const newEscuelaSucur = await ModelFacultad.create({
          nombre,
          estado,
          alias,
        });
        return res.status(200).json(newEscuelaSucur); //
      } catch (error) {
        console.log(error)
        return res.status(500).json({message:error})
      }
    default:
      return res.status(405).json("Method not allowed");
  }
};
