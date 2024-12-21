import fs from "node:fs";
// import { v4 as uuidv4 } from "uuid";
import path from 'path'

class ProductManager {
    constructor(path) {
        this.path = path;

        if (!fs.existsSync(this.path)) {
            fs.writeFileSync(this.path, JSON.stringify([]), 'utf8');
        }
    }

    async obtenerProductos() {
        try {
            const productos = await fs.promises.readFile(this.path, "utf-8");
            return JSON.parse(productos);
        } catch (error) {
            throw new Error(error.message);
        }
    }

}

export const productManager = new ProductManager(path.join(process.cwd(), "src/data/products.json"));