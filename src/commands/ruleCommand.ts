import { ActionRowBuilder , MessageFlags, ModalBuilder, SlashCommandBuilder, TextInputBuilder, TextInputStyle, type ChatInputCommandInteraction } from "discord.js"
import { embeds } from "../embeds/ruleEmbed";

export default {
  data: new SlashCommandBuilder()
    .setName("getrule")
    .setDescription("กฎของ server"),
  async execute(interaction: ChatInputCommandInteraction) {
    if (interaction.channel?.isTextBased()) {
      const modal = new ModalBuilder()
			.setCustomId('confirmRule')
			.setTitle('คุณเป็นใครบอกให้เรารู้หน่อย');
      const nameInput = new TextInputBuilder()
			.setCustomId('name')
			.setLabel("ชื่อเล่นของคุณ")
			.setStyle(TextInputStyle.Short);
      const bioInput = new TextInputBuilder()
			.setCustomId('bio')
			.setLabel("คุณเป็นใคร")
      .setPlaceholder("อธิบายตามสะดวก ไม่ว่าจะเป็น คุณเป็นใคร เรียนที่ไหน ตอนนี้ทำอะไรอยู่ หรืออะไรก็ได้")
			.setStyle(TextInputStyle.Paragraph);
      const firstActionRow = new ActionRowBuilder<TextInputBuilder>().addComponents(nameInput);
      const secondActionRow = new ActionRowBuilder<TextInputBuilder>().addComponents(bioInput);
      modal.addComponents(firstActionRow, secondActionRow);
      interaction.showModal(modal)
        await interaction.reply({
          embeds: embeds,
          flags : MessageFlags.Ephemeral
        });
      return;
    }
  }
}

