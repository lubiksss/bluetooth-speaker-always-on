const fs = require('fs');
const txtToMp3 = require("text-to-mp3");

const txtForMp3 = "~";
const outputFilePath = "../blank.mp3"

txtToMp3.getMp3(txtForMp3, function(err, binaryStream){
    if(err){
        console.log(err);
        return;
    }
    var file = fs.createWriteStream(outputFilePath); // write it down the file
    file.write(binaryStream);
    file.end();
});