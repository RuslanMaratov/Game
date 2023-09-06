let canvas = document.getElementsByClassName("picture")[0];
const wrapper = document.getElementsByClassName("wrapper")[0];
const word = document.getElementsByClassName("word")[0];
let resultBad = document.getElementsByClassName("resultBad")[0];
let resultGood = document.getElementsByClassName("resultGood")[0];
let repeatButton = document.getElementsByClassName("repeatGame");
let modalWindow = document.getElementsByClassName("modal-content")[0];
let count = 0;
let countCorrect = 0;
let countDraw = 0;
let footballers = [
  "РОНАЛДУ",
  "МЕССИ",
  "ИСКО",
  "ИБРАГИМОВИЧ",
  "МОДРИЧ",
  "ИНЬЕСТА",
  "ХОЛЛАНД",
  "МБАППЕ",
  "НЕЙМАР",
  "РАМОС",
  "САЛАХ",
  "АРШАВИН",
  "БЕНЗЕМА",
  "ВИНИСИУС",
  "БУСКЕТС",
  "КУРТУА",
  "ГРИЛИШ",
  "КАЗЕМИРО",
];

let countries = [
  "КЫРГЫЗСТАН",
  "РОССИЯ",
  "КАЗАХСТАН",
  "ЯПОНИЯ",
  "ЕГИПЕТ",
  "ИТАЛИЯ",
  "ИСПАНИЯ",
  "ГЕРМАНИЯ",
  "АНГЛИЯ",
  "ИРЛАНДИЯ",
  "ГАИТИ",
  "МОЗАМБИК",
  "ВЬЕТНАМ",
  "МАРОККО",
  "ХОРВАТИЯ",
  "БРАЗИЛИЯ",
  "КОРЕЯ",
  "ШВЕЙЦАРИЯ",
  "ЧЕХИЯ",
  "ТУНИС",
  "КАТАР",
  "АРГЕНТИНА",
  "МЕКСИКА",
  "ИНДИЯ",
  "ПОРТУГАЛИЯ",
  "НИДЕРЛАНДЫ",
  "КАНАДА",
  "ГАНА",
  "УЗБЕКИСТАН",
  "ЧИЛИ",
  "ГОНДУРАС",
  "АЛЖИР",
  "БАНГЛАДЕШ",
  "ИЗРАИЛЬ",
];

let cities = [
  "БИШКЕК",
  "КАЗАНЬ",
  "МОСКВА",
  "ПЕКИН",
  "ВАШИНГТОН",
  "МАДРИД",
  "КАРДИФФ",
  "МИЛАН",
  "ЛОНДОН",
  "ПАРИЖ",
  "СИЭТЛ",
  "РИМ",
  "ВЕНЕЦИЯ",
  "СТАМБУЛ",
  "АНКАРА",
  "АМСТЕРДАМ",
  "ПРАГА",
  "ВАНКУВЕР",
  "КЕЙПТАУН",
  "СИДНЕЙ",
  "ТОКИО",
  "ДЖАКАРТА",
  "СЕУЛ",
  "МЕХИКО",
  "ДАМАСК",
  "АФИНЫ",
  "ОСЛО",
  "ЦЮРИХ",
  "ЖЕНЕВА",
  "ДУБАЙ",
  "ВЕНА",
  "ДУБЛИН",
  "ТОРОНТО",
  "КАИР",
  "ЛИССАБОН",
  "ДОХА",
];

let animals = [
  "МЕДВЕДЬ",
  "ЖИРАФ",
  "КОТ",
  "СОБАКА",
  "ТИГР",
  "ЛЕВ",
  "КИТ",
  "АКУЛА",
  "ПАУК",
  "ОРЕЛ",
  "ГИЕНА",
  "ЛОШАДЬ",
  "КЕНГУРУ",
  "МУРАВЕЙ",
  "БАРАН",
  "ВАРАН",
  "КАБАН",
  "СВИНЬЯ",
  "ЗЕБРА",
  "ОБЕЗЬЯНА",
  "МЫШЬ",
  "ЛЕМУР",
  "ХОМЯК",
  "ЧЕРВЯК",
  "ПЕТУХ",
  "КУРИЦА",
  "БЕЛКА",
  "ВОЛК",
  "ЛИСА",
  "ЛОСЬ",
  "ЕЖИК",
  "СЛОН",
  "КОРОВА",
  "ОВЦА",
  "ГЕПАРД",
  "ЛЕОПАРД",
  "ЯГУАР",
  "ЗАЯЦ",
  "ДЕЛЬФИН",
  "НОСОРОГ",
  "БЕГЕМОТ",
  "СТРАУС",
  "КОАЛА",
  "КРОКОДИЛ",
  "АЛЛИГАТОР",
  "ПУМА",
  "БРОНЕНОСЕЦ",
  "ВЫДРА",
  "СОВА",
  "ОЛЕНЬ",
  "ПАНДА",
  "ПИНГВИН",
  "ТЮЛЕНЬ",
  "БУРУНДУК",
  "ПИТОН",
  "КОБРА",
  "АНАКОНДА",
  "ЖУРАВЛЬ",
  "ВОРОНА",
  "КАЛЬМАР",
  "ОСЬМИНОГ",
  "КРАБ",
  "РАК",
  "ЛОСОСЬ",
  "ТУНЕЦ",
  "ПОПУГАЙ",
  "СОКОЛ",
  "УТКОНОС",
  "ЯЩЕРИЦА",
  "ЧЕРЕПАХА",
  "БУЙВОЛ",
  "ЯСТРЕБ",
  "ЕНОТ",
  "БИЗОН",
  "ВЕРБЛЮД",
  "ЛЯГУШКА",
  "КРЫСА",
];

let ufc = [
  "МАКГРЕГОР",
  "НУРМАГОМЕДОВ",
  "МАХАЧЕВ",
  "ОЛИВЕЙРА",
  "ПОРЬЕ",
  "МАСВИДАЛЬ",
  "ДИАЗ",
  "АДЕСАНЬЯ",
  "УСМАН",
  "МИОЧИЧ",
  "КОРМЬЕ",
  "ДЖОНС",
  "БЕРНС",
  "СЕХУДО",
  "ФЕРГЮССОН",
  "ЧЕНДЛЕР",
  "АЛЬДО",
  "ПАВЛОВИЧ",
  "ПРОХАЗКА",
  "МОРЕНО",
  "ФИГЕРЕДО",
  "ЯН",
  "СТЕРЛИНГ",
  "ХОЛЛОУЭЙ",
  "ВОЛКАНОВСКИ",
  "ШЕВЧЕНКО",
  "НУНЬЕС",
  "ЖАНГ",
  "ЭДВАРДС",
  "ХИЛЛ",
  "ГРАССО",
  "ХОЛМ",
  "ПЕНЬЯ",
  "ПИМБЛЕТТ",
  "РОЗЕНСТРАЙК",
  "НАМАЮНАС",
  "ГЭЙДЖИ",
  "ГАН",
  "УОКЕР",
  "СЭНДХАГЕН",
  "ДИЛЛАШОУ",
  "ТОМПСОН",
  "ЧИМАЕВ",
  "КОВИНГТОН",
  "АНКАЛАЕВ",
  "КОСТА",
  "ГУСТАФССОН",
  "БЛЕЙДС",
  "ЛЬЮИС",
  "РОДРИГЕС",
  "ТЕЙШЕЙРА",
  "ПРАЙС",
  "КРУЗ",
  "ВОЛКОВ",
  "АНДРАДЕ",
  "УИТТАКЕР",
];

let actors = [
  "ДЖОНСОН",
  "СТЕТХЭМ",
  "ДИКАПРИО",
  "ФРИМАН",
  "СМИТ",
  "ДЕПП",
  "КЕРРИ",
  "ПИТТ",
  "ДАУНИ",
  "РИВЗ",
  "ХАРДИ",
  "ХЭНКС",
  "ХОПКИНС",
  "ПАЧИНО",
  "КРУЗ",
  "УИЛЛИС",
  "ДЖЕКМАН",
  "ДЖИЛЛЕНХОЛ",
  "ДЕЙМОН",
  "ГИБСОН",
  "МАЛКОВИЧ",
  "ХОФФМАН",
  "ДЖОЛИ",
  "ЙОХАНССОН",
  "КИДМАН",
  "РОБЕРТС",
  "ФОКС",
  "УОТСОН",
  "СТОУН",
  "АЛЬБА",
  "ТЕРОН",
];

let singers = [
  "ЭМИНЕМ",
  "БИБЕР",
  "МЕНДЕС",
  "ТИМБЕРЛЕЙК",
  "ГРАНДЕ",
  "ОРА",
  "ЛИПА",
  "ЛЕВИН",
  "ДЖОНАС",
  "ГОМЕС",
  "ШИРАН",
  "ПЕРРИ",
  "ПИТБУЛЬ",
  "ЛОПЕС",
  "АДЕЛЬ",
  "АГИЛЕРА",
  "ГАГА",
  "ШАКИРА",
  "РИАННА",
  "МАРЛИ",
  "БЕЙОНСЕ",
  "ПИНК",
  "МАРС",
  "СПИРС",
  "МАДОННА",
  "АЙЛИШ",
  "СТАЙЛС",
  "САЙРУС",
  "РОДРИГО",
  "ХОЛЗИ",
  "ЛОВАТО",
  "ПУТ",
  "КАБЕЛЛО",
  "ЛАРССОН",
  "КАПАЛДИ",
  "РЕКСА",
  "ИГЛЕСИАС",
  "КАРА",
  "ЭННМАРИ",
  "ПЭЙН",
  "АСТРИД",
  "МАКЛЕМОР",
  "ДЖЕЙЗИ",
  "ДЕРУЛО",
  "АТАБЕКОВ",
  "ХАЛИФА",
  "АВИЧИ",
  "ДРЕЙК",
  "МАЛОН",
  "ЛАМАР",
  "СИЯ",
];

let footballClubs = [
  "МАДРИД",
  "БАРСЕЛОНА",
  "АТЛЕТИКО",
  "ЧЕЛСИ",
  "ТОТТЕНХЭМ",
  "ЭВЕРТОН",
  "ЗЕНИТ",
  "РУБИН",
  "АРСЕНАЛ",
  "МАНСИТИ",
  "НЬЮКАСЛ",
  "ВАЛЕНСИЯ",
  "СЕВИЛЬЯ",
  "МИЛАН",
  "ИНТЕР",
  "ЮВЕНТУС",
  "АТАЛАНТА",
  "ЛАЦИО",
  "НАПОЛИ",
  "ЦСКА",
  "СПАРТАК",
  "УДИНЕЗЕ",
  "ЛЕСТЕР",
  "АТЛЕТИК",
  "МАЛЬОРКА",
  "БАВАРИЯ",
  "БОРУССИЯ",
  "РОМА",
  "ВУЛВЕРХЭМПТОН",
  "БРАЙТОН",
  "ЛОКОМОТИВ",
  "АЙНТРАХТ",
  "БЕТИС",
  "БЕНФИКА",
  "ПОРТУ",
  "ПСЖ",
  "СПОРТИНГ",
  "ГАЛАТАСАРАЙ",
  "МАРСЕЛЬ",
  "ФЕНЕРБАХЧЕ",
  "ЛИОН",
  "АЯКС",
  "ШАХТЕР",
  "ЛИЛЛЬ",
  "ФИОРЕНТИНА",
  "ПАЛЕРМО",
  "ЛИВЕРПУЛЬ",
  "МОНАКО",
  "РОСТОВ",
  "КРАСНОДАР",
  "БАЙЕР",
  "ТОРИНО",
  "ПСВ",
  "БОРДО",
  "ЛИДС",
  "БОЛОНЬЯ",
  "СЕЛТИК",
  "ЛЕВАНТЕ",
  "ВИЛЬЯРРЕАЛ",
  "МАЛАГА",
  "ТИЕМПО",
  "ФУЛХЭМ",
  "НОРВИЧ",
  "ОЛИМПИАКОС",
  "АНДЕРЛЕХТ",
  "САССУОЛО",
  "УТРЕХТ",
  "НИЦЦА",
  "ДЕПОРТИВО",
  "СЕЛЬТА",
  "ОСАСУНА",
  "ЖИРОНА",
  "ЭЙБАР",
  "РЕЙНДЖЕРС",
];

let arr_RU = [
  "А",
  "Б",
  "В",
  "Г",
  "Д",
  "Е",
  "Ё",
  "Ж",
  "З",
  "И",
  "Й",
  "К",
  "Л",
  "М",
  "Н",
  "О",
  "П",
  "Р",
  "С",
  "Т",
  "У",
  "Ф",
  "Х",
  "Ц",
  "Ч",
  "Ш",
  "Щ",
  "Ь",
  "Ы",
  "Ъ",
  "Э",
  "Ю",
  "Я",
];

let context = canvas.getContext("2d");
context.fillStyle = "black";
context.lineWidth = 2;
context.moveTo(0, 350);
context.lineTo(0, 0);
context.lineTo(250, 0);
context.lineTo(250, 40);
context.lineTo(230, 40);
context.lineTo(230, 20);
context.lineTo(20, 20);
context.lineTo(20, 350);
context.fill();

function drawHead() {
  context.strokeStyle = "orange";
  context.fillStyle = "orange";
  context.beginPath();
  context.arc(240, 70, 30, 0, Math.PI * 2, true);
  context.stroke();
  context.fill();
}

function drawBody() {
  context.beginPath();
  context.moveTo(235, 80);
  context.lineTo(235, 260);
  context.lineTo(245, 260);
  context.lineTo(245, 80);
  context.fill();
}

function drawLeftLeg() {
  context.beginPath();
  context.moveTo(180, 320);
  context.lineTo(180, 320);
  context.lineTo(235, 250);
  context.lineTo(242, 257);
  context.lineTo(187, 327);
  context.fill();
}

function drawRightLeg() {
  context.beginPath();
  context.moveTo(290, 320);
  context.lineTo(290, 320);
  context.lineTo(245, 250);
  context.lineTo(238, 257);
  context.lineTo(283, 327);
  context.fill();
}

function drawRightArm() {
  context.beginPath();
  context.moveTo(300, 120);
  context.lineTo(300, 120);
  context.lineTo(235, 160);
  context.lineTo(242, 170);
  context.lineTo(310, 125);
  context.fill();
}

function drawLeftArm() {
  context.beginPath();
  context.moveTo(175, 120);
  context.lineTo(175, 120);
  context.lineTo(235, 155);
  context.lineTo(235, 168);
  context.lineTo(165, 125);
  context.fill();
}

function massive(props) {
  let rand = Math.floor(Math.random() * props.length);
  let rValue = props[rand];
  let massiveValue = rValue.split("");
  return massiveValue;
}

function gameLetters(props) {
  massive(props);
  massiveValue = massive(props);
  for (let i = 0; i < massiveValue.length; i += 1) {
    let letter = massiveValue[i];
    let h1 = document.createElement("h1");
    h1.innerHTML = "<span>" + letter + "</span>";
    h1.className = "letter" + i;
    word.appendChild(h1);
    gameMob();
    // game();
  }
}

// function game() {
//   modalWindow.style.display = "none";
//   document.addEventListener("keyup", function (event) {
//     if (
//       event.key.charCodeAt() >= 1040 &&
//       event.key.charCodeAt() <= 1103 &&
//       arr_RU.includes(event.key.toUpperCase())
//     ) {
//       let index = arr_RU.indexOf(event.key.toUpperCase());
//       delete arr_RU[index];

//       for (let j = 0; j < massiveValue.length; j += 1) {
//         if (event.key.toUpperCase() === massiveValue[j]) {
//           countCorrect += 1;
//           count += 1;
//           let correctLetter = document.getElementsByClassName("letter" + j)[0];
//           correctLetter.style.color = "black";
//         }
//       }
//       if (count === massiveValue.length) {
//         resultGood.style.opacity = 1;
//         wrapper.style.opacity = 0.5;
//         repeatButton[0].style.cursor = "pointer";
//       }

//       if (countCorrect === 0) {
//         countDraw += 1;
//       }
//       countCorrect = 0;
//       switch (countDraw) {
//         case 1:
//           drawHead();
//           break;
//         case 2:
//           drawBody();
//           break;
//         case 3:
//           drawLeftArm();
//           break;
//         case 4:
//           drawRightArm();
//           break;
//         case 5:
//           drawLeftLeg();
//           break;
//         case 6:
//           drawRightLeg();
//           resultBad.style.opacity = 1;
//           wrapper.style.opacity = 0.5;
//           repeatButton[1].style.cursor = "pointer";
//           break;
//         default:
//           break;
//       }
//     }
//   });
// }

function repeatGame() {
  document.addEventListener("load", location.reload());
}

// МОДАЛЬНОЕ ОКНО
const modal = document.getElementById("myModal");

const btn = document.getElementById("myBtn");

const span = document.getElementsByClassName("close")[0];

document.addEventListener("load", function () {
  modal.style.display = "block";
});

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

let input = document.getElementsByClassName("inputLetter")[0];
function gameMob() {
  modalWindow.style.display = "none";
  input.style.display = "block";
  input.addEventListener("input", function () {
    if (
      input.value.charCodeAt() >= 1040 &&
      input.value.charCodeAt() <= 1103 &&
      arr_RU.includes(input.value.toUpperCase())
    ) {
      let index = arr_RU.indexOf(input.value.toUpperCase());
      delete arr_RU[index];

      for (let j = 0; j < massiveValue.length; j += 1) {
        if (input.value.toUpperCase() === massiveValue[j]) {
          countCorrect += 1;
          count += 1;
          let correctLetter = document.getElementsByClassName("letter" + j)[0];
          correctLetter.style.color = "black";
        }
      }
      if (count === massiveValue.length) {
        resultGood.style.opacity = 1;
        wrapper.style.opacity = 0.5;
        repeatButton[0].style.cursor = "pointer";
      }

      if (countCorrect === 0) {
        countDraw += 1;
      }
      countCorrect = 0;
      switch (countDraw) {
        case 1:
          drawHead();
          break;
        case 2:
          drawBody();
          break;
        case 3:
          drawLeftArm();
          break;
        case 4:
          drawRightArm();
          break;
        case 5:
          drawLeftLeg();
          break;
        case 6:
          drawRightLeg();
          resultBad.style.opacity = 1;
          wrapper.style.opacity = 0.5;
          repeatButton[1].style.cursor = "pointer";
          break;
        default:
          break;
      }
    }

    function deleteInput() {
      input.value = "";
    }
    setTimeout(deleteInput, 1000);
  });
}
