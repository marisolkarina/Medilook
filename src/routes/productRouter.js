import { Router } from "express";
import { productManager } from '../managers/productManager.js';

const router = Router();

router.get("/", async (req, res) => {
    try {
        // filtrar por marca
        let { marca, color, category, gender } = req.query;

        if (category || gender || marca || color) {
            let productosFiltrados = await productManager.getProducts(); // valor inicial: todos los productos

            if (gender) {
                productosFiltrados = await productManager.filterByGender(productosFiltrados, gender);
            }
            if (category) {
                productosFiltrados = await productManager.filterByCategory(productosFiltrados, category);
            }
            if (marca) {
                productosFiltrados = await productManager.filterByMarca(productosFiltrados, marca);
            }
            if (color) {
                productosFiltrados = await productManager.filterByColor(productosFiltrados, color);
            }
            return res.status(200).json(productosFiltrados);
        }

        const productos = await productManager.getProducts();
        res.status(200).json(productos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});



router.get("/:pid", async (req, res) => {
    try {
        const { pid } = req.params;
        const productoBuscado = await productManager.getProductById(pid);
        res.status(200).json(productoBuscado);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
});

router.post("/", async (req, res) => {
    try {
        const producto = await productManager.addProduct(req.body);
        res.status(200).json(producto);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.delete("/:pid", async (req, res) => {
    try {
        const { pid } = req.params;
        const prodEliminar = await productManager.delete(pid);
        res.status(200).json({ message: `el producto con id: ${prodEliminar.id} ha sido eliminado` });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


router.put("/:pid", async (req, res) => {
    try {
        const { pid } = req.params;
        const prodAct = await productManager.update(req.body, pid);
        res.status(200).json(prodAct);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});




export default router;
