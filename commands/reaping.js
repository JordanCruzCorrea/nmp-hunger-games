const faker = require("faker");

function fillTributes(tributes) {
	tributes.push(faker.name.findName());
	if (tributes.length < 24) {
		fillTributes(tributes);
	} else if (tributes.length > 24) {
		return;
	}

	return tributes;
}

function splitIntoDistricts(tributes) {
	const numOfDistricts = 12;
	const result = [[], [], [], [], [], [], [], [], [], [], [], []];

	const perLine = Math.ceil(tributes.length / 12);

	for (let line = 0; line < numOfDistricts; line++) {
		for (let i = 0; i < perLine; i++) {
			const value = tributes[i + line * perLine];
			if (!value) continue;
			result[line].push(value);
		}
	}

	tributes = result.map((item, index) => {
		return {
			district: index + 1,
			tribute1: item[0],
			tribute2: item[1],
		};
	});
	console.log(tributes);

	return tributes;
}

module.exports = {
	name: "!reaping",
	description: "Begin the NMP Hunger Games",
	execute(msg, args, tributes) {
		if (tributes.length < 24) {
			fillTributes(tributes);
		}

		const formatted = splitIntoDistricts(tributes).map(
			(item) =>
				`- District ${item.district}: ${item.tribute1}, ${item.tribute2}`
		);

		msg.channel.send(formatted);
		msg.channel.send("Let the NMP Hunger Games begin! :bird:");

		return tributes = splitIntoDistricts(tributes);
	},
};
