$(document).ready(function(){
    //실행내용
    var loader = $(".loader");
    var back = $("#loader_back");
    var text = $(".loader_text");

    console.log("timeout start");
    loader.css("display","block");
    back.css("display","block");
    text.css("display","block");

    setTimeout(function () {
        loader.css("display","none");
        back.css("display","none");
        text.css("display","none");
    }, 2000);
    console.log("timeout done");
});
