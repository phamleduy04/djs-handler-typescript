import Client from '../Client';
import { CommandInteraction } from 'discord.js';

interface Run {
	(client: Client, interaction: CommandInteraction, args: string[]);
}

export interface Slash {
	name: string;
	description: string;
	options?: string[];
	defaultPermission?: boolean;
	testOnly: boolean;
	run: Run;
}
