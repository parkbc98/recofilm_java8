$('#btn_send_mail').click(function(){
    let phoneNumber = $('#inputPhoneNumber').val();
    Swal.fire('인증번호 발송 완료!')


    $.ajax({
        type: "GET",
        url: "/check/sendSMS",
        data: {
            "phoneNumber" : phoneNumber
        },
        success: function(res){
            $('#checkBtn').click(function(){
                if($.trim(res) ==$('.btn_tel_num_check').val()){
                    Swal.fire(
                        '인증성공!',
                        '휴대폰 인증이 정상적으로 완료되었습니다.',
                        'success'
                    )

                    $.ajax({
                        type: "GET",
                        url: "",
                        data: {
                            "phoneNumber" : $('#c_tel_num').val()
                        }
                    })
                    window.close();

                    /* input true 확인후 버튼활성화 체크*/
                    $('#tel_boolean').val('true');
                    var test = document.getElementById("tel_boolean");
                    console.log(test.value);
                    checkTel = true;
                    finalCheck();

                }else{
                    Swal.fire({
                        icon: 'error',
                        title: '인증오류',
                        text: '인증번호가 올바르지 않습니다!'
                    })
                    window.close();
                }
            })


        }
    })
});