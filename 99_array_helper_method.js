// Array helper method

const colors = ['red', 'blue', 'green'];

//I. for()
//배열의 요소를 순회하며 한번씩 출력하기
// 0. 전통적인 for문
for(let i=0; colors.length>i; i++){
    console.log(colors[i]);
}

// 1. 순회문으로서의 for문
for(let color of colors){
    console.log(color);
}

// 2. forEach 헬퍼 메서드
const result = colors.forEach(color => {
    console.log(color);
});
//undefined
console.log(result);

//II. filter()
const numbers = [-20, -15, 5, 10];

const positiveNumber = [];
numbers.forEach(number => {
    if(number>0){
        positiveNumber.push(number);
    }
});

console.log(positiveNumber);

const positiveNumbers = numbers.filter(number => number > 0);

console.log(positiveNumbers);

//III. map()
//-> 순회를 하며, 내부의 모든 요소에 동일한 작업을 해야하는 경우
//-> 숫자 배열 -> 글자 배열, 동일한 데이터를 적용해야 하는 경우

const inputs = ['1', '5', '3', '6'];
const numberInputs = inputs.map(input => {
    return parseInt(input);
});

console.log(numberInputs);

let sum = 0;
numberInputs.forEach(num => {
    sum+=num;
});

console.log(sum);

//IV. reduce()
// - 순회를 하며, 내부의 모든 요소를 하나의 값으로 환원해야 하는 경우

sum = numberInputs.reduce((acc, b)=>{
    console.log('acc:' + acc); //누적값
    console.log('b:' + b);//현재값
    return acc + b;
});

console.log(sum);

//find, some, every
