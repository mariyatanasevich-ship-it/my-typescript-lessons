type Task = {
    id:number;
    title:string;
    description:string;
    link?:string;
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
        description:"Learn how to create Objects and types and manage them across the code"
    },
    {
        id:2,
        title:"Learn how to install libraries",
        description:"install React and tailwind"
    },
    {
        id:3,
        title:"Learn how to read documentation",
        description:"install some libraries like zushtand on top of react"
    }
];
