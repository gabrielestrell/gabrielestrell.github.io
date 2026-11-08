/**
 * CHARTS VIEW - STUDENTS IMPLEMENT
 * Show patterns in your data as charts, using Chart.js
 *
 * This view has two parts:
 *   showCharts(data) returns the HTML: one <canvas> per chart, with a text alternative under each
 *   drawCharts(data) runs after that HTML is on the page, and draws a chart into each <canvas>
 *
 * Chart.js docs: https://www.chartjs.org/docs/latest/getting-started/
 */

function orNotListed(value) {
  return value === '------' || value === 'N/A' || value === undefined ? 'Not listed' : value;
}

const CHECKS = [
  { field: 'food_from_approved_source', label: 'Food from approved source' },
  { field: 'food_protected_from', label: 'Food protection' },
  { field: 'ill_workers_restricted', label: 'Ill workers restricted' },
  { field: 'proper_hand_washing', label: 'Proper hand washing' },
  { field: 'cooling_time_and_temperature', label: 'Cooling time and temperature' },
  { field: 'cold_holding_temperature', label: 'Cold holding temperature' },
  { field: 'hot_holding_temperature', label: 'Hot holding temperature' },
  { field: 'cooking_time_and_temperature', label: 'Cooking time and temperature' },
  { field: 'reheating_time_and_temperature', label: 'Reheating time and temperature' },
  { field: 'hot_and_cold_running_water', label: 'Hot and cold running water' },
  { field: 'proper_sewage_disposal', label: 'Proper sewage disposal' },
  { field: 'no_bare_hand_contact', label: 'No bare hand contact' },
  { field: 'adequate_hand_washing', label: 'Adequate hand washing' },
  { field: 'rodent_and_insects', label: 'Rodents and insects' },
  { field: 'food_contact_surfaces_and', label: 'Food contact surfaces' },
];

function countFailsByCheck(data) {
  return CHECKS.map((check) => ({
    label: check.label,
    count: data.filter((inspection) => inspection[check.field] === 'Out of Compliance').length,
  })).sort((a, b) => b.count - a.count);
}

function countByResult(data) {
  const counts = {};
  data.forEach((inspection) => {
    const result = orNotListed(inspection.inspection_results);
    counts[result] = (counts[result] || 0) + 1;
  });
  return Object.entries(counts)
    .map(([label, count]) => ({ label, count }))
    .sort((a, b) => b.count - a.count);
}

function showCharts(data) {
  const fails = countFailsByCheck(data);
  const failSentence = `${fails[0].label} was the check that failed most often: ${fails[0].count} of ${data.length} inspections.`;

  const results = countByResult(data);
  const notListed = results.find((r) => r.label === 'Not listed');
  const listed = results.filter((r) => r.label !== 'Not listed');
  const resultSentence = `The most common recorded result was "${listed[0].label}" (${listed[0].count} of ${data.length} inspections), and ${notListed ? notListed.count : 0} inspections have no result listed.`;

  /*html*/
  return `
      <h2 class="view-title">📈 Charts View</h2>
    <p class="view-description">Patterns in the data at a glance</p>
    <div class="charts-grid">
      <figure class="chart-figure">
        <canvas id="chart-one"></canvas>
        <figcaption class="chart-summary">${failSentence}</figcaption>
      </figure>
      <figure class="chart-figure">
        <canvas id="chart-two"></canvas>
        <figcaption class="chart-summary">${resultSentence}</figcaption>
      </figure>
    </div>
  `;
}

function drawCharts(data) {
  if (typeof Chart === 'undefined') {
    document.querySelector('.charts-grid').innerHTML =
      '<p class="error">Chart.js did not load, so the charts can\'t be drawn. Check the &lt;script&gt; tag in index.html.</p>';
    return;
  }

  //bar chart
  const fails = countFailsByCheck(data);
  new Chart(document.querySelector('#chart-one'), {
    type: 'bar',
    data: {
      labels: fails.map((f) => f.label),
      datasets: [{ label: 'Inspections with a failed check', data: fails.map((f) => f.count), backgroundColor: '#007cba' }],
    },
    options: {
      indexAxis: 'y',
      plugins: { title: { display: true, text: 'Which food safety checks fail most often?' } },
      scales: {
        x: { title: { display: true, text: 'Number of inspections with a failed check' }, beginAtZero: true },
        y: { title: { display: true, text: 'Food safety check' } },
      },
    },
  });

  //doughnut
  const results = countByResult(data);
  const colors = ['#007cba', '#28a745', '#ffc107', '#dc3545', '#6f42c1', '#fd7e14', '#20c997', '#6c757d', '#e83e8c'];
  new Chart(document.querySelector('#chart-two'), {
    type: 'doughnut',
    data: {
      labels: results.map((r) => r.label),
      datasets: [{ data: results.map((r) => r.count), backgroundColor: colors.slice(0, results.length) }],
    },
    options: {
      plugins: { title: { display: true, text: 'How did the inspections turn out?' } },
    },
  });
}

export { showCharts, drawCharts };