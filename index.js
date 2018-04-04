var sequenceOfColors = [];
var sequenceOfColorsByClick = [];
var count = 0;
var i = 0;
var counter = 0;

// function Sound(source, volume, loop) {
//     this.source = source;
//     this.volume = volume;
//     this.loop = loop;
//     var son;
//     this.son = son;
//     this.finish = false;
//     this.stop = function () {
//         document.body.removeChild(this.son);
//     };
//     this.start = function () {
//         if (this.finish) return false;
//         this.son = document.createElement("embed");
//         this.son.setAttribute("src", this.source);
//         this.son.setAttribute("hidden", "true");
//         this.son.setAttribute("volume", this.volume);
//         this.son.setAttribute("autostart", "true");
//         this.son.setAttribute("loop", this.loop);
//         document.body.appendChild(this.son);
//     };
//     this.remove = function () {
//         document.body.removeChild(this.son);
//         this.finish = true;
//     };
//     this.init = function (volume, loop) {
//         this.finish = false;
//         this.volume = volume;
//         this.loop = loop;
//     }
// }

function strictOnClick() {
    for (var i = 0; i < sequenceOfColors.length; i++) {
        if (sequenceOfColors[i] === 0) {
            $('#0').addClass('lightGreen');
            setTimeout("$('#0').removeClass('lightGreen')", 1000);
        } else if (sequenceOfColors[i] === 1) {
            $('#1').addClass('lightRed');
            setTimeout("$('#1').removeClass('lightRed')", 1000);
        } else if (sequenceOfColors[i] === 2) {
            $('#2').addClass('lightBlue');
            setTimeout("$('#2').removeClass('lightBlue')", 1000);
        } else if (sequenceOfColors[i] === 3) {
            $('#3').addClass('lightYellow');
            setTimeout("$('#3').removeClass('lightYellow')", 1000);
        }
    }
}

function startOnClick() {
    if ($('#on-off').hasClass('left')) {
        addClasses();
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
    sequenceOfColorsByClick = [];
    i = 0;
    $('#iner').text(sequenceOfColors);
}

function randomColorsGeneration() {
    sequenceOfColors.push(getRandomInt(0, 4));
    for (var i = 0; i < sequenceOfColors.length; i++) {
        if (sequenceOfColors[i] === 0) {
            $('#0').addClass('lightGreen');
            setTimeout("$('#0').removeClass('lightGreen')", 1000);
        } else if (sequenceOfColors[i] === 1) {
            $('#1').addClass('lightRed');
            setTimeout("$('#1').removeClass('lightRed')", 1000);
        } else if (sequenceOfColors[i] === 2) {
            $('#2').addClass('lightBlue');
            setTimeout("$('#2').removeClass('lightBlue')", 1000);
        } else if (sequenceOfColors[i] === 3) {
            $('#3').addClass('lightYellow');
            setTimeout("$('#3').removeClass('lightYellow')", 1000);
        }
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function removeClasses() {
    $('#0').removeClass('lightGreen');
    $('#0').removeClass('clickable');
    $('#1').removeClass('lightRed');
    $('#1').removeClass('clickable');
    $('#2').removeClass('lightBlue');
    $('#2').removeClass('clickable');
    $('#3').removeClass('lightYellow');
    $('#3').removeClass('clickable');
    $('#mode-led').removeClass('strictLight');
}

function addClasses() {
    $('#0').addClass('clickable');
    $('#1').addClass('clickable');
    $('#2').addClass('clickable');
    $('#3').addClass('clickable');
}

function restart() {
    removeClasses();
    i = 0;
    count = 0;
    counter = 0;
    sequenceOfColors = [];
    sequenceOfColorsByClick = [];
}

function nextCount() {
    if (sequenceOfColorsByClick.length === sequenceOfColors.length && sequenceOfColors[sequenceOfColors.length - 1] === sequenceOfColorsByClick[sequenceOfColorsByClick.length - 1]) {
        startOnClick();
    }
}

function mistake() {
    if (sequenceOfColorsByClick[sequenceOfColorsByClick.length - 1] !== sequenceOfColors[i]) {
        $('.count').text("!!");
        alert("NEPRAVILNO BLYAT");
        restart();
    }
}

window.onload = function () {
    var start = $('#start')[0];
    var strict = $('#strict')[0];
    var onOff = $('#on-off')[0];
    var onOffTwo = $('.sw-slot')[0];
    var green = $('#0')[0];
    var red = $('#1')[0];
    var blue = $('#2')[0];
    var yellow = $('#3')[0];
    onOff.onclick, onOffTwo.onclick = function () {
        if ($('#on-off').hasClass('left')) {
            $('#on-off').removeClass('left');
            $('.count').removeClass('light').text('--');
            $('#mode-led').removeClass('strictLight');
            removeClasses();
            i = 0;
            count = 0;
            counter = 0;
            sequenceOfColors = [];
            sequenceOfColorsByClick = [];
        } else {
            $('#on-off').addClass('left');
            $('.count').addClass('light');
        }
        start.onclick = function () {
            if (counter === 0) {
              startOnClick();
              counter++;
            }
            strict.onclick = function () {
                if (counter <= 3) {
                    $('#mode-led').addClass('strictLight');
                    strictOnClick();
                }
                counter++;
            };
        };
        green.onclick = function () {
            sequenceOfColorsByClick.push(0);
            $('#0').addClass('lightGreen');
            setTimeout("$('#0').removeClass('lightGreen')", 1000);
            mistake();
            i++;
            nextCount()
        };
        red.onclick = function () {
            sequenceOfColorsByClick.push(1);
            $('#1').addClass('lightRed');
            setTimeout("$('#1').removeClass('lightRed')", 1000);
            mistake();
            i++;
            nextCount();
        };
        blue.onclick = function () {
            sequenceOfColorsByClick.push(2);
            $('#2').addClass('lightBlue');
            setTimeout("$('#2').removeClass('lightBlue')", 1000);
            mistake();
            i++;
            nextCount();
        };
        yellow.onclick = function () {
            sequenceOfColorsByClick.push(3);
            $('#3').addClass('lightYellow');
            setTimeout("$('#3').removeClass('lightYellow')", 1000);
            mistake();
            i++;
            nextCount()
        };
    };
};