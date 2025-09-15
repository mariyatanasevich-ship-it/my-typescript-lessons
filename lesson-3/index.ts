type Task = {
    id:number;
    title:string;
    description?:string;
    link?:string;
    tags?:string[];
    reqests?: {
        create:() => void
        read:() => void
        update:() => void
        delete:() => void
    }
}
let myItems:Task[] = [
    {
        id:1,
        title:"Learn Objects and types",
        description:"Learn how to create Objects and types and manage them across the code",
        tags:["tag1"]
    },
    {
        id:2,
        title:"Learn how to install libraries",
        description:"install React and tailwind",
        reqests:{
            create: function (){},
            read: function (){},
            update: function (){},
            delete: function (){},
        }
    },
    {
        id:3,
        title:"Learn how to read documentation",
        description:"install some libraries like zushtand on top of react"
    }
];
let newTask:Task = {
    id:1,  
    title:"My first created object"

}
type Title = string;
let First:Title = "sthklo";
// console.log(myItems[0].tags)
// строврити обект людина та дати їй влавтивости голова,тило,руки,ноги

type Finger = {
    name:string,
    height:number,
    isHasNail:boolean,
}
type Hand = {
    fingers?:Finger[]
}
type Leg = {
    name:string,
    height:number,
    size:number,
    fingers:Finger
};

type Humen = {
    name:string,
    side:string,
    think?:(about:string) => void,
    body:string,
    hands:{
        left:Hand,
        right:Hand
    },
    legs:{
        left:Leg,
        right:leg
    };
};
const humen1:Humen[] = [];