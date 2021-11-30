const readline = require("readline");

const rl = readline.createInterface({input: process.stdin, output: process.stdout});

let ansObj = {};

rl.question("What's your name? ", answer => {
  ansObj.name = answer;
  rl.question("What's an activity you like doing? ", answer => {
    ansObj.activity = answer;
    rl.question("What do you like listening to while doing that? ", answer => {
      ansObj.listen = answer;
      rl.question("Which meal is your favourite? (eg: dinner, brumch, etc.)? ", answer => {
        ansObj.meal = answer;
        rl.question("What's your favourite thing to eat for that meal? ", answer => {
          ansObj.eat = answer;
          rl.question("Which sport is your absolute favourite? ", answer => {
            ansObj.sport = answer;
            rl.question("What is your superpower? In a few words, tell us what you're amazing at! ", answer => {
              ansObj.power = answer;
              let { name, activity, listen, meal, eat, sport, power } = ansObj;
              console.log(`${name} loves listening to ${listen} while ${activity}, devouring ${eat} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${power}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});