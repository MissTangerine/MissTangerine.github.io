window.onload = function() {
    var oC = document.getElementById('canv');
    var oCG = oC.getContext('2d');

    oC.onmousedown = function(ev) {
        var ev = ev || window.event;
        oCG.moveTo(ev.clientX-oC.offsetLeft+10, ev.clientY-oC.offsetTop+15);

        document.onmousemove = function(ev) {
            var ev = ev || window.event;
            oCG.lineTo(ev.clientX-oC.offsetLeft+10, ev.clientY-oC.offsetTop+15);
            oCG.stroke();
        };
        
        oC.onmouseup = function() {
            document.onmousemove = null;
            document.onmouseup = null;
        };
    };
};


$(window).resize(resizeCanvas);
function resizeCanvas() {
    $("#canv").attr("width", $(window).get(0).innerWidth);
    $("#canv").attr("height", $(window).get(0).innerHeight);
};

resizeCanvas();