
// ヘッダーメニュー
$('.pc_btn').on('click', function () {
    if($(this).hasClass('open')){
        $('.pc_btn').removeClass('open'); // 全ての.pc_btnからopenクラスを削除
        $('.pc_btn').text('menu');
    } else {
        $(this).addClass('open'); // クリックした.pc_btnにだけopenクラスを追加（重要）
        $('.pc_btn').text('close');
    }
    $('.pc_nav').fadeToggle();
    // $('.emiuno_logo').toggleClass('open');
    // $('.header_img').toggleClass('open');
    // $('.header_img_sp').toggleClass('open');
})

$(function(){
    $('.js_top').hover(function(){
        $(this).toggleClass('ja');
        $(this).text('トップ');
    },function(){
        $(this).removeClass('ja');
        $(this).text('top');
    });
    $('.js_about').hover(function(){
        $(this).toggleClass('ja');
        $(this).text('自己紹介');
    },function(){
        $(this).removeClass('ja');
        $(this).text('about');
    });
    $('.js_works').hover(function(){
        $(this).toggleClass('ja');
        $(this).text('実績');
    },function(){
        $(this).removeClass('ja');
        $(this).text('works');
    });
    $('.js_contact').hover(function(){
        $(this).toggleClass('ja');
        $(this).text('お問い合わせ');
    },function(){
        $(this).removeClass('ja');
        $(this).text('contact');
    });
});


// clamp自動計算
let userAgent = window.navigator.userAgent.toUpperCase(); //ユーザーエージェント取得
    if (userAgent.indexOf('MSIE') === -1 && userAgent.indexOf('TRIDENT') === -1) { //ieじゃなかったら
      let fz = document.querySelectorAll('.u-fz'); //u-fzの要素を取得
      fz.forEach(element => { //u-fzに対して処理をかけていく
        let max = window.getComputedStyle(element).getPropertyValue('font-size'); //u-fzのfont-size = 最大値を取得
        let vp = window.innerWidth / 100; //画面幅の1/100 = 1vwを取得
        let vw = (max.replace(/px/g , "" ) / vp) + "vw"; //最大値 / 1vwで推奨値を取得
        let min = (max.replace(/px/g , "" ) / 1.7) + "px"; //最大値 / 1.4で最小値を取得
        let clamp = [min,vw,max] //clampを適用しやすいように配列化
        element.style.fontSize = 'clamp(' + clamp.join(',') + ')'; //styleにclampを適用
    });
}

// 要素フェードイン
$(function () {
    // 'js-in' クラスを持つ要素を全て取得
    let $targets = $('.js-in');
    // 各要素に対してループを回す
    $targets.each(function () {
        // IntersectionObserverを作成し、要素が画面に入ったかどうかを監視
        let observer = new IntersectionObserver((entries, observer) => {
            // 監視している要素の数だけループを回す
            entries.forEach(entry => {
                // 要素が画面に入っているか判定
                if (entry.isIntersecting) {
                    // 'active' クラスを追加して見た目を変更
                    $(entry.target).addClass('active');
                    // 一度画面に入ったら監視を止める
                    observer.unobserve(entry.target);
                }
            });
        });
        // 各要素を監視対象に追加
        observer.observe(this);
    });
});