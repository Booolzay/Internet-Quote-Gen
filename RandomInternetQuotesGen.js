
let credit = ['Someone on the internet', 'Your mildly disturbing cousin', 'That wierd kid in your class'];
let quots = ['Sometimes when I sleep, I cant see','All men are equal before fish', 'We are all born mad. Some remain so'];
let  names= ['Andy Cornholder', 'Betty Phuckzer','Jenny Tayla'];



function randIdxGen(max){
    return Math.floor(Math.random() * max.length);
}


function randQuoteGen(q1,q2,q3){
    return `"${q1[randIdxGen(q1)]}" : ${q2[randIdxGen(q2)]} - ${q3[randIdxGen(q3)]}`;
    
}

console.log(randQuoteGen(quots,names,credit));