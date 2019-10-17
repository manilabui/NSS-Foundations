const journalEntry = {
	date: "",
	concept: "",
	entry: "",
	mood: ""
};

const makeJournalEntryComponent = entryObj => {
    const { date, concept, entry, mood, id } = entryObj;

    return `
    	<section class=${id}>
	    	<h2>${concept}</h2>
	    	<h5>${date}</h5>
	    	<h5>${mood}</h5>
	    	<p>${entry}</p>
	    <section>
    `;
};

// Invoked when submit button is clicked
const recordEntry = entry => entriesArr.push(journalEntry);

const renderJournalEntries = entries => {
	const entryLog = document.querySelector(`.entry-log`);

	entries.forEach(entry => entryLog.innerHTML += makeJournalEntryComponent(entry));
}

fetch('http://localhost:8088/entries') // Fetch from the API
    .then(response => response.json())  // Parse as JSON
    .then(entries => renderJournalEntries(entries));

