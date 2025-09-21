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
   height:number,
    size:number,
    fingers:Finger
};

type Humen = {
    name:string,
    side:"left"|"right",
    think?:(about:string) => void,
    body?:string,
    hands:{
        left:Hand,
        right:Hand
    },
    legs:{
        left:Leg,
        right:Leg
    };
};
const humens:Humen[] = [
    {
        name: "Marco Reus",
        side: "right",
        hands: {
            left: {
                fingers: []
            },
            right: {
                fingers: []
            }
        },
        legs: {
            left: {
                height: 0,
                size: 0,
                fingers: {
                    name: "",
                    height: 0,
                    isHasNail: false
                }
            },
            right: {
                height: 0,
                size: 0,
                fingers: {
                    name: "",
                    height: 0,
                    isHasNail: false
                }
            }
        }
    },
    {
        name: "Ludo Bagman",
        side: "left",
        think:function(about:string){
            console.log(about);
        },
        hands: {
            left: {
                fingers: []
            },
            right: {
                fingers: []
            }
        },
        legs: {
            left: {
                height: 0,
                size: 0,
                fingers: {
                    name: "",
                    height: 0,
                    isHasNail: false
                }
            },
            right: {
                height: 0,
                size: 0,
                fingers: {
                    name: "",
                    height: 0,
                    isHasNail: false
                }
            }
        }
    },
    {
        name: "Montenegro",
        side: "left",
        body:"PAAN",
        hands: {
            left: {
                fingers: []
            },
            right: {
                fingers: []
            }
        },
        legs: {
            left: {
                height: 0,
                size: 0,
                fingers: {
                    name: "",
                    height: 0,
                    isHasNail: false
                }
            },
            right: {
                height: 0,
                size: 0,
                fingers: {
                    name: "",
                    height: 0,
                    isHasNail: false
                }
            }
        }
    }
];
const humen:Humen = humens[2];

for (let i = 0; i < humens.length; i++) {
    const H:Humen = humens[i];
    // console.log(H);
    for(let key in H){
        console.log(key,H[key]);
    }
}
for (let i in humens) {
    const h:Humen = humens[i];
    // console.log(h);
}
let lside:string = "left";


lside = "right";


// console.log(humen["legs"][lside]["height"]);
// humen.legs.right.height
// for(let j in humen){
//     console.log (j)
// }
for (let j in humens){
    let hum:Humen = humens[j];
    console.log(typeof hum);
    if(typeof hum.think==="function"){
        // console.log(hum.name)
        hum.think("apple")
    }
}
// пройтись по всіх обєктах які є в хюменс знайти в хюмені параметр боді і записати в нього ключ від масива за яким зберігається обєкт

for (let k in humens){
    let muh:Humen = humens[k];
    if (typeof muh.body==="string"){
        muh.body=k;
    }
}