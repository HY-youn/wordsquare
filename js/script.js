
const navBar = document.querySelector('.nav-navbar');
const navbarDepth = document.querySelector('.nav-navbar-depth1menu');

navBar.addEventListener('mouseover', ()=>{
  if(navBar.classList.contains('nav-show')){
    navbarDepth.classList.remove('nav-show');
  }
  else{
    navbarDepth.classList.add('nav-show');
  }
  
});

navBar.addEventListener('mouseout', ()=>{
 navbarDepth.classList.remove('nav-show');
})

const testItems = document.querySelectorAll('.sec-4 .test-grid .grid-item');
const testTexts = document.querySelectorAll('.sec-4 .test-grid .grid-item p');
const testBtns = document.querySelectorAll('section.sec-4 .test-grid .grid-item .test-content button a');


testItems.forEach((testItem) =>{
  testItem.addEventListener('mouseenter', ()=>{
    testItem.classList.add('on');
    testItem.stopPropagation();
    testTexts.forEach((testText)=>{
      testText.classList.add('on');
      testText.stopPropagation();
    })
    testBtns.forEach((testBtn)=>{
      testBtn.classList.add('btnon');
      testBtn.stopPropagation();
    }
    )
  })
  testItem.addEventListener('mouseleave', ()=>{
    testItem.classList.remove('on');
    testTexts.forEach((testText)=>{
      testText.classList.remove('on');
      testText.stopPropagation();
    })
    testBtns.forEach((testBtn)=>{
      testBtn.classList.remove('btnon');
      testBtn.stopPropagation();
    }
    )
  }) 
});
