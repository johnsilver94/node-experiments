const channel = process.env.TELEGRAM_CHANNEL
const botToken = process.env.BOT_TOKEN

const telegraf = require("telegraf")
const axios = require("axios")

const startBot = () => {
    const redditBot = new telegraf(botToken)

    redditBot.command("hello", (ctx) => {
        ctx.reply("Yo!")
        getAndPost(ctx)
    })

    redditBot.launch()

    const getAndPost = (ctx) => {
        axios.get('https://reddit.com/r/memes/top.json?limit=5')
        .then((res) => {
            const data = res.data.data

            postToChannel(data,ctx)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const postToChannel = (posts,ctx) => {
        posts.children.map((post, i) => {
            setTimeout(() => {
                ctx.telegram.sendPhoto(channel, post.data.url)    
            },5000 * i)
        })
    }
}

module.exports.startBot = startBot
