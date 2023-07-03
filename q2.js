function findTopNames(students) {
  const TopNames = students
  .filter(students => students.score > 8)
  .map(students => students.name);

  return TopNames;
}

const students1 = [
  { name: "john", score: 10 },
  { name: "jane", score: 9 },
  { name: "jim", score: 8 },
];

console.log(findTopNames(students1));

module.exports = findTopNames;
