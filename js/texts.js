$.getJSON('https://hyperbeats.cf', response => typeText(response.servers)).catch(o_O => typeText());

function typeText(servers = null) {
    const strings = ["Partagez vos goûts musicaux avec vos amis."];
    if (servers) strings.push(`Boost Music 🎵`);
    strings.push(...[
        "",
    ]);

    new TypeIt("#typingtext", {
        breakLines: false,
        strings,
        speed: 93,
        loop: true,
        deletespeed: 1,
        nextStringDelay: 3000,
        waitUntilVisible: true
    });
};