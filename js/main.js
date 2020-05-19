$(document).ready(function() {
    $("form").submit(function() {
        var formID = $(this).attr('id');
        var formNm = $('#' + formID);
        $.ajax({
            type: "POST",
            url: 'mail.php',
            data: formNm.serialize(),
            success: function(data) {
                $('.modal').modal('hide');
                $('body').css('padding-right', '0');
                $('#modal-thank').modal('show');
            },
            error: function(jqXHR, text, error) {
                $(formNm).html(error);
            }
        });
        return false;
    });
    jQuery(function($) {
        $(".phone-mask").mask("+8 (999) 999-99-99");
    });
    $(".animate-scroll").click(function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top - 121
        }, 1500);
    });
});