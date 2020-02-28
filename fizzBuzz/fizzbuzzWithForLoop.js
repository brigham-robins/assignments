const arr = []
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        arr.push('fizzBuzz')
    }
    else if (i % 3 === 0) {
        arr.push('fizz')
    }
    else if (i % 5 === 0) {
        arr.push('buzz')
    }
    else {
        arr.push(i)
    }
}
console.log(arr)

const fizzArr = arr.filter((item) => { return item.toString.startsWith("fizz" )})

console.log('fizzArr: ', fizzArr)
console.log('final output: ', arr)