import { Router } from "https://deno.land/x/oak/mod.ts";
import { productController } from "./controllers/product.ts";

const router = new Router();
router
  .get("/products", productController.index)
  .get("/product/:id", productController.show);


export default router;
