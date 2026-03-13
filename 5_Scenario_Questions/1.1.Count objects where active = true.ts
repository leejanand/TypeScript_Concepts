interface User {
  id: number;
  active: boolean;
}

const users: User[] = [
  { id: 1, active: true },
  { id: 2, active: false },
  { id: 3, active: true }
];

const count = users.filter(u => u.active).length;

console.log(count); // 2
