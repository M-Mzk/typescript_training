"use strict";
const username = "Meiyu";
const age = 23;
const createSelfIntroduction = (name, age) => {
    return `My name is ${name}, I'm ${age} years old.`;
};
const selfIntroduction = createSelfIntroduction(username, age);
console.log(selfIntroduction);
