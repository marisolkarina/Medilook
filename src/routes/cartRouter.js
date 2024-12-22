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

//En la url se puede indicar la cantidad que desea añadir del producto
//     ejm:        /api/carts/20c22c05e88b62486a85/producto/2c104551a5abcb0a6f4b?quantity=2
router.post("/:cid/producto/:pid", async (req, res) => {
    try {
        const { pid } = req.params;
        const { cid } = req.params;
        const { quantity } = req.query;

        const response = await cartManager.addProductToCart(cid, pid, quantity);
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
