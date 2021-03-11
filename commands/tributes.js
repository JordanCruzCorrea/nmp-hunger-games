module.exports = {
	name: "!tributes",
	description: "List current tributes",
	execute(msg, args, tributes) {
		if (tributes.length) {
			msg.channel.send(`
      Current tributes: \n ${tributes.map((trib) => `- ${trib} \n`)}
    `);
		} else {
			msg.channel.send(
				"There are no tributes at the moment, use command '!volunteer'...if you're brave enough."
			);
		}
		return tributes;
	},
};
