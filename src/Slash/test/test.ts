import { Slash } from "../../interfaces";

export const slash: Slash = {
    name: 'test',
    description: 'test',
    testOnly: true,
    run: async(client, interaction, args) => {
        interaction.followUp({content: 'test'})
    }
}