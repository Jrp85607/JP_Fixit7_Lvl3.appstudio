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
  












//Class notes:
/*
Now for while loops. There are two types (first one more common): 

    while (condition) {
        // code statements here
    }
OR
    do {
        // code statements here
    } while (condition)
    
Two things about while loops
1. you have to change the condition manually in the loop so it eventually 
evaluates to false and the loop stops running - infinite loops are bad
2. the 'do' version always runs at least once. Why? 

Together lets write this using a while loop: 
> write a while loop that continues to count from 
1 up (by 1) until the user wants to quit. 
eg. 1, 2, 3, 4, ......
> Use a simple while loop.
Hint: you need a stopping condition that changes inside the loop
*/


/* ***********************************
Complete this exercise if we have time: 
Say you are entering data into a database. You enter the same data over and over. 
A loop would be great, but you don't know ahead of time how many data items 
you have to enter. You just find that out when you sit down to enter them. 
Think about which While loop you should use. 
Then get the data from a user and put it into an array named 
'employees'. 
    Here is the data to use: 
    Mary
    Edith
    Tom
*/



