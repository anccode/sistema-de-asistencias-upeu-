import { NextApiRequest, NextApiResponse } from "next";
import { ModelCargaPlan } from "../../../../models";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      /**
       * @swagger
       * /api/v1/carga_planes/{id}:
       *  get:
       *    summary: esta funcion muestra una lista de asistencias por el id
       *    tags: [carga_planes]
       *    parameters:
       *      - $ref: "#/components/parameters/id"
       *    responses:
       *      200:
       *        description: asistencia encontrada
       *        content:
       *          application/json:
       *            schema:
       *              $ref: "#/components/schemas/carga_planes"
       *      404:
       *        description: asistencia no encontrada
       *        content:
       *          application/json:
       *            schema:
       *              $ref: '#/components/schemas/nofound'
       *
       */
      try {
        const id_carga_plan = [req.query.id];
        const getCargaPlan = await ModelCargaPlan.findOne({
          where: { id_carga_plan },
        });
        return res.status(200).json(getCargaPlan);
      } catch (error) {
        return res.status(500).json({ message: error });
      }
    case "PUT":
      /**
       * @swagger
       * /api/v1/carga_planes/{id}:
       *  put:
       *    summary: actualizar por id
       *    tags: [carga_planes]
       *    parameters:
       *      - $ref: "#/components/parameters/id"
       *    requestBody:
       *      required: true
       *      content:
       *        application/json:
       *          schema:
       *            $ref: "#/components/schemas/carga_planes"
       *    responses:
       *      200:
       *        description: actualizo el dato
       *        content:
       *          application/json:
       *            schema:
       *              $ref: "#/components/schemas/carga_planes"
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
        const id_carga_plan = [req.query.id];
        const {
          id_persona,
          id_periodo,
          id_modalidad,
          id_plan,
          id_ciclo,
          id_grupo,
          estado,
          fecha_inicio,
          fecha_fin,
          horas,
          tolerancia,
        } = req.body;
        const newCargaPlan = await ModelCargaPlan.update(
          {
            id_persona,
            id_periodo,
            id_modalidad,
            id_plan,
            id_ciclo,
            id_grupo,
            estado,
            fecha_inicio,
            fecha_fin,
            horas,
            tolerancia,
          },
          { where: { id_carga_plan } }
        );
        const cargaPlan = await ModelCargaPlan.findOne({
          where: { id_carga_plan },
        });
        return res.status(200).json(cargaPlan);
      } catch (error) {
        return res.status(500).json({ message: error });
      }
    case "DELETE":
      /**
       * @swagger
       * /api/v1/carga_planes/{id}:
       *  delete:
       *    summary: eliminar asistencia
       *    tags: [carga_planes]
       *    parameters:
       *      - $ref: "#/components/parameters/id"
       *    responses:
       *      200:
       *        description: la asistencia fue eliminada
       *        content:
       *          application/json:
       *            schema:
       *              $ref: "#components/schemas/carga_planes"
       *      404:
       *        decription: asistencia no encontrada
       *        content:
       *          application/json:
       *            schema:
       *              $ref: "#components/schemas/nofound"
       */
      try {
        const id_carga_plan = [req.query.id];
        await ModelCargaPlan.destroy({
          where: {
            id_carga_plan,
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
