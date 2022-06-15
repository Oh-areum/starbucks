
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');
// search 안에서 인풋요소를 찾아라
// document = html이라고 생각하면 쉬움!

searchEl.addEventListener('click',function(){
    searchInputEl.focus();
});
// search만 눌러도 input이 focus되도록 해라

searchInputEl.addEventListener('focus',function(){
    searchEl.classList.add('focused'); 
    /*input이 focus되어있으면 search에 focused라는 클래스를 추가해라 (이 이름으로 css에서 추가 효과를 작성할수 있음*/ 
    searchInputEl.setAttribute('placeholder','통합검색');
    /*setAttribute = html의 속성(attribute)을 지정해라
      인풋요소에 입력할 placeholder속성을 추가하고 그안에 들어갈 값을 선택해라*/
});

searchInputEl.addEventListener('blur',function(){
    /*focus가 해제되는 경우 = blur*/
    searchEl.classList.remove('focused'); 
    searchInputEl.setAttribute('placeholder','');
});



/**
 * 올해가 몇 년도인지 계산
 */
 const thisYear = document.querySelector('.this-year');
 thisYear.textContent = new Date().getFullYear();