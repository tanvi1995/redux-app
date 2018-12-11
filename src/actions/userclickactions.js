//user represents which is clciked  and is assigned to payload

const clickUserAction = function(user){
    console.log("I am action and will receive user");
    console.log(user.first);
    
    
    return({
        type:"USER_CLICKED",
        payload:user
    })
}

export default clickUserAction;