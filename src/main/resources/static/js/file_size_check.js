var maxSize = 2048;
var ext = ['jpg','png'];
var pattern =   /[\{\}\/?,;:|*~`!^\+<>@\#$%&\\\=\'\"]/gi;

function fileCheck() {
    //input file 태그.
    var file = document.getElementById('file_add');
    //파일 경로.
    var filePath = file.value;
    //전체경로를 \ 나눔.
    var filePathSplit = filePath.split('\\');
    //전체경로를 \로 나눈 길이.
    var filePathLength = filePathSplit.length;
    //마지막 경로를 .으로 나눔.
    var fileNameSplit = filePathSplit[filePathLength-1].split('.');
    //파일명 : .으로 나눈 앞부분
    var fileName = fileNameSplit[0];
    //파일 확장자 : .으로 나눈 뒷부분
    var fileExt = fileNameSplit[1];
    var fileExtLow =  fileExt.toLowerCase();
    //파일 크기
    var fileSize = file.files[0].size;

    //console.log('파일 경로 : ' + filePath);
    //console.log('파일명 : ' + fileName);
    //console.log('파일 확장자 : ' + fileExt);
    //console.log('파일 크기 : ' + fileSize);

    if (fileSize > 2 * 1024 * 1024) {
        alert("파일 사이즈가 2MB 를 넘습니다.");
        file.value = null;
        return;
    }
    if (jQuery.inArray(fileExt, ext)) {
        alert('업로드 하실 수 없는 파일 형식입니다.');
        file.value = null;
        return;
    }

    if(pattern.test(ext) == false) {
        alert('파일명에 특수문자를 제거해주세요.');
        file.value = null;
        return;
    }
}