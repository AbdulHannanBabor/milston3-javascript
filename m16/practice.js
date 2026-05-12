
// const colors={
//     red:'#ff0000',
//     green:'#00ff00',
//     blue:'#0000ff',
//     "golden rod":'#daa520'
// };

// console.log(colors["golden rod"]);



// const car ={make:'ford',model:'mustang',year:1969};

// car["passenger capacity"] = 5;

// console.log(car["passenger capacity"]);
// console.log(car);




// const stujdent ={

//     name: 'John Doe',
//     age: 20,
//     grade: 'A',
//     physics: {
//         score: 95,
//         teacher: 'Mr. Smith',
//         mark:30
//     },
        
//     };

    // console.log(stujdent.physics.score);
   
    
// string methods


//     const letter="Abdul Hannan Babor"
//     console.log(letter.length);

// let n="";

// for(let i=0;i<letter.length;i++){

// if(letter[i]=="a"||letter[i]=="A"){

//  n=letter[i];
// console.log(n);

// };

// };



    // const n=letter.includes("a");
    // console.log(n);

    // console.log(letter.toLowerCase());
    // console.log(letter.toUpperCase());
    // console.log(letter.split(" "));


//        const letter="Abdul Hannan Babor, I am a student of programming. I love coding and learning new things."
//     console.log(letter.length);

// let n="";

// for(let i=0;i<letter.length;i++){

// if(letter[i]=="a"||letter[i]=="e"||letter[i]=="i"||letter[i]=="o"||letter[i]=="u"||letter[i]=="A"||letter[i]=="E"||letter[i]=="I"||letter[i]=="O"||letter[i]=="U"){

//  n=letter[i];
// console.log(n);

// };

// };
  



// boro hater word code first letter 



function capitalizeFirstLetter(val) {

    return String(val).split(" ").map(word => word.charAt(0) + word.slice(1).toUpperCase()).join(" ");

}

var inpit="hello world from ok  javascript i love You";

console.log(capitalizeFirstLetter(inpit)); // "Hello world from ok  javascript i love You"




// count string number

// const a="hellow world";
// const c=a.split("o").length-1;
// console.log(c);



// let original = "HELLO WORLD ggf";
// let lowered = original.toLowerCase();
// let low = original.toUpperCase();

// console.log(lowered,"+different+",low); // "hello world g"
 // "HELLO WORLD GGF"

