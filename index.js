 let katzDeli = []
 
function takeANumber(katzDeli, name) {
  
   katzDeli.push(`${name}`);
  return (`Welcome, ${name}. You are number ${katzDeli.length} in line.`);
}

function nowServing(katzDeli) {
  let i = 0
  while (i < katzDeli.length) {
    i++
  }
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else
  return (`Currently serving ${katzDeli.shift()}.`);
}

<<<<<<< HEAD
let line = []
function currentLine(katzDeli) {
  let i = 0
  while (i < katzDeli.length) {
    line.push(` `+[i+1]+`. `  + katzDeli[i])
    i++
  }
  if (katzDeli.length === 0) {
    return "The line is currently empty."
  } else
  return(`The line is currently:` + line)
}
=======

function currentLine(line) {
  let i = 0
  while (i < line.length) {
    i++
}
if (line.length === 0) {
  return "The line is currently empty."
}
  else if (line > 0) {
  return (`The line is currently ${katzDeli.length}. ${name}`)
}
  
}
>>>>>>> c7f33362d1cacde17ee94249d1e3374121608126
