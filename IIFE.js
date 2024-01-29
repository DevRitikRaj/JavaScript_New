// ----------Intresting Things---------
//  IIFE ->Immediately Invoked Function Expressions


// This is named IIFE

(function chai(database_name){
    console.log(`DB Connectin ${database_name}`);
})('Mysql');



// This is UnNamed IIFE
( (database_name) =>{
    console.log(`DB Connectin ${database_name}`);
})('NoSql')
