
var map = null;
var infowindow = new google.maps.InfoWindow();
var gmarkers = [];
var i = 0;

function inicializar() {
    // 初期設定
    var option = {
        center: new google.maps.LatLng(36.8096341, 139.5363633),
        zoom: 11,
        // タイプ (ROADMAP・SATELLITE・TERRAIN・HYBRIDから選択)
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("map-canvas"), option);
    google.maps.event.addListener(map, "click", function () { infowindow.close(); });

    // ポイントの追加
    var point = new google.maps.LatLng(36.7586136, 139.6021454);//座標
    var marker = create_maker(point, "<h6>日光東照宮</h6><p>目安滞在時間１日</p><a href = '/maps/map_1-1.html' >ここに行く</a > ");

    var point = new google.maps.LatLng(36.7549386, 139.6000919);//座標
    var marker = create_maker(point, "<h6>輪王寺</h6><a href='/maps/map_1-2.html'>ここに行く</a>");

    var point = new google.maps.LatLng(36.7584534, 139.5942446);//座標
    var marker = create_maker(point, "<h6>二荒山神社</h6><a href='/maps/map_2-1.html'>ここに行く</a>");

    var point = new google.maps.LatLng(36.7524533, 139.5889926);//座標
    var marker = create_maker(point, "<h6>日光田母沢御用邸公園</h6><a href='/maps/map_2-2.html'>ここに行く</a>");

    var point = new google.maps.LatLng(36.7559585, 139.5980394);//座標
    var marker = create_maker(point, "<h6>日光東照宮 宝物館</h6><a href='/maps/map_2-3.html'>ここに行く</a>");

    var point = new google.maps.LatLng(36.7577798, 139.5920298);//座標
    var marker = create_maker(point, "<h6>家光廟 大猷院</h6><a href='/maps/map_2-4.html'>ここに行く</a>");

    var point = new google.maps.LatLng(36.7534723, 139.6033019);//座標
    var marker = create_maker(point, "<h6>神橋</h6><a href='/maps/map_2-5.html'>ここに行く</a>");

    var point = new google.maps.LatLng(36.1097627, 138.4726714);//座標
    var marker = create_maker(point, "<h6>いろは坂</h6><a href='/maps/map_3-1.html'>ここに行く</a>");

    var point = new google.maps.LatLng(36.7546452, 139.5946737);//座標
    var marker = create_maker(point, "<h6>いろり庵</h6><a href='/maps/map_1-3.html'>ここに行く</a>");

    var point = new google.maps.LatLng(36.7382762, 139.4464826);//座標
    var marker = create_maker(point, "<h6>中禅寺温泉</h6><a href='/maps/map_1-5.html'>ここに行く</a>");

    var point = new google.maps.LatLng(36.736927, 139.4234831);//座標
    var marker = create_maker(point, "<h6>中禅寺湖</h6><a href='/maps/map_3-2.html'>ここに行く</a>");

    var point = new google.maps.LatLng(36.7379968, 139.4998745);//座標
    var marker = create_maker(point, "<h6>華厳の滝</h6><a href='/maps/map_3-3.html'>ここに行く</a>");

    var point = new google.maps.LatLng(36.7382423, 139.5016671);//座標
    var marker = create_maker(point, "<h6>華厳滝観瀑台</h6><a href='/maps/map_1-4.html'>ここに行く</a>");

    var point = new google.maps.LatLng(36.7373572, 139.512145);//座標
    var marker = create_maker(point, "<h6>明智平展望台</h6><a href='/maps/map_4-1.html'>ここに行く</a>");

    var point = new google.maps.LatLng(36.7373572, 139.512145);//座標
    var marker = create_maker(point, "<h6>明智平ロープウェイ</h6><a href='/maps/map_4-2.html'>ここに行く</a>");

    var point = new google.maps.LatLng(36.7954223, 139.426355);//座標
    var marker = create_maker(point, "<h6>湯滝</h6><a href='/maps/map_4-3.html'>ここに行く</a>");

    var point = new google.maps.LatLng(36.7576511, 139.4492332);//座標
    var marker = create_maker(point, "<h6>竜頭ノ滝</h6><a href='/maps/map_4-4.html'>ここに行く</a>");

    var point = new google.maps.LatLng(36.8063871, 139.4217891);//座標
    var marker = create_maker(point, "<h6>奥日光湯元温泉</h6><a href='/maps/map_4-5.html'>ここに行く</a>");


}

function create_maker(latlng, html) {
    // マーカーを生成
    var marker = new google.maps.Marker({ position: latlng, map: map });
    // マーカーをクリックした時の処理
    google.maps.event.addListener(marker, "click", function () {
        infowindow.setContent(html);
        infowindow.open(map, marker);
    });
    gmarkers[i] = marker;
    i++;
    return marker;
}

function map_click(i) {
    google.maps.event.trigger(gmarkers[i], "click");
}

google.maps.event.addDomListener(window, "load", inicializar);