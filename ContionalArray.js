// const balance=1000;
// if(balance>500){
//     console.log(balance);
// }
// else if(balance>750){
//     console.log("less than 750")
// }
// else {
//     console.log("Less than 1000");
// }


// condtional like && and OR

const userLogin=true;
const debitCard=true

if(userLogin && debitCard){
    console.log("Allow to course");
}

const userLoginFromGoogle=false;
const userLoginFromEmail=true;

if(userLoginFromEmail || userLoginFromEmail){
    console.log("Allow to the course 2");


}

const month=4;

switch(month){
    case 1:
        console.log("Jan")
        break;

    
        case 2: 
        console.log("Feb");    
        break;

        case 3:
            console.log("March");
            break;

            case 4:
                console.log("April");
                break;

                default :
                break;
    }


    
