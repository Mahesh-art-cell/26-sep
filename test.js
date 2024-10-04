//1
var str1 = "Mahesh       ";
var str2 = "         msd";
var res=str1.trimEnd().concat(" ",str2.trimStart()).toUpperCase();
console.log(res);

//2
var s = "i am TALLURI Mahesh from ktp";
var res = s.slice(5, 19).toLowerCase(),r=s.charAt(18);
console.log(res,r);

//3
var c="M";
var r=c.concat(" ","Talluri").toUpperCase(),r1=r[r.length-2]
console.log(r,r1);

//4
var s3="murthy";
console.log(s3);
var s4="koteswaramma";
console.log(s4);
var r4=(s3[0].toUpperCase()+s3.slice(1,3)).concat(s4.slice(-3,-1)+s4[s4.length-1].toUpperCase());
console.log(r4);

//5
var st="      mahesh talluri   ";
var st1="msd"
var r5=(st.trim().charAt(0).toUpperCase()+st.trim().slice(1,6)).concat(" ",st1.slice(0,2)+st1.charAt(2).toUpperCase());
console.log(r);

//6
var st2="hello there , how are you";
console.log(st2);
var r6=s.indexOf('are');
console.log(r6);

//7
var smartphone={
    brand:"apple",
    model:"iphone 15 pro max",
    price:"$1,199"
}
console.log(smartphone);
Object.seal(smartphone);
smartphone.price="$2,199";
console.log(smartphone);
console.log(Object.isSealed(smartphone));

//8
var book={
    title:"beloved",
    author:"toni morrison",
    publishedyear:1987
}
console.log(book);
Object.freeze(book);
book.publishedyear=1990;
console.log(book);
console.log(Object.isFrozen(book));


//9
var person={
    firstname:"talluri",
    lastname:"mahesh",
    age:22
}
console.log(Object.keys(person),Object.values(person));

//10
var course={
    title:"python",
    instructor:"john doe",
    duration:"6 weeks"
}
console.log(course);
console.log(Object.entries(course));
delete course.duration;
console.log(course);

//11
var employee={
    name:"mahesh",
    position:"full-stack",
    salary:50000
}
console.log(employee);
Object.seal(employee);
employee.position="front-end";
console.log(employee);
console.log(Object.keys(employee));
console.log(Object.isSealed(employee));

//12
var str3="i am talluri mahesh";
var r7=str3.slice(5,12).toUpperCase();
console.log(r);

//13
var str4="mahesh";
var r8=str4.toUpperCase().length;
console.log(r8);

//14
var str5="mahesh";
var r9=str5.charCodeAt(3);
console.log(r9);

//15
var str6="      virat kohli      ";
var res5=str6.trim().slice(1,4);
console.log(res5);

//16
var str7="MAHESH";
var str8="TALLURI";
var res6=str7.concat(" ",(str8.toLowerCase()));
console.log(res6);

//17
var s6="        Rohith Sharma";
var res7=s6.trimStart().slice(1)
console.log(res7);

//18
s7="Murthy";
var res8=s7.charAt(3).toUpperCase();
console.log(res8);

//19
var a=5;
var b=10;
var c=20;
var r4=a*b+c;
console.log(r);
console.log(r>100);
console.log(r<100);

//20
var x=8>5;
var y=12<20;
var z=x && y;
var z1=x || y;
console.log(z);
console.log(z1);

//21
var n1=25;
var n2=35;
var res= n1>n2 ?  "mahe":"msd";
var res1= n1<n2 ?  "mahe":"msd" 
console.log(res,res1);

//22
var m=15;
var n=10;
var r=m/n;
var r1=m-n;
console.log(r,r1);
var check1=(r % 2 ==0) ? "even":"odd";
var check2=(r1 % 2 ==0) ? "even":"odd";
console.log(check1,check2);

//23
var age=18;
var res= (22 >= age) ? "allow" : "not allowed";
var res1= (25 >== age)  ?  "allow" : "not allow";
console.log(res,res1);

let age = 18;

// Using equality operator (==)
if (age == 18) {
    console.log("age == 18 is true");
} else {
    console.log("age == 18 is false");
}

// Using strict equality operator (===)
if (age === 18) {
    console.log("age === 18 is true");
} else {
    console.log("age === 18 is false");
}

if (age >= 18) {
    console.log("age is greater than or equal to 18");
} else {
    console.log("age is less than 18");
}

