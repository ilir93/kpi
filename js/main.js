import { renderTeamTable } from './components/TeamTable.js';

document.addEventListener('DOMContentLoaded', () => {
    const teamPerformanceSection = document.querySelector('.team-performance');
    teamPerformanceSection.innerHTML = renderTeamTable();
});