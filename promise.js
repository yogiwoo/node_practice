function xyz(){
    let x=true;
    return new Promise((res,rej)=>{
        if(x){
            res("kjdifdhuajhsndwui")
        }
        else rej("jaiusndkjnd errorrrrrrrr")
    })
}

async function display(){
    let x=await xyz();
    console.log(x)
}

display()