import { NextApiRequest, NextApiResponse } from "next";
//import { verifyToken } from "../../../../middlewares/authJwt";
import { ModelAsistencia } from "../../../../models";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      /**
       * @swagger
       * /api/v1/attendances:
       *  get:
       *    summary: esta funcion muestra una lista de asistencias
       *    tags: [asistencias]
       *    responses:
       *      200:
       *        description: lista de asistencias
       *        content:
       *          application/json:
       *            schema:
       *              type: array
       *              items:
       *                $ref: '#/components/schemas/asistencias'
       *
       */
      try {
        const attendances = await ModelAsistencia.findAll();
        return res.status(200).json(attendances);
      } catch (error) {
        return res.status(500).json({ message: error });
      }

    case "POST":
      /**
       * @swagger
       * /api/v1/attendances:
       *  post:
       *    summary: esta funcion muestra una lista de asistencias
       *    tags: [asistencias]
       *    requestBody:
       *      required: true
       *      content:
       *        application/json:
       *          schema:
       *            $ref: "#/components/schemas/asistencias"
       *    responses:
       *      200:
       *        description: asistencia creada
       *        content:
       *          application/json:
       *            schema:
       *              $ref: "#/components/schemas/asistencias"
       *      500:
       *        description: error
       *
       */
      try {
        const {
          id_plan_participante,
          fecha_asis,
          fecha_termino,
          estado,
          nota,
          horas,
          evidencia,
          codigo,
        } = req.body;
        const newAttendance = await ModelAsistencia.create({
          id_plan_participante,
          fecha_asis,
          fecha_termino,
          estado,
          nota,
          horas,
          evidencia,
          codigo,
        });
        return res.status(200).json(newAttendance);
      } catch (error) {
        return res.status(500).json({ message: error });
      }
    default:
      return res.status(405).json("Method not allowed");
  }
};
