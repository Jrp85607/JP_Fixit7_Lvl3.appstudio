/*
Second program - in the same project create a new form named as indicated below. 
> scenario:
form named ‘for’
uses a for loop
created a ‘names’ array holding names given
each iteration, outputs a name from array, each on its’ own line.
Bob
Janet
Tom
etc.
*/

let names = ['Bob', 'Janet', 'Tom', 'Bob', 'Randy', 'Elizabeth', 'Kim', 'Nancy']


for (z = 0; z < names.length; z++) {
  alert(`${names[z]}`) 
  }
