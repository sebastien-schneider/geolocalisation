const objectiveData = [
  {
    coords: [43.5618758, 5.3774537],
    title: "Cyril",
    description: "Cyril",
    image: "",
    audio: "",
    question: "Cyril",
    choices: ["NEXT"],
    answer: "NEXT",
  },
  {
    coords: [43.562144, 5.3771412],
    title: "Parents Cyril",
    description: "Parents Cyril",
    image: "",
    audio: "",
    question: "Parents Cyril",
    choices: ["NEXT"],
    answer: "NEXT",
  },
  {
    coords: [43.5619068, 5.376468],
    title: "chemin des abricotiers",
    description: "chemin des abricotiers",
    image: "",
    audio: "",
    question: "Enigme 0",
    choices: ["NEXT"],
    answer: "NEXT",
  },
  {
    coords: [43.5686589, 5.354234],
    title: "Mairie D'eguilles",
    description: "Mairie D'eguilles",
    image: "",
    audio: "",
    question: "Enigme 1",
    choices: ["NEXT"],
    answer: "NEXT",
  },
  {
    coords: [43.5695755, 5.3542296],
    title: "Cave du Grand Logis",
    description: "Cave du Grand Logis",
    image: "",
    audio: "",
    question: "Enigme 2",
    choices: ["NEXT"],
    answer: "NEXT",
  },
  {
    coords: [43.5687258, 5.3547487],
    title: "L'Epi d'Or",
    description: "L'Epi d'Or",
    image: "./assets/images/objectives/boulangerie.jpg",
    audio: "",
    question: "Enigme 3",
    choices: ["NEXT"],
    answer: "NEXT",
  },
  {
    coords: [43.5689807, 5.3546114],
    title: "Ecurie du grand logis",
    description: "Ecurie du grand logis",
    image: "",
    audio: "",
    question: "Enigme 4",
    choices: ["NEXT"],
    answer: "NEXT",
  },
  {
    coords: [43.5683567, 5.3526293],
    title: "Parc 1",
    description: "Parc 1",
    image: "",
    audio: "",
    question: "Enigme 5a",
    choices: ["NEXT"],
    answer: "NEXT",
  },
  {
    coords: [43.568623, 5.3528331],
    title: "Parc 2",
    description: "Parc 2",
    image: "",
    audio: "",
    question: "Enigme 5b",
    choices: ["NEXT"],
    answer: "NEXT",
  },
  {
    coords: [43.5682187, 5.3529082],
    title: "Parc entrée",
    description: "Parc entrée",
    image: "",
    audio: "",
    question: "Enigme 5c",
    choices: ["NEXT"],
    answer: "NEXT",
  },
  {
    coords: [43.5685394, 5.3529592],
    title: "parc 4",
    description: "parc 4",
    image: "",
    audio: "",
    question: "Enigme 5d",
    choices: ["NEXT"],
    answer: "NEXT",
  },
  {
    coords: [43.5684987, 5.3544427],
    title: "devant la plaque Gabriel Payeur",
    description: "devant la plaque Gabriel Payeur",
    image: "./assets/images/objectives/chapelle2.jpg",
    audio: "./assets/sons/cloches.mp3",
    question: "Enigme 6",
    choices: ["NEXT"],
    answer: "NEXT",
  },
  /**
  {
    coords: [47.52577, 7.47893],
    title: "Boulangerie de Hagenthal-le-bas",
    description:
      "Bienvenue à la boulangerie de Hagenthal-le-bas.<br> On y trouve des pâtisseries, des viennoiseries, du pain, des brioches, des petits gâteux et même des glaces maison.",
    image: "./assets/images/objectives/boulangerie.jpg",
    audio: "",
    question: "Que ne trouve-t-on pas à la boulangerie d'Hagenthal-le-bas ?",
    choices: ["Croissants", "Oeufs", "Eclair au café", "Baguette"],
    answer: "Oeufs",
  },
  {
    coords: [47.52396, 7.476726],
    title: "Château de Hagenthal-le-bas",
    description:
      "Le Château d’Hagenthal a appartenu aux Eptingen. L’histoire de ce Château reste malgré tout un mystère. On lit qu’il y aurait eu deux châteaux, l’un dans la commune d’Hagenthal-le-Haut et l’autre à Hagenthal-le-Bas. Faute d’étude précise, le château situé sur la commune d’Hagenthal-le-Bas est la pièce maîtresse d’un mystère, symbolique jumeau solitaire d’un endroit où tout semble fonctionner par deux.",
    image: "./assets/images/objectives/chateau-hagenthal.jpeg",
    audio: "",
    question: "A qui a appartenu le château de Hagenthal ?",
    choices: ["Aux Eptingen", "Aux Chirac", "Aux Sarkozy", "Aux Macron"],
    answer: "Aux Eptingen",
  },
  {
    coords: [47.52067, 7.48012],
    title: "Chapelle de l'Exaltation de la Sainte-Croix",
    description:
      "À l'origine de la chapelle Sainte-Croix se trouve... une croix ! Erigée là par le couple Schoeffel de Hagenthal-le-Bas en 1832, afin d'obtenir la guérison de leur petite fille sourde et muette. Malgré le décès de l'enfant, la croix est toujours présente en 1842 quand un jeune bossu, Théophile Glermann, se retrouve libéré de son infirmité, un soir de tempête, au pied du monument. Au fil des passages, des dons sont déposés au pied de la croix. C'est alors que la famille Schoeffel décide d'y construire un lieu de culte.",
    image: "./assets/images/objectives/chapelle2.jpg",
    audio: "./assets/sons/cloches.mp3",
    question:
      "En quelle année fut construite la chapelle de l'Exaltation Sainte-Croix ?",
    choices: ["1832", "1842", "1852", "1862"],
    answer: "1842",
  },
   */
]

/************* Partie stockage local *************/

if (!localStorage.popupIndex) {
  localStorage.popupIndex = "0"
}
if (!localStorage.score) {
  localStorage.score = "0"
}

/************* Partie Map *************/

/* Création du conteneur de la carte */
let myMap = new L.map("mapDiv").locate({ setView: true, maxZoom: 16 })

/* Variables couche OpenStreetMap */
let osmUrl = "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
let osmOptions = {
  attribution:
    '&copy; <a href=/"https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}
/* Variables couche satellite Geoportail */
let satUrl =
  "https://wxs.ign.fr/{ignApiKey}/geoportail/wmts?" +
  "&REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&TILEMATRIXSET=PM" +
  "&LAYER={ignLayer}&STYLE={style}&FORMAT={format}" +
  "&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}"
let satOptions = {
  ignApiKey: "pratique",
  ignLayer: "ORTHOIMAGERY.ORTHOPHOTOS",
  style: "normal",
  format: "image/jpeg",
  service: "WMTS",
}

let osmLayer
/* Création de la couche OpenStreetMap */
let layer = new L.TileLayer(osmUrl, osmOptions)
/* Ajoute la couche au conteneur de la carte */
myMap.addLayer(layer)
osmLayer = true

/* Changement de layer au clic sur le bouton */
let layerToggleButton = document.getElementById("layerToggler")
function toggleLayer() {
  if (osmLayer) {
    myMap.addLayer(new L.TileLayer(satUrl, satOptions))
    layerToggleButton.style.backgroundImage =
      "url(./assets/images/icons/osm.png)"
    osmLayer = false
  } else {
    myMap.addLayer(new L.TileLayer(osmUrl, osmOptions))
    layerToggleButton.style.backgroundImage =
      "url(./assets/images/icons/sat.png)"
    osmLayer = true
  }
}
layerToggleButton.onclick = toggleLayer

/************* Partie Popup + Marker *************/

/* Initialisation variables nécessaires à l'objectif en cours et sa popup */

const geoThreshold = 10
let popupContent = document.getElementById("popupInfo")
let popup = new L.Popup()
let popupIndex = parseInt(localStorage.popupIndex)
let goalCoords = []
let goalMarker
let popupTitle = document.getElementById("popupTitle")
let popupDescription = document.getElementById("popupDescription")
let popupImgSrc = document.getElementById("popupImage")
let popupQuestion = document.getElementById("question")
let popupAnswers = document.getElementById("answers")
let popupAudio = document.getElementById("popupAudio")
let buttonId = ""
let correctAnswer
let score = parseInt(localStorage.score)

let popupEndContent = document.getElementById("popupEnd")
let closeEndPopup = document.getElementById("closeEndPopupBtn")
let popupEndScore = document.getElementById("score")

let popupTransitionContent = document.getElementById("popupTransition")
let closeTransitionPopup = document.getElementById("closeTransitionPopupBtn")
let nextObjective = document.getElementById("nextObjective")

/* Fonction d'affichage de la popup description */

function displayPopup() {
  popupLoadContent()
  popup.setContent(popupContent)
  popupContent.style.display = "block"
}

/* Fonction d'affichage de la popup de transition */

function displayTransitionPopup() {
  popup.setContent(popupTransitionContent)
  popupTransitionContent.style.display = "block"
  nextObjective.innerText = objectiveData[popupIndex].title
}

/* Fonction d'affichage de la popup de fin */

function displayEndPopup() {
  popup.setContent(popupEndContent)
  popupEndContent.style.display = "block"
  popupEndScore.innerText =
    "Votre score est de " + score + "/" + objectiveData.length + "."
}

// Add Goal Marker

function createMarker() {
  goalCoords = objectiveData[popupIndex].coords
  goalMarker = L.circle(goalCoords, {
    color: "blue",
    fillColor: "lightblue",
    fillOpacity: 0.5,
    radius: geoThreshold,
  })
    .addTo(myMap)
    .on("click", () => {
      displayPopup()
    })
}
createMarker()

// Add Img src, Title, Description, ...
function popupLoadContent() {
  popupTitle.innerText = objectiveData[popupIndex].title
  popupDescription.innerHTML = objectiveData[popupIndex].description
  popupImgSrc.src = objectiveData[popupIndex].image
  popupQuestion.innerHTML = objectiveData[popupIndex].question
  correctAnswer = objectiveData[popupIndex].answer
  let audioSrc = objectiveData[popupIndex].audio

  /* Fonction récupérant l'audio lorsqu'il y a lieu */
  if (audioSrc) {
    popupAudio.src = audioSrc
  }

  /* Fonction récupérant les différentes réponses proposées et vérifiant la réponse cliquée*/

  let answerButtonsList = ""
  let choices = objectiveData[popupIndex].choices
  for (let i = 0; i < choices.length; i++) {
    let buttonHTML =
      '<button id="answer' +
      [i] +
      '" class="btn btn-primary mb-3 me-3 answerButtons" onclick="onAnswerClick(this.id)">' +
      choices[i] +
      "</button>"
    answerButtonsList += buttonHTML
    popupAnswers.innerHTML = answerButtonsList
  }
}
popupLoadContent()

/* Fonction de fermeture de la popup description */

function closeDescriptionPopup() {
  popupContent.style.display = "none"
}

/* Fonction de fermeture de la popup objectif suivant */

function closeTransitionPopupBtn() {
  popupTransitionContent.style.display = "none"
}

/* Fonction de fermeture de la popup de fin */

function closeEndPopupBtn() {
  popupEndContent.style.display = "none"
}

/* Fermeture de la popup description au click sur le bouton X */

let closeBtn = document.getElementById("closePopupBtn")
closeBtn.onclick = closeDescriptionPopup

/* Fermeture de la popup de transition au click sur le bouton X */

let closeTransitionBtn = document.getElementById("closeTransitionPopupBtn")
closeTransitionBtn.onclick = closeTransitionPopupBtn

/* Fermeture de la popup de fin au click sur le bouton X */

let closeEndBtn = document.getElementById("closeEndPopupBtn")
closeEndBtn.onclick = closeEndPopupBtn

/* Définition de la popup */

function onAnswerClick(id) {
  buttonId = id
  let answerClicked = document.getElementById(buttonId).textContent
  if (answerClicked === objectiveData[popupIndex].answer) {
    score++
    localStorage.score = score.toString()
  }

  closeDescriptionPopup()
  popupIndex++
  localStorage.popupIndex = popupIndex.toString()

  /* Annulation de la génération des Markers / popups s'il n'y a plus d'objectif // Affichage de la fenêtre de résultats */

  if (popupIndex < objectiveData.length) {
    displayTransitionPopup()
    myMap.removeLayer(goalMarker)
    createMarker()
  } else {
    closeDescriptionPopup()
    displayEndPopup()
  }
}

/************* Partie Toolbar *************/

/* Info button */

let infoPopup = document.getElementById("infoPopup")
let infoBtn = document.getElementById("infoBtn")
infoBtn.addEventListener("click", function () {
  infoPopup.style.display = "inline-flex"
  let infoObjectiveText =
    "Vous êtes à l'objectif " + popupIndex + "/" + objectiveData.length + "."
  let textToolbarInfo = document.getElementById("textToolbarInfo")
  textToolbarInfo.innerText = infoObjectiveText
  let infoScoreText =
    "Votre score est de " + score + "/" + objectiveData.length + "."
  let scoreToolbarInfo = document.getElementById("scoreToolbarInfo")
  scoreToolbarInfo.innerText = infoScoreText
})
let closeToolbarBtn = document.getElementById("closeToolbarPopupBtn")
closeToolbarBtn.addEventListener("click", function () {
  infoPopup.style.display = "none"
})

/************* Partie Localisation *************/

/* Les options pour affiner la localisation */
let options = {
  enableHighAccuracy: true,
  timeout: 5000,
}

/* Définition de l'icône du marker sur la position de l'utilisateur */
let userPositionIcon = L.icon({
  iconUrl: "./assets/images/icons/rond-vert.png",
  iconSize: [30, 30],
  iconAnchor: [15, 15],
})

/* Initialise le marker à la position de l'utilisateur de l'utilisateur */
let positionMarker
let currentPos

function getDistance(start, goal) {
  // return distance in meters
  var lon1 = toRadian(start[1]),
    lat1 = toRadian(start[0]),
    lon2 = toRadian(goal[1]),
    lat2 = toRadian(goal[0])

  var deltaLat = lat2 - lat1
  var deltaLon = lon2 - lon1

  var a =
    Math.pow(Math.sin(deltaLat / 2), 2) +
    Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(deltaLon / 2), 2)
  var c = 2 * Math.asin(Math.sqrt(a))
  var EARTH_RADIUS = 6371
  return c * EARTH_RADIUS * 1000
}
function toRadian(degree) {
  return (degree * Math.PI) / 180
}

function success(pos) {
  currentPos = [pos.coords.latitude, pos.coords.longitude]
  if (!positionMarker) {
    positionMarker = L.marker(currentPos, { icon: userPositionIcon }).addTo(
      myMap
    )
  } else {
    let newLat = currentPos[0]
    let newLng = currentPos[1]
    let newLatLng = new L.LatLng(newLat, newLng)
    positionMarker.setLatLng(newLatLng)
  }
  let objectiveDistance = getDistance(currentPos, goalCoords)
  if (objectiveDistance < geoThreshold) {
    displayPopup()
  }
}

function error(err) {
  console.warn(`ERREUR (${err.code}): ${err.message}`)
}

navigator.geolocation.watchPosition(success, error, options)

let centerMapBtn = document.getElementById("centerMap")
function centerMapOnUser() {
  myMap.flyTo(currentPos)
}
centerMapBtn.onclick = centerMapOnUser
