function getMaxSubSum(arr){
    let currentSum = 0;
    let maxSum = 0;

    for (let item of arr){
        currentSum += item;
        maxSum = Math.max(currentSum, maxSum);
        if (currentSum < 0) currentSum = 0 //если текущая сумма отрицательная, мы не берем элемент и обнуляем
    }

    return maxSum;
}
alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
alert( getMaxSubSum([1, 2, 3]) ); // 6
alert( getMaxSubSum([-1, -2, -3]) ); // 0
