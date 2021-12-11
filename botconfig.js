module.exports = {

  Admins: ["UserID", "UserID"], 

  ExpressServer: true,

  DefaultPrefix: process.env.Prefix || "$",

  Port: 3000,

  SupportServer: "https://discord.gg/TedC9YkECg",

  Token: process.env.Token || "Your Token Here",

  ClientID: process.env.Discord_ClientID || "ClientID Bot",

  ClientSecret: process.env.Discord_ClientSecret || "",

  Scopes: ["identify", "guilds", "applications.commands"],

  CallbackURL: "/api/callback",

  "24/7": true,

  CookieSecret: "Pikachu is EPIC",

  IconURL:

    "https://cdn.discordapp.com/attachments/725284110653718571/892797402292035594/zyro-image.png",

  EmbedColor: "RANDOM",

  Permissions: 2205280576,

  Website: process.env.Website || "https://r.gauoffical.repl.co",

  

   Lavalink: {

    id: "Main",

    host: "lava.link",

    port: 80,

    pass: "youshallnotpass", 

    secure: true,

  },

  Spotify: {

    ClientID: process.env.Spotify_ClientID || "ebc2decac0b74255bd7b1caaf2750774",

    ClientSecret: process.env.Spotify_ClientSecret || "8f4f1fc8442741efab4433fe3d169cfd",

  },

};

