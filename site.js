const filter = document.querySelector('#filter');
const input = filter.querySelector('input');
const entries = [...document.querySelectorAll('#archive li')];
const status = document.querySelector('#status');

filter.hidden = false;
input.addEventListener('input', () => {
  const query = input.value.trim().toLowerCase();
  let matches = 0;
  for (const entry of entries) {
    entry.hidden = !entry.textContent.toLowerCase().includes(query);
    if (!entry.hidden) matches += 1;
  }
  status.textContent = matches === 1 ? '1 piece found' : matches + ' pieces found';
});
