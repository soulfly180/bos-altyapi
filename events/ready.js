module.exports = client => {
  console.log(`${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("idle");

  console.log(`${client.user.id}                                                                                                                                                                     `)
client.user.setActivity(`Yt SoulFly`, { type: "WATCHING"});  
 console.log(`${client.user.username}: Şu an ` + client.channels.size + ` adet kanala, ` + client.guilds.size + ` adet sunucuya ve ` + ` kullanıcıya hizmet veriliyor!`);
};