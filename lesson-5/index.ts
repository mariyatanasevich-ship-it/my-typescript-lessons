function Lorem(param:string){
    if(param==="lorem Ipsum"){
        return true
    }
    return false;
}

function Pf(param:string){
    return (param==="lorem Ipsum") ? true : false;
}

function Pf1(param:string){
    return (param==="lorem Ipsum");
}

function Pf2(param:string){
    return (param==="lorem Ipsum" || param==="")? "true" : "false";
}