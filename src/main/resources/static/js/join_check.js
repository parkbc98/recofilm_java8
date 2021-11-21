var checkPW = false;
var checkTel = false;
/*
$('#pw_boolean').change(function() {
    alert("pw변경");
    checkPW = true;
    console.log(checkPW);
    finalCheck();
});
$('#tel_boolean').change(function() {
    alert("tel변경");
    checkTel = true;
    console.log(checkTel);
    finalCheck();
});
*/
function finalCheck () {
    if (checkPW && checkTel) {
        console.log(checkPW);
        console.log(checkTel);
        document.getElementById('btn_login').disabled = false;
        console.log(document.getElementById('btn_login').disabled);
    }
}