import path from "path";
import Koa from "koa";
import Router from "@koa/router";
import serve from "koa-static";
import { findWorkById } from "./annict";

const app = new Koa();
const router = new Router();

/* Annict ID から 作品情報を返します。クライアントサイドだと環境変数のトークンが拾えないので、サーバーサイドで処理して返却する。 */
router.get("/api/works/:id", async (ctx, next) => {
    const { id } = ctx.params
    const work = await findWorkById(parseInt(id))
    if(work == null) return ctx.status = 404
    ctx.type = "application/json"
    ctx.body = work
})

app.use(serve(path.resolve(__dirname, '..', 'public')));
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(process.env.PORT || 3030);