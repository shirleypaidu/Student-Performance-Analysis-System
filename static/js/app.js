document.querySelectorAll('[data-table-filter]').forEach((input) => {
  const table = document.getElementById(input.dataset.tableFilter);
  if (!table) return;

  const rows = [...table.querySelectorAll('tbody tr[data-filter-row]')];
  const count = document.querySelector(`[data-result-count="${input.dataset.tableFilter}"]`);
  const updateRows = () => {
    const query = input.value.trim().toLocaleLowerCase();
    let visible = 0;

    rows.forEach((row) => {
      const matches = row.textContent.toLocaleLowerCase().includes(query);
      row.hidden = !matches;
      if (matches) visible += 1;
    });

    if (count) count.textContent = `${visible} SHOWN`;
  };

  input.addEventListener('input', updateRows);
});
