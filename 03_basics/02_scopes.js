if (true) {
    let a = 10
    const b = 20   
    // console.log("Inner " , a);
    
}


// for (let index = 0; index < array.length; index++) {
//     const element = array[index]; 
// }



// NESTED SCOPES (FUNCTION KE ANDAR FUNCTION)
     
function  one () {
    const username = "Sujal"

    function two() {
        const website = "youtube"
        console.log(username);  
    }
    two()
}
one()



if (true) {
    const name = "Sujal"
    if (name === "Sujal") {
        const web = " Youtube"
        console.log(name + web);
        
    }
}