console.log("-----Voice assistant-----");

const commands = [
  "Hello my name is",
  "What is my name",
  "Add" + "to my todo",
  "Remove" + "from my todo",
  "What is on my todo?",
  "What day is it today?",
  "what is",
  "Set a timer for",
  "Give me random fact",
];
//it isn't const because we will add new things here
const todo = [];
const facts = [
  'In Britain, saying "Good morning, Mr. Magpie, how\'s your wife?" to a lone magpie is a way to avoid bad luck.',
  "According to Polish superstition, would-be bakers should stay standing the entire time their cakes are in the oven.",
  "In some parts of Asia, you should avoid the number four if you want to stay happy and lucky.",
  "In Korea, people believe ghosts and evil spirits are drawn in by the sound of whistling through an evening breeze and bring bad luck.",
  "Those practicing Hinduism believe cutting hair and nails at night will leave dirt around the home.",
  "While itchy palms might feel annoying at the time, many people believe it means you will receive a huge amount of money in the future.",
  "According to superstition from France and Germany, if you don't look the other people in the eye during a toast, you are asking for seven years of bad luck!",
  "If you're in Spain or Greece, don't get married, go on vacation, or move house on a Tuesday, because it's an unlucky day.",
  "In Turkey people are encouraged to make the first move with their right foot or hand. This is because the left side is considered to be a sign of bad luck.",
  "In 2021, eating caramel candies became an important part of the ritual to bring good luck in Argentinian soccer.",
  "Flowers of any color might seem like a beautiful gift for a loved one, but yellow flowers could bring bad luck in Russia.",
  "Every player dreams of scoring 100 in a cricket match, and if you end the game on 87, you've reached the Devil's number.",
  "Tucking your thumbs inside your fists as you walk through a cemetery is believed to keep evil spirits away and avoid inviting bad luck from the dead.",
  "If you spend New Year's Eve in Spain, you might take part in the tradition of the “twelve lucky grapes.”",
  "Women in Rwanda are told that eating goat meat will make them hairy and could cause them to grow a beard.",
  "Four family members have around 98% of their bodies covered in hair and were awarded the record on February 1, 2000.",
  "David Rush can fit 100 lit candles in his mouth.",
  "The longest fingernail of all time is over six feet long.",
  "On June 16, 2009, Elisa Cagnoni produced the world's loudest female burp, with a total of 107.0 dB. That is similar to hearing a jackhammer from a distance of 3 ft 3 in (1 meter).",
  "On June 18, 2017, cat Bibi managed to have ten dice stacked on his paw without moving.",
  "The furthest distance to squirt milk from an eye socket was 9′ 2″.",
  "Sixty-six people crammed onto a 42-foot long surfboard.",
  "Anne Woods holds the record for most “gurning” world championship wins.",
  "Gary Turner has the world's stretchiest skin!",
  "The longest metal coil passed through the nose is nearly 12 feet long.",
  "The world's largest pizza had an area of 13,580.28 ft².",
  "Kim Goodman can pop her eyeballs 12 mm from their sockets.",
  "The world's longest-lasting kiss took over 58 hours.",
  "The largest object removed from a human skull was a drill bit.",
  "Ruan Liangming endured being covered in around 637,000 bees.",
  "The heaviest weight lifted by tongue was the same as a three-year-old.",
  "A parrot Zac can open 35 canned drinks in one minute.",
  "The world's fastest bathtub reached an average speed of 116.08 miles per hour.",
  "412 people simultaneously washed their dishes.",
  "The greatest distance catching a grape in the mouth was over 350 feet.",
  "Freddy Nock walked along the highest cable car wire!",
  "Genghis Khan strategically married off his daughters to expand his empire.",
  "A proposed amendment to the US constitution in 1916 would have had citizens vote on all acts of war.",
  "A silverback gorilla could deadlift 1,800 lbs.",
  "Costco's hot dog and soda combo has remained at the same price since 1985.",
  "A company in Japan awards non-smokers an extra six days of paid leave each year.",
  "In Singapore, when you turn 21, you're automatically registered as an organ donor.",
  "Stephen Hawking was rumored to run over the toes of people he didn't like.",
  "The Apollo missions have left 96 bags of poop, pee, and vomit on the moon.",
  "Visitors to one of Hawaii's islands can take a shelter dog out on adventures for a day.",
  "Samuel L. Jackson was an usher at Martin Luther King Jr's funeral.",
  "Fish eggs can survive being eaten by a duck.",
  "There's a restaurant in New York that employs grandmas instead of chefs.",
  "The Titanic wreckage was discovered during a top-secret mission to search for sunken nuclear submarines.",
  "Jim Carrey was the first actor to star in three consecutive box-office hits.",
  "Ancient Roman commoners went on strike by evacuating their cities, leaving the upper classes hopelessly fending for themselves.",
  "The first rap song to win an Academy Award for Best Original Song was Eminem's “Lose Yourself.”",
  "Recessions may not be good for our finances, but it turns out that they're actually good for our health.",
  "Velociraptors were actually feathered dinosaurs.",
  "According to research, starting school at 10 am is better for your health.",
  "It cost $265 million to make Grand Theft Auto V.",
  "The man who invented pop-up advertisements deeply regrets it and says he's very sorry.",
  "More than $700 million worth of aluminum cans are thrown out by Americans every year.",
  "Roosters have built-in earplugs, so they don't deafen themselves when they crow.",
  "Tom Cruise got divorced from each of his three ex-wives when they reached the age of 33.",
  "As dogs were domesticated, their eyes evolved to look cuter.",
  "Nintendo used to have a hotline you could call if you were stuck in one of their games.",
  "Books published in Norway are bought by the government to stock the country's libraries.",
  "It turns out that you don't need to drink six to eight cups of water per day.",
  "Christopher Lee released three metal albums.",
  "Elephants can swim up to six hours at a time.",
  "Shrek originally had a thick Canadian accent.",
  "George Clooney had a pet pig called Max.",
  "Only one married couple has ever been sent to space.",
  "Samsung's various business activities account for more than 15% of Korea's entire economy.",
  "There's a mountain in Greece that women are prohibited from visiting.",
  "In Japan, when a train leaves the station at the wrong time, the rail company apologizes.",
  "A chimpanzee was once ranked as the 22nd most successful money manager in the US.",
  "Bill and Melinda Gates have given away more than $45 billion since 1994.",
  "There's a soviet version of The Lord of the Rings, and it's downright woeful.",
  "Koalas may be cute, but they're incredibly dumb.",
  "Psy didn't want to upload Gangnam Style to YouTube because he didn't want to be humiliated.",
  "There's a pub in Ireland that's been running for more than 1,100 years!",
  "Apple co-founder Steve Jobs thought he didn't have body odor.",
  "The 2007 video game Halo 3 was so popular that film executives blamed its creators for a drop in cinema attendance the week it was released.",
  "Platypuses are so weird that when scientists first discovered them, they thought it was a hoax.",
  "McDonald's in the United Kingdom run half their delivery fleet on used cooking oil.",
  "Studies have found that nine out of ten people experience phantom phone vibrations.",
  "Reindeer in the Arctic can see the world in ultraviolet light.",
  "Arizona fines drivers under their unique “Stupid Motorist Law.”",
  "Chris Pratt stole his costume from the set of Guardians of the Galaxy.",
  "When London taxi drivers tried to protest against Uber, they drove more customers towards their competitor.",
  "The Internet has its very own patron saint.",
  "Roundabouts have been proven to reduce dangerous traffic incidents significantly.",
  "The FBI had a 1,427-page file on Albert Einstein.",
  "J. R. R. Tolkien invented the languages of Middle Earth before he even thought to write stories in the fictional universe.",
  "There's a species of wolf that lives almost exclusively off seafood.",
  "One of Fleetwood Mac's founding guitarists disappeared just before a show and was found days later as a newly initiated cult member.",
  "Seven out of ten US youths would fail to qualify for military service.",
  "The moon has its own Catholic bishop.",
  "The actor who played Scotty from Star Trek was given an honorary degree at the Milwaukee School of Engineering.",
  "It turns out that most people don't procrastinate because of laziness.",
  "The Pentagon has twice the number of bathrooms it needs.",
  "The United States of America's longest-standing unbroken treaty is with Morocco.",
  "As many as 80% of Hong Kong's toilets are flushed with seawater.",
  "Abercrombie & Fitch once offered the cast of Jersey Shore significant amounts of money to stop wearing their clothes.",
  "The inventor of the USB originally designed it to be plugged in either way up.",
  "Barbara Bush, George Bush Snr's wife, once called The Simpsons the “dumbest thing I've ever seen.”",
  "Stan Lee created the character for Iron Man as a challenge.",
  "Three towns in Scotland, Australia, and the US are united by how boring they are.",
  "A town in Antarctica forces would-be residents to have their appendices removed.",
  "The person who proved the existence of radio waves thought they were completely pointless.",
  "In their sales pitch, the inventors of silly string sprayed their interviewer with an entire can.",
  "Michael Jackson once had an entire supermarket closed so he could shop “like a normal person.”",
  "Charles Dickens' novels were so popular in his day that poor people who couldn't read would collectively pay someone to read his stories out loud.",
  "Research has found that people who swear tend to be more honest.",
  "The quietest place on earth is in Minnesota.",
  "A wall of trees is being planted across Africa to help prevent desertification.",
  "71% of people in Iceland have a Costco membership.",
  "Sloths don't fall out of trees when they sleep because of how their claws evolved.",
  "All those scam emails you get from Nigerian Princes have purposefully bad grammar.",
  "M&Ms were exclusively sold to the US military during World War II.",
  "8th-grade students from a town in Alaska must spend two nights on an uninhabited island as part of their science exam.",
  "The 1927 Liberian general election was the most rigged election in world history.",
  "Government vehicles in Cuba are legally required to pick up hitchhikers.",
  "Macaulay Culkin from Home Alone let his fans vote on what he should change his middle name to.",
  "The more money people spend on their weddings, the more likely they are to get divorced.",
  "Spiders move their legs using biological hydraulics.",
  "Kim Il Sung loved Hennessy cognac so much he bought more than $800,000 of it per year!",
  "Zebras are actually black with white stripes.",
  "Every year 22,000 tons of dust is blown from the Sahara Desert all the way to the Amazon Rainforest.",
  "The longest train journey in the world is in Russia.",
  "The world's first Guinness world record for push-ups was 6,006.",
  "Antarctica isn't owned by any single nation.",
  "In the 18th Century, the doctor to the Danish King seized control of Denmark.",
  "The author of the James Bond novels wrote the first book to take his mind off the fear of getting married.",
  "The most popular car model in the world is the Toyota Hilux.",
  "Panama hats aren't originally from Panama but Ecuador!",
  "Frogs literally eat with their eyes!",
  "Recorders actually used to be a popular instrument.",
  "Stripey things like escalators and Venetian blinds can cause migraines.",
  "The US army has its own private herd of bison.",
];
//It is used for checking, if there were one or more commands
let usersCommands = [];
let name = "";

//the function, that gets command and gives a reply
function getReply(command) {
  const lastWordOfString = command.lastIndexOf(" ");
  const commandWithoutLastWord = command.substring(0, lastWordOfString);
  let splittedCommand = command.split(" ");
  const twoWordsFromCommand = splittedCommand.slice(0, 2).join(" ");
  const commandWithoutTwoLastWords = splittedCommand.slice(0, 4).join(" ");

  //"Hello my name is"
  if (commandWithoutLastWord === commands[0]) {
    //if the first command was already used, it says "Hi again", else - logs string "Hello, [name of person]" and saves name
    //it also pushes inserted commands into usersCommands, so that's why it can check, if command was used
    if (usersCommands.includes(command)) {
      usersCommands.push(command);

      console.log("Hi again :)");
    } else {
      usersCommands.push(command);

      console.log(sayHello(command));
    }
    //"What is my name"
  } else if (command === commands[1]) {
    //if there's no name saved, this command logs "Sorry...", but if name is saved, so it logs "Your name is [name]"
    if (name === "") {
      console.log("Sorry, I don't know your name");
    } else {
      console.log("Your name is " + name);
    }
    //"Add *something* to my todo"
    //command is splitted in splittedCommand, so we're checking, if there's "Add" word
  } else if (splittedCommand[0] == "Add") {
    let todoItem = addItemToToDo(splittedCommand);

    console.log(todoItem + " added to your todo");
    //"Remove *something* from my todo"
  } else if (splittedCommand[0] == "Remove") {
    todoItem = takeItemToTodoList(splittedCommand);
    //checking, if todo-list has item
    if (todo.includes(todoItem)) {
      //this loop is for taking index of todoItem and deleting this item with this index
      for (let i = 0; i < todo.length; i++) {
        if (todo[i] == todoItem) {
          todo.splice(i, 1);
        }
      }

      console.log("Removed " + todoItem + " from your todo");
    } else {
      console.log("There's no " + todoItem);
    }
    //"What is in my todo?"
  } else if (command === commands[4]) {
    if (!todo.length) {
      console.log("You don't have any item in your todo");
    } else {
      console.log(todo);
    }
    //"What day is it today?"
  } else if (command === commands[5]) {
    console.log(takeCurrentDate());
    //"what is [2+2 or other]"
  } else if (twoWordsFromCommand === commands[6]) {
    splittedCommand = splittedCommand.splice(2);

    console.log(calculatedResult(splittedCommand));
    //"Set timer for [amount of time]"
  } else if (commandWithoutTwoLastWords === commands[7]) {
    //removing 'Set timer for' part, so we will have only amount of time
    splittedCommand = splittedCommand.splice(4);
    //checking, if time is second/minute/hour/day
    if (splittedCommand[1] === "second" || splittedCommand[1] === "seconds") {
      const amountOfTime = parseInt(splittedCommand[0]) * 1000;

      console.log("Timer set for " + splittedCommand.join(" "));

      setTimeout(() => {
        console.log("Timer done");
      }, amountOfTime);
    } else if (
      splittedCommand[1] === "minute" ||
      splittedCommand[1] === "minutes"
    ) {
      console.log("Timer set for " + splittedCommand.join(" "));
      const amountOfTime = parseInt(splittedCommand[0]) * 60000;

      setTimeout(() => {
        console.log("Timer done");
      }, amountOfTime);
    } else if (
      splittedCommand[1] === "hour" ||
      splittedCommand[1] === "hours"
    ) {
      console.log("Timer set for " + splittedCommand.join(" "));
      const amountOfTime = parseInt(splittedCommand[0]) * 3600000;

      setTimeout(() => {
        console.log("Timer done");
      }, amountOfTime);
    } else if (splittedCommand[1] === "day" || splittedCommand[i] === "days") {
      console.log("Timer set for " + splittedCommand.join(" "));
      const amountOfTime = parseInt(splittedCommand[0]) * 86400000;

      setTimeout(() => {
        console.log("Timer done");
      }, amountOfTime);
    }
    //"Give me a random fact"
  } else if (command === commands[8]) {
    const randomIndex = Math.floor(Math.random() * (facts.length - 1));

    console.log(facts[randomIndex]);
  }
}

//function for the first command, that takes name of user
function sayHello(command) {
  command = command.split(" ");
  name = command.pop();

  return "Nice to meet you " + name;
}

//function, that takes item from the command
function takeItemToTodoList(command) {
  command.shift();
  command.pop();
  command.pop();
  command.pop();
  return command.join(" ");
}

//adding item to todo-list
function addItemToToDo(command) {
  let todoItem = takeItemToTodoList(command);
  todo.push(todoItem);
  return todoItem;
}

//taking current date
function takeCurrentDate() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const d = new Date();

  const date = d.getDate();
  const month = months[d.getMonth()];
  const year = d.getFullYear();
  const currentDate = date + ". of " + month + " " + year;

  return currentDate;
}

//calculating function
function calculatedResult(splittedCommand) {
  let result = parseInt(splittedCommand[0]);

  for (let i = 0; i < splittedCommand.length; i++) {
    if (splittedCommand[i] === "+") {
      result += parseInt(splittedCommand[i + 1]);
    } else if (splittedCommand[i] === "-") {
      result -= parseInt(splittedCommand[i + 1]);
    } else if (splittedCommand[i] === "*") {
      result *= parseInt(splittedCommand[i + 1]);
    } else if (splittedCommand[i] === "/") {
      result /= parseInt(splittedCommand[i + 1]);
    }
  }
  return result;
}

//now they all unwrapped from console.log
getReply("What is my name");
getReply("Hello my name is Nadiia");
getReply("Hello my name is Nadiia");
getReply("What is my name");
getReply("Add fishing to my todo");
getReply("What is on my todo?");
getReply("Add singing in the shower to my todo");
getReply("What is on my todo?");
getReply("Remove fishing from my todo");
getReply("What is on my todo?");
getReply("Remove singing in the shower from my todo");
getReply("What is on my todo?");
getReply("What day is it today?");
getReply("what is 3 + 3");
getReply("what is 4 * 12");
getReply("Set a timer for 30 seconds");
getReply("Give me random fact");
