import { NextApiRequest, NextApiResponse } from "next";
import { ModelPlan_medio } from "../../../../models";
import { useRouter } from "next/router";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      /**
       * @swagger
       * /api/v1/planmedios/{id}:
       *  get:
       *    summary: esta funcion muestra una lista de escuela sucursal por el id
       *    tags: [plan_medios]
       *    parameters:
       *      - $ref: "#/components/parameters/id"
       *    responses:
       *      200:
       *        description: sucursal encontrada
       *        content:
       *          application/json:
       *            schema:
       *              $ref: "#/components/schemas/plan_medios"
       *      404:
       *        description: asistencia no encontrada
       *        content:
       *          application/json:
       *            schema:
       *              $ref: '#/components/schemas/nofound'
       *
       */
      try {
        const id_plan = [req.query.id];
        const getPlan = await ModelPlan_medio.findOne({
          where: { id_plan },
        });
        return res.status(200).json(getPlan);
      } catch (error) {
        return res.status(500).json({ message: error });
      }
    case "PUT":
      /**
       * @swagger
       * /api/v1/planmedios/{id}:
       *  put:
       *    summary: actualizar por id
       *    tags: [plan_medios]
       *    parameters:
       *      - $ref: "#/components/parameters/id"
       *    requestBody:
       *      required: true
       *      content:
       *        application/json:
       *          schema:
       *            $ref: "#/components/schemas/plan_medios"
       *    responses:
       *      200:
       *        description: actualizo el dato
       *        content:
       *          application/json:
       *            schema:
       *              $ref: "#/components/schemas/plan_medios"
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
        const id_plan = [req.query.id];
        const {
          id_plan_participante,
          id_carga_plan,
          id_persona,
          certificado,
          estado,
          horas,
        } = req.body;
        const newPlanMedio = await ModelPlan_medio.update(
          {
            id_plan_participante,
            id_carga_plan,
            id_persona,
            certificado,
            estado,
            horas,
          },
          { where: { id_plan } }
        );
        const planMedio = await ModelPlan_medio.findOne({
          where: { id_plan },
        });
        return res.status(200).json(planMedio);
      } catch (error) {
        return res.status(500).json({ message: error });
      }
    case "DELETE":
      /**
       * @swagger
       * /api/v1/planmedios/{id}:
       *  delete:
       *    summary: eliminar asistencia
       *    tags: [plan_medios]
       *    parameters:
       *      - $ref: "#/components/parameters/id"
       *    responses:
       *      200:
       *        description: la asistencia fue eliminada
       *        content:
       *          application/json:
       *            schema:
       *              $ref: "#components/schemas/plan_medios"
       *      404:
       *        decription: asistencia no encontrada
       *        content:
       *          application/json:
       *            schema:
       *              $ref: "#components/schemas/nofound"
       */
      try {
        const id_plan = [req.query.id];
        await ModelPlan_medio.destroy({
          where: {
            id_plan,
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
