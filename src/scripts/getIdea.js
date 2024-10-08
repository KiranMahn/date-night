const fs = require('fs');
const path = require('path');

// Load the JSON data from the file
const dataPath = path.join(__dirname, '..', 'data', 'date_ideas.json');
const dateIdeas = JSON.parse(fs.readFileSync(dataPath, 'utf-8')).dateIdeas;

// Function to get a random date idea from a specified category
function getDateIdea(type) {
  const ideas = dateIdeas[type];
  
  if (!ideas) {
    return { idea: "Invalid type", description: "The specified type of date is not valid." };
  }
  
  const randomIndex = Math.floor(Math.random() * ideas.length);
  return ideas[randomIndex];
}

// Function to get a random date idea from any category
function surprise() {
  const categories = Object.keys(dateIdeas);
  const randomCategory = categories[Math.floor(Math.random() * categories.length)];
  const ideas = dateIdeas[randomCategory];
  const randomIndex = Math.floor(Math.random() * ideas.length);
  return ideas[randomIndex];
}

// Example usage
const type = 'freeDates'; // Change this to any valid type
const dateIdea = getDateIdea(type);
console.log(`Category: ${type}`);
console.log(`Idea: ${dateIdea.idea}`);
console.log(`Description: ${dateIdea.description}`);

const surpriseDateIdea = surprise();
console.log(`\nSurprise Date Idea`);
console.log(`Idea: ${surpriseDateIdea.idea}`);
console.log(`Description: ${surpriseDateIdea.description}`);
