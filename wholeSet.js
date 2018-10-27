var period = 1; // 有効期限日数
 
$(function() {
    // 1回目のアクセス
    if($.cookie('access') == undefined) {
        // cookie追加
        $.cookie('access', 'on', { expires: period });
 
        // メッセージの表示
        $('body').append($('&lt;div>').attr('id', 'bg'));
        $('body').append(
            $('&lt;div>').attr('id', 'first')
                .append($('&lt;p>').addClass('text').text('1回目のアクセスのみ注意文言を表示します。'))
                .append($('&lt;a>').attr('href', '#').addClass('brn').text('入場する'))
        );
 
    // 2回目以降のアクセス
    } else {
 
    }
 
    // メッセージの削除
    $(document).on('click', '#first a', function() {
        $('#bg, #first').remove();
        return false;
    });
 
    // cookieの削除
    $(document).on('click', '#del', function() {
        $.removeCookie('access');
    });
});