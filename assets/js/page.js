window.addEventListener("load", () => {
  const content = document.querySelectorAll(".notion-1");
  for (let i = 0; i < content.length; i++) {
    content[i].style.display = "block";
  }

  if (document.querySelector(".container-1")) {
    const tab1 = document.querySelector(".container-1 h2");
    tab1.addEventListener("click", function () {
      tab1.nextElementSibling.classList.toggle("on");
    });
  }
  if (document.querySelector(".container-2")) {
    const tab2 = document.querySelector(".container-2 h2");
    tab2.addEventListener("click", function () {
      tab2.nextElementSibling.classList.toggle("on");
    });
  }
  if (document.querySelector(".container-3")) {
    const tab3 = document.querySelector(".container-3 h2");
    tab3.addEventListener("click", function () {
      tab3.nextElementSibling.classList.toggle("on");
    });
  }

  if (document.querySelector(".modeling")) {
    const target = document.querySelector(".click-hide");
    target.addEventListener("click", function () {
      console.log(this);
      this.classList.add("hide");
    });
  }
});

function arrTitle(week, part) {
  let titles = {
    week1: {
      part1: [
        "본격적으로 배우기 앞서 우리가 익혀야 할 개념이 있습니다.",
        "GUI와 CLI가 무엇인가?",
        "GUI와 CLI가 무엇인가?",
        "CLI 명령어는 어떤게 있는가?"
      ],
      part2: [
        "프로젝트 관리",
        "깃과 깃허브는 무엇인가?",
        "이미지로 보는 깃과 깃허브"
      ],
      part3: [
        "자주 사용하는 깃 명령어",
        "자주 사용하는 깃 명령어",
        "원격저장소에 연결을 하는 순서"
      ]
    },
    week2: {
      part1: [
        "깃 플로우",
        "fetch? pull?",
        "vscode에서 브랜치 생성하기",
        "깃허브에 생성된 브랜치 가져오기",
        "충돌은 어떻게 해결하나요?"
      ],
      part2: [
        "HTML과 CSS와 javascript",
        "html의 구조",
        "자주 사용하는 meta 태그",
        "css 용어 설명",
        "변수와 함수 그리고 스코프",
        "변수와 함수 그리고 스코프"
      ],
      part3: [
        "모듈이란?",
        "요청과 응답",
        "라우터와 핸들러",
        "데이터베이스",
        "SQL 작성하기"
      ]
    },
    week3: {
      part1: ["프로필 만들기", "뱃지 만들기", "pin 설정하기"],
      part2: [
        "데이터 모델링과 ERD",
        "데이터 모델링 순서",
        "데이터 모델링 절차",
        "ERD의 관계 표기법",
        "N:M 관계의 해소",
        "ERD 관계의 표현"
      ]
    }
  };

  return titles[week] && titles[week][part] ? titles[week][part] : [];
}

function onButtonOne(week, part) {
  const firstTitle = document.querySelector(".container-1 .title");
  const firstContent = document.querySelector(".container-1 .notion-1");
  const firstBtn = document.querySelector(".part1 .btn-one");
  const arrSecTitle = ["GUI와 CLI가 무엇인가?", "깃플로우"];
  switch (part) {
    case "part1":
      resetContent(part);
      resetColor(part);
      console.log(arrTitle(week, part)[0]);
      firstTitle.innerText = arrTitle(week, part)[0];
      firstContent.style.display = "block";
      firstBtn.style.background = "#333365";
      firstBtn.style.color = "#fff";
      break;
    case "part2":
      const secTitle = document.querySelector(".container-2 .title");
      const secContent = document.querySelector(".container-2 .notion-1");
      const secBtn = document.querySelector(".part2 .btn-one");
      resetContent(part);
      resetColor(part);
      secTitle.innerText = arrTitle(week, part)[0];
      secContent.style.display = "block";
      secBtn.style.background = "#333365";
      secBtn.style.color = "#fff";
      break;
    case "part3":
      const thirdTitle = document.querySelector(".container-3 .title");
      const thirdContent = document.querySelector(".container-3 .notion-1");
      const thirdBtn = document.querySelector(".part3 .btn-one");
      resetContent(part);
      resetColor(part);
      thirdTitle.innerText = arrTitle(week, part)[0];
      thirdContent.style.display = "block";
      thirdBtn.style.background = "#333365";
      thirdBtn.style.color = "#fff";
      break;
    default:
      break;
  }
}

function onButtonTwo(week, part) {
  switch (part) {
    case "part1":
      const firstTitle = document.querySelector(".container-1 .title");
      const firstContent = document.querySelector(".container-1 .notion-2");
      const firstBtn = document.querySelector(".part1 .btn-two");
      resetContent(part);
      resetColor(part);
      firstTitle.innerText = arrTitle(week, part)[1];
      firstContent.style.display = "block";
      firstBtn.style.background = "#333365";
      firstBtn.style.color = "#fff";
      break;
    case "part2":
      const secTitle = document.querySelector(".container-2 .title");
      const secContent = document.querySelector(".container-2 .notion-2");
      const secBtn = document.querySelector(".part2 .btn-two");
      resetContent(part);
      resetColor(part);
      secTitle.innerText = arrTitle(week, part)[1];
      secContent.style.display = "block";
      secBtn.style.background = "#333365";
      secBtn.style.color = "#fff";
      break;
    case "part3":
      const thirdTitle = document.querySelector(".container-3 .title");
      const thirdContent = document.querySelector(".container-3 .notion-2");
      const thirdBtn = document.querySelector(".part3 .btn-two");
      resetContent(part);
      resetColor(part);
      thirdTitle.innerText = arrTitle(week, part)[1];
      thirdContent.style.display = "block";
      thirdBtn.style.background = "#333365";
      thirdBtn.style.color = "#fff";
      break;
  }
}

function onButtonThird(week, part) {
  switch (part) {
    case "part1":
      const firstTitle = document.querySelector(".container-1 .title");
      const firstContent = document.querySelector(".container-1 .notion-3");
      const firstBtn = document.querySelector(".part1 .btn-third");
      resetContent(part);
      resetColor(part);
      firstTitle.innerText = arrTitle(week, part)[2];
      firstContent.style.display = "block";
      firstBtn.style.background = "#333365";
      firstBtn.style.color = "#fff";
      break;
    case "part2":
      const secTitle = document.querySelector(".container-2 .title");
      const secContent = document.querySelector(".container-2 .notion-3");
      const secBtn = document.querySelector(".part2 .btn-third");
      resetContent(part);
      resetColor(part);
      secTitle.innerText = arrTitle(week, part)[2];
      secContent.style.display = "block";
      secBtn.style.background = "#333365";
      secBtn.style.color = "#fff";
      break;
    case "part3":
      const thirdTitle = document.querySelector(".container-3 .title");
      const thirdContent = document.querySelector(".container-3 .notion-3");
      const thirdBtn = document.querySelector(".part3 .btn-third");
      resetContent(part);
      resetColor(part);
      thirdTitle.innerText = arrTitle(week, part)[2];
      thirdContent.style.display = "block";
      thirdBtn.style.background = "#333365";
      thirdBtn.style.color = "#fff";
      break;
  }
}
function onButton4th(week, part) {
  switch (part) {
    case "part1":
      const firstTitle = document.querySelector(".container-1 .title");
      const firstContent = document.querySelector(".container-1 .notion-4");
      const firstBtn = document.querySelector(".part1 .btn-4th");
      resetContent(part);
      resetColor(part);
      firstTitle.innerText = arrTitle(week, part)[3];
      firstContent.style.display = "block";
      firstBtn.style.background = "#333365";
      firstBtn.style.color = "#fff";
      break;
    case "part2":
      const secTitle = document.querySelector(".container-2 .title");
      const secContent = document.querySelector(".container-2 .notion-4");
      const secBtn = document.querySelector(".part2 .btn-4th");
      resetContent(part);
      resetColor(part);
      secTitle.innerText = arrTitle(week, part)[3];
      secContent.style.display = "block";
      secBtn.style.background = "#333365";
      secBtn.style.color = "#fff";
      break;
    case "part3":
      const thirdTitle = document.querySelector(".container-3 .title");
      const thirdContent = document.querySelector(".container-3 .notion-4");
      const thirdBtn = document.querySelector(".part3 .btn-4th");
      resetContent(part);
      resetColor(part);
      thirdTitle.innerText = arrTitle(week, part)[3];
      thirdContent.style.display = "block";
      thirdBtn.style.background = "#333365";
      thirdBtn.style.color = "#fff";
      break;
  }
}
function onButton5th(week, part) {
  switch (part) {
    case "part1":
      const firstTitle = document.querySelector(".container-1 .title");
      const firstContent = document.querySelector(".container-1 .notion-5");
      const firstBtn = document.querySelector(".part1 .btn-5th");
      resetContent(part);
      resetColor(part);
      firstTitle.innerText = arrTitle(week, part)[4];
      firstContent.style.display = "block";
      firstBtn.style.background = "#333365";
      firstBtn.style.color = "#fff";
      break;
    case "part2":
      const secTitle = document.querySelector(".container-2 .title");
      const secContent = document.querySelector(".container-2 .notion-5");
      const secBtn = document.querySelector(".part2 .btn-5th");
      resetContent(part);
      resetColor(part);
      secTitle.innerText = arrTitle(week, part)[4];
      secContent.style.display = "block";
      secBtn.style.background = "#333365";
      secBtn.style.color = "#fff";
      break;
    case "part3":
      const thirdTitle = document.querySelector(".container-3 .title");
      const thirdContent = document.querySelector(".container-3 .notion-5");
      const thirdBtn = document.querySelector(".part3 .btn-5th");
      resetContent(part);
      resetColor(part);
      thirdTitle.innerText = arrTitle(week, part)[4];
      thirdContent.style.display = "block";
      thirdBtn.style.background = "#333365";
      thirdBtn.style.color = "#fff";
      break;
  }
}
function onButton6th(week, part) {
  switch (part) {
    case "part1":
      const firstTitle = document.querySelector(".container-1 .title");
      const firstContent = document.querySelector(".container-1 .notion-6");
      const firstBtn = document.querySelector(".part1 .btn-6th");
      resetContent(part);
      resetColor(part);
      firstTitle.innerText = arrTitle(week, part)[5];
      firstContent.style.display = "block";
      firstBtn.style.background = "#333365";
      firstBtn.style.color = "#fff";
      break;
    case "part2":
      const secTitle = document.querySelector(".container-2 .title");
      const secContent = document.querySelector(".container-2 .notion-6");
      const secBtn = document.querySelector(".part2 .btn-6th");
      resetContent(part);
      resetColor(part);
      secTitle.innerText = arrTitle(week, part)[5];
      secContent.style.display = "block";
      secBtn.style.background = "#333365";
      secBtn.style.color = "#fff";
      break;
    case "part3":
      const thirdTitle = document.querySelector(".container-3 .title");
      const thirdContent = document.querySelector(".container-3 .notion-6");
      const thirdBtn = document.querySelector(".part3 .btn-6th");
      resetContent(part);
      resetColor(part);
      thirdTitle.innerText = arrTitle(week, part)[5];
      thirdContent.style.display = "block";
      thirdBtn.style.background = "#333365";
      thirdBtn.style.color = "#fff";
      break;
  }
}
function resetContent(part) {
  const content = document.querySelectorAll(`.${part} .content`);
  for (let i = 0; i < content.length; i++) {
    content[i].style.display = "none";
  }
}

function resetColor(part) {
  const button = document.querySelectorAll(`.${part} button`);
  for (let i = 0; i < button.length; i++) {
    button[i].style.background = "#fff";
    button[i].style.color = "#333";
  }
}
