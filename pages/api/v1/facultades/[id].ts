import { NextApiRequest, NextApiResponse } from "next";
import {  ModelFacultad } from "../../../../models";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  switch (method) {
    case "GET":
      /**
       * @swagger
       * /api/v1/facultades/{id}:
       *  get:
       *    summary: esta funcion muestra una lista de escuela sucursal por el id
       *    tags: [facultades]
       *    parameters:
       *      - $ref: "#/components/parameters/id"
       *    responses:
       *      200:
       *        description: sucursal encontrada
       *        content:
       *          application/json:
       *            schema:
       *              $ref: "#/components/schemas/facultades"
       *      404:
       *        description: asistencia no encontrada
       *        content:
       *          application/json:
       *            schema:
       *              $ref: '#/components/schemas/nofound'
       *
       */
      try {
        const id_facultad = [req.query.id];
        const getFacultad = await ModelFacultad.findOne({
          where: { id_facultad },
        });
        return res.status(200).json(getFacultad);
      } catch (error) {
        return res.status(500).json({ message: error });
      }
    case "PUT":
      /**
       * @swagger
       * /api/v1/facultades/{id}:
       *  put:
       *    summary: actualizar por id
       *    tags: [facultades]
       *    parameters:
       *      - $ref: "#/components/parameters/id"
       *    requestBody:
       *      required: true
       *      content:
       *        application/json:
       *          schema:
       *            $ref: "#/components/schemas/facultades"
       *    responses:
       *      200:
       *        description: actualizo el dato
       *        content:
       *          application/json:
       *            schema:
       *              $ref: "#/components/schemas/facultades"
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
        const id_facultad = [req.query.id];
        const { nombre, estado, alias  } = req.body;
        const newFacultad = await ModelFacultad.update(
          { nombre, estado, alias  },
          { where: { id_facultad } }
        );
        const facultad = await ModelFacultad.findOne({
          where: { id_facultad },
        });
        return res.status(200).json(facultad);
      } catch (error) {
        return res.status(500).json({ message: error });
      }
    case "DELETE":
      /**
       * @swagger
       * /api/v1/facultades/{id}:
       *  delete:
       *    summary: eliminar asistencia
       *    tags: [facultades]
       *    parameters:
       *      - $ref: "#/components/parameters/id"
       *    responses:
       *      200:
       *        description: la asistencia fue eliminada
       *        content:
       *          application/json:
       *            schema:
       *              $ref: "#components/schemas/facultades"
       *      404:
       *        decription: asistencia no encontrada
       *        content:
       *          application/json:
       *            schema:
       *              $ref: "#components/schemas/nofound"
       */
      try {
        const id_facultad = [req.query.id];
        await ModelFacultad.destroy({
          where: {
            id_facultad,
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
