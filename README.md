# Random Password Generator

![Image](./assets/05-javascript-challenge-demo.png)

The first thing I wanted to do was work out how to get random characters from the four arrays already in the JavaScript file. After first writing a very big block of if/else statements, I started thinking about how to do this without masses of code, which would hopefully make the code execute more quickly. What I came up with was to concatenate the arrays and then shuffle them using the Fisher-Yates algorithm.

A prompt window is used to ask the user how many characters they would like their password to be. The text on the window informs them to ensure the password is longer than 10 characters and also 64 characters or fewer. If the user asks for an amount of characters that is under or over the limits, an alert window informs them of this and the prompt window opens again to let them make another attempt.

The getRandom() function combined with a for loop generates random characters corresponding to the user's preference from the prompt window. These characters are then pushed into a new array which is stringified using .toString() and the commas removed using .join(). The completed password is then displayed to the user via an alert window.

<https://bertiemoogle.github.io/Password-Generator/>

# Resubmission

Having taken on board the advice in the feedback from my first submission I decided to redo the challenge and resubmit it. This involved a more or less total rewrite of the JavaScript. The "Generate" button now opens a prompt window to ask the user for the length of the password. This is then followed by four more prompt windows asking whether to include special characters, numbers, uppercase letters and lowercase letters. I still use the method whereby the different arrays are concatenated and shuffled, but now, should the user choose not to include any of the arrays, they are simply not concatenated with the others. The resulting array is then shuffled using the Fisher-Yates algorithm. The length of the password chosen by the user is then used to make a new array which is then turned into a string and written to the text area.
