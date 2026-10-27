const arr = [
  { id: 1, name: "A" },
  { id: 1, name: "A" },
  { id: 2, name: "B" }
];

const unique = Array.from(
  new Map(arr.map(item => [item.id, item])).values()
);

console.log(unique);
/********* Output *********
[
    { id: 1, name: 'A' },
    { id: 2, name: 'B' }
]
*/
// Explanation:
// 1. The code defines an array of objects called `arr`, where each object has an `id` and a `name` property.
// 2. To get unique objects based on the `id` property, the code uses a combination of `Map` and `Array.from()`.
// 3. The `arr.map(item => [item.id, item])` creates an array of key-value pairs, where the key is the `id` and the value is the entire object.
// 4. The `new Map()` constructor takes this array of key-value pairs and creates a Map object, which automatically handles duplicate keys (in this case, duplicate `id`s) by keeping only the last occurrence of each key.
// 5. Finally, `Array.from(...values())` converts the values of the Map back into an array, resulting in an array of unique objects based on their `id`.