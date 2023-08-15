function startSectionSpeech(sectionId, text) {
    const utterance = new SpeechSynthesisUtterance(text);
    const section = document.getElementById(sectionId);
  
  
    // 음성 재생
    speechSynthesis.speak(utterance);
  }

document.getElementById('sound1').addEventListener('click', function() {
    const sectionId = 'sound1';
    const text = '내 모임은 모혀? 재테크 함께 배워볼텨?';
  
    startSectionSpeech(sectionId, text);
  });

  document.getElementById('sound2').addEventListener('click', function() {
    const sectionId = 'sound2';
    const text = '가까운 일정은 모혀? 8월20일 목요일 재테크 공부해요!';
  
    startSectionSpeech(sectionId, text);
  });

  document.getElementById('sound3').addEventListener('click', function() {
    const sectionId = 'sound3';
    const text = '게시판으로 모혀! 주식 어떤 종목이 좋아요? 안녕하세요. 58세 재테크쟁이입니다. 오늘 의정부에서 같이 공부할 분. 등의 게시물이 있습니다.';
  
    startSectionSpeech(sectionId, text);
  });
  