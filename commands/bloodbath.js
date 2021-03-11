module.exports = {
	name: "!bloodbath",
	description: "The first Hunger Games event",
	execute(msg, args, tributes) {
		msg.channel.send(
			"As the tributes stand on their podiums, the horn sounds. :postal_horn:"
		);

    console.table(args)
    msg.channel.send(tributes)
	},
};
