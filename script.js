const quotes = [
  {
    text: "በሰው እጅ ያለ እሳት ያቃጥላል።",
    translation: "Fire in another person's hand can still burn you.",
    author: "Ethiopian proverb",
    type: "ETHIOPIAN PROVERB"
  },
  {
    text: "ሰው በሰው ይበረታል።",
    translation: "People become stronger through one another.",
    author: "Ethiopian proverb",
    type: "ETHIOPIAN PROVERB"
  },
  {
    text: "የዛሬን ሥራ ለነገ አታሳድር።",
    translation: "Do not put off until tomorrow what you can do today.",
    author: "Ethiopian proverb",
    type: "ETHIOPIAN PROVERB"
  },
  {
    text: "አንድ እጅ አያጨበጭብም።",
    translation: "One hand cannot clap.",
    author: "Ethiopian proverb",
    type: "ETHIOPIAN PROVERB"
  },
  {
    text: "በትዕግስት ወተት ወደ ቅቤ ይለወጣል።",
    translation: "With patience, milk becomes butter.",
    author: "Ethiopian saying",
    type: "ETHIOPIAN WISDOM"
  },
  {
    text: "A journey of a thousand miles begins with a single step.",
    translation: "Big achievements begin with one small action.",
    author: "Lao Tzu",
    type: "WISDOM"
  },
  {
    text: "It always seems impossible until it's done.",
    translation: "Keep going, even when the goal feels far away.",
    author: "Nelson Mandela",
    type: "INSPIRATION"
  },
  {
    text: "Wisdom is like a baobab tree; no one individual can embrace it.",
    translation: "We learn more when we listen and learn together.",
    author: "African proverb",
    type: "AFRICAN WISDOM"
  },
  {
    text: "The secret of getting ahead is getting started.",
    translation: "Start where you are, with what you have.",
    author: "Mark Twain",
    type: "INSPIRATION"
  },
  {
    text: "Little by little, the egg walks.",
    translation: "Progress takes time; be patient with your growth.",
    author: "Ethiopian proverb",
    type: "ETHIOPIAN PROVERB"
  }
];

let previousIndex = -1;

function showRandomQuote() {
  let index;
  do {
    index = Math.floor(Math.random() * quotes.length);
  } while (quotes.length > 1 && index === previousIndex);

  previousIndex = index;
  const quote = quotes[index];
  const quoteText = document.getElementById("quote-text");

  quoteText.textContent = quote.text;
  document.getElementById("quote-author").textContent = `— ${quote.author}`;
  document.getElementById("quote-type").textContent = quote.type;

  // Add the English meaning under Amharic quotes when available.
  let translation = document.getElementById("quote-translation");
  if (!translation) {
    translation = document.createElement("p");
    translation.id = "quote-translation";
    translation.className = "translation";
    quoteText.insertAdjacentElement("afterend", translation);
  }
  translation.textContent = quote.translation || "";
  translation.hidden = !quote.translation || quote.text === quote.translation;
}

document.getElementById("new-quote").addEventListener("click", showRandomQuote);
showRandomQuote();
