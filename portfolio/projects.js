var projects = [
  {
    name: "DexMD Alexa Skill",
    image: "img/GlassesDex.png",
    short: "Amazon Alexa skill that answers your medical questions.",
    long: "Amazon Alexa skill that answers medical questions! It is a top skill and we get paid for the skill! Feel free to check it out by speaking to your Alexa. You can say, \"Alexa, ask Doctor Dex\"."
  },
  /*
  {
    name: "#whiteshoeswednesday",
    image: "",
    short: "",
    long: "Scrapes Twitter for #whiteshoeswednesday and records photos into database and displays on photo gallery."
  },
  */
  {
    name: "IdentifyAI",
    image: "img/IdentifyAI.jpg",
    short: "1st Place Winner: Best Use of IBM Watson at AT&T Shape Hackathon 2017.",
    long: "This is a project that I worked on with some of my friends at the AT&T Shape Hackathon and we won first place for the Best Use of IBM Watson. We created a bot on Twitter that people can tweet photos with the hashtag #IdentifyAI. Their tweet will get subtweeted and replied with what our image recognition (with the help of IBM Watson) classifies it to be. Parents can use to to check on what their kids are watching. When people tweet, our bot responds. This also provides advertisement on social media and people can see what people are watching. We tweet out the answer as well as the MPAA rating for it, so parents could also utilize this and figure out what their children are watching. This also provides subtle advertisement through these engagements on Twitter and we can see the tweet statistics and impressions it makes. An example would be if someone took a picture of the Lego Batman movie, they would get tweeted back with, \"It's Lego Batman Movie and it's rated PG. Like it? Try Avatar: The Last Airbender.\" We write and store all of the queries and log them into a Firebase database. We have also created a web application that streams all the tweets that include #IdentifyAI and the results. We also recorded locations of these tweets so we can see what is trending in certain areas. If you want to see what images we identified over the hackathon, check out the Twitter! twitter.com/IdentifyAI."
  },
  {
    name: "N.I.C.K.",
    image: "img/NICK",
    short: "2nd Place Winner at Walmart Labs and MindTouch Hackathon.",
    long: "We created a web application where the user can search products and see the product data. We're listing them as product cards each with their name, price, short description and customer rating. What's special about our web application is that we integrated text notifications for a user — so if you want to subscribe for deals on a specific item or even an item category, we will send you a text message such as when the price drops below a certain threshold. Then a user can just text 'buy' or go to the link sent with the text message and purchase the item. This can be implemented with flash deals and the text would come with a time limit and how much of the item Walmart has in stock. "
  },
  {
    name: "FoodNest",
    image: "img/FoodNest.jpg",
    short: "Developed the MVP and website for a startup and they got invited to an accelerator at Rome.",
    long: "I developed the minimum viable product and set up the FoodNest website to their specifications. This retrofit system takes a picture when the fridge door opens. The user can access the latest image of their fridge by email, text, or by Android application. This minimum viable product allowed FoodNest to be invited to selection days for an accelerator in Rome. FoodNest, a start up founded by Shrina Kurani and funded by the European Union, provides users the ability to access and generate recipes with their current fridge inventory with the help of image recognition."
  },
  {
    name: "/atomics",
    image: "img/slashAtomics.png",
    short: "Decentralized organ donation app powered by Ethereum Blockchain made at dAppathon 2017",
    long: "Decentralized organ donation app powered by Ethereum Blockchain made at dAppathon 2017"
  },
  {
    name: "Mood Forecast",
    image: "",
    short: "The hack pulls in live Twitter data based on different locales and uses various natural language processing techniques and dictionaries to determine a \"mood quotient\".",
    long: "Our hack is called Mood Forecast. The hack pulls in live Twitter data based on different locales and uses various natural language processing techniques and dictionaries to determine a \"mood quotient\". The purpose of this hack is the use data to better society. With this hack, a region's well being is able to be checked and acted upon if needed. Different relations can be drawn from this such as a drop in our \"mood quotient\" due to an event. With the addition to Amazon's Alexa platform, we've added a voice interface to our platform. Users are able to interact with the data with voice controls."
  },
  {
    name: "Knockifications",
    image: "img/knockifications.jpg",
    short: "IoT home security system.",
    long: "Internet of Things project that connects motion sensors, video monitoring, web server, and an Android application into a security system for home or work use. Key features include live video monitoring, wireless door entry, package theft prevention system, Google Cloud Messaging for Android notifications, and Simple Mail Transfer Protocol (SMTP) email notifications. System incorporates Raspberry Pi 2, Raspberry Pi Camera module, Bluetooth, and ESP8266 WiFi modules."
  }
]

var squares = document.querySelectorAll(".projects");
var titles = document.querySelectorAll(".title");
var description = document.querySelectorAll(".description");

var loc = 0;

initBoard();

function initBoard(){
  for(var i = 0; i < projects.length; ++i) {
    titles[i].textContent = projects[i].name;
    description[i].textContent = projects[i].short;
  }
}
/*
description.addEventListener('click', function (){
  alert("hi");
  if(description[i].textContent == projects[i].short){
    description[i].textContent = projects[i].long;
  } else {
    description[i].textContent = projects[i].short;
  }
})
*/
