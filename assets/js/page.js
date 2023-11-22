window.addEventListener('load',()=>{
  const content = document.querySelectorAll('.notion-1');
  for(let i = 0; i<content.length; i++){
    content[i].style.display='block';
  }

  const tab1 = document.querySelector('.cli h2');
  const tab2 = document.querySelector('.git-github h2');
  const tab3 = document.querySelector('.use-git h2');
  tab1.addEventListener('click',function(){
    tab1.nextElementSibling.classList.toggle('on')
  })
  tab2.addEventListener('click',function(){
    tab2.nextElementSibling.classList.toggle('on')
  })
  tab3.addEventListener('click',function(){
    tab3.nextElementSibling.classList.toggle('on')
  })
})

// function tabTitle(){
//   const tab = document.querySelectorAll('.container h2');
//   tab.forEach((el)=>{
//     el.addEventListener('click',()=>{
//       console.log('1')
//       el.nextElementSibling.classList.toggle('on')
//     })
//   })
// }

function onButtonOne(part){
  switch(part){
    case 'part1' :
      const firstTitle = document.querySelector('.cli .title');
      const firstContent = document.querySelector('.cli .notion-1');
      const firstBtn = document.querySelector('.part1 .btn-one');
      console.log(firstBtn)
      resetContent(part);
      resetColor(part)
      firstTitle.innerText = '본격적으로 배우기 앞서 우리가 익혀야 할 개념이 있습니다.';
      firstContent.style.display = 'block';
      firstBtn.style.background = '#333365';
      firstBtn.style.color = '#fff';
      break;
    case 'part2' :
      const secTitle = document.querySelector('.git-github .title');
      const secContent = document.querySelector('.git-github .notion-1');
      const secBtn = document.querySelector('.part2 .btn-one');
      resetContent(part);
      resetColor(part)
      secTitle.innerText = '프로젝트 관리';
      secContent.style.display = 'block';
      secBtn.style.background = '#333365';
      secBtn.style.color = '#fff';
      break;
    case 'part3' :
      const thirdTitle = document.querySelector('.use-git .title');
      const thirdContent = document.querySelector('.use-git .notion-1');
      const thirdBtn = document.querySelector('.part3 .btn-one');
      resetContent(part);
      resetColor(part)
      thirdTitle.innerText = '자주 사용하는 깃 명령어';
      thirdContent.style.display = 'block';
      thirdBtn.style.background = '#333365';
      thirdBtn.style.color = '#fff';
      break;
    default : break;
  }
}

function onButtonTwo(part){
  switch(part){
    case 'part1' :
      const firstTitle = document.querySelector('.cli .title');
      const firstContent = document.querySelector('.cli .notion-2');
      const firstBtn = document.querySelector('.part1 .btn-two');
      resetContent(part);
      resetColor(part)
      firstTitle.innerText = 'GUI와 CLI가 무엇인가?';
      firstContent.style.display = 'block';
      firstBtn.style.background = '#333365';
      firstBtn.style.color = '#fff';
      break;
    case 'part2' :
      const secTitle = document.querySelector('.git-github .title');
      const secContent = document.querySelector('.git-github .notion-2');
      const secBtn = document.querySelector('.part2 .btn-two');
      resetContent(part);
      resetColor(part)
      secTitle.innerText = '깃과 깃허브는 무엇인가?';
      secContent.style.display = 'block';
      secBtn.style.background = '#333365';
      secBtn.style.color = '#fff';
      break;
    case 'part3' :
      const thirdTitle = document.querySelector('.use-git .title');
      const thirdContent = document.querySelector('.use-git .notion-2');
      const thirdBtn = document.querySelector('.part3 .btn-two');
      resetContent(part);
      resetColor(part)
      thirdTitle.innerText = '자주 사용하는 깃 명령어';
      thirdContent.style.display = 'block';
      thirdBtn.style.background = '#333365';
      thirdBtn.style.color = '#fff';
      break;
  }
}

function onButtonThird(part){
  switch(part){
    case 'part1' :
      const firstTitle = document.querySelector('.cli .title');
      const firstContent = document.querySelector('.cli .notion-3');
      const firstBtn = document.querySelector('.part1 .btn-third');
      resetContent(part);
      resetColor(part)
      firstTitle.innerText = 'GUI와 CLI가 무엇인가?';
      firstContent.style.display = 'block';
      firstBtn.style.background = '#333365';
      firstBtn.style.color = '#fff';
      break;
    case 'part2' :
      const secTitle = document.querySelector('.git-github .title');
      const secContent = document.querySelector('.git-github .notion-3');
      const secBtn = document.querySelector('.part2 .btn-third');
      resetContent(part);
      resetColor(part)
      secTitle.innerText = '이미지로 보는 깃과 깃허브';
      secContent.style.display = 'block';
      secBtn.style.background = '#333365';
      secBtn.style.color = '#fff';
      break;
    case 'part3' :
      const thirdTitle = document.querySelector('.use-git .title');
      const thirdContent = document.querySelector('.use-git .notion-3');
      const thirdBtn = document.querySelector('.part3 .btn-third');
      resetContent(part);
      resetColor(part)
      thirdTitle.innerText = '원격저장소에 연결을 하는 순서';
      thirdContent.style.display = 'block';
      thirdBtn.style.background = '#333365';
      thirdBtn.style.color = '#fff';
      break;
  }
}
function onButton4th(part){
  switch(part){
    case 'part1' :
      const firstTitle = document.querySelector('.cli .title');
      const firstContent = document.querySelector('.cli .notion-4');
      const firstBtn = document.querySelector('.part1 .btn-4th');
      resetContent(part);
      resetColor(part)
      firstTitle.innerText = 'CLI 명령어는 어떤게 있는가?';
      firstContent.style.display = 'block';
      firstBtn.style.background = '#333365';
      firstBtn.style.color = '#fff';
      break;
  }
}

function resetContent(part){
  const content = document.querySelectorAll(`.${part} .content`);
  console.log(content);
  for(let i = 0; i<content.length; i++){
    content[i].style.display = 'none'
  }
}

function resetColor(part){
  const button = document.querySelectorAll(`.${part} button`);
  console.log(button)
  for(let i = 0; i<button.length; i++){
    button[i].style.background = '#fff';
    button[i].style.color="#333";
  }
}