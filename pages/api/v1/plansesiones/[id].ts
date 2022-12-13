import { NextApiRequest, NextApiResponse } from "next";
import { ModelPlan_sesion } from "../../../../models";
import { useRouter } from "next/router";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      /**
       * @swagger
       * /api/v1/plansesiones/{id}:
       *  get:
       *    summary: esta funcion muestra una lista de escuela sucursal por el id
       *    tags: [plan_sesiones]
       *    parameters:
       *      - $ref: "#/components/parameters/id"
       *    responses:
       *      200:
       *        description: sucursal encontrada
       *        content:
       *          application/json:
       *            schema:
       *              $ref: "#/components/schemas/plan_sesiones"
       *      404:
       *        description: asistencia no encontrada
       *        content:
       *          application/json:
       *            schema:
       *              $ref: '#/components/schemas/nofound'
       *
       */
      try {
        const id_plan_sesion = [req.query.id];
        const getPlan_sesion = await ModelPlan_sesion.findOne({
          where: { id_plan_sesion },
        });
        return res.status(200).json(getPlan_sesion);
      } catch (error) {
        return res.status(500).json({ message: error });
      }
    case "PUT":
      /**
       * @swagger
       * /api/v1/plansesiones/{id}:
       *  put:
       *    summary: actualizar por id
       *    tags: [plan_sesiones]
       *    parameters:
       *      - $ref: "#/components/parameters/id"
       *    requestBody:
       *      required: true
       *      content:
       *        application/json:
       *          schema:
       *            $ref: "#/components/schemas/plan_sesiones"
       *    responses:
       *      200:
       *        description: actualizo el dato
       *        content:
       *          application/json:
       *            schema:
       *              $ref: "#/components/schemas/plan_sesiones"
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
        const id_plan_sesion = [req.query.id];
        const {
          id_carga_plan,
          detalle,
          fecha_sesion,
          fin_sesion,
          horas,
          evidencia,
          tolerancia_fecha_sesion,
          tolerancia_fin_sesion,
        } = req.body;
        const newPlanSesion = await ModelPlan_sesion.update(
          {
            id_carga_plan,
            detalle,
            fecha_sesion,
            fin_sesion,
            horas,
            evidencia,
            tolerancia_fecha_sesion,
            tolerancia_fin_sesion,
          },
          { where: { id_plan_sesion } }
        );
        const PlanSesion = await ModelPlan_sesion.findOne({
          where: { id_plan_sesion },
        });
        return res.status(200).json(PlanSesion);
      } catch (error) {
        return res.status(500).json({ message: error });
      }
    case "DELETE":
      /**
       * @swagger
       * /api/v1/plansesiones/{id}:
       *  delete:
       *    summary: eliminar asistencia
       *    tags: [plan_sesiones]
       *    parameters:
       *      - $ref: "#/components/parameters/id"
       *    responses:
       *      200:
       *        description: la asistencia fue eliminada
       *        content:
       *          application/json:
       *            schema:
       *              $ref: "#components/schemas/plan_sesiones"
       *      404:
       *        decription: asistencia no encontrada
       *        content:
       *          application/json:
       *            schema:
       *              $ref: "#components/schemas/nofound"
       */
      try {
        const id_plan_sesion = [req.query.id];
        await ModelPlan_sesion.destroy({
          where: {
            id_plan_sesion,
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
