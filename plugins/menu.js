const { readEnv } = require('../lib/database');
const { cmd, commands } = require('../command');

cmd({
    pattern: "menu",
    desc: "Get the list of commands",
    category: "main",
    filename: __filename
},
async (conn, mek, m, { from, quoted, pushname, reply }) => {
    try {
        // Load configuration
        const config = await readEnv();

        // Initialize menu categories
        let menu = {
            main: '',
            download: '',
            group: '',
            owner: '',
            convert: '',
            search: ''
        };

        // Loop through all commands and categorize them
        for (let i = 0; i < commands.length; i++) {
            if (commands[i].pattern && !commands[i].dontAddCommandList) {
                const category = commands[i].category || 'main';
                if (menu[category] !== undefined) {
                    menu[category] += `${config.PREFIX}${commands[i].pattern}\n`;
                }
            }
        }

        // Construct the menu message
        let madeMenu = `☠*Hello ${pushname}*💖
> *DOWNLOAD COMMANDS* 😈

${menu.download || 'No commands available'}

> *MAIN COMMANDS* 😉

${menu.main || 'No commands available'}

> *GROUP COMMANDS* 💥

${menu.group || 'No commands available'}

> *OWNER COMMANDS* 🐱‍👤

${menu.owner || 'No commands available'}

> *CONVERT COMMANDS* 🔥

${menu.convert || 'No commands available'}

> *SEARCH COMMANDS* ⭐

${menu.search || 'No commands available'}

👋 *POWERED BY SL_PANCHA_MD WHATSAPP BOT* ✅
        `;

        // Send the menu message
        await conn.sendMessage(from, {
            image: { url: config.ALIVE_IMG },
            caption: madeMenu
        }, { quoted: mek });

    } catch (e) {
        console.error("[MENU ERROR] ", e);
        reply(`An error occurred while generating the menu: ${e.message}`);
    }
});
> *GROUP COMANDS* 💥

${menu.group}

> *OWNER COMMANDS* 🐱‍👤

${menu.owner}

> *CONVERT COMMANDS* 🔥

${menu.convert}

> *SERCH COMMANDS* ⭐

${menu.serch}

👋 *POWERD BY SL_PANCHA_MD WHATSAPP BOT* ✅
`
await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
