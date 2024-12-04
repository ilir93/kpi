import { teamData } from '../data/teamData.js';

export function renderTeamTable() {
    const tableHTML = `
        <div class="table-container">
            <table class="performance-table">
                <thead>
                    <tr>
                        <th>Department</th>
                        <th>KPI</th>
                        <th>This Month % of KPI</th>
                        <th>Sprint % Finished</th>
                        <th>Sprint Planned</th>
                        <th>Sprint Actual</th>
                    </tr>
                </thead>
                <tbody>
                    ${teamData.map(department => renderDepartmentRows(department)).join('')}
                </tbody>
            </table>
        </div>
    `;

    return tableHTML;
}

function renderDepartmentRows(department) {
    return department.kpis.map((kpi, index) => `
        <tr>
            ${index === 0 ? `<td rowspan="${department.kpis.length}">${department.department}</td>` : ''}
            <td>${kpi.name}</td>
            <td class="${kpi.monthlyKPI.status}">${kpi.monthlyKPI.value}%</td>
            <td>${kpi.sprintFinished}%</td>
            <td>${kpi.sprintPlanned}</td>
            <td>${kpi.sprintActual}</td>
        </tr>
    `).join('');
}