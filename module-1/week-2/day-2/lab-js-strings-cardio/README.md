![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | JS Strings Cardio

<br>

![](https://media.giphy.com/media/sadunCe1VECfm/giphy.gif)

<br>

<details>
  <summary>
   <h2>Learning Goals</h2>
  </summary>


  This exercise allows you to practice and apply the concepts and techniques taught in class. 

  Upon completion of this exercise, you will be able to:

  - Run JavaScript code from your IDE, using a local server to load it in the browser
  - Assign values to variables using assignment operators (`=` and `+=`)
  - Use string concatenation (`+`) or interpolation `${}` to join strings together
  - Access specific characters in a string and check the string length
  - Manipulate strings and substrings using string methods


  <br>

  <hr> 


</details>



## Introduction

This exercise aims to familiarize you with the string data type in JavaScript, which we have covered in class. Feel free to reference lesson materials, and don't limit yourself; be curious and use Google to explore multiple solutions.

<br>

## Getting Started
For this exercise, we will use VSCode and the Live Server extension to run the JavaScript code. To do it, follow these steps:



- Fork this repo

  

- Clone it to your machine

  

- Open the project folder in VSCode

  

- Once in VS Code, open the file using the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension. To do this, right-click on the `index.html` file and select **Open with Live Server**.

  

- A new browser window will open with the `index.html` file loaded. You can now start working on the exercise.

<br>



## Submission

- Upon completion, run the following commands:

```bash
git add .
git commit -m "Solved lab"
git push origin master
```

- Create a Pull Request and submit your assignment.


<br>


## Instructions

You should do all your work in the `index.js` file. The file is already linked to the `index.html` file, so you can open the `index.html` file in the browser and see the results of your work in the console.

<br>

Before you start writing any code, make sure to carefully read the instructions provided for each iteration.<br>

Remember to take the time to read instructions and understand what is expected before starting to code.

<br>



### Iteration 1 | Find index of a character

Write code that prints out to the console the index of the character “j” in a string "My favorite dessert is jello".

```js
const string1 = "My favorite dessert is jello";

// Your code here...
```


<br>


### Iteration 2 | Concatenate Characters

Make a new string with the text "COOL" by using only the characters available in the provided string `"ABCDEFGHJKLO"` and the bracket notation `str[i]` to access the characters.  

```js
const string2 = "ABCDEFGHJKLO";

// Your code here...
```

<br>

### Iteration 3 | Repeat a String and Concatenate
Using `stringThree`and method the [`.repeat()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat#Syntax), print out the text `NaNaNaNa Batman!` in the console.

For more information on how to use the `repeat()` method, check the documentation page [MDN `repeat()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat#Syntax).

```js
const string3 = "Na";

// Your code here...
```

<br>


### Iteration 4 | Fruit Slice

Using the string method `slice()`, access and print to the console the name of your favorite fruit from a given string `fruit`.

```js
const fruit = "banana apple mango orange lemon kiwi watermelon grapes pear pineapple";

// Your code here...
```

<br>


### Iteration 5 | Check If Strings Include a Word

Using the string method `include()`, check if the below strings with funny newspaper headlines include the word `"oxygen"`.

_If_ a string includes the word `"oxygen"` print to the console message `"The string includes the word 'oxygen'"`,<br>
_else_ print the message `"The string does not include the word 'oxygen'"`.

<br>

```js
const funnyHeadline1 = "Breathing oxygen linked to staying alive";
const funnyHeadline2 = "Students Cook & Serve Grandparents";


// Check the first headline
// Your code here ...


// Check the second headline
// Your code here ...

```

<br>


### Iteration 6 | String Length

Using `console.log()` print the following to the console: 
<br> 

**a)** The length of the string `string4`<br>
**b)** The last character in the string `string4`.

```js
const string4 = "zEAWrTC9EgtxmK9w1";


// a) Print the string length
// Your code here ...


// b) Print the last character in the string
// Your code here ...
```

<br>



**Happy coding!** :blue_heart:

<br>

## FAQs

<br>

<details>
  <summary>I am stuck in the exercise and don't know how to solve the problem or where to start.</summary>
  <br>


  If you are stuck in your code and don't know how to solve the problem or where to start, you should take a step back and try to form a clear question about the specific issue you are facing. This will help you narrow down the problem and come up with potential solutions.


  For example, is it a concept that you don't understand, or are you receiving an error message that you don't know how to fix? It is usually helpful to try to state the problem as clearly as possible, including any error messages you are receiving. This can help you communicate the issue to others and potentially get help from classmates or online resources. 


  Once you have a clear understanding of the problem, you will be able to start working toward the solution.

  [Back to top](#faqs)

</details>


<details>
  <summary>I am unable to push changes to the repository. What should I do?</summary>
  <br>


There are a couple of possible reasons why you may be unable to *push* changes to a Git repository:

1. **You have not committed your changes:** Before you can push your changes to the repository, you need to commit them using the `git commit` command. Make sure you have committed your changes and try pushing again. To do this, run the following terminal commands from the project folder:

  ```bash
git add .
git commit -m "Your commit message"
git push
  ```

2. **You do not have permission to push to the repository:** If you have cloned the repository directly from the main Ironhack repository without making a *Fork* first, you do not have write access to the repository.
   To check which remote repository you have cloned, run the following terminal command from the project folder:

  ```bash
git remote -v
  ```

If the link shown is the same as the main Ironhack repository, you will need to fork the repository to your GitHub account first and then clone your fork to your local machine to be able to push the changes.

**Note**: You should make a copy of your local code to avoid losing it in the process.

  [Back to top](#faqs)

</details>



<br>
