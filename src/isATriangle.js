export function triangle(side1, side2, side3) {
  if (!side1 || !side2 || !side3) {
    return "error";
  } else if (side1 + side2 <= side3 || side3 + side2 <= side1 || side1 + side3 <= side2) {
    return "not";
  } else if (side1 === side2 && side1 != side3 || side2 === side3 && side1 != side3 || side1 === side3 && side1 != side2) {
    return "isosceles";
  } else if (side1 != side2 && side1 != side3 && side2 != side3) {
    return "scalene";
  } else if (side1 === side2 && side1 === side3) {
    return "equilateral";
  } else {
    return "error";
  }
}
