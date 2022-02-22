if (!process.env.ANNICT_TOKEN || process.env.ANNICT_TOKEN.length <= 0)
  throw new Error("ANNICT_TOKEN が設定されていません");

const ANNICT_TOKEN = process.env.ANNICT_TOKEN

export { ANNICT_TOKEN }