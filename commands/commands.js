module.exports = {
	name: "!commands",
	description: "View all Hunger Games bot commands",
	execute(msg, args, tributes, commands) {
		msg.channel.send(
			`${commands.map((item) => `- ${item.name}: ${item.description}\n`)}`
		);
	},
};
