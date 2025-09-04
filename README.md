# relaxzone-bot 🤖✨

บอท Discord + Web API ด้วย Bun + TypeScript 🚀

## 🛠️ วิธีใช้งาน

### 🐳 รันด้วย Docker

```sh
docker build -t relaxzone-bot .
docker run -d --restart always -p 3000:3000 --name relaxzone-bot relaxzone-bot
```

- 🔄 `--restart always` จะทำให้ container restart อัตโนมัติเมื่อปิดหรือ crash
- 🌐 `-p 3000:3000` เปิด port 3000 สำหรับ web API (Elysia)

### ⚡ รันด้วย Bun (สำหรับ dev)

```sh
bun install
bun run start
```

## 📁 โครงสร้างโปรเจกต์

- 📦 `src/` โค้ดหลักของบอท
- 📝 `commands/` คำสั่ง Discord
- 🎨 `embeds/` Embed สำหรับ Discord
- 🧩 `interfaces/` TypeScript interface
- 🐳 `Dockerfile` สำหรับ build/run ด้วย Docker
- 🔁 `shell.sh` สคริปต์สำหรับ auto-restart ใน container

## ⚠️ ข้อควรระวัง

- 🥖 ต้องมี Bun ติดตั้งในเครื่องถ้ารันแบบ local
- 🐳 ถ้าใช้ Docker จะใช้ Bun image อัตโนมัติ

## 📬 ติดต่อ

- 👤 ผู้พัฒนา: suwizx
