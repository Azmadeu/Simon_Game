
var sequenceOfColors = [];
var count = 0;

function randomColorsGeneration() {
    sequenceOfColors.push(getRandomInt(0, 4));
    for (var i = 0; i < sequenceOfColors.length; i++) {
        if (sequenceOfColors[i] === 0) {
            $('#0').addClass('lightGreen');
            //alert("0");
        } else if (sequenceOfColors[i] === 1) {
            $('#1').addClass('lightRed');
            //alert("1");
        } else if (sequenceOfColors[i] === 2) {
            $('#2').addClass('lightBlue');
            //alert("2");
        } else if (sequenceOfColors[i] === 3) {
            $('#3').addClass('lightYellow');
        } else if (sequenceOfColors[i] === 4) {
            alert("4");
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

function removeClassesFromColors() {
    $('#0').removeClass('lightGreen');
    $('#0').removeClass('clickable');
    $('#1').removeClass('lightRed');
    $('#1').removeClass('clickable');
    $('#2').removeClass('lightBlue');
    $('#2').removeClass('clickable');
    $('#3').removeClass('lightYellow');
    $('#3').removeClass('clickable');
}

function addClasses() {
    $('#0').addClass('clickable');
    $('#1').addClass('clickable');
    $('#2').addClass('clickable');
    $('#3').addClass('clickable');
}

window.onload = function () {
    var start = $('#start')[0];
    var strict = $('#strict')[0];
    var onOff = $('#on-off')[0];
    var onOffTwo = $('.sw-slot')[0];
    onOff.onclick, onOffTwo.onclick = function () {
        if ($('#on-off').hasClass('left')) {
            $('#on-off').removeClass('left');
            $('.count').removeClass('light');
            $('.count').removeClass('light').text('--');
            $('#mode-led').removeClass('strictLight');
            removeClassesFromColors();
            count = 0;
            sequenceOfColors = [];
        } else {
            $('#on-off').addClass('left');
            $('.count').addClass('light');
            addClasses();
        }
        start.onclick = function () {
            if ($('#on-off').hasClass('left')) {
                if (count < 99) {
                    randomColorsGeneration();
                    count += 1;
                    if (count < 10) {
                        $('.count').text("0" + count);
                    } else if (count >= 10) {
                        $('.count').text(count);
                    } else if (count === 99) {
                        $('.count').text("99");
                    }
                } else {
                    alert('WHO ARE YOU?!!!');
                }
            }
            strict.onclick = function () {
                $('#mode-led').addClass('strictLight');
            }

        };
    };
};