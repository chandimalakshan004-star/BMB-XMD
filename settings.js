const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('settings.env'))
    require('dotenv').config({ path: __dirname + '/settings.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;

module.exports = {
    session: B.M.B-TECH;;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibVAra3E4Y3FtTVNmb2hIS3EyR3ZvQjhybklxRnVnT2VHZTBSWk9lRzJXMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRWlXU3BzMVF4RVluL25PWExkWlVhMnBjZ1hUNTU5cVNDUjVJaGE0THUxWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4TUxjYVpnOUN3RkNuOG05WXhRRkFmSGpIL0IwbnVCeEJJVHY3a1c4L0g0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVY0dCMFR6ZXNVZkhRTzJ2bGdMV0RxUmpFSnl3S0lxeG9MME9pbXc4Tmc4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1BbVBtcUJ2eUtneUtsYnNXR2dMVURreGpvV0p2dWpWWk1DNS8rZ2Z6a3M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlB4azBZNWhvbU5DbkFlOGJydEMreGt2M1Y4YkZtdXpmWHdyS3ZKYlFUV1E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0tBNDNad0c0UEx5U3VaSmdQajJQQnZnQ2NuRjcweXJHL1FFSi80TmxHQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidjJFOTA1Q2oyMG1LTno1eEtyUk5SZGo5c0hvc1pQRm5YOERabHNKWnJEbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZwbVN5WEZGOUo0Q1JHeDdkMlEvS2Nvc25lV3FCTnd1M0kvSnBwVlg4bVQ3VXlkUWE1QmExSmNEdjVZY21QbkNLMm9icEpZZXdMcWR6UnplL3RLSEJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE4LCJhZHZTZWNyZXRLZXkiOiJpZG1PR1llSWlCZ3NzOFhicG9yTWZTSEx4S0lvTFlyUVBYdEVWWi9NeTRvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzA1MjQwMjg5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFFNDhBQTVGOUI4QkQ4RkJGQ0M2RTA1RjcwRUMxNDAxIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTU3NDQzMTl9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzA1MjQwMjg5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkYyRjIwN0NGOUVCMTU1Q0M4MkEwRUUzRTMwRTJEM0FCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTU3NDQzMTl9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzA1MjQwMjg5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjUxNzg4NzI3MDA4RDRDRUIzQUVGOTg2QUJGOUUzQjlDIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTU3NDQzNDB9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IlFSRjlKQUxHIiwibWUiOnsiaWQiOiI5NDcwNTI0MDI4OTozNkBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjE4NTcxMDY0NDU2MDA3NjozNkBsaWQiLCJuYW1lIjoi8J+SkPCflqQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tQRzVxc0hFS3FRbXNVR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ilo3ajB0OU02Ykx0VXk2UFZuWEdFMGo4MUUwQVpXb3Y1SXVEVWkvR0QzSFk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkZwdFl6VHhJM2hwSXIxMXN0NTVEWklhZEZGSzdPK1dhMWFjNmFtcGdaS3Q2QjZMYlZGRDZXTGtKSTRLb1lPV01GSzU3aGdPOEY1NFFsOGdmeFllckJnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJpUk9tMHFsY3Rwb2JTeGd4N0pQQTAxVlJ1NVVwVmRQNnNqRGVvTHREcTE4RWtuN0RINTJwZk45MHVmc3pqbTJiNWljZ2Z5bi9iaXJJSmNCOS9sWnhDUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzA1MjQwMjg5OjM2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQldlNDlMZlRPbXk3Vk11ajFaMXhoTkkvTlJOQUdWcUwrU0xnMUl2eGc5eDIifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBMElBZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NTc0NDMxMCwibGFzdFByb3BIYXNoIjoiMlY3N3FVIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFBb2YifQ==.env.SESSION_ID || '',
    PREFIXE: process.env.PREFIX || "+",
    OWNER_NAME: process.env.OWNER_NAME || "BAHIRAVA MD
        .MD Bahirava 
        .MD-BAHIRAVA ",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "94705240289",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'B.M.B-TECH',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/8qq3l4.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_API_KEY : process.env.HEROKU_API_KEY, 
    WARN_COUNT : process.env.WARN_COUNT || '3',
    ETAT : process.env.PRESENCE || '',
    ANTICALL : process.env.ANTICALL || 'yes',   
    AUTO_BIO : process.env.AUTO_BIO || 'yes',               
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTI_DELETE_MESSAGE || 'no',
    AUTO_REACT : process.env.AUTO_REACT || 'no',
    AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
    AUTO_READ : process.env.AUTO_READ || 'yes',
    CHAT_BOT: process.env.CHAT_BOT || 'yes',
    AUDIO_REPLY: process.env.AUDIO_REPLY || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway"
        : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
};

let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
