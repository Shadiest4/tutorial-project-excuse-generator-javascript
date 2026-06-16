const who = ["The dog", "My grandma", "The mailman", "My bird"];
const action = ["ate", "peed", "crushed", "broke"];
const what = ["my homework", "my phone", "the car"];
const when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

function generateExcuse() {
  const randomWho = who[Math.floor(Math.random() * who.length)];
  const randomAction = action[Math.floor(Math.random() * action.length)];
  const randomWhat = what[Math.floor(Math.random() * what.length)];
  const randomWhen = when[Math.floor(Math.random() * when.length)];
  return `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`;
}