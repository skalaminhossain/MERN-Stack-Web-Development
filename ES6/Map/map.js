const number = [20,40,60,80]

const names = ['Tamim', "Al amin" , 'Nazmul' , "Bakibilah"]

const objects = [
    {name : "Humayun Ahmed" , book : 3},
    {name : "jafar ikbal" , book : 5},
    {name : "Ayman sadiq" , book : 4}
]


const dubble = number.map((num , index , arr) => {
    return num * 2

})

console.log(dubble);

const newName = names.map((names , index , arr) => {
    return names.toUpperCase()
})

console.log(newName);

const newObjects = objects.map((items , index , arr) => {
    let nameUpper = items.name.toUpperCase()
    return nameUpper

})

console.log(newObjects);

