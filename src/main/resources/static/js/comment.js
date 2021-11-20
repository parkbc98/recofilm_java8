/*
 * 댓글 등록하기(Ajax)
 * https://gangnam-americano.tistory.com/32 (참조)
 */
function fn_comment(code){

    $.ajax({
        type:'POST',
        url : "",
        data:$("#commentForm").serialize(),
        success : function(data){
            if(data=="success")
            {
                getCommentList();
                $("#comment").val("");
            }
        },
        error:function(request,status,error){
            //alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
        }

    });
}

/**
 * 초기 페이지 로딩시 댓글 불러오기
 */
$(function(){

    getCommentList();

});

/**
 * 댓글 불러오기(Ajax)
 */
function getCommentList(){

    $.ajax({
        type:'GET',
        url : "",
        dataType : "json",
        data:$("#commentForm").serialize(),
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        success : function(data){

            var html = "";
            var comment_count = data.length;

            if(data.length > 0){

                for(i=0; i<data.length; i++){
                    html += "<div class=\"comment_content_wrap\">";
                    html += "<p class=\"nickname\">"+data[i].writer+"</p>";
                    html += "<p class=\"comment_content\">" +data[i].comment+ "</p>";
                    html += "<p class=\"comment_time\">" +data[i].regitime+ "</p>";
                    html += "</div>";
                }

            } else {
                /**/
            }

            $("#comment_count").html(comment_count);
            $("#commentList").html(html);

        },
        error:function(request,status,error){

        }

    });
}