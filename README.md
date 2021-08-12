# DJS-Handler-Typescript
DJS Handler with typescript support


# How to use

if you don't have yarn, please do npm i -g yarn, then you can run `yarn install`

### Create config.json in your main folder (not inside src folder)
```json
{
  "token":  "",
  "prefix":  "",
  "mongoURI":  ""
}
```


### Commands Usage:
```ts
import  { Command }  from  '../../interfaces';
export  const  command:  Command  =  {
     //Command Name
     name:  '',
     //Command Description
     description:  '',
     //Command Aliases ex: ['p']
     aliases: [],
     // Command Usage
     usage:  'ping',
     // if this property is true, than this command will only available at your test server
     testOnly:  false,
     // Permissions, ex ['BAN_MEMBERS', 'KICK_MEMBERS']
     permissions: [],
     run:  async  (client,  message,  args)  =>  {
		//Write your code here
     },
};
```

### SlashCommand Usage: 
```ts
import  { Slash }  from  '../../interfaces';
export  const  slash:  Slash  =  {
	//Command Name
	name:  '',
	//Command Description
	description:  '',
	//If this property is true, than this command will only available at your test server
	testOnly:  false,
	run:  async  (client,  interaction,  args)  =>  {
		//Write your code here
	},
};
```

### Event usage
```ts
import  { Event }  from  '../interfaces';
export  const  event:  Event  =  {
	//Event name, ex: ready
	name: '',
	run: async(client) {
	//Write your code here
	}
}
```


## Credit
All credit goes to:
* [reconlx](https://www.youtube.com/channel/UCC-5dJ0BPTRSMaoDxntduHg)
* [CodeLyon](https://www.youtube.com/channel/UC08G-UJT58SbkdmcOYyOQVw)

