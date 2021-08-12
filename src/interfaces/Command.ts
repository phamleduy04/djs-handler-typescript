import Client from '../Client';
import { Message, PermissionString } from 'discord.js';

interface Run {
	(client: Client, message: Message, args: string[]);
}

export interface Command {
	name: string;
	description?: string;
	aliases?: string[];
	usage: string;
	testOnly: boolean;
	permissions?: PermissionString[]
	run: Run;
}
