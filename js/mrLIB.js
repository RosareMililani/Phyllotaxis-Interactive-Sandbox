console.log("lib loaded");

(function () {
    "use strict";

    let mrLIB = {

        // helpers
        dtr(degrees) {
            return degrees * (Math.PI / 180);
        },

        drawCircle(ctx, x, y, radius, color) {
            ctx.save();
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.arc(x, y, radius, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fill();
            ctx.restore();
        },

        cls(ctx, canvasWidth, canvasHeight, bgColor = "black") {
            ctx.save();
            ctx.fillStyle = bgColor;
            ctx.rect(0, 0, canvasWidth, canvasHeight);
            ctx.fill();
            ctx.restore();
        },

        getRandomColor() {
            function getByte() {
                return 55 + Math.round(Math.random() * 200);
            }
            return "rgba(" + getByte() + "," + getByte() + "," + getByte() + ",.8)";
        },


    }

    if (window) {
        window["mrLIB"] = mrLIB;
    }
})();

