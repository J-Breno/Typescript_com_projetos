"use strict";
let total1 = 200;
function isNumbre(value) {
    if (typeof value === "number")
        return true;
    else
        return false;
}
const button = document.querySelector("button");
button?.click();
function toNumber(value) {
    if (typeof value === "number")
        return value;
    else if (typeof value === "string")
        return Number(value);
    else
        throw Error("value deve ser um number | string");
}
