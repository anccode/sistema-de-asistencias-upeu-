import { NextApiRequest, NextApiResponse } from "next";
import { ErrorObj } from "../../../../../utils";
import { validateMethods } from "../../../../../utils/validations";
import { validateBody } from "../../../../../utils/validations/validateBody";
import { controllerAuthLogin } from "../../../../../controllers";
import { ModelPersonaT, ModelUsuarioT } from "../../../../../models";

type ResponseApi = {
  ok: boolean;
  message: string;
};

/**
 * @swagger
 * /api/v1/auth/login:
 *  post:
 *    summary: ese modulo sirve para iniciar session
 *    tags: [login]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: "#/components/schemas/login"
 *    responses:
 *      200:
 *        description: inicio de sessio exitoso
 *        content:
 *          application/json:
 *            schema:
 *              $ref: "#/components/schemas/login"
 *      500:
 *        description: error al iniciar session
 *
 */
const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseApi>
) => {
  const { method, body } = req;
  const availableMethods = ["POST"];
  const bodyAttributes = ["usuario", "password"];
  try {
    //validations
    validateMethods(method, availableMethods);
    const bodyJSON = validateBody(body, bodyAttributes);
    return await controllerAuthLogin(res, bodyJSON);
  } catch (error) {
    const { status, msgError } = ErrorObj.get(error);
    return res.status(status).json({ ok: false, message: msgError });
  }
};
export default handler;
