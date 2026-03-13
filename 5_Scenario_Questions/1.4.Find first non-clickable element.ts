const elements = [
  { id: 1, clickable: true },
  { id: 2, clickable: false },
  { id: 3, clickable: true }
];

const firstNonClickable = elements.find(el => !el.clickable);

console.log(firstNonClickable);

/********* Output *********
{ id: 2, clickable: false }
*/
