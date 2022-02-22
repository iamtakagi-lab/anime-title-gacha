# anime-title-gacha
アニメタイトルをランダムに抽出するガチャです。

```yml
version: '3.9'
services:
  app:
    container_name: anime-title-gacha
    image: ghcr.io/iamtakagi/anime-title-gacha:latest
    environment:
      - TZ=Asia/Tokyo
      - PORT=3030
    restart: unless-stopped
```