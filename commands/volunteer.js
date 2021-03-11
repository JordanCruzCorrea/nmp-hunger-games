module.exports = {
	name: "!volunteer",
	description: "Volunteer as tribute",
	execute(msg, args, tributes) {
		const author = msg.author;

		if (tributes.includes(author)) {
			msg.reply("you already volunteered!");
			return;
		} else {
			tributes.push(author);
			msg.reply("welcome to the NMP Hunger Games! Hope you don't die :smile:");
		}

		return tributes;
	},
};
