import { Router } from "express";
import getHome from "../controllers/getHome.controller.js";
import getLogin from "../controllers/getLogin.controller.js";
import getRegister from "../controllers/getRegister.controller.js";
import getParticipantes from "../controllers/getParticipantes.controller.js";
import postParticipante from "../controllers/postParticipantes.controller.js";
import loginUser from "../controllers/loginUser.controller.js";
import getUserData from "../controllers/getUserData.controller.js";
import getProhibido from "../controllers/getProhibido.controller.js";
import putEditParticipante from "../controllers/putEditParticipante.controller.js";

import deleteParticipante from "../controllers/deleteParticipante.controller.js";

import renderAdmin from "../controllers/renderAdmin.controller.js";
import patchEditParticipante from "../controllers/patchEditParticipante.controller.js";
import render404 from "../controllers/render404.controller.js";
import resetData from "../controllers/getResetData.controller.js";
const router = Router();

router.get("/", getHome);

router.get("/login", getLogin);

router.get("/register", getRegister);

// 1. Crear una API REST con el Framework Express (3 Puntos)
// Para manipular la creación, edición, lectura y eliminación de participantes he creado la siguiente API REST:
router.get("/participantes", getParticipantes);
router.post("/participante", postParticipante);
router.delete("/participante", deleteParticipante);
router.put("/participante", putEditParticipante);
router.patch("/participante", patchEditParticipante);

router.get("/user_data", getUserData);
router.post("/login", loginUser);
router.get("/prohibido", getProhibido);

router.get("/admin", renderAdmin);

// EXTRA: Ruta para resetear la data en la base de datos y borrar las imagenes
// He creado la siguiente ruta reset siguiente:
router.get("/reset", resetData);

router.get("/*", render404);

export default router;
