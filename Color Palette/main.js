const button = document.getElementById("submit");
const colorName = document.getElementById("colorName");

button.addEventListener("click", function () {

  const colorPalette = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "pink",
    "white",
    "black",
  ];

  const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
  // colorPallette uzunluğu kadar random bir sayı üretir. floor fonksiyonu sayıyı tam sayıya çevirir. ve random sayı colorPalette indexini belirler, indexe denk gelen renk değerini color değişkenine atar.

  document.body.style.backgroundColor = color; // body'in rengini color değişkeninin değerini atar.

  colorName.innerHTML = color; // colorName id sine sahip dive color değerini yazar.
});
