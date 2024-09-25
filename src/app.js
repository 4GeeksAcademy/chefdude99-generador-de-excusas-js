/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = [" Dalila", " Akira", " Turron", " William"];
let action = [" escupio", " comio", " vomito", " golpeo"];
let what = [" el carro", " el play", " la cocina", " el telefono"];
let when = [
  " mientras gabriela dormia",
  " durante el almuerzo",
  " antes de irse",
  " luego de clases",
  " anoche en la fiesta"
];

window.onload = function() {
  let randomWho = Math.floor(Math.random() * 4);
  let randomAction = Math.floor(Math.random() * 4);
  let randomWhat = Math.floor(Math.random() * 4);
  let randomWhen = Math.floor(Math.random() * 4);
  document.getElementById("who").innerHTML =
    "<span>" + who[randomWho] + "</span>";
  document.getElementById("action").innerHTML =
    "<span>" + action[randomAction] + "</span>";
  document.getElementById("what").innerHTML =
    "<span>" + what[randomWhat] + "</span>";
  document.getElementById("when").innerHTML =
    "<span>" + when[randomWhen] + "</span>";
};
