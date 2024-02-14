const jsonStr = { "greeting": "hello" };
console.log(jsonStr);
const  jsonObjToStrung= JSON.stringify(jsonStr);
console.log(jsonObjToStrung);
const data='{"firstName":"Omar","lastName":"Faruk","greeting":"Hello"}'
const json=JSON.parse(data);
console.log(json)