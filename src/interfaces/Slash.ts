import Client from '../Client';
import { CommandInteraction, ApplicationCommandOption } from 'discord.js';

interface Run {
	(client: Client, interaction: CommandInteraction, args: string[]);
}

export interface Options {
	name: string;
	description: string;
	options: Array<ApplicationCommandOption>;
}

export interface Slash {
	name: string;
	description: string;
	options?:  Array<ApplicationCommandOption>;
	defaultPermission?: boolean;
	testOnly: boolean;
	run: Run;
}
