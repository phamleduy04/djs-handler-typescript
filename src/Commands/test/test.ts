import { Command } from '../../interfaces';

export const command: Command = {
	name: 'test',
	description: 'Test',
	aliases: ['t'],
	usage: 'Gak ada',
	testOnly: false,
	permissions: ['ADMINISTRATOR'],
	run: (client, message, args) => {
		const [test] = args;
		console.log(test);
	},
};
