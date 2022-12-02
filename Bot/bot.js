const {Telegraf} = require('telegraf')

const TOKEN = '5967413511:AAEfOoHXDqc_4YtZ5X9iKQHub4mdNrJyWDY'
const web_link = 'https://fascinating-figolla-d2045f.netlify.app'

const bot = new Telegraf(TOKEN)

bot.start((ctx) => ctx.reply('Добро пожаловать!',{reply_markup:{keyboard:[[{text:'Магазин', web_app:{url:web_link}}]]}}))
bot.launch();