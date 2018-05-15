const Discord = require ('discord.js');
exports.run = (client, message, args) => {
 
    const embed = new Discord.RichEmbed()
    .setTitle(`**Discord-Servers**`) 
    .addField('-help', 'vezi lista de comenzi')
    .addField('-ping', 'vezi ping-ul bot-ului')
    .addField('-avatar', 'vezi avatarul tau/lui')
    .addField('-rolldice', 'un joculetz.')
    .addField('-stats', 'Informatiile despre bot.')
    .addField('-botinfo', 'Info-ul despre bot (creat pe,nume bot)')
    .addField('-tempmute', 'Timp-ul cat are mute.')
    .addField('-report', 'raportezi pe cineva.')
    .addField('-say', 'comanda4fun')
         .setTimestamp()
     .setColor(0x00FFFF)
    message.author.send({embed : embed});

    message.author.send(":link: **Pentru support-ul acordat intra aici. : [https://discord.gg/VksqgM9]**");
    
 message.channel.send(":link: ***Uita-te in Privat. :hugging: !***");
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [''],
    permLevel: 0
  };
  
  exports.help = {
    name: 'help',
    description: 'Comenzile bot-ului **Discord-Servers**',
    usage: 'bot.help'
  };
