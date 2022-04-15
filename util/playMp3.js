const player = require('play-sound')(opts = {})

const inputFilePath = "../blank.mp3"

// $ mplayer foo.mp3
player.play(inputFilePath, function(err){
    if (err) throw err
})