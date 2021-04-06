(function () {
    "use strict";
    const canvasWidth = 600, canvasHeight = 500;
    let ctx;
    let x = 0, y = 0;
    let counter = 0;
    let fps = 5;

    let n = 0;
    let divergence = 137.5;

    let paused = true;

    let backgroundColor = "black";

    window.onload = init;

    function init() {
        ctx = canvas.getContext("2d");
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);

        mrLIB.cls(ctx, canvasWidth, canvasHeight);

        //change background of the canvas
        document.querySelector('#canvasChooser').onchange = function (e) {
            backgroundColor = e.target.value;
            reset();
        };

        //for degree changer
        document.querySelector("#degreesChooser").onchange = function (e) {
            if (e.target.value == "5degrees") {
                divergence = 5;
            }
            if (e.target.value == "75degrees") {
                divergence = 75;
            }
            if (e.target.value == "100degrees") {
                divergence = 100;
            }
            if (e.target.value == "137.5degrees") {
                divergence = 137.5;
            }
            if (e.target.value == "150degrees") {
                divergence = 150;
            }
        };

        //slider for divergence
        document.querySelector("#degreesSlider").onchange = function (e) {
            divergence = e.target.value;
        };

        //for frames per second
        document.querySelector("#fpsChooser").onchange = function (e) {
            if (e.target.value == "5fps") {
                fps = 5;
            }
            if (e.target.value == "50fps") {
                fps = 50;
            }
            if (e.target.value == "100fps") {
                fps = 100;
            }
            if (e.target.value == "200fps") {
                fps = 200;
            }

        };

        //pause and play functions
        document.querySelector("#playButton").onclick = function () {
            paused = false;
            loop();
        };

        document.querySelector("#pauseButton").onclick = function () {
            paused = true;
        };

        //to restart the canvas
        document.querySelector("#restartCanvas").onclick = function () {
            reset();
        };

        loop();
    }


    //to reset the canvas
    function reset() {
        mrLIB.cls(ctx, canvasWidth, canvasHeight, backgroundColor);
        mrLIB.cls(ctx, canvasWidth, canvasHeight, backgroundColor);
        n = 0;
    }

    function loop() {
        //for pause and play
        if(paused){
            return;
        }

        const c = 2;
        setTimeout(loop, 1000 / 400);
        //starting
        // each frame draw a new dot
        let a = n * mrLIB.dtr(divergence);
        let r = c * Math.sqrt(n);

        // now calculate the `x` and `y`
        let x = r * Math.cos(a) + canvasWidth / 2;
        let y = r * Math.sin(a) + canvasHeight / 2;

        //color changing 
        let color;
        let aDegrees;

        //choosing which color
        if (document.querySelector("#colorChooser").value == "rgb1") {
            aDegrees = (n * divergence) % 256;
            color = `rgb(${aDegrees},0,100)`;
        }
        if (document.querySelector("#colorChooser").value == "rgb2") {
            color = `rgb(${n % 256},200,230)`;
        }
        if (document.querySelector("#colorChooser").value == "hsl1") {
            aDegrees = (n * divergence) % 255;
            color = `hsl(${aDegrees},70%,30%)`;
        }
        if (document.querySelector("#colorChooser").value == "hsl2") {
            aDegrees = (n * divergence) % 361;
            color = `hsl(${aDegrees},20%,40%)`;
        }
        if (document.querySelector("#colorChooser").value == "blue") {
            color = "blue";
        }
        if (document.querySelector("#colorChooser").value == "coral") {
            color = "coral";
        }
        if (document.querySelector("#colorChooser").value == "randomColor") {
            color = mrLIB.getRandomColor();
        }

        mrLIB.drawCircle(ctx, x, y, 2, color);
        n++;
    }

})();    