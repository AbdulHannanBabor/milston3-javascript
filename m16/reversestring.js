
// const str="Abdul Hannan";
// const reverse=str.split(" ").reverse().join(" ");
// console.log(reverse);
// const age=21;
// const school="notterdam college";
// const isStudent=true;
// console.log(age, school, isStudent);
// const subjects=["Math", "Science", "Islamic Studies","English","Coding","Business","Malitery Starategy" ];
// console.log(subjects);

    const person={
    name :"Abdul Hannan",
    age :21,
    School:"Notterdam College",
    isStudent:true,

    subjects:["Math", "Science", "Islamic Studies","English","Coding","Business","Malitery Starategy" ],

    life:{
        birth:1996,
        country:"Bangladesh",
        city:"Dhaka"
    },

    work:function(){
        // console.log("I am working as a Software Engineer");
        return "Software Engineer";
}
};

const a=person.name;
console.log(a);
console.log(person.age);

const aa=person.work();
console.log(aa);