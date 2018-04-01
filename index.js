var sequenceOfColors = [];



function randomColorsGeneration() {
    sequenceOfColors.push(getRandomInt(0, 3));
    for (var i = 0; i < sequenceOfColors.length; i++){
        if (sequenceOfColors[i] === 0){
            $('#0').addClass('lightGreen');
            alert("0");
        }else if (sequenceOfColors[i] === 1){
            $('#1').addClass('lightRed');
            alert("1");
        }else if (sequenceOfColors[i] === 2){
            $('#2').addClass('lightBlue');
            alert("2");
        }else if (sequenceOfColors[i] === 3){
            $('#3').addClass('lightYellow');
            alert("3");
        }
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function Sound(source, volume, loop) {
    this.source = source;
    this.volume = volume;
    this.loop = loop;
    var son;
    this.son = son;
    this.finish = false;
    this.stop = function () {
        document.body.removeChild(this.son);
    };
    this.start = function () {
        if (this.finish) return false;
        this.son = document.createElement("embed");
        this.son.setAttribute("src", this.source);
        this.son.setAttribute("hidden", "true");
        this.son.setAttribute("volume", this.volume);
        this.son.setAttribute("autostart", "true");
        this.son.setAttribute("loop", this.loop);
        document.body.appendChild(this.son);
    };
    this.remove = function () {
        document.body.removeChild(this.son);
        this.finish = true;
    };
    this.init = function (volume, loop) {
        this.finish = false;
        this.volume = volume;
        this.loop = loop;
    }
}
window.onload = function() {
    var button = $('#start')[0];
    var buttonTwo = $('#strict')[0];
    button.onclick = function () {
        alert("START!!!");
        randomColorsGeneration();
    buttonTwo.onclick = function () {
        alert("STRICT!!!")
    }
    };
};