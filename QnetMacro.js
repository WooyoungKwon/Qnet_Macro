// 버튼을 클릭하는 함수 정의
function clickButton() {
    var button = document.getElementsByName('schBtn')[0];
    if (button) {
        button.click(); // 버튼 클릭
        console.log("조회 버튼을 클릭했습니다.");
    } else {
        console.log("조회 버튼을 찾을 수 없습니다.");
    }
}

// 치지직 사운드 재생
function playSound() {
    var audioContext = new (window.AudioContext || window.webkitAudioContext)();

    var bufferSize = 4096;
    var audioBuffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
    var output = audioBuffer.getChannelData(0);

    for (var i = 0; i < bufferSize; i++) {
        // -1과 1 사이의 랜덤값 생성
        output[i] = Math.random() * 2 - 1;
    }

    var source = audioContext.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(audioContext.destination);
    source.start();
}

// 일정 시간마다 버튼을 클릭하는 함수 실행
function clickButtonRepeatedly(interval) {
    var intervalId = setInterval(function() {
        clickButton(); // 조회 버튼 클릭
        var applyButton = document.querySelectorAll('.btn3_type1')[0];
        // 여석이 생기면 치지직하는 소리와 함께 반복 종료
        if (applyButton){
            applyButton.click();
            playSound();
            console.log("신청 버튼을 클릭했습니다");
            clearInterval(intervalId); // applyButton 클릭 시 setInterval 멈춤
        }
    }, interval);
}

// 매크로 실행 (예: 3초마다 조회 버튼 클릭)
clickButtonRepeatedly(100); // 3000ms = 3초
