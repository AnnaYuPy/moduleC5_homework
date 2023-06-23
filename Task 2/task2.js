const parser = new DOMParser();
const jsonString = `
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
`;
var myList = [];
const data = JSON.parse(jsonString);
const listNode = data.list;
for(let value of listNode) {
const nameNode = value.name;
const ageNode = value.age;
const profNode = value.prof;
const result = {name: nameNode, age: Number(ageNode), prof: profNode};
myList.push(result);
}
console.log(myList);



//{
//  list: [
//    { name: 'Petr', age: 20, prof: 'mechanic' },
//    { name: 'Vova', age: 60, prof: 'pilot' },
//  ]
//}
