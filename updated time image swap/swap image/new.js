
// created an Array of images
var gamePics = ["chrono.jpg", "metroid.jpg", "ninja.jpg", "mario.jpg", "bof2.jpg"];

// created an array of id's for the images, work's like key value.  
var gameId = ["game1", "game2", "game3", "game4", "game5"];

// 
    function changeImage(gameImage){
    document.getElementById('big').src=gamePics[gameImage];     // created a new variable called gameImage

    }

    var aryLength = gamePics.length;        // created a variable that gets the array of gamePics by length
               
        for (var i = 0; i < aryLength; i++)  // this will loop through the array and allow to click any image to change to main image.
                {
                  var htmlString = "<img height='150' src='" + gamePics[i] + "' alt='" + i + "'  id='" + gameId[i] + "' onclick='changeImage(" + i + ")' />";
                 document.write(htmlString);
                 
                }
// a variable named my timer = setInterval Method (every 3000 seconds the randomImage function runs)
    myTimer = setInterval(getRandomImage, 3000);

    function getRandomImage()       // function that randomnly grabs an image every five seconds
     {                              // 
        var num = Math.floor(Math.random() *5 );
        var img = gamePics[num];                    // counter is applied to gamePics array
        document.getElementById('big').src=[img];   // grabs the big elemnent and inserts the new image into it's place.
    }