import { NextApiRequest, NextApiResponse } from "next";
import { ModelPersona_rol } from "../../../../models";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      /**
       * @swagger
       * /api/v1/personasrol/{id}:
       *  get:
       *    summary: esta funcion muestra una lista de escuela sucursal por el id
       *    tags: [personas_rol]
       *    parameters:
       *      - $ref: "#/components/parameters/id"
       *    responses:
       *      200:
       *        description: sucursal encontrada
       *        content:
       *          application/json:
       *            schema:
       *              $ref: "#/components/schemas/personasrol"
       *      404:
       *        description: asistencia no encontrada
       *        content:
       *          application/json:
       *            schema:
       *              $ref: '#/components/schemas/nofound'
       *
       */
      try {
        const id_personas_rol = [req.query.id];
        const getPersonas_rol = await ModelPersona_rol.findOne({
          where: { id_personas_rol },
        });
        return res.status(200).json(getPersonas_rol);
      } catch (error) {
        return res.status(500).json({ message: error });
      }
    case "PUT":
      /**
       * @swagger
       * /api/v1/personasrol/{id}:
       *  put:
       *    summary: actualizar por id
       *    tags: [personas_rol]
       *    parameters:
       *      - $ref: "#/components/parameters/id"
       *    requestBody:
       *      required: true
       *      content:
       *        application/json:
       *          schema:
       *            $ref: "#/components/schemas/personasrol"
       *    responses:
       *      200:
       *        description: actualizo el dato
       *        content:
       *          application/json:
       *            schema:
       *              $ref: "#/components/schemas/personasrol"
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
        const id_persona_rol = [req.query.id];
        const { id_persona, id_rol, estado } = req.body;
        const newPersonaRol = await ModelPersona_rol.update(
          { id_persona, id_rol, estado },
          { where: { id_persona_rol } }
        );
        const personaRol = await ModelPersona_rol.findOne({
          where: { id_persona_rol },
        });
        return res.status(200).json(personaRol);
      } catch (error) {
        return res.status(500).json({ message: error });
      }
    case "DELETE":
      /**
       * @swagger
       * /api/v1/personasrol/{id}:
       *  delete:
       *    summary: eliminar asistencia
       *    tags: [personas_rol]
       *    parameters:
       *      - $ref: "#/components/parameters/id"
       *    responses:
       *      200:
       *        description: la asistencia fue eliminada
       *        content:
       *          application/json:
       *            schema:
       *              $ref: "#components/schemas/personasrol"
       *      404:
       *        decription: asistencia no encontrada
       *        content:
       *          application/json:
       *            schema:
       *              $ref: "#components/schemas/nofound"
       */
      try {
        const id_persona = [req.query.id];
        await ModelPersona_rol.destroy({
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
