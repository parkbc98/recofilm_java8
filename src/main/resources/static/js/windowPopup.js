
function windowPopup () {

    window.name = "join";
    openWin = window.open("popup_screen", "sms_check",
        "width=800, height=500, left=560, top=290 resizable = no, scrollbars = no");

    openWin.onbeforeunload ('beforeunload', function() {
        document.getElementById("btn_login").value = "True";
    });
}

function telCheckOk() {
    var boolean = document.getElementById("btn_login").value;

    if(boolean == "True") {
        /*th:href="@{join_success}";*/
        location.href=join_success;
    } else if (boolean == "False") {
        alert('인증을 확인하여 주세요.')
    }
}