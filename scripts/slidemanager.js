$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});
function goBack() {
    window.history.back();
}
var bang_pageid = parseInt(window.location.href.split('#')[1]);
console.log(bang_pageid);
if (isNaN(bang_pageid)) {
    window.location.href = window.location.href.split('#')[0] + '#' + 0;
} else {
    $("[id^=slide]").hide();
    $('#slide' + bang_pageid).fadeIn();
    if (bang_pageid == 0) {
        $('#prevslide').hide();
    } else {
        $('#prevslide').show();
    }
}
window.onhashchange = function () {
    bang_pageid = parseInt(window.location.href.split('#')[1]);
    if (isNaN(bang_pageid)) {
        window.location.href = window.location.href.split('#')[0] + '#' + 0;
    } else {
        $("[id^=slide]").hide();
        if (bang_pageid == 0) {
            $('#prevslide').hide();
        } else {
            $('#prevslide').show();
        }
        $('#slide' + bang_pageid).fadeIn();
    }
}

$('.wronganswer').click(function () {
    $(this).removeClass('btn-light');
    $(this).addClass('btn-danger');
});
$('.correctanswer').click(function () {
    $(this).removeClass('btn-light');
    $(this).addClass('btn-success');
    $('.correctanswerexplanation').fadeIn();
});


$('.nextslide').click(function () {
    $('#slide' + bang_pageid).fadeOut(function () {
        $('#slide' + bang_pageid).fadeIn();
        if (bang_pageid == 0) {
            $('#prevslide').fadeIn();
        }
        bang_pageid += 1;
        window.location.href = window.location.href.split('#')[0] + '#' + bang_pageid;
    });
});