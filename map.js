// Using a for loop
let nums = [1, 2, 3, 4, 5];
let results = [];
for (let num of nums) {
    results.push(num * 2);
}

console.log(results)


// Using map, the "complex" way()
const multByTwo = function (num){
    return num * 2;
}

const mapResults = nums.map(multByTwo);
console.log(mapResults);


// Simplified map()
const simplified = nums.map(function (num) { return num * 2});
console.log(simplified);


// Even more simplified map() using arrow function
const arrow = nums.map( num => num * 2);
console.log(arrow);

// With objects:
//  Each student in  the array is an object with four properties:
const students = [
    {
        id: 1,
        name: 'Mark',
        profession: 'Developer',
        skill: 'JavaScript'
    },
    {
        id: 2,
        name: 'Ariel',
        profession: 'Developer',
        skill: 'HTML'
    },
    {
        id: 3,
        name: 'Jason',
        profession: 'Developer',
        skill: 'CSS'
    },
];



const studentWidthIds = students.map(student => [student.name, student.id]);
console.log(studentWidthIds);

// Return the student names and id as objects with the id and name properties still intact with added age.
const studentWidth = students.map(student => ({ id: student.id, name: student.name, age: { 1: 32, 2: 25, 3: 28 }[student.id] }));
console.log(studentWidth);

