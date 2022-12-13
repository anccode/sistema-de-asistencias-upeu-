import { NextApiRequest, NextApiResponse } from "next";
import { ModelEscuela_sucursal } from "../../../../models";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      /**
       * @swagger
       * /api/v1/escuelasSucur/{id}:
       *  get:
       *    summary: esta funcion muestra una lista de escuela sucursal por el id
       *    tags: [escuela_sucursal]
       *    parameters:
       *      - $ref: "#/components/parameters/id"
       *    responses:
       *      200:
       *        description: sucursal encontrada
       *        content:
       *          application/json:
       *            schema:
       *              $ref: "#/components/schemas/escuela_sucursal"
       *      404:
       *        description: asistencia no encontrada
       *        content:
       *          application/json:
       *            schema:
       *              $ref: '#/components/schemas/nofound'
       *
       */
      try {
        const id_escuela_sucursal = [req.query.id];
        const getEscuelaSucur = await ModelEscuela_sucursal.findOne({
          where: { id_escuela_sucursal },
        });
        return res.status(200).json(getEscuelaSucur);
      } catch (error) {
        return res.status(500).json({ message: error });
      }
    case "PUT":
      /**
       * @swagger
       * /api/v1/escuelasSucur/{id}:
       *  put:
       *    summary: actualizar por id
       *    tags: [escuela_sucursal]
       *    parameters:
       *      - $ref: "#/components/parameters/id"
       *    requestBody:
       *      required: true
       *      content:
       *        application/json:
       *          schema:
       *            $ref: "#/components/schemas/escuela_sucursal"
       *    responses:
       *      200:
       *        description: actualizo el dato
       *        content:
       *          application/json:
       *            schema:
       *              $ref: "#/components/schemas/escuela_sucursal"
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
        const id_escuela_sucursal = [req.query.id];
        const { id_escuela, id_sucursal, estado } = req.body;
        const newEscuelaSucur = await ModelEscuela_sucursal.update(
          { id_escuela, id_sucursal, estado },
          { where: { id_escuela_sucursal } }
        );
        const EscuelaSucur = await ModelEscuela_sucursal.findOne({
          where: { id_escuela },
        });
        return res.status(200).json(EscuelaSucur);
      } catch (error) {
        return res.status(500).json({ message: error });
      }
    case "DELETE":
      /**
       * @swagger
       * /api/v1/escuelasSucur/{id}:
       *  delete:
       *    summary: eliminar asistencia
       *    tags: [escuela_sucursal]
       *    parameters:
       *      - $ref: "#/components/parameters/id"
       *    responses:
       *      200:
       *        description: la asistencia fue eliminada
       *        content:
       *          application/json:
       *            schema:
       *              $ref: "#components/schemas/escuela_sucursal"
       *      404:
       *        decription: asistencia no encontrada
       *        content:
       *          application/json:
       *            schema:
       *              $ref: "#components/schemas/nofound"
       */
      try {
        const id_escuela_sucursal = [req.query.id];
        await ModelEscuela_sucursal.destroy({
          where: {
            id_escuela_sucursal,
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
