import { NextApiRequest, NextApiResponse } from "next";
import { ModelParticipante } from "../../../../models";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      /**
       * @swagger
       * /api/v1/participantes/{id}:
       *  get:
       *    summary: esta funcion muestra una lista de escuela sucursal por el id
       *    tags: [participantes]
       *    parameters:
       *      - $ref: "#/components/parameters/id"
       *    responses:
       *      200:
       *        description: sucursal encontrada
       *        content:
       *          application/json:
       *            schema:
       *              $ref: "#/components/schemas/participantes"
       *      404:
       *        description: asistencia no encontrada
       *        content:
       *          application/json:
       *            schema:
       *              $ref: '#/components/schemas/nofound'
       *
       */
      try {
        const id_participantes = [req.query.id];
        const getParticipantes = await ModelParticipante.findOne({
          where: { id_participantes },
        });
        return res.status(200).json(getParticipantes);
      } catch (error) {
        return res.status(500).json({ message: error });
      }
    case "PUT":
      /**
       * @swagger
       * /api/v1/participantes/{id}:
       *  put:
       *    summary: actualizar por id
       *    tags: [participantes]
       *    parameters:
       *      - $ref: "#/components/parameters/id"
       *    requestBody:
       *      required: true
       *      content:
       *        application/json:
       *          schema:
       *            $ref: "#/components/schemas/participantes"
       *    responses:
       *      200:
       *        description: actualizo el dato
       *        content:
       *          application/json:
       *            schema:
       *              $ref: "#/components/schemas/participantes"
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
        const id_participantes = [req.query.id];
        const { id_persona, codigo, horas_total } = req.body;
        const newParticipante = await ModelParticipante.update(
          { id_persona, codigo, horas_total },
          { where: { id_participantes } }
        );
        const participante = await ModelParticipante.findOne({
          where: { id_participantes },
        });
        return res.status(200).json(participante);
      } catch (error) {
        return res.status(500).json({ message: error });
      }
    case "DELETE":
      /**
       * @swagger
       * /api/v1/participantes/{id}:
       *  delete:
       *    summary: eliminar asistencia
       *    tags: [participantes]
       *    parameters:
       *      - $ref: "#/components/parameters/id"
       *    responses:
       *      200:
       *        description: la asistencia fue eliminada
       *        content:
       *          application/json:
       *            schema:
       *              $ref: "#components/schemas/participantes"
       *      404:
       *        decription: asistencia no encontrada
       *        content:
       *          application/json:
       *            schema:
       *              $ref: "#components/schemas/nofound"
       */
      try {
        const id_participantes = [req.query.id];
        await ModelParticipante.destroy({
          where: {
            id_participantes,
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
