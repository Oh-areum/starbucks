

const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function(){
    console.log(window.scrollY);
    if(window.scrollY > 500){
        gsap.to(badgeEl, .6, {
            opacity : 0,
            display : 'none'
        });
    }else{
        gsap.to(badgeEl, .6, {
            opacity : 1,
            display : 'block'
        });
    }
},300));

// 0.3초 단위로 부하를 주어 스크롤 함수를 실행을 조금 줄여주는 기능 
// 일정시간동안 한번씩만 작동하도록 제한을 거는 기능 스크롤 기능에 많이 사용함
// _.throttle(함수,시간(밀리세컨))
// gsap.to(요소, 지속시간(일반 초단위), 옵션(객체형태));
// 옵션에서 문자로 값을 입력할 경우 당연하게도 문자열로 작성해야한다.


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){ //요소, 횟수
    gsap.to(fadeEl , 1, {
        delay : (index + 1) * .7, //0.7, 1.4, 2.1, 2.7 등장
        opacity : 1
    });
    // gsap.to(요소, 지속시간(일반 초단위), 옵션(객체형태));
});
// 요소.forEach() 요소를 찾아서 '요소 개수만큼 함수를 반복시킨다'
// index는 0부터 시작하는 인수



// SWIPER
// new Swiper(선택자, 옵션)
// * 슬라이드 요소 관리 *
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical', // 수직 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true // 반복 재생 여부
})
new Swiper('.promotion .swiper-container', {
  // direction: 'horizontal', // 수평 슬라이드
  autoplay: { // 자동 재생 여부
    delay: 5000 // 5초마다 슬라이드 바뀜
  },
  loop: true, // 반복 재생 여부
  slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  pagination: { // 페이지 번호 사용 여부
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: { // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: '.promotion .swiper-prev', // 이전 버튼 선택자
    nextEl: '.promotion .swiper-next' // 다음 버튼 선택자
  }
})
new Swiper('.awards .swiper-container', {
  // direction: 'horizontal', // 수평 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true, // 반복 재생 여부
  spaceBetween: 30, // 슬라이드 사이 여백
  slidesPerView: 5, // 한 번에 보여줄 슬라이드 개수
  // slidesPerGroup: 5, // 한 번에 슬라이드 할 개수(전체 개수로 나뉘어야 함)
  navigation: { // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: '.awards .swiper-prev', // 이전 버튼 선택자
    nextEl: '.awards .swiper-next' // 다음 버튼 선택자
  }
})



const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click',function() {
    isHidePromotion = !isHidePromotion
    // isHidepromotion = isHidepromotion의 값의 반대
    if(isHidePromotion){
        // isHidePromotion이 true이면  =>숨김처리!
        promotionEl.classList.add('hide');
    }else{
        // isHidePromotion이 false이면  =>보임처리!
        promotionEl.classList.remove('hide');
    }
    // 숨김처리되어야할때 class에 hide를 추가하여 css에서 hide class의 속성을 처리해줌
});



// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
  }

function floatingObject(selector , delay , size){
    gsap.to(
        selector, //선택자
        random(1.5, 2.5) , //애니메이션 지속시간 : 랜덤함수로 랜덤한 지속시간 설정
        { //옵션
        y: size,
        repeat : -1, //gsap repeat에서 무한대라는 의미
        yoyo : true, //한번재생된 애니메이션을 뒤로 다시 재생하는 기능
        ease: Power1.easeInOut, //gsap easing 을 검색해서(green sock) 원하는 함수기능을 찾아 속성을 가져옴
        delay : random(0, delay) //몇초뒤에 애니메이션이 움직이는지 설정
    });
     // gsap.to(요소, 지속시간(일반 초단위), 옵션(객체형태));
};

floatingObject('.floating1',1 ,15);
floatingObject('.floating2',.5 ,15);
floatingObject('.floating3',1.5 ,20);


// 1.starbucks 28. 16:00
const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function(spyEl){
    new ScrollMagic
        .Scene({
            triggerElement : spyEl, //보여짐 여부를 감시할 요소를 지정
            triggerHook : .8 
            //뷰포트 시작이 0 끝이 1, 0.8부분에 훅이 걸려져 있음  
            // 스크롤 하다가 어떤지점에서 어떠한 내용이 실행된다.
            // 이부분에서 setClassToggle()이 실행된다.
        })
        .setClassToggle(spyEl, 'show')
        .addTo(new ScrollMagic.Controller())
});

