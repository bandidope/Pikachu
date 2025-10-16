const handler = async (m, {conn, text, command}) => {
  const yh = global.ledt;
  const url = yh[Math.floor(Math.random() * yh.length)];
  conn.sendMessage(m.chat, {image: {url: url}, caption: '*🎉 `- Letd -` 🎉*\n   _`"RECARGA POR ID"`_\n\n✅Número de Yape:`\n900876069\n\n🥷🏽Nombre de Yape:`\nErik R. Sánchez C.\n*🎉 `- Letd -` 🎉*\n   _`"RECARGA POR ID"`_\n> *110 💎=S/3 Soles*\n> *341 💎=S/9 Soles.*\n> *572 💎=S/15 Soles.*\n> *1166 💎=S/27 Soles.*\n> *2398 💎=S/49 Soles.*\n> *6160 💎=S/120 Soles.*\n\n👉🏻 `RECUERDA` 👈🏻
\n* *NECESITARÉ TÚ ID Y APODO PARA REALIZAR LA RECARGA.*\n\n*➡️ LOS INTERESADOS ME PUEDEN ESCRIBIR AL PRIVADO.*\n\n*💥 `ATENTAMENTE LETDSC`💥*\n\nComunicarse con \n\n+51901108403\n\n✅ _Todo por ID al instante_\n\nTarjeta semanal 8 soles\nTarjeta mensual 32 soles\n\n💠 Pases elite: 6 soles\n\n*MUCHO MAS BARATO QUE EN EL JUEGO Y PLAY STORE SEGURO QUE SI* 🥷🏽🪽💎.'}, {quoted: m});
};
handler.command = /^(peru)$/i;
handler.tags = ['pago'];
handler.help = ['ledt'];
export default handler;

global.ledt = [
  'https://qu.ax/sMHpK.jpg',
];
