const RichPresence = require("discord-rpc");
const browser = typeof window != "undefined";
const rpc = new RichPresence.Client({
    transport: browser ? "websocket" : "ipc",
});
const config = require("./config.js");
const fs = require("fs");

module.exports = rpc;

rpc.on("ready", () => {
    rpc.setActivity({
        details: config.Details,
        state: config.State,
        startTimestamp: new Date(),
        largeImageKey: config.LargeImageKey,
        largeImageText: config.LargeImageText,
        smallImageKey: config.SmallImageKey,
        smallImageText: config.SmallImageText,
        buttons: [
            {
                label: config.Button1Label,
                url: config.Button1URL,
            },
            {
                label: config.Button2Label,
                url: config.Button2URL,
            },
        ],
        instance: true,
    });

    console.log(`Rich Presence is logged on: ${rpc.user.username}`);
});

rpc.login({ clientId: config.ClientID });

let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(`Update ${__filename}`);
    delete require.cache[file];
    require(file);
});
