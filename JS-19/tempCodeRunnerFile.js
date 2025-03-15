let student1 = [
    {name:"Smith", rollNUmber:31, marks: 80},
    {name:"jenny", rollNUmber:15, marks: 69},
    {name:"JOhn", rollNUmber:16, marks: 90},
    {name:"Tiger", rollNUmber:7, marks: 55},
    ];


let ans4 = student1.filter(function(obj){
    return (obj.rollNUmber>15 && obj.marks>60);
})
console.log(ans4);