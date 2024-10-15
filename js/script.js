
// const navBar = document.querySelector('.nav-navbar');
// const navbarDepth = document.querySelector('.nav-navbar-depth1menu');

// navBar.addEventListener('mouseenter', ()=>{
//   if(!navBar.classList.contains('nav-show')){
//     navbarDepth.classList.add('nav-show');
//   }
// });

// navBar.addEventListener('mouseleave', ()=>{
//     navbarDepth.classList.remove('nav-show');
//   }
// )

const testItems = document.querySelectorAll('.test-grid .grid-item');

testItems.forEach((testItem) => {
  testItem.addEventListener('mouseenter', () => {
    // test-content-text 요소를 선택
    const testContentText = testItem.querySelector('.test-content-text');
    const testContentImg = testItem.querySelector('.test-content-img');
    // 모든 p 태그에 'on' 클래스 추가
    const paragraphs = testContentText.querySelectorAll('.p-black');
    const paragraphe = testContentText.querySelectorAll('.p-color');
    const images = testContentImg.querySelector('button a');
    paragraphs.forEach((p) => {
      p.classList.add('on');
    });
    paragraphe.forEach((e) => {
      e.classList.add('coloron');
    });
    images.classList.add('btnon');
    });


  testItem.addEventListener('mouseleave', () => {
    // test-content-text 요소를 선택
    const testContentText = testItem.querySelector('.test-content-text');
    const testContentImg = testItem.querySelector('.test-content-img');
    // 모든 p 태그에 'on' 클래스 추가
    const paragraphs = testContentText.querySelectorAll('.p-black');
    const paragraphe = testContentText.querySelectorAll('.p-color');
    const images = testContentImg.querySelector('button a');
    paragraphs.forEach((p) => {
      p.classList.remove('on');
    });
    paragraphe.forEach((e) => {
      e.classList.remove('coloron');
    });
    images.classList.remove('btnon');
    });
});