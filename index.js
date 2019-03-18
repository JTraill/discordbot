const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const tokenfile = require("./botconfig.json");
const bot = new Discord.Client({disableEveryone: true});
let insults = [" ain't no hersh that's for sure", " can't hold aggro", " is almost as bad as dave", 
" couldn't craft it even if he had the mats", 
" thinks retail is better",
" died to Hogger",
" doesn't know how to spread out for shatter",
" is getting carried by the guild tbh",
" has no enchants",
" clicks their spells",
" died to spout on lurker",
" died to whirlwind on lurker",
" uses Rank 1 spells in their rotation",
" couldn't kill their inner demon",
" thinks deep down Dave loves Rubik with passion & sensuality",
" main tanks Vashj with Annihilator",
" wishes to be part of the corrupt Loot Council",
" uses Eye of Magtheridon without any spell hit",
" 🍆🍆hey you, you dont get an insult...Jabroni is a literal god🍆🍆",
": Favorite past time = backpeddling"];
var lastUpdateTime = new Date().getTime();

bot.on("ready", async () =>{
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity('!help');
});

bot.on("message", async message =>{
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  
  if(cmd === `${prefix}serverinfo`){
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Server Information")
    .setColor("#15f153")
    .setThumbnail(sicon)
    .addField("Server Name", message.guild.name)
    .addField("Created On", message.guild.createdAt)
    .addField("You Joined", message.member.joinedAt)
    .addField("Total Members", message.guild.memberCount);

    return message.channel.send(serverembed);
  }
  if(cmd === `${prefix}add`){
    
  }

  if(cmd === `${prefix}botinfo`){
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setThumbnail(bicon)
    .setDescription("Bot Information").setColor("#15f153")
    .addField("Bot Name", bot.user.username)
    .addField("Created On", bot.user.createdAt);

    return message.channel.send(botembed);
  }
  if(cmd === `${prefix}help`){
    let bicon = bot.user.displayAvatarURL;
    //let botembed = new Discord.RichEmbed().setColor("#15f153").addField("\n!s name:");
    let help="🍆List of commands I can do🍆\n-------------------------------------"+
    "\n!s name: Searches WoWTBC Database for a name"+
    "\n!t: Brings up a Talent Calculator"+
    "\n!classic: Shows how long until classic is released"+
    "\n!roll: Rolls a random number between 1-100"+
    "\n!i @ChannelMember: Shouts a random insult to someone you dont like";
    return message.channel.send(help);
  }
  if(cmd === `${prefix}hello`){
    return message.channel.send("Hello!!!");
  }
  if(cmd === `${prefix}i` || cmd === `${prefix}I`){
    return message.channel.send(args+insults[Math.floor(Math.random()*insults.length)]);
  }
  if(cmd === `${prefix}I @Jabroni#0677 ` || cmd === `${prefix}i @Jabroni#0677 `){
    return message.channel.send("Hey you, " + message.member +
    ", don't make fun of my master Jabroni");
  }
  if(message.content === "dave sucks"){
    return message.channel.send("You got that right " + message.member +
    ", Dave's pretty bad");
  }
  if(cmd === `${prefix}roll`){
    var min=1; 
    var max=100;  
    var random = Math.floor(Math.random() * (+max - +min)) + +min;
    return message.channel.send(message.member + " rolled: " + random);
  }

  if(cmd === `${prefix}classic`){
    var initialDate = new Date(2019, 6, 16); // Attention: month is zero-based
    var now = Date.now();
    var difference = initialDate - now;
    var millisecondsPerDay = 24 * 60 * 60 * 1000;
    var daysSince = Math.floor(difference / millisecondsPerDay);
    let serverembed = new Discord.RichEmbed()
    .addField("Days Until Classic ", difference);
    return message.channel.send(daysSince+1 + " days until classic is released!")
  };
  if(cmd === `${prefix}s`){
    let test = args;
    let myString = test.join('+');
    return message.channel.send("Searching WoW TBC DB for " + args + "\n"
    + "http://db.hellfire-tbc.com/?search="+myString);
  };
  if(cmd === `${prefix}t`){ 
    return message.channel.send("Bringing up Talent Calculator \n"
    + "http://tbc-db.tk/talents/");
  };
});


bot.login(tokenfile.token);