const fileInput = document.getElementById("file-input");
const imageContainer = document.querySelector(".flip-left-card");
const mycard = document.querySelector(".mycard");
const githubsrc = document.querySelector(".githubsrc");
const instagramsrc = document.querySelector(".instagramsrc");

const people = {
  name: "",
  major: "",
  school: "",
  github: "",
  instagram: "",
  imgSrc: "",
  bgColor: "",
};

let colorInput = document.querySelector("#bgCustom");

// 입력한 파일 소스 가져오기
fileInput.addEventListener("change", function (event) {
  const file = event.target.files[0];

  const reader = new FileReader();

  reader.onload = function (event) {
    const imageSrc = event.target.result;

// 사진 소스 people 객체에 저장.
    people.imgSrc = imageSrc;
  };

  reader.readAsDataURL(file);
});

// 입력한 값 가져오기.
function createCard(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const major = document.getElementById("major").value;
  const school = document.getElementById("school").value;
  const github = document.getElementById("github").value;
  const instagram = document.getElementById("instagram").value;
  const bgColor = document.getElementById("bgCustom").value;
  people.name = name;
  people.major = major;
  people.school = school;
  people.github = github;
  people.instagram = instagram;
  people.bgColor = bgColor;
// 에러 검사
  if (name === "" || major === "" || school === "") {
    const errorEl = document.createElement("p");
    errorEl.classList.add("form-error");
    errorEl.textContent = "모든 필드를 입력해주세요.";
    document.querySelector("form").appendChild(errorEl);
    return;
  }
  Cardmaker();
}

// 동적으로 명함 생성
function Cardmaker() {
  console.log(people);

  const div1 = document.createElement("div");
  div1.classList.add("mycard");

  const div2 = document.createElement("div");
  div2.classList.add("flip-card");

  const div3 = document.createElement("div");
  div3.classList.add("flip-inner");

  div3.style.backgroundColor = people.bgColor;
  const div4 = document.createElement("div");
  div4.classList.add("flip-left-card");

  const img = document.createElement("img");

  img.src = people.imgSrc;
  img.className = "filp-Img";
  div4.appendChild(img);

  const li1 = document.createElement("li");
  li1.classList.add("cName", "text");
  li1.textContent = people.name;

  const ul = document.createElement("ul");
  ul.classList.add("flip-card-text");

  const li2 = document.createElement("li");
  li2.classList.add("cJob", "text");
  li2.textContent = people.major;

  const li3 = document.createElement("li");
  li3.classList.add("cBelong", "text");
  li3.textContent = people.school;

  const li4 = document.createElement("li");
  li4.classList.add("iconText", "githubIconText");

  const a1 = document.createElement("a");
  a1.classList.add("githubsrc", "icon");
  a1.href = people.github;

  const i1 = document.createElement("i");
  i1.classList.add("fa-brands", "fa-github");
  a1.appendChild(i1);
  li4.appendChild(a1);

  const i1text = document.createElement("p");
  i1text.classList.add("githubText");
  i1text.textContent = `${people.github}`;
  console.log(i1text);
  a1.appendChild(i1text);

  const li5 = document.createElement("li");
  li5.classList.add("iconText");

  const a2 = document.createElement("a");
  a2.classList.add("instagramsrc", "icon");
  a2.href = people.instagram;

  const i2 = document.createElement("i");
  i2.classList.add("fa-brands", "fa-square-instagram");
  a2.appendChild(i2);

  const i2text = document.createElement("p");
  i2text.classList.add("instagramText");
  i2text.textContent = `${people.instagram}`;

  const majoricon = document.createElement("i");
  majoricon.classList.add("fa-solid", "fa-building");

  const majorbox = document.createElement("div");
  majorbox.classList.add("majorbox");

  a2.appendChild(i2text);
  li5.appendChild(a2);

  div4.appendChild(li1);
  div3.appendChild(div4);
  
  majorbox.appendChild(majoricon);
  majorbox.appendChild(li3);

  ul.appendChild(li2);
  ul.appendChild(majorbox);
  ul.appendChild(li4);
  ul.appendChild(li5);

  div1.appendChild(div2);
  div2.appendChild(div3);
  div3.appendChild(ul);

  const cardsContainer = document.querySelector(".rightbox");
  cardsContainer.appendChild(div1);
}
