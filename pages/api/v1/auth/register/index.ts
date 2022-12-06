import { NextApiRequest, NextApiResponse } from "next";
import { controllerAuthRegister } from "../../../../../controllers";
import { validateMethods } from "../../../../../utils/validations";
import { ErrorObj } from "../../../../../utils";
import { validateBody } from "../../../../../utils/validations/validateBody";
type ResponseApi = {
  ok: boolean;
  message: string;
};
/**
 * @swagger
 * /api/v1/auth/register:
 *  post:
 *    summary: ese modulo sirve para registrar usuario
 *    tags: [register]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: "#/components/schemas/register"
 *    responses:
 *      200:
 *        description: registro exitoso
 *        content:
 *          application/json:
 *            schema:
 *              $ref: "#/components/schemas/register"
 *      500:
 *        description: error al registrar
 *
 */
const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseApi>
) => {
  const { method, body } = req;
  const availableMethods = ["POST"];
  const bodyAttributes = [
    "nombre",
    "appaterno",
    "apmaterno",
    "dni",
    "direccion",
    "correo",
    "numero",
    "usuario",
    "password",
  ];
  try {
    validateMethods(method, availableMethods);

    const bodyJSON = validateBody(body, bodyAttributes);

    return await controllerAuthRegister(res, bodyJSON);
  } catch (error) {
    const { status, msgError } = ErrorObj.get(error);
    return res.status(status).json({ ok: false, message: msgError });
  }

  //verificar si los datos son correctos
};
export default handler;
