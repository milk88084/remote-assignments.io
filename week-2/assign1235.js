/* Assignment 1 */

function max(numbers) {
    // your code here
       
    let maxNumber = numbers[0]
      
      for(let i = 0; i < numbers.length; i++ ) {
        if(numbers[i] > maxNumber) {
          maxNumber = numbers[i] ;      
        }  
      }
      return maxNumber;
    }
    
    console.log(max([1, 2, 4, 5])); // expected output: 5
    console.log(max([5, 2, 7, 1, 6])); // expected output: 7


/* Assignment 2 */

function calculate(args) {
    // your code here
    let { n1 , n2 ,op} = args ;

    if(op === '+'){
        return n1 + n2;
    } else if (op === '-'){
        return n1 - n2;
    } else if( op === 'x') {
        return 'Not supported'
    } else {
        return 'undefined';
    }

    }
    console.log(calculate({ n1: 2, n2: 3, op: '+' })); // expected output: 5
    console.log(calculate({ n1: 5, n2: 2, op: '-' })); // expected output: 3
    console.log(calculate({ n1: 1, n2: 6, op: 'x' })); // expected output: 'Not supported'


/* Assignment 3 */

function calculate(data) {
    let total = 0;
    for (let i = 0; i < data.products.length ; i++) {
        total += data.products[i].price * (1-data.discount);
    } return total;
    
    // your code here
    }
    const discountedPrice = calculate({
    discount: 0.1,
    products: [
    {
    name: "Product 1",
    price: 100
    },
    {
    name: "Product 2",
    price: 700
    },
    {
    name: "Product 3",
    price: 250
    }
    ]
    });
    console.log(discountedPrice)


/* Assignment 5 */

 // your code here
function twoSum(nums, target) {
    
    for ( let i = 0; i < nums.length -1 ; i++) {
        for(let o = i+1; o < nums.length; o++) {
            if(nums[i]+nums[o] === target) {
                    return [i,o];
                } else {
                    return undefined;
                }
            }
        }
    }

    console.log(twoSum([2, 7, 11, 15], 9));
    /*
    For example:
    twoSum([2, 7, 11, 15], 9);
    Should returns:
    [0, 1]
    Because:
    nums[0] + nums[1] is 9
    
    */