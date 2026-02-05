require('dotenv').config();

const { Telegraf, Markup } = require('telegraf');
const express = require('express');

const bot = new Telegraf(process.env.BOT_TOKEN);

/* ========= KEEP ALIVE ========= */
const app = express();

app.get('/', (req, res) => {
  res.send('Bot actif');
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Keep alive serveur lancé');
});
/* ============================== */

bot.start(async (ctx) => {
  await ctx.reply(
`salut bienvenu au hack de rafa

voici les 3 etatpe pour activer le scripte

*Creer un compte pro Authentique avec le code promo FSRAFA uniquement sur Melbet ou 1xbet

*en suite clic sur le bouton ouvrir le bot en bas tu met ton id de ton nouveau compte pour le synchroniser avec le bot
Enfin le code du token tu met 2255`,
    Markup.inlineKeyboard([
      [
        Markup.button.url(
          '📲 Ouvrir le bot',
          'https://t.me/gamesripte_bot/botscript'
        )
      ],
      [
        Markup.button.url(
          '🎥 Comment creer un compte Pro authentique',
          'https://t.me/RAFAFSJUNIOR/5'
        )
      ]
    ])
  );

  await ctx.reply('👇');
});

bot.launch();
console.log('Bot en ligne...');
