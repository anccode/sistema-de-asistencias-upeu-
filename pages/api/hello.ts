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
     * tags:
     *   name: docentes
     *   description: se registra el codigo del docente
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
     *         - id_persona
     *         - codigo
     *       example:
     *         id_persona: 1
     *         codigo: 2009
     *
     */
    /**
     * @swagger
     * tags:
     *   name: escuelas
     *   description: escuelas por ejemplo ing de sistemas
     */
    /**
     * @swagger
     * components:
     *   schemas:
     *     escuelas:
     *       type: object
     *       properties:
     *         id_escuela:
     *           type: String
     *           description: date
     *         nombre:
     *           type: String
     *           description: date
     *         estado:
     *           type: String
     *           description: date
     *         id_facultad:
     *           type: Number
     *           description: date
     *
     *       required:
     *         - nombre
     *         - estado
     *         - id_facultad
     *       example:
     *         id_escuela: 1
     *         nombre: Sistemas
     *         estado: Activo
     *         id_facultad: 1
     *
     */
    /**
     * @swagger
     * tags:
     *   name: escuela_sucursal
     *   description: tiene el estado de una sucursal por ejemplo la sucursal de tarapoto esta inactivo
     */
    /**
     * @swagger
     * components:
     *   schemas:
     *     escuela_sucursal:
     *       type: object
     *       properties:
     *         id_escuela_sucursal:
     *           type: Number
     *           description: date
     *         id_escuela:
     *           type: Number
     *           description: date
     *         id_sucursal:
     *           type: Number
     *           description: date
     *         estado:
     *           type: String
     *           description: date
     *
     *       required:
     *         - id_escuela
     *         - id_sucursal
     *         - estado
     *       example:
     *         id_escuela_sucursal: 1
     *         id_escuela: 1
     *         id_facultad: 1
     *         estado: Activo
     *
     *
     */
    /**
     * @swagger
     * tags:
     *   name: facultades
     *   description: facultades por ejemplo FIA facultad de ingenieria y arquitectura
     */
    /**
     * @swagger
     * components:
     *   schemas:
     *     facultades:
     *       type: object
     *       properties:
     *         id_facultad:
     *           type: Number
     *           description: date
     *         nombre:
     *           type: String
     *           description: date
     *         estado:
     *           type: String
     *           description: date
     *         alias:
     *           type: String
     *           description: date
     *
     *       required:
     *         - nombre
     *         - estado
     *         - alias
     *       example:
     *         id_facultad: 1
     *         nombre: Facultad de Ingenieria y Arquitectura
     *         estado: Activo
     *         alias: FIA
     *
     */
    /**
     * @swagger
     * tags:
     *   name: grupos
     *   description: grupos de los ciclos ejemplo 1,2,3,4,5
     */
    /**
     * @swagger
     * components:
     *   schemas:
     *     grupos:
     *       type: object
     *       properties:
     *         id_grupo:
     *           type: Number
     *           description: date
     *         nombre:
     *           type: String
     *           description: date
     *         estado:
     *           type: String
     *           description: date
     *         alias:
     *           type: String
     *           description: date
     *
     *       required:
     *         - nombre
     *         - estado
     *         - alias
     *       example:
     *         id_grupo: 1
     *         nombre: Ciclo 1 Grupo 2
     *         estado: Activo
     *         alias: C1 G2
     *
     */
    /**
     * @swagger
     * tags:
     *   name: modalidades
     *   description: modalidad del alumno o docente por ejemplo presencial o semipresencial  en caso de docente contratado o no contratado
     */
    /**
     * @swagger
     * components:
     *   schemas:
     *     modalidades:
     *       type: object
     *       properties:
     *         id_modalidad:
     *           type: Number
     *           description: date
     *         nombre:
     *           type: String
     *           description: date
     *         estado:
     *           type: String
     *           description: date
     *       required:
     *         - nombre
     *         - estado
     *       example:
     *         id_modalidad: 1
     *         nombre: Alumno - Presencial o Semipresencial - Docente - Contratado o no Contratado
     *         estado: Activo
     *
     */
    /**
     * @swagger
     * tags:
     *   name: participantes
     *   description: almacena las horas del participante
     */
    /**
     * @swagger
     * components:
     *   schemas:
     *     participantes:
     *       type: object
     *       properties:
     *         id_persona:
     *           type: Number
     *           description: date
     *         codigo:
     *           type: Number
     *           description: date
     *         horas_total:
     *           type: Number
     *           description: date
     *       required:
     *         - id_persona
     *         - codigo
     *         - horas_total
     *       example:
     *         id_persona: 1
     *         codigo: 201811411
     *         horas_total: 20 horas
     *
     */
    /**
     * @swagger
     * tags:
     *   name: periodos
     *   description: periodo presencial semipresencial o a distancia
     */
    /**
     * @swagger
     * components:
     *   schemas:
     *     periodos:
     *       type: object
     *       properties:
     *         id_periodos:
     *           type: Number
     *           description: date
     *         nombre:
     *           type: Number
     *           description: date
     *         estado:
     *           type: String
     *           description: date
     *       required:
     *         - nombre
     *         - estado
     *       example:
     *         id_periodos: 1
     *         nombre: Periodo Presencial Semipresencial o a Distancia
     *         estado: activo
     *
     */
    /**
     * @swagger
     * tags:
     *   name: personas
     *   description: informacion de las personas alumno y docente, etc
     */
    /**
     * @swagger
     * components:
     *   schemas:
     *     personas:
     *       type: object
     *       properties:
     *         id_persona:
     *           type: Number
     *           description: date
     *         nombre:
     *           type: Number
     *           description: date
     *         appaterno:
     *           type: String
     *           description: date
     *         apmaterno:
     *           type: String
     *           description: date
     *         dni:
     *           type: Number
     *           description: date
     *         direccion:
     *           type: String
     *           description: date
     *         correo:
     *           type: String
     *           description: date
     *         numero:
     *           type: Number
     *           description: date
     *         fecha_registro:
     *           type: Date
     *           description: date
     *       required:
     *         - nombre
     *         - appaterno
     *         - apmaterno
     *         - dni
     *         - direccion
     *         - correo
     *         - numero
     *         - fecha_registro
     *       example:
     *         id_periodos: 1
     *         nombre: Jose
     *         appaterno: Condori
     *         apmaterno: Ccapa
     *         dni: 72819237
     *         direccion: Av. Los Geranios N-16
     *         correo: angel.cc
     *         numero: 987213721
     *         fecha_registro: 12-12-22
     *
     */
    /**
     * @swagger
     * tags:
     *   name: personas_rol
     *   description: roles de las personas por ejemplo admin, alumno, docente
     */
    /**
     * @swagger
     * components:
     *   schemas:
     *     personasrol:
     *       type: object
     *       properties:
     *         id_persona_rol:
     *           type: Number
     *           description: date
     *         id_persona:
     *           type: Number
     *           description: date
     *         id_rol:
     *           type: Number
     *           description: date
     *         estado:
     *           type: String
     *           description: date
     *       required:
     *         - id_persona
     *         - id_rol
     *         - estado
     *
     *       example:
     *         id_persona: 1
     *         id_rol : 1
     *         estado: activo
     *
     */
    /**
     * @swagger
     * tags:
     *   name: plan_medios
     *   description: el plan de vinculacion con el medio que escuela estara
     */
    /**
     * @swagger
     * components:
     *   schemas:
     *     plan_medios:
     *       type: object
     *       properties:
     *         id_plan:
     *           type: Number
     *           description: date
     *         id_escuela_sucursal:
     *           type: Number
     *           description: date
     *         id_vinculacion:
     *           type: Number
     *           description: date
     *       required:
     *         - id_escuela_sucursal
     *         - id_vinculacion
     *
     *       example:
     *         id_escuela_sucursal: 1
     *         id_vinculacion : 1
     *
     */
    /**
     * @swagger
     * tags:
     *   name: plan_participantes
     *   description: las horas q estaba el certificado e estado y la persona q esta en un evento
     */
    /**
     * @swagger
     * components:
     *   schemas:
     *     plan_participantes:
     *       type: object
     *       properties:
     *         id_plan_participante:
     *           type: Number
     *           description: date
     *         id_carga_plan:
     *           type: Number
     *           description: date
     *         id_persona:
     *           type: Number
     *           description: date
     *         certificado:
     *           type: String
     *           description: date
     *         estado:
     *           type: String
     *           description: date
     *         horas:
     *           type: Number
     *           description: date
     *       required:
     *         - id_carga_plan
     *         - id_persona
     *         - certificado
     *         - estado
     *         - horas
     *
     *       example:
     *         id_carga_plan: 1
     *         id_persona: 1
     *         certificado: si
     *         estado: activo
     *         horas: 2
     *
     */
    /**
     * @swagger
     * tags:
     *   name: plan_sesiones
     *   description: es donde se almacena la sesion de un dia
     */
    /**
     * @swagger
     * components:
     *   schemas:
     *     plan_sesiones:
     *       type: object
     *       properties:
     *         id_plan_sesion:
     *           type: Number
     *           description: date
     *         id_carga_plan:
     *           type: Number
     *           description: date
     *         detalle:
     *           type: String
     *           description: date
     *         fecha_sesion:
     *           type: Date
     *           description: date
     *         fin_sesion:
     *           type: Date
     *           description: date
     *         horas:
     *           type: Number
     *           description: date
     *         evidencia:
     *           type: String
     *           description: date
     *         tolerancia_fecha_sesion:
     *           type: Date
     *           description: date
     *         tolerancia_fin_sesion:
     *           type: Date
     *           description: date
     *       required:
     *         - id_carga_plan
     *         - detalle
     *         - fecha_sesion
     *         - fin_sesion
     *         - horas
     *         - evidencia
     *
     *       example:
     *         id_carga_plan: 1
     *         detalle: primera sesion
     *         fecha_sesion: 2022-12-07T21:20:00.000Z
     *         fin_sesion: 2022-12-07T22:21:00.000Z
     *         horas: 2
     *         evidencia: si
     *         tolerancia_fecha_sesion: 2022-12-07T21:25:00.000Z
     *         tolerancia_fin_sesion: 2022-12-07T22:26:00.000Z
     *
     */
    /**
     * @swagger
     * tags:
     *   name: roles
     *   description: el rol que tendra la persona por ejemplo admin, alumno y docente
     */
    /**
     * @swagger
     * components:
     *   schemas:
     *     roles:
     *       type: object
     *       properties:
     *         id_rol:
     *           type: Number
     *           description: date
     *         nombre:
     *           type: String
     *           description: date
     *         estado:
     *           type: String
     *           description: date
     *       required:
     *         - nombre
     *         - estado
     *
     *       example:
     *         nombre: estudiante
     *         estado: activo
     */
    /**
     * @swagger
     * tags:
     *   name: sucursales
     *   description: el nombre de la sucursal
     */
    /**
     * @swagger
     * components:
     *   schemas:
     *     sucursales:
     *       type: object
     *       properties:
     *         id_sucursal:
     *           type: Number
     *           description: date
     *         nombre:
     *           type: String
     *           description: date
     *         estado:
     *           type: String
     *           description: date
     *       required:
     *         - nombre
     *         - estado
     *
     *       example:
     *         nombre: Universidad Peruana Union Lima
     *         estado: activo
     */
    /**
     * @swagger
     * tags:
     *   name: vinculaciones
     *   description: el nombre del programa de  vinculacion con el medio
     */
    /**
     * @swagger
     * components:
     *   schemas:
     *     vinculaciones:
     *       type: object
     *       properties:
     *         id_vinculacion:
     *           type: Number
     *           description: date
     *         nombre:
     *           type: String
     *           description: date
     *         detalle:
     *           type: String
     *           description: date
     *         tipo:
     *           type: String
     *           description: date
     *         archivo:
     *           type: String
     *           description: date
     *         estado:
     *           type: String
     *           description: date
     *       required:
     *         - nombre
     *         - detalle
     *         - tipo
     *         - archivo
     *         - estado
     *
     *       example:
     *         nombre: Programa de Vinculacio1
     *         detalle: primera  session
     *         tipo: programa
     *         archivo: .docx
     *         estado: activo
     */
  },
  apiFolder: "pages/api",
});
export default swaggerHandler();
