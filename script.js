let courses = [
    { name: "Courses in England", prices: [0, 100] }, 
    { name: "Courses in Germany", prices: [500, null] }, 
    { name: "Courses in Italy", prices: [100, 200] }, 
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];

// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null, 200];
let requiredRange2 = [50, 450];
let requiredRange3 = [200, null];




let res = courses.filter((item, index) =>{
    let array = requiredRange3;
    if(array[0] === null && array[1] !== null){
        if(item.prices[1] <= array[1] && item.prices[1] !== null){
            return item;
        }
    }else if(array[0] !== null && array[1] !== null){
        if(item.prices[0] >= array[0] && item.prices[1] <= array[1] && (item.prices[0] <= array[1] )){
            return item;
        }
    }if(array[0] !== null && array[1] === null){
        if(item.prices[0] >= array[0] && item.prices[1] <= array[1] && (item.prices[0] <= array[0]) ){
            return item;
        }
    }

    
});
console.log(res);