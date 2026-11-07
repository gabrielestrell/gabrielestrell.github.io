/**
 * CATEGORY VIEW - STUDENTS IMPLEMENT
 * Group data by categories
 */

// Turns "2026-05-17T00:00:00.000" into "May 17, 2026"
function formatDate(isoDate) {
  return new Date(isoDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

// This dataset writes missing values as "------" or "N/A". Show "Not listed" instead.
function orNotListed(value) {
  return value === '------' || value === 'N/A' || value === undefined ? 'Not listed' : value;
}

function countFailedChecks(inspection) {
  return Object.values(inspection).filter((value) => value === 'Out of Compliance').length;
}

function showCategories(data) {
  // Requirements:
  // - Group data by one meaningful field (category, city, inspection result, etc.)
  // - Show how many records are in each group, plus one other number per group
  //   (an average, a highest, a lowest)
  // - Show items within each group
  // - Make the groups easy to compare, and visually distinct from their items

  const groups = {};
  data.forEach((inspection) => {
    const key = orNotListed(inspection.category);
    if (!groups[key]) groups[key] = [];
    groups[key].push(inspection);
  });

  const summaries = Object.entries(groups)
    .map(([category, items]) => {
      const totalFailed = items.reduce((sum, item) => sum + countFailedChecks(item), 0);
      return {
        category,
        items,
        count: items.length,
        avgFailed: (totalFailed / items.length).toFixed(1),
      };
    })
    .sort((a, b) => b.count - a.count);
  
  const sections = summaries
    .map(
      (group) => `
        <section class="category-section">
          <h3 class="category-header">
            ${group.category}: ${group.count} inspection${group.count === 1 ? '' : 's'}, average ${group.avgFailed} failed checks
          </h3>
          <div class="category-items">
            ${group.items
              .map(
                (item) => `
              <div class="category-item">
                <span>${orNotListed(item.name)} (${formatDate(item.inspection_date)})</span>
                <span>${countFailedChecks(item)} failed</span>
              </div>`
              )
              .join('')}
          </div>
        </section>`
    )
    .join('');
  
  /*html*/
  return `
                <h2 class="view-title">📂 Category View</h2>
                <p class="view-description">Compare types of business to spot patterns in inspection results</p>
                ${sections}
            `;
}

export default showCategories;

//<h2 class="view-title">📂 Category View</h2>
//                <div class="todo-implementation">
//                    <h3>TODO: Implement Category View</h3>
//                    <p><strong>Your task:</strong> Group the data by categories to show relationships</p>
//                    <p><strong>Good for:</strong> Understanding patterns, finding similar items, exploring by type</p>
//                    <p><strong>Consider:</strong> Group by type of business? City? Inspection result? What tells the best story?</p>
//                    <p><strong>Types of business in this data:</strong> ${[
//                      ...new Set(data.map((item) => item.category)),
//                    ].join(", ")}</p>
//                </div>