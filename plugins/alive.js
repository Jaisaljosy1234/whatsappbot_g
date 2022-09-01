const { bot, hiMessage } = require('../lib/')

bot(
	{
		pattern: 'hi ?(.*)',
		fromMe: true,
		desc: 'bot hi message',
		type: 'misc',
	},
	async (message, match) => {
		const { msg, options, type } = await hiMessage(match, message)
		return await message.send(msg, options, type)
	}
)
