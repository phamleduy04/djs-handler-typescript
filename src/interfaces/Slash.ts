import Client from '../Client';
import {
	CommandInteraction,
	ApplicationCommandOption,
	ApplicationCommandData,
} from 'discord.js';

interface Run {
	(client: Client, interaction: CommandInteraction, args: string[]);
}

export interface Slash extends ApplicationCommandData {
	testOnly: boolean;
	run: Run;
}
