// 1. 插入排序

const INSERT_SORT = (arr) => {
    const length = arr.length;
    for (let i = 1; i < length; i++) {
        const tobeInsertValue = arr[i];
        let tobeAssignPlaceIndex = i - 1;
        while (tobeAssignPlaceIndex >= 0 && arr[tobeAssignPlaceIndex] > tobeInsertValue) {
            arr[tobeAssignPlaceIndex + 1] = arr[tobeAssignPlaceIndex];
            tobeAssignPlaceIndex--;
        }
        arr[tobeAssignPlaceIndex + 1] = tobeInsertValue;
    }
    return arr;
};

// 习题2.1-2
const INSERT_SORT_DESC = (arr) => {
    const length = arr.length;
    for (let i = 1; i < length; i++) {
        const tobeInsertValue = arr[i];
        let tobeAssignPlaceIndex = i - 1;
        while (tobeAssignPlaceIndex >= 0 && arr[tobeAssignPlaceIndex] < tobeInsertValue) {
            arr[tobeAssignPlaceIndex + 1] = arr[tobeAssignPlaceIndex];
            tobeAssignPlaceIndex--;
        }
        arr[tobeAssignPlaceIndex + 1] = tobeInsertValue;
    }
    return arr;
};


// 习题2.1-4
const TWO_NUMBER_ADD = (arr1, arr2) => {
    let len1 = arr1.length - 1, len2 = arr2.length - 1, carry = 0, result = [], sum = 0, index = 0;
    while (len1 >= 0 && len2 >= 0) {
        sum = arr1[len1] + arr2[len2] + carry;
        carry = sum >= 2 ? 1 : 0;
        result.push(sum >= 2 ? sum - 2 : sum);
        len1--;
        len2--
    }
    //todo: below two while merge
    while (len1 >= 0) {
        sum = carry + arr1[len1];
        carry = sum >= 2 ? 1 : 0;
        result.push(sum >= 2 ? sum - 2 : sum);
        len1--;
    }
    while (len2 >= 0) {
        sum = carry + arr2[len2];
        carry = sum >= 2 ? 1 : 0;
        result.push(sum >= 2 ? sum - 2 : sum);
        len2--;
    }
    if (carry > 0) {
        result.push(carry);
    }
    return result.reverse();

};

// 2. 归并排序

const MERGE = (A, p, q, r) => {
    let leftArr = A.slice(p, q + 1), rightArr = A.slice(q + 1, r + 1), leftIndex = 0, rightIndex = 0;
    leftArr.push(Number.MAX_VALUE);
    rightArr.push(Number.MAX_VALUE);
    for (let i = p; i <= r; i++) {
        if (leftArr[leftIndex] < rightArr[rightIndex]) {
            A[i] = leftArr[leftIndex++];
        } else {
            A[i] = rightArr[rightIndex++]
        }
    }
    return A;
};

const MERGE_SORT = A => {

    function midSort(A, p, r) {
        if (p < r) {
            const mid = Math.floor((r + p) / 2);
            midSort(A, p, mid);
            midSort(A, mid + 1, r);
            MERGE(A, p, mid, r);
        }
        return A;
    }
    return midSort(A, 0, A.length - 1);
};


// 习题2.3-7
//给定n个整数的集合S和正整数x，确定S中是否存在两个和正好为X的元素
// nlgn
const CHECK_SUMS = (S,x) =>{
    let cache = {},result = [];
    for(let i = 0,len = S.length;i<len;i++){
        let currVal = S[i];
        if(!isNaN(cache[currVal])){
            result.push([cache[currVal],i])
        }else{
            cache[x-currVal] = i;
        }
    }
    return result;
};

console.log(CHECK_SUMS([3, 4, 5, 6, 7, 8, 9], 9))

module.exports = {
    INSERT_SORT,
    INSERT_SORT_DESC,
    TWO_NUMBER_ADD,
    MERGE_SORT,
    CHECK_SUMS
};
