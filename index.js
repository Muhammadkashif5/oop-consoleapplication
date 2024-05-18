#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log("\x1b[1m\x1b[36m"); // Set text to bold and cyan color
console.log("****************************************************************");
console.log("*    OOP Introduction with a TypeScript Console Application    *");
console.log("****************************************************************");
console.log("\x1b[0m"); // Reset text formatting
class Personality {
    type;
    constructor(type) {
        this.type = type;
    }
    static determinePersonality(choice) {
        switch (choice) {
            case '1':
                return new Personality("Extrovert");
            case '2':
                return new Personality("Introvert");
            default:
                return new Personality("Mystery");
        }
    }
}
class User {
    name;
    personality;
    constructor(name, personality) {
        this.name = name;
        this.personality = personality;
    }
    displayInfo() {
        console.log(chalk.blueBright(`\nYour Name is: ${this.name}`));
        console.log(chalk.yellowBright(`Your Personality is: ${this.personality.type}`));
        console.log(chalk.redBright("-".repeat(60)));
    }
}
const programStart = async () => {
    const { personalityChoice } = await inquirer.prompt({
        name: "personalityChoice",
        type: "input",
        message: "Type 1 if you like to talk to others and type 2 if you would rather to keep to yourself:",
    });
    const personality = Personality.determinePersonality(personalityChoice);
    console.log(chalk.greenBright(`You are: ${personality.type}`));
    console.log(chalk.greenBright("-".repeat(60)));
    const { name } = await inquirer.prompt({
        name: "name",
        type: "input",
        message: "What is your name:",
    });
    const user = new User(name, personality);
    user.displayInfo();
};
programStart();
// "tsc && node index.js" use to RUN the code on terminal.
