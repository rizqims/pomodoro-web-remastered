let globeDur, lanjut, heg;
let isClicked = false, isStopped = false;

function startTimer(duration, display) {
    var timer = duration,
        minutes, seconds;
    var times = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);
        $('head title', window.parent.document).text(minutes + ":" + seconds);

        lanjut = timer;
        if (isClicked) {
            clearInterval(times);
        }

        if (--timer < 0 || isStopped) {
            $('#ji').text('Timer Done');
            $('head title', window.parent.document).text('Pomodoro Web');
            isClicked = false;
            isStopped = false;
            clearInterval(times);
        }
    }, 1000);
}


$(function () {

    $("form").on("submit", function (event) {
        event.preventDefault();
        var aj = $(this).serializeArray();
        const ji = JSON.parse(JSON.stringify(aj));
        var jk = ji[0].value;
        globeDur = jk;
        console.log(globeDur);

        // looks good
        var time = jk,display = $('#ji');
        startTimer(time, display);
    });

    $('#repeatTimer').on("click", function () {
        startTimer(globeDur, $('#ji'));
    });

    $('#pauseTimer').on("click", function () {
        isClicked = true;
        console.log(lanjut)
    });

    $('#resumeTimer').on("click", function () {
        isClicked = false;
        startTimer(lanjut, $('#ji'));
    });

    $('#stopTimer').on("click", function () {
        isStopped = true;
        
        $('#ji').text('Timer Done');
        $('head title', window.parent.document).text('Pomodoro Web');
    });

    $('#hah').on("click", function () {
        $('#ji').fadeOut(1000, "linear");
    });


    // if ($('')) {
    //     console.log($('#hah'))
    // }
});
