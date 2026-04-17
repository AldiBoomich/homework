for (let i = 1; i < 20; i++) {
  if (i % 4 == 0) {
    continue;
  }
  console.log(i);
}
j = +prompt("введите число");
result = 1;
for (let k = 1; k <= j; k++) {
  result = result * k;
}
console.log(result);

let board = "";
for (let l = 1; l <= 8; l++) {
  for (let m = 1; m <= 8; m++) {
    if ((l + m) % 2 === 0) {
      board += "*";
    } else {
      board += "#";
    }
  }
  board += "\n";
}
console.log(board);
