

var gamePics = ["chrono.jpg", "metroid.jpg", "ninja.jpg", "mario.jpg", "bof2.jpg"];
var gameId = ["game1", "game2", "game3", "game4", "game5"];

    function changeImage(gameImage){
    document.getElementById('big').src=gamePics[gameImage];

    }

    var aryLength = gamePics.length;
               for (var i = 0; i < aryLength; i++){
                  var htmlString = "<img height='150' src='" + gamePics[i] + "' alt='" + i + "'  id='" + gameId[i] + "' onclick='changeImage(" + i + ")' />";
                 document.write( htmlString );
                 
               }

    myTimer = setInterval(getRandomImage, 3000);

    function getRandomImage() {
        var num = Math.floor(Math.random() *5 );
        var img = gamePics[num];
        document.getElementById('big').src=[img];
    }