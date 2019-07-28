//Q1,2,3,4,5,6,7 solved in recursion problem set

// 8) Write a program to find GCD (Greatest Common Divisor) or HCF (Highest Common Factor) of two numbers is the largest number that divides both of them using recursion.

//An efficient solution is to use Euclidean algorithm. The idea is, GCD of two numbers doesn’t change if smaller number is subtracted from a bigger number.

// function HCF(n1,n2){
//     var temp =0;
//     if(n1>n2){ //to make sure n2 is always more than n1
//         temp = n1;
//         n1 = n2;
//         n2 = temp;
//     }

//     if(n1!=n2){
//         HCF(n1,n2-n1)
//     }else{
//         console.log(`GCD = ${n1}`);
//     }
    
// }

// HCF(20,28) 

// 9) Write a program find GCD of the array elements given an array of numbers...................................................>>>!!!!!!!!!!!

function findGCD(arr){

    min = minVal(arr);
    for(i=1;i<=min;i++){
        for(j=0;j<arr.length;j++){
            if(arr[j]%i==0){
                temp = 1;
            }else{
                break;
            }
        }
        if(temp ==1){
            console.log(i);
        }
    }

}

function minVal(aarr){
    min = aarr[0];
    for(i=0;i<aarr.length;i++){
        if(aarr[i]<min){
            min = aarr[i];
        }
    }
    return min;
}

x = [20,28,32];

//10 Write a program given an array of ‘N’ numbers, find LCM of it.

// function findLCM(num1,num2){
//     //first find max
//     if(num1>num2){
//         var max = num1; 
//     }else{
//         max = num2;
//     }

//     var lcm = max;

//     while(1){
//         if(lcm%num1==0 && lcm%num2 == 0){
//             return lcm;
//         }else{
//             lcm += max;
//         }
        
//     }
// }

// console.log(findLCM(5,7));

