import { NextApiRequest, NextApiResponse } from "next";
import { ModelVinculacion } from "../../../../models";
import { useRouter } from "next/router";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      /**
       * @swagger
       * /api/v1/vinculaciones/{id}:
       *  get:
       *    summary: esta funcion muestra una lista de escuela sucursal por el id
       *    tags: [vinculaciones]
       *    parameters:
       *      - $ref: "#/components/parameters/id"
       *    responses:
       *      200:
       *        description: sucursal encontrada
       *        content:
       *          application/json:
       *            schema:
       *              $ref: "#/components/schemas/vinculaciones"
       *      404:
       *        description: asistencia no encontrada
       *        content:
       *          application/json:
       *            schema:
       *              $ref: '#/components/schemas/nofound'
       *
       */
      try {
        const id_vinculacion = [req.query.id];
        const getVinculacion = await ModelVinculacion.findOne({
          where: { id_vinculacion },
        });
        return res.status(200).json(getVinculacion);
      } catch (error) {
        return res.status(500).json({ message: error });
      }
    case "PUT":
      /**
       * @swagger
       * /api/v1/vinculaciones/{id}:
       *  put:
       *    summary: actualizar por id
       *    tags: [vinculaciones]
       *    parameters:
       *      - $ref: "#/components/parameters/id"
       *    requestBody:
       *      required: true
       *      content:
       *        application/json:
       *          schema:
       *            $ref: "#/components/schemas/vinculaciones"
       *    responses:
       *      200:
       *        description: actualizo el dato
       *        content:
       *          application/json:
       *            schema:
       *              $ref: "#/components/schemas/vinculaciones"
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
        const id_vinculacion = [req.query.id];
        const { nombre, detalle, tipo, archivo, estado } = req.body;
        const newVinculacion = await ModelVinculacion.update(
          { nombre, detalle, tipo, archivo, estado },
          { where: { id_vinculacion } }
        );
        const vinculacion = await ModelVinculacion.findOne({
          where: { id_vinculacion },
        });
        return res.status(200).json(vinculacion);
      } catch (error) {
        return res.status(500).json({ message: error });
      }
    case "DELETE":
      /**
       * @swagger
       * /api/v1/vinculaciones/{id}:
       *  delete:
       *    summary: eliminar asistencia
       *    tags: [vinculaciones]
       *    parameters:
       *      - $ref: "#/components/parameters/id"
       *    responses:
       *      200:
       *        description: la asistencia fue eliminada
       *        content:
       *          application/json:
       *            schema:
       *              $ref: "#components/schemas/vinculaciones"
       *      404:
       *        decription: asistencia no encontrada
       *        content:
       *          application/json:
       *            schema:
       *              $ref: "#components/schemas/nofound"
       */
      try {
        const id_vinculacion = [req.query.id];
        await ModelVinculacion.destroy({
          where: {
            id_vinculacion,
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
