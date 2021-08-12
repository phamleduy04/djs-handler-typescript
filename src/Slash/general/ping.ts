import { Slash } from '../../interfaces';

export const slash: Slash = {
	name: 'ping',
	description: 'ping command',
	options: [],
	testOnly: false,
	run: async (client, interaction, args) => {
		interaction.followUp({ content: `${client.ws.ping}ms` });
	},
};
