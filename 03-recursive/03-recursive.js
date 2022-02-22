///soal nomor 1
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [0, 3, 1, 10, 22];

function sumOfArray(array) {

    let arr = [...array];
    let sum = arr[0];

    if(arr.length === 1){
        return sum;
    }

    sum += arr[1];
    arr.shift();
    arr[0] = sum;

    let sumArr = sumOfArray(arr);
    return sumArr;

}

console.log(sumOfArray(arr1));
console.log(sumOfArray(arr2));
console.log("")

