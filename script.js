const inputElement = document.querySelector('input');
const infoButtonElement = document.querySelector('.info-button');
const feedbackButtonElement = document.querySelector('.feedback-button');
const infoDivElement = document.querySelector('.info');
const inputDivElement = document.querySelector('.big-input-div');
const tutorialDivElement = document.querySelector('.tutorial-text');
const tutorialParElement = document.querySelector('.tutorial-paragraph');
const firstSectionElement = document.querySelector('section');

window.addEventListener('scroll', () => {
  let rect = inputDivElement.getBoundingClientRect();
  if (rect.top < 40) {
    inputDivElement.classList.add('fixed-position');
    firstSectionElement.add('smaller-size')
  }
//   let rect2 = tutorialDivElement.getBoundingClientRect();
//   if (rect2.top < 40) {
//     inputDivElement.classList.add('fixed-position');
//   }
});

infoButtonElement.addEventListener('click', () => {
  if (infoDivElement.classList.contains('invisible')) {
    infoDivElement.classList.remove('invisible');
    infoDivElement.classList.add('visible');
  } else {
    infoDivElement.classList.add('invisible');
    infoDivElement.classList.remove('visible');
  }
});

window.addEventListener('keydown', createTutorial);

function createTutorial(event) {
  if (event.keyCode === 9 || event.keyCode === 13) {
    event.preventDefault();
    const input = 'How to ' + inputElement.value;
    callModel(input);
    tutorialDivElement.classList.add('opaque');
    tutorialDivElement.classList.remove('transparent');
    //printTutorial
  }
}

function callModel(i) {
  console.log(i);
  fetchText();
}

async function fetchText() {
  let response = await fetch('example.txt');
  console.log(response.status); // 200
  console.log(response.statusText); // OK
  if (response.status === 200) {
    let data = await response.text();
    tutorialParElement.innerHTML = data; // handle data
  }
}

const tutorialText = `Kauf eventuell fertiges Brennholz. Für ein Kaminfeuer zuhause ist Brennholz aus dem Baumarkt die beste Option. Auch bei offenen Lagerfeuern kann es eine Alternative sein, da du dir die Zeit und den Aufwand sparen kannst, im Wald nach geeignetem Brennholz zu suchen, das du dann möglicherweise gar nicht findest. Im Baumarkt oder bei Privatanbietern bekommst du fertiges Holz, das du nur noch selbst anzünden musst.Wenn du in einem Naturschutzgebiet unterwegs bist, informiere dich vorher genau, wo, wie und womit du Feuer machen darfst. 
Eventuell darfst du dort gar nicht durchs Unterholz kraxeln und selbst sammeln.
Benutz spezielles künstliches Feuerholz für dekorative Feuer. Diese künstlichen Holzscheite enthalten Sägespäne und Paraffinwachs, sind leicht anzuzünden und brennen sehr sauber. Man braucht keinen Zunder oder ähnliches und sie hinterlassen nicht viel Dreck, allerdings geben sie auch nicht die gleiche Wärme ab wie ein normales Holzfeuer.
Für ein Kaminfeuer, das einfach nur schön aussehen soll und nicht wärmen muss, sind diese künstlichen Scheite eine prima Alternative.
Such für ein natürliches Feuer nach trockenem Kleinzeug, das du als Zunder benutzen kannst. Als Zunder bezeichnet man alle leicht entflammbaren Materialien, mit denen sich ein Feuer entzünden lässt. Geeignet sind zum Beispiel trockene Gräser, Blätter, Baumrinde (insbesondere von Birken) oder Zeitungspapier. Zur Not brennen übrigens auch Nachos, wenn du für ein gutes Feuer etwas von deinem Snack opfern magst.[3]
Du kannst vorbereiteten Zunder kaufen oder auch deinen eigenen für den nächsten Ausflug vorbereiten.
Such trockene, mittelgroße Zweige als Anmachholz. Anmachholz ist Material, das relativ leicht brennen wird, wenn es mit brennendem Zunder in Kontakt kommt, sich aber nicht oder schlecht direkt anzünden lässt. Such dafür nach kleinen Stöcken und Zweigen und größeren Stücken Baumrinde. Achte darauf, dass alles komplett trocken ist.
Zerkleinere größere Hölzer mit einer Axt oder einem Messer, um Anmachholz zu bekommen.`;
