const wordList = [
  {
    kor: "가",
    eng: "capable",
  },
  {
    kor: "가",
    eng: "capture",
  },
  {
    kor: "가",
    eng: "anticipate",
  },
  {
    kor: "가",
    eng: "participate",
  },
  {
    kor: "가",
    eng: "conceive",
  },
  {
    kor: "가",
    eng: "deceive",
  },
  {
    kor: "가",
    eng: "perceive",
  },
  {
    kor: "가asdsadsadsd",
    eng: "receive",
  },
  {
    kor: "가",
    eng: "accept",
  },
  {
    kor: "가",
    eng: "contraception",
  },
  {
    kor: "가",
    eng: "except",
  },
  {
    kor: "가",
    eng: "intercept",
  },
  {
    kor: "가",
    eng: "susceptible",
  },
  {
    kor: "가",
    eng: "capital",
  },
  {
    kor: "가",
    eng: "cap",
  },
  {
    kor: "가",
    eng: "cape",
  },
  {
    kor: "가",
    eng: "cabbage",
  },
  {
    kor: "가",
    eng: "chief",
  },
  {
    kor: "가",
    eng: "achieve",
  },
  {
    kor: "가",
    eng: "chef",
  },
  {
    kor: "가",
    eng: "precede",
  },
  {
    kor: "가",
    eng: "recede",
  },
  {
    kor: "가",
    eng: "proceed",
  },
  {
    kor: "가",
    eng: "exceed",
  },
  {
    kor: "가",
    eng: "succeed",
  },
  {
    kor: "가",
    eng: "access",
  },
  {
    kor: "가",
    eng: "predecessor",
  },
  {
    kor: "가",
    eng: "incessant",
  },
];

const rButtonDom = document.querySelector("#rButton");
const innerDom = document.querySelector(".inner");
const korListDom = document.querySelector("#korList");
const engListDom = document.querySelector("#engList");
const hButtonDom = document.querySelector("#hButton");

const renderedList = () => {
  for (let i = 0; i < wordList.length; i++) {
    let eEl = document.createElement("li");
    let kEl = document.createElement("li");
    eEl.innerHTML = wordList[i].eng;
    kEl.innerHTML = wordList[i].kor;
    engListDom.appendChild(eEl);
    korListDom.appendChild(kEl);
  }
};

rButtonDom.addEventListener("click", () => {
  let random = Math.random() * wordList.length;

  innerDom.innerHTML = wordList[Math.floor(random)].eng;
});

const hideAction = (dom) => {
  dom.style.opacity = "0";
  return "Show";
};

const showAction = (dom) => {
  dom.style.opacity = "1";
  return "Hide";
};

hButtonDom.addEventListener("click", () => {
  const listInnerDom = document.querySelector(".listInner");
  if (hButtonDom.innerHTML == "Hide")
    hButtonDom.innerHTML = hideAction(listInnerDom);
  else hButtonDom.innerHTML = showAction(listInnerDom);
});

renderedList();
