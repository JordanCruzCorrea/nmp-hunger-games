const Discord = require("discord.js");
require("dotenv").config();
const client = new Discord.Client();
client.commands = new Discord.Collection();
const botCommands = require("./commands");

Object.keys(botCommands).map((key) => {
	client.commands.set(botCommands[key].name, botCommands[key]);
});

// const arenaEvents = require("./events/nonFatalEvents/arenaEvents");

const emotes = [
	":nmpWeird:",
	":nmpTennis:",
	":nmpSuffer:",
	":nmpRich:",
	":nmpPOGGERS:",
	":nmpChamp:",
	":nmpC:",
	":nmpBall:",
	":nmpAYAYA:",
	":nmpH:",
	":nmpEZ:",
	":nmpHYPERBRUH:",
	":nmpT:",
	":nmpJoker:",
	":nmpCringe:",
	":nmpM:",
	":nmpPeepo:",
	":nmpO:",
	":nmpHey:",
	":nmpCowboy:",
	":nmpDrink:",
	":nmpSip:",
];

const tributes = [];

client.on("ready", () => {
	console.info(`Logged in as ${client.user.tag}!`);
});

// msg.reply - tag
// msg.channel.send - no tag

client.on("message", (msg) => {
	const args = msg.content.split(/ +/);
	const command = args.shift().toLowerCase();
	console.info(`Called command: ${command}`);

	if (!client.commands.has(command)) return;

	try {
    const commands = client.commands
    commands.get(command).execute(msg, args, tributes, commands);
	} catch (error) {
		console.error(error);
		msg.reply("There was an error trying to execute that command!");
	}
});

client.login(process.env.TOKEN);
