import { NextApiRequest, NextApiResponse } from "next";
import { ModelPlan_participante } from "../../../../models";
import { useRouter } from "next/router";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      /**
       * @swagger
       * /api/v1/planparticipantes/{id}:
       *  get:
       *    summary: esta funcion muestra una lista de escuela sucursal por el id
       *    tags: [plan_participantes]
       *    parameters:
       *      - $ref: "#/components/parameters/id"
       *    responses:
       *      200:
       *        description: sucursal encontrada
       *        content:
       *          application/json:
       *            schema:
       *              $ref: "#/components/schemas/plan_participantes"
       *      404:
       *        description: asistencia no encontrada
       *        content:
       *          application/json:
       *            schema:
       *              $ref: '#/components/schemas/nofound'
       *
       */
      try {
        const id_plan_participante = [req.query.id];
        const getPlan_participante = await ModelPlan_participante.findOne({
          where: { id_plan_participante },
        });
        return res.status(200).json(getPlan_participante);
      } catch (error) {
        return res.status(500).json({ message: error });
      }
    case "PUT":
      /**
       * @swagger
       * /api/v1/planparticipantes/{id}:
       *  put:
       *    summary: actualizar por id
       *    tags: [plan_participantes]
       *    parameters:
       *      - $ref: "#/components/parameters/id"
       *    requestBody:
       *      required: true
       *      content:
       *        application/json:
       *          schema:
       *            $ref: "#/components/schemas/plan_participantes"
       *    responses:
       *      200:
       *        description: actualizo el dato
       *        content:
       *          application/json:
       *            schema:
       *              $ref: "#/components/schemas/plan_participantes"
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
        const id_plan_participante = [req.query.id];
        const { id_carga_plan, id_persona, certificado, estado, horas } =
          req.body;
        const newPlanParticipante = await ModelPlan_participante.update(
          {
            id_carga_plan,
            id_persona,
            certificado,
            estado,
            horas,
          },
          { where: { id_plan_participante } }
        );
        const planParticipante = await ModelPlan_participante.findOne({
          where: { id_plan_participante },
        });
        return res.status(200).json(planParticipante);
      } catch (error) {
        return res.status(500).json({ message: error });
      }
    case "DELETE":
      /**
       * @swagger
       * /api/v1/planparticipantes/{id}:
       *  delete:
       *    summary: eliminar asistencia
       *    tags: [plan_participantes]
       *    parameters:
       *      - $ref: "#/components/parameters/id"
       *    responses:
       *      200:
       *        description: la asistencia fue eliminada
       *        content:
       *          application/json:
       *            schema:
       *              $ref: "#components/schemas/plan_participantes"
       *      404:
       *        decription: asistencia no encontrada
       *        content:
       *          application/json:
       *            schema:
       *              $ref: "#components/schemas/nofound"
       */
      try {
        const id_plan_participante = [req.query.id];
        await ModelPlan_participante.destroy({
          where: {
            id_plan_participante,
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
