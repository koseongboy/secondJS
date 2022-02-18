function disp(value, cont) {
    document.getElementById('alert').style.display = value;
    document.getElementById('content').innerHTML = cont;
}

document.getElementById('close').addEventListener('click', function(){
    document.getElementById('alert').style.display = 'none';
});


//jQuerry 사용
//jqurry cdn 치면 외부 jquerry문서 임포트 가능
//비주얼 스튜디오에서 jq치면 자동완성 나옴(추가 플러그인 다운 시)

$('#test').css('color', 'red');
$('#test').addClass('yellow-bg');
