import { NextApiRequest, NextApiResponse } from "next";
import { ModelPeriodo } from "../../../../models";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      /**
       * @swagger
       * /api/v1/periodos/{id}:
       *  get:
       *    summary: esta funcion muestra una lista de escuela sucursal por el id
       *    tags: [periodos]
       *    parameters:
       *      - $ref: "#/components/parameters/id"
       *    responses:
       *      200:
       *        description: sucursal encontrada
       *        content:
       *          application/json:
       *            schema:
       *              $ref: "#/components/schemas/periodos"
       *      404:
       *        description: asistencia no encontrada
       *        content:
       *          application/json:
       *            schema:
       *              $ref: '#/components/schemas/nofound'
       *
       */
      try {
        const id_periodos = [req.query.id];
        const getPeriodos = await ModelPeriodo.findOne({
          where: { id_periodos },
        });
        return res.status(200).json(getPeriodos);
      } catch (error) {
        return res.status(500).json({ message: error });
      }
    case "PUT":
      /**
       * @swagger
       * /api/v1/periodos/{id}:
       *  put:
       *    summary: actualizar por id
       *    tags: [periodos]
       *    parameters:
       *      - $ref: "#/components/parameters/id"
       *    requestBody:
       *      required: true
       *      content:
       *        application/json:
       *          schema:
       *            $ref: "#/components/schemas/periodos"
       *    responses:
       *      200:
       *        description: actualizo el dato
       *        content:
       *          application/json:
       *            schema:
       *              $ref: "#/components/schemas/periodos"
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
        const id_periodo = [req.query.id];
        const { nombre, estado } = req.body;
        const newPeriodo = await ModelPeriodo.update(
          { nombre, estado },
          { where: { id_periodo } }
        );
        const periodo = await ModelPeriodo.findOne({
          where: { id_periodo },
        });
        return res.status(200).json(periodo);
      } catch (error) {
        return res.status(500).json({ message: error });
      }
      
    case "DELETE":
      /**
       * @swagger
       * /api/v1/periodos/{id}:
       *  delete:
       *    summary: eliminar asistencia
       *    tags: [periodos]
       *    parameters:
       *      - $ref: "#/components/parameters/id"
       *    responses:
       *      200:
       *        description: la asistencia fue eliminada
       *        content:
       *          application/json:
       *            schema:
       *              $ref: "#components/schemas/periodos"
       *      404:
       *        decription: asistencia no encontrada
       *        content:
       *          application/json:
       *            schema:
       *              $ref: "#components/schemas/nofound"
       */
      try {
        const id_periodo = [req.query.id];
        await ModelPeriodo.destroy({
          where: {
            id_periodo,
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
