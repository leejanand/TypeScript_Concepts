interface Item {
  id: number;
  name: string;
  enabled: boolean;
}

const items: Item[] = [
  { id: 1, name: "A", enabled: true },
  { id: 2, name: "B", enabled: false },
  { id: 3, name: "C", enabled: true }
];

const enabledItems = items.filter(item => item.enabled);

console.log(enabledItems);

/********* Output *********
[
  { id: 1, name: 'A', enabled: true },      
  { id: 3, name: 'C', enabled: true }
]
*/