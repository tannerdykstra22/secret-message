let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you',
'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what',
'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn',
'JavaScript'];

// Step 1, 2
secretMessage.pop();
console.log(secretMessage.length);

// Step 3
secretMessage.push('to', 'Program');

// Step 4
secretMessage[7] = 'right';

// Step 5
secretMessage.shift();

// // Step 6, 7
secretMessage.splice(0, 0, 'Programming');
secretMessage.splice(6, 5, 'know');

// // Step 8
console.log(secretMessage.join());
