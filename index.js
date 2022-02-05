function add(a,b){
   return a + b;
}

function subtract(a,b){
  return a - b;
}

function multiply(a,b){
   return a * b;
}

function divide(a,b){
   return a/b;
}

function increment(n){
	let newn = n++;
     return newn;
}

function decrement(n){
     let newn = n--;
     return newn;
}

function makeInt(string){
	let newInt = parseInt(string);
	return newInt;
}

function preserveDecimal(string){
	let newDec = parseFloat(string);
	return newDec;
}