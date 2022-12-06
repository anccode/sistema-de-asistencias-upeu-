import { withSwagger } from "next-swagger-doc";

const swaggerHandler = withSwagger({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "NextJS Swagger",
      version: "0.1.0",
    },
    // constantes
    /**
     * @swagger
     * components:
     *   schemas:
     *     nofound:
     *       type: object
     *       properties:
     *         msg:
     *           type: string
     *           desciption: error
     *       example:
     *         msg: error
     *   parameters:
     *     id:
     *       in: path
     *       name: id
     *       required: true
     *       schema:
     *         type: string
     *       description: el id
     */
    /**
     * @swagger
     * tags:
     *   name: asistencias
     *   description: se almacenan todas las asistencias
     */
    /**
     * @swagger
     * components:
     *   schemas:
     *     asistencias:
     *       type: object
     *       properties:
     *         id_asistencia:
     *           type: string
     *           description: datos
     *         id_plan_participante:
     *           type: number
     *           description: datos
     *         fecha_asis:
     *           type: Date
     *           description: datos
     *         fecha_termino:
     *           type: Date
     *           description: datos
     *         estado:
     *           type: string
     *           description: datos
     *         nota:
     *           type: number
     *           description: datos
     *         horas:
     *           type: number
     *           description: datos
     *         evidencia:
     *           type: string
     *           description: datos
     *         codigo:
     *           type: number
     *           description: datos
     *       required:
     *         - codigo
     *       example:
     *         id_asistencia: 148
     *         id_plan_participante: 11
     *         fecha_asis: 2022-11-30T00:17:20.360Z
     *         fecha_termino: 2022-11-30T00:17:31.424Z
     *         estado: Asistio
     *         nota: null
     *         horas: null
     *         evidencia: null
     *         codigo: 201712131
     */

    /**
     * @swagger
     * tags:
     *   name: login
     *   description: inicio de session
     */
    /**
     * @swagger
     * components:
     *   schemas:
     *     login:
     *       type: object
     *       properties:
     *         usuario:
     *           type: string
     *           description: usuario
     *         password:
     *           type: string
     *           description: contraseña
     *       required:
     *         - usuario
     *         - password
     *       example:
     *         usuario: angel.cc2
     *         password: holamundo
     */
    /**
     * @swagger
     * tags:
     *   name: register
     *   description: registro de usuarios
     */
    /**
     * @swagger
     * components:
     *   schemas:
     *     register:
     *       type: object
     *       properties:
     *         nombre:
     *           type: string
     *           description: dato
     *         appaterno:
     *           type: string
     *           description: date
     *         apmaterno:
     *           type: string
     *           description: date
     *         dni:
     *           type: string
     *           description: date
     *         direccion:
     *           type: string
     *           description: date
     *         correo:
     *           type: string
     *           description: date
     *         numero:
     *           type: number
     *           description: date
     *         usuario:
     *           type: string
     *           description: date
     *         password:
     *           type: string
     *           description: date
     *       required:
     *         - nombre
     *         - appaterno
     *         - apmaterno
     *         - dni
     *         - direccion
     *         - correo
     *         - numero
     *         - usuario
     *         - password
     *       example:
     *         nombre: angel
     *         appaterno: condori
     *         apmaterno: ccapa
     *         dni: 75276119
     *         direccion: juliaca
     *         correo: angel.cc@upeu.edu.pe
     *         numero: 930911491
     *         usuario: angel.cc
     *         password: holamundo
     */
    /**
     * @swagger
     * tags:
     *   name: carga_planes
     *   description: es el tiempo que tiene el programa por ejemplo la hora del codigo
     */
    /**
     * @swagger
     * components:
     *   schemas:
     *     carga_planes:
     *       type: object
     *       properties:
     *         id_carga_plan:
     *           type: number
     *           description: date
     *         id_persona:
     *           type: number
     *           description: date
     *         id_periodo:
     *           type: number
     *           description: date
     *         id_modalidad:
     *           type: number
     *           description: date
     *         id_plan:
     *           type: number
     *           description: date
     *         id_ciclo:
     *           type: number
     *           description: date
     *         id_grupo:
     *           type: number
     *           description: date
     *         estado:
     *           type: string
     *           description: date
     *         fecha_inicio:
     *           type:o: Date
     *           description: date
     *         fecha_fin:
     *           type:n: Date
     *           description: date
     *         horas:
     *           type: number
     *           description: date
     *         tolerancia:
     *           type: number
     *           description: date
     *       required:
     *         - id_carga_plan
     *         - id_persona
     *         - id_periodo
     *         - id_modalidad
     *         - id_plan
     *         - id_ciclo
     *         - id_grupo
     *         - estado
     *         - fecha_inicio
     *         - fecha_fin
     *         - horas
     *         - tolerancia
     *       example:
     *         id_carga_plan: 1
     *         id_persona: 1
     *         id_periodo: 1
     *         id_modalidad: 2
     *         id_plan: 2
     *         id_ciclo: 2
     *         id_grupo: 2
     *         estado: activo
     *         fecha_inicio: 2022-11-30T00:17:20.360Z
     *         fecha_fin: 2022-11-30T00:17:31.424Z
     *         horas: 2
     *         tolerancia: 1
     */
    /**
     * @swagger
     * tags:
     *   name: ciclos
     *   description: ciclos por ejemplo 1,2,3,4,5,6,7,8,9,10
     */
    /**
     * @swagger
     * components:
     *   schemas:
     *     ciclos:
     *       type: object
     *       properties:
     *         id_ciclo:
     *           type: String
     *           escription: date
     *         nombre: 
     *           type: String
     *           description: date
     *         alias:
     *           type: String
     *           description: date
     *         
     *       required:
     *         - nombre
     *         - alias
     *       example:
     *         id_ciclo: 1
     *         nombre: Ciclo IV
     *         alias: C-4
     *        
     */
    /**
     * @swagger
     * components:
     *   schemas:
     *     docentes:
     *       type: object
     *       properties:
     *         id_persona:
     *           type: String
     *           escription: date
     *         codigo: 
     *           type: String
     *           description: date
     *         
     *       required:
     *         - nombre
     *         - alias
     *       example:
     *         id_persona: 1
     *         nombre: Juan
     *         codigo: 2009
     *        
     */
    /**
     * @swagger
     * tags:
     *   name: docentes
     *   description: se registra el codigo del docente
     */
    /**
     * @swagger
     * tags:
     *   name: escuelas
     *   description: escuelas por ejemplo ing de sistemas
     */
    /**
     * @swagger
     * tags:
     *   name: escuela_sucursal
     *   description: tiene el estado de una sucursal por ejemplo la sucursal de tarapoto esta inactivo
     */
    /**
     * @swagger
     * tags:
     *   name: facultades
     *   description: facultades por ejemplo FIA facultad de ingenieria y arquitectura
     */
    /**
     * @swagger
     * tags:
     *   name: grupos
     *   description: grupos de los ciclos ejemplo 1,2,3,4,5
     */
    /**
     * @swagger
     * tags:
     *   name: modalidades
     *   description: modalidad del alumno o docente por ejemplo presencial o semipresencial  en caso de docente contratado o no contratado
     */
    /**
     * @swagger
     * tags:
     *   name: participantes
     *   description: almacena las horas del participante
     */
    /**
     * @swagger
     * tags:
     *   name: periodos
     *   description: periodo presencial semipresencial o a distancia
     */
    /**
     * @swagger
     * tags:
     *   name: personas
     *   description: informacion de las personas alumno y docente, etc
     */
    /**
     * @swagger
     * tags:
     *   name: personas_rol
     *   description: roles de las personas por ejemplo admin, alumno, docente
     */
    /**
     * @swagger
     * tags:
     *   name: plan_medios
     *   description: el plan de vinculacion con el medio que escuela estara
     */
    /**
     * @swagger
     * tags:
     *   name: plan_participantes
     *   description: las horas q estaba el certificado e estado y la persona q esta en un evento
     */
    /**
     * @swagger
     * tags:
     *   name: plan_sesiones
     *   description: es donde se almacena la sesion de un dia
     */
    /**
     * @swagger
     * tags:
     *   name: roles
     *   description: el rol que tendra la persona por ejemplo admin, alumno y docente
     */
    /**
     * @swagger
     * tags:
     *   name: sucursales
     *   description: el nombre de la sucursal
     */
    /**
     * @swagger
     * tags:
     *   name: vinculaciones
     *   description: el nombre del programa de  vinculacion con el medio
     */
  },
  apiFolder: "pages/api",
});
export default swaggerHandler();
