console.log(`[Bot] Bot Giriş Yapıyor...`);

const { Client } = require('discord.js');
const client = new Client();

client.login('TOKEN');

client.on('ready',async () => {
    console.log(`[Bot] Bot Giriş Yaptı!`);
});

client.on('guildMemberAdd',async (m) => {
    var arındırılmışİsim = m.displayName.replace(/[^\w\s]/gi, '');
    if (arındırılmışİsim === '') {
        /* Eğer nick'i tamamen şekilli ise
        onun nickini İsmini Değiştir yap */
        m.setNickname('İsmini Değiştir');
    } else {
        /* Eğer nick'i tamamen şekilli değilse
        onun nickindeki şekilli harfleri silinmiş bir şekilde tekrar isimlendir */
        m.setNickname(arındırılmışİsim);
    }
});