let total1: string | number = 200;

function isNumbre(value: string | number) {
  if (typeof value === "number") return true;
  else return false;
}

const button = document.querySelector("button");
button?.click();

function toNumber(value: string | number) {
  if (typeof value === "number") return value;
  else if (typeof value === "string") return Number(value);
  else throw Error("value deve ser um number | string");
}
