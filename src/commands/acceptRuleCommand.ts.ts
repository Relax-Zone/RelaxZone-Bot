import {  EmbedBuilder, SlashCommandBuilder, type ChatInputCommandInteraction } from "discord.js"
 
export default {
  data: new SlashCommandBuilder()
    .setName("accept")
    .setDescription("คุณได้อ่าน และ ยอมรับ code of conduct ของ server นี้"),
  async execute(interaction: ChatInputCommandInteraction) {

    if (interaction.channel?.isTextBased()) {
      await interaction.reply({
        embeds: [new EmbedBuilder()
          .setDescription(`คุณได้อ่าน และ ยอมรับ code of conduct ของ server นี้
หากต้องการแก้ไขข้อมูลส่วนตัวของคุณ สามารถแก้ไขได้ที่เว็บไซต์ https://relaxzone.suwizx.dev
และสามารถดูข้อมูลของคุณได้ดดยการใช้คำสั่ง \`\`\`/me\`\`\`
          `)
          .setColor("#05DF72"),],
        ephemeral: true,
      });
      return;
    }
  }
}

