//MY PROGRAM TO REPRESENT NUMBERS WITH STRINGS

//DECLARING FUNCTION
function symbolRep(num){
    let i;
    let array = [];
    for  (i = 1; i <= num; i++){
        if ((i % 3 === 0) && (i % 5 === 0 ) && (i % 2 === 0)){
            array.push( "yu-gi-oh");
        }
        else if ((i % 2 === 0) && (i % 5 === 0)){
            array.push("yu-oh");
        }
        else if ((i % 2 === 0) && (i % 3 === 0)){
            array.push("yu-gi");
        }
        else if ((i % 3 === 0) && (i % 5 === 0)){
            array.push("gi-oh");
        }
        else if (i % 5 === 0){
            array.push("oh");
        }
        else if (i % 3 === 0){
            array.push("gi");
        }
        else if (i % 2 === 0){
            array.push( "yu");
        }
        else{
            array.push(i);
        }
        
        
    }
    myArray = console.log(array);
    //RETURNING THE ARRAY
    return myArray;
}
//Your Parameter
symbolRep(100);

//My Parameter
console.log("My Parameter")
symbolRep(60);