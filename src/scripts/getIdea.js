import dateIdeas from '../data/date_ideas.json'; // Adjust the path if necessary

// Function to get a random date idea from a specified category
function getDateIdea(type) {
    const ideas = dateIdeas.dateIdeas[type];
  
  if (!ideas) {
    return { idea: "Invalid type", description: "The specified type of date is not valid." };
  }
  
  const randomIndex = Math.floor(Math.random() * ideas.length);
  return ideas[randomIndex];
}

// Function to get a random date idea from any category
function surprise() {
  const categories = Object.keys(dateIdeas.dateIdeas);
  const randomCategory = categories[Math.floor(Math.random() * categories.length)];
  const ideas = dateIdeas.dateIdeas[randomCategory];
  const randomIndex = Math.floor(Math.random() * ideas.length);
  return ideas[randomIndex];
}

export {surprise, getDateIdea}

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
