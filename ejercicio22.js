const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

let j = 0;

for (const food of foodSchedule) {
  if (food.isVegan == false) {
    food.name = fruits[j];
    food.isVegan = true;
    j++;
  }
}

console.log(foodSchedule);
