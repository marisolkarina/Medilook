import { Router } from "express";
// import {prodManager} from '../managers/product.manager.js';

const router = Router();

router.get("/", (req, res) => {

    res.send('productos');
});

export default router;
