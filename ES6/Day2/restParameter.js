function calculation(...numbers){
    let sum = 0
    for(let i of numbers){
        sum = sum + i
    }
    console.log(sum);
}

calculation(1,2,3,6,7)

// another Example

function numbers(...nums){
    let num = []
    num.push(nums)
    console.log(num)

}
numbers(4,55,3,6,3,6)