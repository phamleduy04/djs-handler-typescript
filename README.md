# Discord.JS Command Handler With Typescript

Sorry, I'm not good at english

# How to use

Please do npm i -g yarn if you don't have yarn installed on your pc, then you can run `yarn install`

### Create .env file in your main folder (not inside src folder)

```env
TOKEN= YOUR BOT TOKEN
PREFIX= YOUR PREFIX
MONGOURI= YOUR MONGO URL
TESTSERVER= YOUR TEST SERVER ID
```

### Commands Usage:

```ts
import { Command } from '../../interfaces';
export const command: Command = {
	name: '', //Command Name
	description: '', //Command Description
	aliases: [], //Command Aliases ex: ['p']
	usage: '', // Command Usage
	testOnly: false, // if this property is true, than this command will only available at your test server
	permissions: [], // Permissions, ex ['BAN_MEMBERS', 'KICK_MEMBERS']
	run: async (client, message, args) => {
		//Write your code here
	},
};
```

### SlashCommand Usage:

```ts
import { Slash } from '../../interfaces';
export const slash: Slash = {
	name: '', //Command Name
	description: '', //Command Description
	testOnly: false, //If this property is true, than this command will only available at your test server
	options: [], //Slash Command Options
	run: async (client, interaction, args) => {
		//Write your code here
	},
};
```

### Event usage

```ts
import { Event } from '../interfaces';
export const event: Event = {
	name: '', //Event name, ex: ready
	run: async (client) => {
		//Write your code here
	},
};
```

### Command Snippet for [Visual Studio Code](https://code.visualstudio.com/docs/editor/userdefinedsnippets)

```json
{
		"Command": {
	"prefix": "!command",
	"body": [
	"import { Command } from '../../interfaces';\r",
	"export const command: Command = {\r",
	"name: '',\r",
	"description: '',\r",
	"aliases: []\r,",
	"usage: '',\r",
	"testOnly: false,\r",
	"permissions: [],\r",
	"run: async (client, message, args) => {\r",
		
	"},\r",
"};"
	]
}
	}
	
```

### Slash Command Snippet for [Visual Studio Code](https://code.visualstudio.com/docs/editor/userdefinedsnippets)

```json
"Slash": {
		"prefix": "!slash",
		"body": [
		"import { Slash } from '../../interfaces';\r",
	"export const slash: Slash = {\r",
	"name: '',\r", //Command Name
	"description: '',\r", //Command Description
	"testOnly: false,\r", //If this property is true, than this command will only available at your test server
	"options: [],\r", //Slash Command Options
	"run: async (client, interaction, args) => {\r",
		//Write your code here
	"},\r",
"};"
		]
	}
	```
## Credit / reference

- [reconlx](https://www.youtube.com/channel/UCC-5dJ0BPTRSMaoDxntduHg)
- [CodeLyon](https://www.youtube.com/channel/UC08G-UJT58SbkdmcOYyOQVw)
