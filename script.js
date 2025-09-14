// script.js

/* Part 2: JavaScript Functions - Scope, Parameters & Return Values */

// Global variable example
let globalCounter = 0;

// Function demonstrating local scope and parameters
function calculateAnimationDuration(baseDuration, multiplier) {
  // local variable
  let duration = baseDuration * multiplier;
  return duration; // return a useful value
}

// Function that updates global variable (side effect)
function incrementGlobalCounter() {
  globalCounter++;
  return globalCounter;
}

// Reusable function to toggle CSS animation class on an element
function toggleAnimationClass(element, className) {
  if (!element || !className) return false;
  element.classList.toggle(className);
  return element.classList.contains(className);
}

// Function to open modal with animation
function openModal(modalElement) {
  if (!modalElement) return;
  modalElement.classList.add('show');
}

// Function to close modal with animation
function closeModal(modalElement) {
  if (!modalElement) return;
  modalElement.classList.remove('show');
}

/* Part 3: Combining CSS Animations with JavaScript */

// Animate box when button clicked
const animateBoxBtn = document.getElementById('animateBoxBtn');
const animatedBox = document.getElementById('animatedBox');

animateBoxBtn.addEventListener('click', () => {
  // Remove class in case animation already ended, to allow re-trigger
  animatedBox.classList.remove('animate-scale-up');
  // Force reflow to restart animation
  void animatedBox.offsetWidth;
  animatedBox.classList.add('animate-scale-up');
});

// Card flip toggle
const card = document.getElementById('card');
card.addEventListener('click', () => {
  card.classList.toggle('flipped');
});

// Loading animation toggle with reusable function
const toggleLoadingBtn = document.getElementById('toggleLoadingBtn');
const loadingCircle = document.getElementById('loading');
let loadingActive = false;

toggleLoadingBtn.addEventListener('click', () => {
  loadingActive = toggleAnimationClass(loadingCircle, 'loading');
  toggleLoadingBtn.textContent = loadingActive ? 'Stop Loading Animation' : 'Start Loading Animation';
});

// Modal open/close
const openModalBtn = document.getElementById('openModalBtn');
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('closeModalBtn');

openModalBtn.addEventListener('click', () => openModal(modal));
closeModalBtn.addEventListener('click', () => closeModal(modal));

// Close modal on outside click
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal(modal);
  }
});

/* Part 2 Demo console logs */

// Demonstrate local vs global scope and return values
console.log('Initial globalCounter:', globalCounter);
console.log('Increment globalCounter:', incrementGlobalCounter());
console.log('Calculate animation duration (base=0.5, multiplier=3):', calculateAnimationDuration(0.5, 3));
console.log('Toggle animation class on loadingCircle:', toggleAnimationClass(loadingCircle, 'loading'));
console.log('Toggle animation class on loadingCircle again:', toggleAnimationClass(loadingCircle, 'loading'));
