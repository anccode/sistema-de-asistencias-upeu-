import { NextApiRequest, NextApiResponse } from "next";
import { ModelEscuela } from "../../../../models";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      /**
       * @swagger
       * /api/v1/escuelas/{id}:
       *  get:
       *    summary: esta funcion muestra una lista de asistencias por el id
       *    tags: [escuelas]
       *    parameters:
       *      - $ref: "#/components/parameters/id"
       *    responses:
       *      200:
       *        description: asistencia encontrada
       *        content:
       *          application/json:
       *            schema:
       *              $ref: "#/components/schemas/escuelas"
       *      404:
       *        description: asistencia no encontrada
       *        content:
       *          application/json:
       *            schema:
       *              $ref: '#/components/schemas/nofound'
       *
       */
      try {
        const id_escuela = [req.query.id];
        const getEscuela = await ModelEscuela.findOne({
          where: { id_escuela },
        });
        return res.status(200).json(getEscuela);
      } catch (error) {
        return res.status(500).json({ message: error });
      }
    case "PUT":
      /**
       * @swagger
       * /api/v1/escuelas/{id}:
       *  put:
       *    summary: actualizar por id
       *    tags: [escuelas]
       *    parameters:
       *      - $ref: "#/components/parameters/id"
       *    requestBody:
       *      required: true
       *      content:
       *        application/json:
       *          schema:
       *            $ref: "#/components/schemas/escuelas"
       *    responses:
       *      200:
       *        description: actualizo el dato
       *        content:
       *          application/json:
       *            schema:
       *              $ref: "#/components/schemas/escuelas"
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
        const id_escuela = [req.query.id];
        const { nombre, estado, id_facultad } = req.body;
        const newEscuela = await ModelEscuela.update(
          { nombre, estado, id_facultad },
          { where: { id_escuela } }
        );
        const Escuela = await ModelEscuela.findOne({
          where: { id_escuela },
        });
        return res.status(200).json(Escuela);
      } catch (error) {
        return res.status(500).json({ message: error });
      }
    case "DELETE":
      /**
       * @swagger
       * /api/v1/escuelas/{id}:
       *  delete:
       *    summary: eliminar asistencia
       *    tags: [escuelas]
       *    parameters:
       *      - $ref: "#/components/parameters/id"
       *    responses:
       *      200:
       *        description: la asistencia fue eliminada
       *        content:
       *          application/json:
       *            schema:
       *              $ref: "#components/schemas/escuelas"
       *      404:
       *        decription: asistencia no encontrada
       *        content:
       *          application/json:
       *            schema:
       *              $ref: "#components/schemas/nofound"
       */

      try {
        const id_escuela = [req.query.id];
        await ModelEscuela.destroy({
          where: {
            id_escuela,
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
