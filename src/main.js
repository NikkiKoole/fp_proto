var canvas;
var backdrop;
var elements;
var total = 26;
var canvasScale = 1;
var SCALE_FACTOR = 1.2;


function zoomIn() {
    canvasScale = canvasScale * SCALE_FACTOR;
    var objects = canvas.getObjects(), i, scaleX, scaleY, left, top, tempScaleX, tempScaleY, tempLeft, tempTop;
    for (i in objects) {
        scaleX = objects[i].scaleX;
        scaleY = objects[i].scaleY;
        left = objects[i].left;
        top = objects[i].top;

        tempScaleX = scaleX * SCALE_FACTOR;
        tempScaleY = scaleY * SCALE_FACTOR;
        tempLeft = left * SCALE_FACTOR;
        tempTop = top * SCALE_FACTOR;

        objects[i].scaleX = tempScaleX;
        objects[i].scaleY = tempScaleY;
        objects[i].left = tempLeft;
        objects[i].top = tempTop;
        objects[i].setCoords();
    }

    canvas.renderAll();
}

function zoomOut() {
    canvasScale = canvasScale / SCALE_FACTOR;
    var objects = canvas.getObjects(), i, scaleX, scaleY, left, top, tempScaleX, tempScaleY, tempLeft, tempTop;
    for (i in objects) {
        scaleX = objects[i].scaleX;
        scaleY = objects[i].scaleY;
        left = objects[i].left;
        top = objects[i].top;

        tempScaleX = scaleX * (1 / SCALE_FACTOR);
        tempScaleY = scaleY * (1 / SCALE_FACTOR);
        tempLeft = left * (1 / SCALE_FACTOR);
        tempTop = top * (1 / SCALE_FACTOR);

        objects[i].scaleX = tempScaleX;
        objects[i].scaleY = tempScaleY;
        objects[i].left = tempLeft;
        objects[i].top = tempTop;

        objects[i].setCoords();
    }

    canvas.renderAll();
}


function addAllToCanvas() {
    var i;
    for (i = 0; i < elements.length; i += 1) {
        canvas.add(elements[i]);
    }
    zoomOut();
    zoomOut();
    zoomOut();
}

function addElement(el) {
    elements.push(el);
    if (elements.length >= total) {
        addAllToCanvas();
    }
}

function loadPattern(url, repeat) {
    fabric.util.loadImage(url, function (img) {
        backdrop.fill = new fabric.Pattern({
            source: img,
            repeat: repeat
        });
        console.log(img);
        canvas.renderAll();
    });
}



function addImage(url, x, y, scale, rotation, shadowIntensity) {
    fabric.Image.fromURL(url, function (oImg) {
        oImg.borderColor = 'gray';
        oImg.cornerColor = 'black';
        oImg.cornerSize = 12;
        oImg.transparentCorners = false;
        oImg.left = x;
        oImg.top = y;
        oImg.scale(scale);
        oImg.setShadow({
            color: 'rgba(0,0,0,0.3)',
            offsetX: shadowIntensity,
            offsetY: shadowIntensity,
            blur: shadowIntensity * 6
        });
        oImg.angle = rotation || 0;
        addElement(oImg);
    });
}

function addRect(r, g, b, a, x, y, w, h, scale, rotation) {
    var rect = new fabric.Rect({
        width: w,
        height: h,
        left: x,
        top: y,
        angle: rotation,
        fill: 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')'
    });
    rect.borderColor = 'gray';
    rect.cornerColor = 'black';
    rect.cornerSize = 12;
    rect.transparentCorners = false;
    rect.setShadow({
        color: 'rgba(0,0,0,0.7)',
        offsetX: '5',
        offsetY: '5',
        blur: 30
    });
    addElement(rect);
}

function addCircle(fillColor, stroke, strokeWidth, x, y, radius) {
    var circle = new fabric.Circle({
        radius: radius,
        left: x,
        top: y,
        fill: fillColor,
        stroke: stroke,
        strokeWidth: strokeWidth
    });
    circle.borderColor = 'gray';
    circle.cornerColor = 'black';
    circle.cornerSize = 12;
    circle.transparentCorners = false;
    circle.setShadow({
        color: 'rgba(0,0,0,0.7)',
        offsetX: '1',
        offsetY: '1',
        blur: 3
    });
    addElement(circle);
}



function loadRest() {
    addCircle('#d0d', '#faf', 3, 1250, 600, 100);
    addImage('resources/stoel1.png', 1500, 170, 0.5, -90, 3);
    addImage('resources/stoel1.png', 1500, 245, 0.5, -90, 3);
    addImage('resources/stoel1.png', 1500, 320, 0.5, -90, 3);
    addImage('resources/stoel1.png', 1345, 170, 0.5, 90, 3);

    addImage('resources/stoel1.png', 1345, 245, 0.5, 90, 3);
    addImage('resources/stoel1.png', 1345, 320, 0.5, 90, 3);
    addImage('resources/hoekbank.png', 1240, 760, 0.5, 5, 4);
    addImage('resources/bed.png', 530, 700, 0.5, 90, 3);
    addImage('resources/keukenwasbak.png', 1000, 130, 0.5, 180, 3);

    addImage('resources/fornuis.png', 940, 280, 0.5, 90, 4);
    addImage('resources/bank.png', 1150, 480, 0.5, 130, 3);
    addImage('resources/douche.png', 540, 150, 0.5, 180, 1);
    addImage('resources/koelkast.png', 1150, 130, 0.5, 180, 4);
    addImage('resources/tv.png', 1500, 500, 0.5, -93, 4);

    addImage('resources/stoel3.png', 820, 850, 0.5, 6);
    addImage('resources/computer.png', 820, 780, 0.5, 180, 5);
    addImage('resources/plant.png', 1500, 800, 0.5, 2);
    addImage('resources/wc.png', 850, 150, 0.5, -90, 3);
    addImage('resources/badwasbak.png', 860, 270, 0.5, 4);

    addImage('resources/luie1.png', 960, 550, 0.5, -90, 5);
    addImage('resources/luie2.png', 1480, 700, 0.5, -80, 5);
    addRect(156, 68, 4, 1, 1420, 250, 100, 240, 1, 180);
    addRect(176, 176, 156, 1, 300, 200, 60, 60, 1, 180);
    addRect(136, 176, 156, 1, 370, 230, 60, 60, 1, 80);
}

window.onload = function () {
    canvas = new fabric.Canvas('c');
    canvas.selection = false;
    elements = [];

    backdrop = new fabric.Rect({
        width: 4000,
        height: 3000,
        left: 500,
        top: 500,
        angle: 0
    });

    backdrop.set('selectable', false);
    loadPattern('resources/grid.png', 'repeat');
    canvas.add(backdrop);

    fabric.Image.fromURL('resources/sonman2.svg', function (oImg) {
        oImg.set('selectable', false);
        oImg.scale(6.5);
        oImg.left = 900;
        oImg.top = 500;
        addElement(oImg);
        loadRest();
    });
};


