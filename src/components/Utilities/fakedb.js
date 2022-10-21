
//use local storage to
const addToDb = time =>{

    let breakTime = {};

    
    const quantity = breakTime[time];
    if(quantity){
        const newQuantity = quantity + 1;
        breakTime[time] = newQuantity;
        // localStorage.setItem(time, newQuantity);
    }
    else{
        breakTime[time] = 1;
        // localStorage.setItem(time, 1);
    }
    localStorage.setItem("brack-time", JSON.stringify(breakTime));
    
}
const getStoredCart = ()=>{
    let breakTime = {};

    const storedCart = localStorage.getItem('brack-time');
    if(storedCart){
        breakTime = JSON.parse(storedCart);
    }
    return breakTime;
}



export{addToDb, getStoredCart}