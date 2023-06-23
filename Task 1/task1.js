const parser = new DOMParser();
const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;
var myList = [];
const xmlDOM = parser.parseFromString(xmlString, 'text/xml');
const listNode = xmlDOM.querySelector('list');
//const iterator = document.createNodeIterator(listNode);
const studentNode = listNode.querySelectorAll('student');
for(let value of studentNode) {
const nameNode = value.querySelector('name');
const firstNode = nameNode.querySelector('first');
const secondNode = nameNode.querySelector('second');
const ageNode = value.querySelector('age');
const profNode = value.querySelector('prof');
const result = {name: firstNode.textContent + ' ' + secondNode.textContent,   age: Number(ageNode.textContent), prof: profNode.textContent, lang: nameNode.getAttribute('lang')}
myList.push(result);
}
console.log(myList);



//{
//  list: [
//    { name: 'Ivan Ivanov', age: 35, prof: 'teacher', lang: 'en' },
//    { name: 'Петр Петров', age: 58, prof: 'driver', lang: 'ru' },
//  ]
//}
