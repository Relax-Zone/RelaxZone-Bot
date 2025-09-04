import { Client, Events, GatewayIntentBits } from "discord.js"
import { Elysia } from "elysia";

import { errorEmbed } from "./embeds/errorEmbed";
import path from "path";
import { readdirSync } from "fs";
import type { Command } from "./interfaces/Command";
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

const commands: Command[] = [];
const commandFiles = readdirSync(path.join(__dirname, "commands")).filter(file => file.endsWith(".ts"));
for (const file of commandFiles) {
    const module = await import(`./commands/${file}`);
    if (module.default) {
        commands.push(module.default);
    } else {
        console.warn(`Command file ${file} doesn't have a default export. Skipping...`);
    }
}

client.on(Events.InteractionCreate,async(interaction)=>{
    if(interaction.isCommand()){
        try{
            console.log(interaction.commandName);
            
            if(!interaction.isChatInputCommand()){
                throw new Error("Interaction Type Not Correct!");
            }
            const command = commands.find(cmd => cmd.data.name === interaction.commandName);
            if(!command){
                throw new Error("Command not found");
            }
            await command.execute(interaction);
        }
        catch(error){
            await interaction.reply({
                embeds: [errorEmbed(error as Error)],
                ephemeral: true,
                
            })
        }
    }
})

client.on(Events.MessageCreate,async(message)=>{
    if(message.content === "!error"){
        await message.reply({embeds: [errorEmbed()] })
    }
})

client.on(Events.ClientReady,async(client)=>{
    console.log(`Logged in as ${client.user.tag}!`);
    const guild = client.guilds.cache.get(process.env.GUILD_ID!)
    if(!guild){
        throw new Error("Guild Not Found!");
    }
    guild.commands.set(commands.map(cmd => cmd.data.toJSON()));
    console.log(`Loaded ${commands.length} commands`);
})

client.login(process.env.BOT_TOKEN)

const app = new Elysia()
    .get("/", () => { return { isOk: true } })
    .listen(3000, () => console.log("Server is running on http://localhost:3000"));