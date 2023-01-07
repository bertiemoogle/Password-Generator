# Random Password Generator

![Image](./assets/05-javascript-challenge-demo.png)

The first thing I wanted to do was work out how to get random characters from the four arrays already in the JavaScript file. After first writing a very big block of if/else statements, I started thinking about how to do this without masses of code, which would hopefully make the code execute more quickly. What I came up with was to concatenate the arrays and then shuffle them using the Fisher-Yates algorithm.

A prompt window is used to ask the user how many characters they would like their password to be. The text on the window informs them to ensure the password is longer than 10 characters and also 64 characters or fewer. If the user asks for an amount of characters that is under or over the limits, an alert window informs them of this and the prompt window opens again to let them make another attempt.

The getRandom() function combined with a for loop generates random characters corresponding to the user's preference from the prompt window. These characters are then pushed into a new array which is stringified using .toString() and the commas removed using .join(). The completed password is then displayed to the user via an alert window.

<https://bertiemoogle.github.io/Password-Generator/>
