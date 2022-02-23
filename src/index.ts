import path from "path";
import { findWorkById } from "./annict";
import express from "express";
import request from "request";

const app = express();

/* Annict ID から 作品情報を返します。クライアントサイドだと環境変数のトークンが拾えないので、サーバーサイドで処理して返却する。 */
app.get("/api/works/:id", async (req, res, next) => {
  const { id } = req.params;
  const work = await findWorkById(parseInt(id));
  if (work == null) return next();
  res.type("application/json");
  res.json(work);
});

app.get("/api/works/image/:id", async (req, res, next) => {
  const { id } = req.params;
  const work = await findWorkById(parseInt(id));
  if (!work || !work.images.recommended_url) return next();

  res.setHeader("Content-Type", "image/png");
  res.setHeader("Content-DPR", "2.0");
  request(work.images.recommended_url).pipe(res, { end: true });
});

app.use(express.static(path.resolve(__dirname, "..", "public")));
app.listen(process.env.PORT || 3030);
