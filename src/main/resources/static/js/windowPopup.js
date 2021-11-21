
function windowPopup () {

    window.name = "join";
    openWin = window.open("popup_screen", "sms_check",
        "width=800, height=500, left=560, top=290 resizable = no, scrollbars = no");

    /*
    openWin.addEventListener('beforeunload', function(event) {
        $('#tel_boolean').val('true');
        var test = document.getElementById("tel_boolean");
        console.log(test.value);
        checkTel = true;
        finalCheck();
    });

     */
}
