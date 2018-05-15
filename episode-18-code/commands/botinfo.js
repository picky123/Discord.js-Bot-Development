const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
        .setDescription("Informatii **Discord-Servers**")
        .setColor("#f36600")
        .setThumbnail(bicon)
        .addField("Nume Bot", bot.user.username)
        .addField("Creat pe", bot.user.createdAt);

    message.channel.send(botembed);
}

module.exports.help = {
    name: "botinfo"
}
