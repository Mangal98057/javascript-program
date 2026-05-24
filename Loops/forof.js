/*JavaScript for...of Loop

The for...of loop is used to iterate over values of iterable objects like:

Arrays
Strings
Maps
Sets
NodeLists

It gives the actual value directly.*/

const arr = ['mangal', 'seema', 'manish']

let text = ""

for (const x of arr) {
    text += x + " "
    console.log(text)
}