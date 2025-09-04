import { EmbedBuilder } from "discord.js";

export const errorEmbed = (error? : Error) => new EmbedBuilder()
.setTitle("เกิดข้อผิดพลาด 🚨")
.setColor("#FF2056")
.setDescription(`⚠️ เกิดข้อผิดพลาดในการประมวลผลคำสั่ง ⚠️ \n รหัสข้อผิดพลาด :\`\`\`${error?.message || "ไม่ทราบ"}\`\`\``)
.setTimestamp()

