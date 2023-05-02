const fs = require("fs");

module.exports = {
    ClientID: "967967669871579167",
    Details: "Waiting for you",
    LargeImageKey: "https://pfps.gg/assets/pfps/6183-moon.png",
    LargeImageText: "YoruAkio",
    SmallImageKey:
        "https://c.tenor.com/TgKK6YKNkm0AAAAi/verified-verificado.gif",
    SmallImageText: "airi.dev",
    State: "Eating chips (666 of 999)",
    Button1Label: "Github",
    Button1URL: "https://github.com/YoruAkio",
    Button2Label: "Website",
    Button2URL: "https://airi.dev",
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.redBright(`Update ${__filename}`));
    delete require.cache[file];
    require(file);
});
