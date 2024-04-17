import inquirer from "inquirer"
const answers : {
    sentence:string
} = await inquirer.prompt([
    {
        name:"sentence",
        type:"input",
        message:"Enter your sentence to count the words"
    }
])
 const words = answers.sentence.trim().split(" ")
// let Sentence = "hello my name is ahsan"
//  const words =Sentence.trim().split(" ")
 console.log(words)
 console.log(`Your sentence word count is ${words.length}`)