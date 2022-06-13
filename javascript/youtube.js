
// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
//   <div id = "player"></div> 자동으로 player라는 아이디 이름을 가진 속성을 찾음
    new YT.Player('player', {
    videoId: 'An6LvWQuj_8',
    // 재생하려는 영상 url = 뒤의 끝부분 / 재생할 영상의 아이디
    playerVars : {
        autoplay : true,
        loop : true,
        playlist : 'An6LvWQuj_8' //반복재생할 영상 아이디
    },
    events : {
        // 객체데이터 내부 함수할당 = 메소드
        onReady : function(event){
            event.target.mute() //음소거
        }
    }
  });
}