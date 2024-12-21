import { Router } from "express";
import { productManager } from '../managers/productManager.js';

const router = Router();

router.get("/", async (req, res) => {
    try {
        const productos = await productManager.obtenerProductos();
        res.status(200).json(productos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

    
});

export default router;
