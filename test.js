const participants = ['William', 'Albert', 'Jean', 'Marie', 'Anne'];



function draw(name) {
    const newArray = participants.filter((participant) => participant !== name )
    
    
    const result = newArray[0]
    
    return result
};



const test = draw('William');

console.log(test);
