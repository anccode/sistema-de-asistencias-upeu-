import { NextApiRequest, NextApiResponse } from "next";
import { ModelCiclo } from "../../../../models";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      /**
       * @swagger
       * /api/v1/ciclos/{id}:
       *  get:
       *    summary: esta funcion muestra una lista de asistencias por el id
       *    tags: [ciclos]
       *    parameters:
       *      - $ref: "#/components/parameters/id"
       *    responses:
       *      200:
       *        description: asistencia encontrada
       *        content:
       *          application/json:
       *            schema:
       *              $ref: "#/components/schemas/ciclos"
       *      404:
       *        description: asistencia no encontrada
       *        content:
       *          application/json:
       *            schema:
       *              $ref: '#/components/schemas/nofound'
       *
       */
      try {
        const id_ciclo = [req.query.id];
        const getCiclo = await ModelCiclo.findOne({
          where: { id_ciclo },
        });
        return res.status(200).json(getCiclo);
      } catch (error) {
        return res.status(500).json({ message: error });
      }
    case "PUT":
      /**
       * @swagger
       * /api/v1/ciclos/{id}:
       *  put:
       *    summary: actualizar por id
       *    tags: [ciclos]
       *    parameters:
       *      - $ref: "#/components/parameters/id"
       *    requestBody:
       *      required: true
       *      content:
       *        application/json:
       *          schema:
       *            $ref: "#/components/schemas/ciclos"
       *    responses:
       *      200:
       *        description: actualizo el dato
       *        content:
       *          application/json:
       *            schema:
       *              $ref: "#/components/schemas/ciclos"
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
        const id_ciclo = [req.query.id];
        const { nombre, alias } = req.body;
        const newCiclo = await ModelCiclo.update(
          { nombre, alias },
          { where: { id_ciclo } }
        );
        const Ciclo = await ModelCiclo.findOne({
          where: { id_ciclo },
        });
        return res.status(200).json(Ciclo);
      } catch (error) {
        return res.status(500).json({ message: error });
      }
    case "DELETE":
      /**
       * @swagger
       * /api/v1/ciclos/{id}:
       *  delete:
       *    summary: eliminar asistencia
       *    tags: [ciclos]
       *    parameters:
       *      - $ref: "#/components/parameters/id"
       *    responses:
       *      200:
       *        description: la asistencia fue eliminada
       *        content:
       *          application/json:
       *            schema:
       *              $ref: "#components/schemas/ciclos"
       *      404:
       *        decription: asistencia no encontrada
       *        content:
       *          application/json:
       *            schema:
       *              $ref: "#components/schemas/nofound"
       */
      try {
        const id_ciclo = [req.query.id];
        await ModelCiclo.destroy({
          where: {
            id_ciclo,
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
