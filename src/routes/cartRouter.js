import { Router } from "express";
import { cartManager } from '../managers/cartManager.js';

const router = Router();

router.get("/", async (req, res) => {
    try {
        const carritos = await cartManager.getCarts();
        return res.status(200).json(carritos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post("/", async (req, res) => {
    try {
        res.json(await cartManager.createCart());
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


router.get("/:cid", async (req, res) => {
    try {
        const { cid } = req.params;
        res.json(await cartManager.getCartById(cid));
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
});

router.post("/:cid/producto/:pid", async (req, res) => {
    try {
        const { pid } = req.params;
        const { cid } = req.params;
        const response = await cartManager.addProductToCart(cid, pid);
        res.json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.delete("/:pid", async (req, res) => {
    try {
       
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


router.put("/:pid", async (req, res) => {
    try {
        
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router;
