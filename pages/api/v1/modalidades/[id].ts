import { NextApiRequest, NextApiResponse } from "next";
import { ModelModalidad } from "../../../../models";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      /**
       * @swagger
       * /api/v1/modalidades/{id}:
       *  get:
       *    summary: esta funcion muestra una lista de escuela sucursal por el id
       *    tags: [modalidades]
       *    parameters:
       *      - $ref: "#/components/parameters/id"
       *    responses:
       *      200:
       *        description: sucursal encontrada
       *        content:
       *          application/json:
       *            schema:
       *              $ref: "#/components/schemas/modalidades"
       *      404:
       *        description: asistencia no encontrada
       *        content:
       *          application/json:
       *            schema:
       *              $ref: '#/components/schemas/nofound'
       *
       */
      try {
        const id_modalidad = [req.query.id];
        const getModalidad = await ModelModalidad.findOne({
          where: { id_modalidad },
        });
        return res.status(200).json(getModalidad);
      } catch (error) {
        return res.status(500).json({ message: error });
      }
    case "PUT":
      /**
       * @swagger
       * /api/v1/modalidades/{id}:
       *  put:
       *    summary: actualizar por id
       *    tags: [modalidades]
       *    parameters:
       *      - $ref: "#/components/parameters/id"
       *    requestBody:
       *      required: true
       *      content:
       *        application/json:
       *          schema:
       *            $ref: "#/components/schemas/modalidades"
       *    responses:
       *      200:
       *        description: actualizo el dato
       *        content:
       *          application/json:
       *            schema:
       *              $ref: "#/components/schemas/modalidades"
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
        const id_modalidad = [req.query.id];
        const { nombre, estado, alias } = req.body;
        const newModalidad = await ModelModalidad.update(
          { nombre, estado, alias },
          { where: { id_modalidad } }
        );
        const modalidad = await ModelModalidad.findOne({
          where: { id_modalidad },
        });
        return res.status(200).json(modalidad);
      } catch (error) {
        return res.status(500).json({ message: error });
      }
    case "DELETE":
      /**
       * @swagger
       * /api/v1/modalidades/{id}:
       *  delete:
       *    summary: eliminar asistencia
       *    tags: [modalidades]
       *    parameters:
       *      - $ref: "#/components/parameters/id"
       *    responses:
       *      200:
       *        description: la asistencia fue eliminada
       *        content:
       *          application/json:
       *            schema:
       *              $ref: "#components/schemas/modalidades"
       *      404:
       *        decription: asistencia no encontrada
       *        content:
       *          application/json:
       *            schema:
       *              $ref: "#components/schemas/nofound"
       */
      try {
        const id_modalidad = [req.query.id];
        await ModelModalidad.destroy({
          where: {
            id_modalidad,
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
