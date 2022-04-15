const player = require('play-sound')(opts = {});

const INTERVAL_TIME = 5 * 60 * 1000;

function playBlankMp3(){
    console.log(`${new Date()} blank mp3 played`)
    player.play('blank.mp3', function(err){
        if (err) throw err
    })
}

playBlankMp3();
setInterval(playBlankMp3, INTERVAL_TIME);