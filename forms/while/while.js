//testing code here
/*
First program - create a form named as indicated below. 
> scenario:
form named 'while'
uses a while loop
each iteration, output sto console: 
This is loop iteration 1.
This is loop iteration 2.
etc.... 
The loop is now done.
*/

let halt = Number(prompt('Input number of iterations here:'))
i = 0

while (i < halt) {
  i += 1
  alert(`This is loop iteration ${i}.`)
  }
 
alert(`The loop is now done`)
  

