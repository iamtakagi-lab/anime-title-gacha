const isProduction = process.env.NODE_ENV === "production"
const GACHA_COOLDOWN = 100
const API_ENDPOINT = isProduction ? "https://anime-title-gacha.iamtakagi.net/api" : "http://localhost:3030/api"

export {
    API_ENDPOINT,
    GACHA_COOLDOWN
}