1. The value of i, 3, is returned. The variable i is declared with the var keyword, meaning its scope is the function its defined in. 3 is the value of i at the end of the file.
2. The value of discountedPrice, 150, is returned. The variable discountedPrice is declared with the var keyword, meaning its scope is the function its defined in. Its value is updated each time the for loop runs. 150 is the value of discountedPrice at the end of the file.
3. The value of finalPrice, 150, is returned. The variable finalPrice is declared with the var keyword, meaning its scope is the function its defined in. 150 is the value of finalPrice at the end of the file.
4. Nothing is outputted to the console. However, the function returns the array [50, 100, 150]. The variable discounted, declared with the var keyword, is updated everytime the for loop runs. This is the value returned by the function discountPrices.
5. ReferenceError: i is not defined; This error is caused because i was declared with the let keyword inside the for loop, meaning it can only be accessed within the block it is defined in. It cannot be referenced outside of the for loop.
6. ReferenceError: discountedPrice is not defined; This error is caused because discountedPrice was declared with the let keyword inside the for loop, meaning it can only be accessed within the block it is defined in. It cannot be referenced outside of the for loop.
7. The value of finalPrice, 150, is returned. The variable finalPrice is declared with the let keyword in the scope of the function, meaning the whole function is the block finalPrice can be accessed in. 150 is the value of finalPrice at the end of the file. 
8. Nothing is outputted to the console. However, the function returns the array [50, 100, 150]. The variable discounted, declared with the let keyword, is updated everytime the for loop runs. It is declared in the scope of the whole function, so it can be accessed throughout. discounted is the value returned by the function discountPrices.
9. ReferenceError: i is not defined; This error is caused because i was declared with the let keyword inside the for loop, meaning it can only be accessed within the block it is defined in. It cannot be referenced outside of the for loop.
10. The value of length, 3, is returned. The variable length is declared with the const keyword, meaning it cannot be reassigned after being assigned to prices.length. 3 is the value of length, which means it is also the value of prices.length at the start of the function. 
11. Nothing is outputted to the console. However, the function returns the array [50, 100, 150]. The variable discounted, declared with the var keyword, is updated everytime the for loop runs. This is the value returned by the function discountPrices.
12. A: student.name
    B: student["Grad Year"]
    C: student.greeting()
    D: student['Favorite Teacher'].name
    E: student.courseLoad[0]
13. A: '32': Since string concatenation is done with the "+" symbol, the 2 is converted to a string and concatenated with the 3, producing '32'.
    B: 1: Subtraction cannot be done between strings, so the '3' is converted to an integer.
    C: null: null is converted to 0.
    D: '3null': null is converted to a string and concatenated with '3'.
    E: 4: true is converted to 1.
    F: 0: false and null are both converted to 0.
    G: '3undefined': undefined is converted to the string 'undefined' and concatenated with '3'.
    H: NaN: undefined is converted to NaN (Not-a-Number). It is not a legal number that can be subtracted.
14. A: true: '2' is converted to an integer.
    B: false: '2' is greater than '1' alphabetically, so this statement is false.
    C: true: The string '2' is converted to the number 2.
    D: false: The === is a strict equality check that sees whether two values are of the same type. The 2 and '2' are of different types.
    E: false: true is converted to the number 1, which is not equal to 2.
    F: true: The === is a strict equality check that sees whether two values are of the same type. The Boolean() constructor returns the parameter with type boolean, so both true and Boolean(2) are of type boolean.
15. The == operator performs an equality comparison, doing type conversion if needed before the comparison. The === operator is a strict equality operator that checks equality without type conversion.
16. !!!!!!!!!!!!!!!!!!!!!!!!!!!!
17. 1
    4
    3
    2
    !!!!!!!!!!!!!!!! explanation