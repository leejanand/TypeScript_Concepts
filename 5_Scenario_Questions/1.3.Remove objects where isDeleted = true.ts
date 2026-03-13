interface Data {
  id: number;
  isDeleted: boolean;
}

const data: Data[] = [
  { id: 1, isDeleted: false },
  { id: 2, isDeleted: true }
];

const result = data.filter(d => !d.isDeleted);

console.log(result);

/********* Output *********
[
  { id: 1, isDeleted: false }
]
*/