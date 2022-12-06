import { NextApiRequest, NextApiResponse } from "next";
import { ModelAsistencia } from "../../../../models";
// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  switch (method) {
    case "GET":
      /**
       * @swagger
       * /api/v1/attendances/{id}:
       *  get:
       *    summary: esta funcion muestra una lista de asistencias por el id
       *    tags: [asistencias]
       *    parameters:
       *      - $ref: "#/components/parameters/id"
       *    responses:
       *      200:
       *        description: asistencia encontrada
       *        content:
       *          application/json:
       *            schema:
       *              $ref: "#/components/schemas/asistencias"
       *      404:
       *        description: asistencia no encontrada
       *        content:
       *          application/json:
       *            schema:
       *              $ref: '#/components/schemas/nofound'
       *
       */
      try {
        const id_asistencia = [req.query.id];
        const getAttendance = await ModelAsistencia.findOne({
          where: { id_asistencia },
        });
        return res.status(200).json(getAttendance);
      } catch (error) {
        return res.status(500).json({ message: error });
      }
    case "PUT":
      /**
       * @swagger
       * /api/v1/attendances/{id}:
       *  put:
       *    summary: actualizar por id
       *    tags: [asistencias]
       *    parameters:
       *      - $ref: "#/components/parameters/id"
       *    requestBody:
       *      required: true
       *      content:
       *        application/json:
       *          schema:
       *            $ref: "#/components/schemas/asistencias"
       *    responses:
       *      200:
       *        description: actualizo el dato
       *        content:
       *          application/json:
       *            schema:
       *              $ref: "#/components/schemas/asistencias"
       *      404:
       *        description: error
       *        content:
       *          application/json:
       *            schema:
       *              $ref: "#/components/schemas/nofound"
       *
       *
       */

      try {
        const id_asistencia = [req.query.id];
        const { codigo } = req.body;
        const newAttendance = await ModelAsistencia.update(
          {
            codigo,
          },
          { where: { id_asistencia } }
        );
        const attendance = await ModelAsistencia.findOne({
          where: { id_asistencia },
        });
        return res.status(200).json(attendance);
      } catch (error) {
        return res.status(500).json({ message: error });
      }
    case "DELETE":
      /**
       * @swagger
       * /api/v1/attendances/{id}:
       *  delete:
       *    summary: eliminar asistencia
       *    tags: [asistencias]
       *    parameters:
       *      - $ref: "#/components/parameters/id"
       *    responses:
       *      200:
       *        description: la asistencia fue eliminada
       *        content:
       *          application/json:
       *            schema:
       *              $ref: "#components/schemas/asistencias"
       *      404:
       *        decription: asistencia no encontrada
       *        content:
       *          application/json:
       *            schema:
       *              $ref: "#components/schemas/nofound"
       */
      try {
        const id_asistencia = [req.query.id];
        await ModelAsistencia.destroy({
          where: {
            id_asistencia,
          },
        });
        return res.send(200);
      } catch (error) {
        return res.status(500).json({ message: error });
      }
    default:
      return res.status(405).json("Method not allowed");
  }
};
