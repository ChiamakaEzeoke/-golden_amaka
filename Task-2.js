//PROGRAM TO CALCULATE INTEREST
data = [{Principal: 2500, time:1.8}, {Principal: 1000, time:5}, 
    {Principal: 3000, time:1}, {Principal: 2000, time:3}];

//Intializing and Defining my function
function interestCalculator(myArray){
    let rate;
    for (let i = 0; i < myArray.length; i++){
        //To determine rate
        if (myArray[i].Principal >= 2500 &&  myArray[i].time > 1 && myArray[i].time < 3){
            myArray[i].rate = 3;
        }
        else if (myArray[i].Principal >= 2500 && myArray[i].time >= 3){
            myArray[i].rate = 4;
        }
        else if (myArray[i].Principal < 2500 || myArray[i].time <= 1){
            myArray[i].rate = 2;
        }
        else{
            myArray[i].rate = 1;
        }

        //Calculating the interest
        myArray[i].interest = (myArray[i].Principal * myArray[i].rate * myArray[i].time)/100;
           
    }
    interestData = console.log(myArray);
    return interestData;
}
//Paaing my Array to the function
interestCalculator(data);

