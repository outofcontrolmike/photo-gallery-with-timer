var gamePics = ["chrono.jpg", "metroid.jpg", "ninja.jpg"];


    myTimer = setInterval(getRandomImage, 3000);

    function getRandomImage() {
        var num = Math.floor(Math.random() *3 );
        var img = gamePics[num];
        document.getElementById('big').src=[img];

    }
    myTimer = setInterval(myFunction, 3000);

    function myFunction() {
        var imgChange;
        imgChange = document.getElementById("p")
    }
    myFunction();