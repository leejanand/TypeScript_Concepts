const buttons = [
  { clickable: true },
  { clickable: true },
  { clickable: false }
];

const allClickable = buttons.every(btn => btn.clickable);

console.log(allClickable);
/********* Output *********
false
*/