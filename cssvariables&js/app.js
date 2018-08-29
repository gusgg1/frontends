
// we get a nodeList here and we can use forEach on them:
const inputs = document.querySelectorAll('input');

function handleInputs() {
  console.log(this.value);
  console.log(this.dataset);
  const suffix = this.dataset.sizing || ''; // or nothing 
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleInputs));
inputs.forEach(input => input.addEventListener('mousemove', handleInputs));
