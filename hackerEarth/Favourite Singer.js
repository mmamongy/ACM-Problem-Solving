/**
 * Problem
Bob has a playlist of 
 songs, each song has a singer associated with it (denoted by an integer)

Favourite singer of Bob is the one whose songs are the most on the playlist

Count the number of Favourite Singers of Bob

Input Format 

The first line contains an integer 
, denoting the number of songs in Bob's playlist.

The following input contains 
 integers, 
 integer denoting the singer of the 
 song.

Output Format

Output a single integer, the number of favourite singers of Bob

Note: Use 64 bit data type

Constraints


Sample Input
5
1 1 2 2 4
Sample Output
2

 * 
 */

// Sample code to perform I/O:

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});

process.stdin.on("end", function () {
    main(stdin_input);
});

function main(input) {
    let r = getNum(input);
    process.stdout.write(r.toString());       // Writing output to STDOUT
}

function getNum(input) {
    let max = 0;
    let maxRepeated = 0;
    let size = input.split('\n');
    let length = parseInt(size[0]);
    let singers = size[1].split(' ').map(Number);
    let singersSongs = new Map();
    singers.forEach(sing => {
        let repeats = singersSongs.get(sing) || 0;
        repeats++;
        singersSongs.set(sing, repeats);
        if (repeats > max) {
            maxRepeated = 1;
            max = repeats;
        } else if (repeats == max) {
            maxRepeated++;
        }

    });

    return maxRepeated;
}

// Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail

// Write your code here
