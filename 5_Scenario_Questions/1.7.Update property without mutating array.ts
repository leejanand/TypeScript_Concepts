const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" }
];

const updated = users.map(u =>
  u.id === 1 ? { ...u, name: "Johnny" } : u
);

console.log(updated);
/********* Output *********
 * [
 *   { id: 1, name: 'Johnny' },
 *   { id: 2, name: 'Jane' }
 * ]
 */
