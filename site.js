const filter = document.querySelector('#filter');
const input = filter.querySelector('input');
const entries = [...document.querySelectorAll('#archive li')];
const status = document.querySelector('#status');
const groups = [
  ['Product launches and education', /positioning|feature launch|product education|product video/i],
  ['Writing and research', /thought leadership|technical reporting/i],
  ['Customer proof', /customer story/i],
  ['Demand generation', /demand generation|webinar/i],
  ['Field and brand marketing', /event|brand campaign/i]
];
const select = document.createElement('select');
select.setAttribute('aria-label', 'Filter work by category');
select.append(new Option('All categories', ''));
for (const [label] of groups) select.append(new Option(label, label));
filter.after(select);

function updateArchive() {
  const query = input.value.trim().toLowerCase();
  let matches = 0;
  for (const entry of entries) {
    const category = groups.find(([,pattern]) => pattern.test(entry.querySelector('small').textContent))?.[0];
    entry.hidden = !entry.textContent.toLowerCase().includes(query) || Boolean(select.value && select.value !== category);
    if (!entry.hidden) matches += 1;
  }
  status.textContent = matches === 1 ? '1 example' : matches + ' examples';
}

filter.hidden = false;
input.addEventListener('input', updateArchive);
select.addEventListener('change', updateArchive);
updateArchive();
