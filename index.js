var sequenceOfColors = [];
var sequenceOfColorsByClick = [];
var count = 0;
var i = 0;
var counterForStrictButton = 0;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function strictOnClick() {
    i = 0;
    sequenceOfColorsByClick = [];
    for (var j = 0; j < sequenceOfColors.length; j++) {
        if (sequenceOfColors[j] === 0) {
          //  soundGreen();
            $('#0').addClass('lightGreen');
            setTimeout("$('#0').removeClass('lightGreen')", 1000);
        } else if (sequenceOfColors[j] === 1) {
          //  soundRed();
            $('#1').addClass('lightRed');
            setTimeout("$('#1').removeClass('lightRed')", 1000);
        } else if (sequenceOfColors[j] === 2) {
          //  soundBlue();
            $('#2').addClass('lightBlue');
            setTimeout("$('#2').removeClass('lightBlue')", 1000);
        } else if (sequenceOfColors[j] === 3) {
          //  soundGreen();
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
    $('#mode-led').removeClass('strictLight');
    counterForStrictButton = 0;
    sequenceOfColorsByClick = [];
    i = 0;
    $('#iner').text(sequenceOfColors);
}

function randomColorsGeneration() {
    sequenceOfColors.push(getRandomInt(0, 4));
    for (var i = 0; i < sequenceOfColors.length; i++) {
        if (sequenceOfColors[i] === 0) {
           // setTimeout(soundGreen(),500*i);
            setTimeout("$('#0').addClass('lightGreen')",100*i);
            setTimeout("$('#0').removeClass('lightGreen')", 1000);
        } else if (sequenceOfColors[i] === 1) {
          //  setTimeout(soundRed(),500*i);
            setTimeout("$('#1').addClass('lightRed')",100*i);
            setTimeout("$('#1').removeClass('lightRed')", 1000);
        } else if (sequenceOfColors[i] === 2) {
         //   setTimeout(soundBlue(),500*i);
            setTimeout("$('#2').addClass('lightBlue')",100*i);
            setTimeout("$('#2').removeClass('lightBlue')", 1000);
        } else if (sequenceOfColors[i] === 3) {
          //  setTimeout(soundYellow(),500*i);
            setTimeout("$('#3').addClass('lightYellow')",100*i);
            setTimeout("$('#3').removeClass('lightYellow')", 1000);
        }
    }
}

function soundGreen() {
    var audio = new Audio();
    audio.src = 'https://s3.amazonaws.com/freecodecamp/simonSound1.mp3';
    audio.autoplay = true;
}

function soundRed() {
    var audio = new Audio();
    audio.src = 'https://s3.amazonaws.com/freecodecamp/simonSound2.mp3';
    audio.autoplay = true;
}

function soundBlue() {
    var audio = new Audio();
    audio.src = 'https://s3.amazonaws.com/freecodecamp/simonSound3.mp3';
    audio.autoplay = true;
}

function soundYellow() {
    var audio = new Audio();
    audio.src = 'https://s3.amazonaws.com/freecodecamp/simonSound4.mp3';
    audio.autoplay = true;
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
    counterForStrictButton = 0;
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
            restart();
        } else {
            $('#on-off').addClass('left');
            $('.count').addClass('light');
        }
        start.onclick = function () {
            if (count === 0) {
                startOnClick();
                counterForStartButton++;
            }
        };
        strict.onclick = function () {
            if (counterForStrictButton === 0) {
                $('#mode-led').addClass('strictLight');
                strictOnClick();
            }
            counterForStrictButton++;
        };
        green.onclick = function () {
            soundGreen();
            sequenceOfColorsByClick.push(0);
            $('#0').addClass('lightGreen');
            setTimeout("$('#0').removeClass('lightGreen')", 1000);
            mistake();
            i++;
            nextCount()
        };
        red.onclick = function () {
            soundRed();
            sequenceOfColorsByClick.push(1);
            $('#1').addClass('lightRed');
            setTimeout("$('#1').removeClass('lightRed')", 1000);
            mistake();
            i++;
            nextCount();
        };
        blue.onclick = function () {
            soundBlue();
            sequenceOfColorsByClick.push(2);
            $('#2').addClass('lightBlue');
            setTimeout("$('#2').removeClass('lightBlue')", 1000);
            mistake();
            i++;
            nextCount();
        };
        yellow.onclick = function () {
            soundYellow();
            sequenceOfColorsByClick.push(3);
            $('#3').addClass('lightYellow');
            setTimeout("$('#3').removeClass('lightYellow')", 1000);
            mistake();
            i++;
            nextCount();
        };
    };
};