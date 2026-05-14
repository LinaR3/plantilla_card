import "bootstrap";
import "./style.css";

window.onload = function() {
  // 1. Número aleatorio entre 1 y 4 para el palo usando la fucnion Math.random
  let randomSuitNumber = Math.floor(Math.random() * 4) + 1;
  
  // 2. Número aleatorio entre 0 y 12 para el valor de la carta
  let randomValueNumber = Math.floor(Math.random() * 13);

  // Aqui es la integracion del mapeeo de palos según el número generado
  const suits = {
    1: { class: "diamond", symbol: "♦" },
    2: { class: "heart", symbol: "♥" },
    3: { class: "spade", symbol: "♠" },
    4: { class: "club", symbol: "♣" }
  };
//Aqui hago una lista de los palos/valores que se van a enseñar o que van a ser los aleatorios
  const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  // Seleccionar elementos del DOM
  const card = document.querySelector(".card");
  const numberElement = document.querySelector(".number");
  const suitIcons = document.querySelectorAll(".suit-icon");

  // Obtener el palo seleccionado
  const selectedSuit = suits[randomSuitNumber];
  card.classList.add(selectedSuit.class);
  numberElement.innerHTML = values[randomValueNumber];
  suitIcons.forEach(icon => {
    icon.innerHTML = selectedSuit.symbol;
  });
};