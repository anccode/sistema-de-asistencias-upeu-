import { NextApiRequest, NextApiResponse } from "next";
import { ModelDocente } from "../../../../models";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      /**
       * @swagger
       * /api/v1/docentes/{id}:
       *  get:
       *    summary: esta funcion muestra una lista de asistencias por el id
       *    tags: [docentes]
       *    parameters:
       *      - $ref: "#/components/parameters/id"
       *    responses:
       *      200:
       *        description: asistencia encontrada
       *        content:
       *          application/json:
       *            schema:
       *              $ref: "#/components/schemas/docentes"
       *      404:
       *        description: asistencia no encontrada
       *        content:
       *          application/json:
       *            schema:
       *              $ref: '#/components/schemas/nofound'
       *
       */
      try {
        const id_persona = [req.query.id];
        const getDocente = await ModelDocente.findOne({
          where: { id_persona },
        });
        return res.status(200).json(getDocente);
      } catch (error) {
        return res.status(500).json({ message: error });
      }
    case "PUT":
      /**
       * @swagger
       * /api/v1/docentes/{id}:
       *  put:
       *    summary: actualizar por id
       *    tags: [docentes]
       *    parameters:
       *      - $ref: "#/components/parameters/id"
       *    requestBody:
       *      required: true
       *      content:
       *        application/json:
       *          schema:
       *            $ref: "#/components/schemas/docentes"
       *    responses:
       *      200:
       *        description: actualizo el dato
       *        content:
       *          application/json:
       *            schema:
       *              $ref: "#/components/schemas/docentes"
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
        const id_persona = [req.query.id];
        const { codigo } = req.body;
        const newCiclo = await ModelDocente.update(
          { codigo },
          { where: { id_persona } }
        );
        const Ciclo = await ModelDocente.findOne({
          where: { id_persona },
        });
        return res.status(200).json(Ciclo);
      } catch (error) {
        return res.status(500).json({ message: error });
      }
    case "DELETE":
      /**
       * @swagger
       * /api/v1/docentes/{id}:
       *  delete:
       *    summary: eliminar asistencia
       *    tags: [docentes]
       *    parameters:
       *      - $ref: "#/components/parameters/id"
       *    responses:
       *      200:
       *        description: la asistencia fue eliminada
       *        content:
       *          application/json:
       *            schema:
       *              $ref: "#components/schemas/docentes"
       *      404:
       *        decription: asistencia no encontrada
       *        content:
       *          application/json:
       *            schema:
       *              $ref: "#components/schemas/nofound"
       */
      try {
        const id_persona = [req.query.id];

        await ModelDocente.destroy({
          where: {
            id_persona,
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
