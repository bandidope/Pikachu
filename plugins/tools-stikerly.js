
import fetch from 'node-fetch'
import { Sticker} from 'wa-sticker-formatter'

let handler = async (m, { conn, text, command}) => {
  const apikey = "sylphy-e321"
  if (!text) return m.reply(`📌 Ejemplo:.${command} Messi`)

  try {
    const searchRes = await fetch(`https://api.sylphy.xyz/stickerly/search?q=${encodeURIComponent(text)}&apikey=${apikey}`)
    const searchJson = await searchRes.json()

    if (!searchJson.status ||!Array.isArray(searchJson.res) || searchJson.res.length < 4) {
      return m.reply('❌ No se encontraron suficientes packs de stickers.')
}

    // Seleccionar 4 packs aleatorios
    const shuffled = searchJson.res.sort(() => 0.5 - Math.random())
    const selectedPacks = shuffled.slice(0, 4)

    m.reply(`🎉 Se encontraron 4 packs\n📦 Enviando 1 sticker de cada uno...`)

    for (let i = 0; i < selectedPacks.length; i++) {
      const pack = selectedPacks[i]
      const sticker = new Sticker(pack.thumbnailUrl, {
        pack: pack.name,
        author: pack.author || 'Desconocido',
        type: 'full',
        categories: ['🔥'],
        id: `sylphy-pack-${i}`
})
      const buffer = await sticker.toBuffer()
      await conn.sendMessage(m.chat, { sticker: buffer}, { quoted: m})
}

} catch (e) {
    console.error(e)
    m.reply('⚠️ Error al procesar los stickers.')
}
}

handler.help = ['stikerly <consulta>']
handler.tags = ['sticker']
handler.command = /^stikerly$/i

export default handler