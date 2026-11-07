
/**
 * TABLE VIEW - STUDENTS IMPLEMENT
 * Display data in sortable rows - good for scanning specific information
 */

// Turns "2026-05-17T00:00:00.000" into "May 17, 2026"
function formatDate(isoDate) {
  return new Date(isoDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

// This dataset writes missing values as "------" or "N/A". Show "Not listed" instead.
function orNotListed(value) {
  return value === '------' || value === 'N/A' || value === undefined ? 'Not listed' : value;
}

function showTable(data) {
  // TODO: Students implement this function
  // Requirements:
  // - Use a real HTML <table>, with <th> header cells and a <caption> saying what the table shows
  // - Include the 4-6 most useful fields
  // - Show "Not listed" instead of undefined when a value is missing
  // - Optional: add sorting
  /*html*/ 

  const rows = data
    .map(
        (inspection) => `
        <tr>
        <td>${orNotListed(inspection.establishment_id)}</td>
        <td>${orNotListed(inspection.name)}</td>
        <td>${orNotListed(inspection.category)}</td>
        <td>${formatDate(inspection.inspection_date)}</td>
        <td>${orNotListed(inspection.inspection_type)}</td>
        <td>${orNotListed(inspection.inspection_results)}</td>
        </tr>
        `
    )
    .join("");

  /*html*/
  return `
                <h2 class="view-title">📊 Table View</h2>
                <p class="view-description">Inspection information for health inspector</p>
                <table class = "restaurant-table">
                    <caption>Health Inspector Information</caption>
                    <tr>
                    <th scope = "col">Establishment ID</th>
                    <th scope = "col">Establishment Name</th>
                    <th scope = "col">Category</th>
                    <th scope = "col">Inspection Date</th>
                    <th scope = "col">Inspection Type</th>
                    <th scope = "col">Inspection Results</th>
                    </tr>
                    <tbody>${rows}</tbody>
                </table>
        `;
}

export default showTable;

//<div class="todo-implementation">
                //    <h3>TODO: Implement Table View</h3>
                //    <p><strong>Your task:</strong> Display the data as a real HTML table, with header cells and a caption</p>
                //    <p><strong>Good for:</strong> Scanning specific data points, comparing values, finding specific information</p>
                //    <p><strong>Consider:</strong> Which columns are most important? How can you make scanning easy?</p>
                //    <p><strong>Data available:</strong> ${data.length} items loaded</p>
                //</div>
            //;