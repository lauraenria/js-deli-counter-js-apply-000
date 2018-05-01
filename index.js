<<<<<<< HEAD
function takeANumber(array, name) {
    array.push(name);
    return `Welcome, ${name}. You are number ${array.length} in line.`
}

function nowServing(array) {
    if (array.length <= 0) {
        return "There is nobody waiting to be served!";
    }
    return `Currently serving ${array.shift()}.`;
}

function currentLine(array) {
    let str = "";
    if (array.length === 0) {
        return "The line is currently empty.";
    }
    let result = array.map( (name, index) => {
      return ` ${index+1}. ${name}`
    })



    return `The line is currently:${result}`;
=======


function takeANumber(katzDeli, name) {
  if(katzDeli <=0){
    return "The line is currently empty.";
  }
  return true;
>>>>>>> d7ea1c853b2a28fa6987e0736ea60da941381887
}
