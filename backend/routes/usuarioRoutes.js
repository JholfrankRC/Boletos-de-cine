import express from 'express';
import {
    prueba,
    registrar,
    confirmar,
    deleteUser
} from '../controllers/usuarioController.js';

const router = express.Router();

// Rutas Publicas
router.get('/prueba', prueba);
router.post('/', registrar);
router.get('/confirmar/:token', confirmar);
//prueba
router.delete('/delete/:id', deleteUser);

export default router;