import Client from '../Client';
import { Message, Permissions } from 'discord.js';
const Perm = Object.keys(Permissions.FLAGS);

interface Run {
	(client: Client, message: Message, args: string[]);
}

export interface Command {
	name: string;
	description?: string;
	aliases?: string[];
	usage: string;
	testOnly: boolean;
	permissions?: string[];
	run: Run;
}
