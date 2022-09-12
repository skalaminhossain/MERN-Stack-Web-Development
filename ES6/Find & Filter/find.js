const number = [1,2,4,3,5,6,8]

const student = [
    {name : 'rahim', number : 70 , subject : "math"},
    {name : 'karim', number : 80 , subject : "bangla"},
    {name : 'rahim', number : 65 , subject : "English"},
    {name : 'rahim', number : 50 , subject : "math"},
    {name : 'rahim', number : 90 , subject : "Bangla"}
]

const value = number.find((num) => {
    return num == 4
})

console.log(value);

const findStudent = student.find((student) => {
    let name = student.name == "rahim"
    return name
})

console.log(findStudent.number);

//filter

const result = student.filter(result => {
    return result.number >=70 ;
})

console.log(result);