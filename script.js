const quotes = [
  "Believe in yourself and all that you are.",
  "Every moment is a fresh beginning.",
  "Start where you are. Use what you have. Do what you can.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "You are stronger than you think."
];

const facts = [
  "Honey never spoils.",
  "Octopuses have three hearts.",
  "Bananas are berries, but strawberries aren't.",
  "There are more stars in the universe than grains of sand on Earth.",
  "You can't hum while holding your nose closed."
];

const funFacts = {
  general: [
    "A crocodile can't stick its tongue out.",
    "A shrimp's heart is in its head.",
    "Slugs have four noses.",
    "An ostrich's eye is bigger than its brain.",
    "Some cats are allergic to humans."
  ],
  science: [
    "Water can boil and freeze at the same time.",
    "Light from the Sun takes 8 minutes to reach Earth.",
    "The Eiffel Tower can be 15 cm taller during hot days.",
    "Octopuses have blue blood.",
    "Bananas are slightly radioactive."
  ],
  history: [
    "Napoleon was once attacked by rabbits.",
    "The shortest war in history lasted 38 minutes.",
    "Oxford University is older than the Aztec Empire.",
    "Albert Einstein was offered the presidency of Israel.",
    "Vikings used bones to comb their hair."
  ],
  personal: [
    "Your brain uses 20% of your body's energy.",
    "Yawning cools your brain.",
    "You can't tickle yourself.",
    "Most dreams last only 5 to 20 minutes.",
    "Your taste buds have a lifespan of about 10 days."
  ]
};

function generateQuote() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  const quoteElement = document.getElementById('quote');
  quoteElement.textContent = quote;
  quoteElement.classList.add('animate__animated', 'animate__fadeIn');
  setTimeout(() => quoteElement.classList.remove('animate__animated', 'animate__fadeIn'), 1000);
}

function changeBackground() {
  const colors = ['#f0f8ff', '#ffe4e1', '#fafad2', '#e6e6fa', '#f5fffa'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}

function generatePassword() {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
  let password = "";
  for (let i = 0; i < 12; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }
  const passwordElement = document.getElementById('password');
  passwordElement.textContent = password;
  passwordElement.classList.add('animate__animated', 'animate__bounceIn');
  setTimeout(() => passwordElement.classList.remove('animate__animated', 'animate__bounceIn'), 1000);
}

function generateFact() {
  const fact = facts[Math.floor(Math.random() * facts.length)];
  const factElement = document.getElementById('fact');
  factElement.textContent = fact;
  factElement.classList.add('animate__animated', 'animate__lightSpeedInLeft');
  setTimeout(() => factElement.classList.remove('animate__animated', 'animate__lightSpeedInLeft'), 1000);
}

function copyText(id) {
  const text = document.getElementById(id).textContent;
  navigator.clipboard.writeText(text).then(() => alert("Copied!"));
}

function showFunFacts(category) {
  const container = document.getElementById('funFactsList');
  container.innerHTML = '';
  funFacts[category].forEach(fact => {
    const li = document.createElement('li');
    li.textContent = fact;
    container.appendChild(li);
  });
  container.classList.add('animate__animated', 'animate__fadeInUp');
  setTimeout(() => container.classList.remove('animate__animated', 'animate__fadeInUp'), 1000);
}

// Feedback form
const feedbackForm = document.getElementById('feedbackForm');
if (feedbackForm) {
  feedbackForm.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('thankYouMessage').classList.remove('hidden');
    feedbackForm.reset();
  });
}

// Fun Fact Buttons
const funFactButtons = document.querySelectorAll('.fun-fact-btn');
funFactButtons.forEach(button => {
  button.addEventListener('click', () => showFunFacts(button.dataset.category));
});


