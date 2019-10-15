const entriesArr = [
	{
		id: 1,
		date: '10/14/2019',
		concept: 'JS Objects',
		entry: `Whao. I am so amazing.`,
		mood: `Dope`
	},
	{
		id: 2,
		date: '10/15/2019',
		concept: 'JS Scope',
		entry: `This is your time to shine, gurl.`,
		mood: `Dope`
	}
];

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
	    	<h2>${concept}<h2>
	    	<h5>${date}<h5>
	    	<h5>${mood}<h5>
	    	<p>${entry}<p>
	    <section>
    `;
};

const renderJournalEntries = entries => {
	const entryLog = document.querySelector(`.entry-log`);

	entries.forEach(entry => entryLog.innerHTML += makeJournalEntryComponent(entry));
}

// Invoke the render function
renderJournalEntries(entriesArr);

// Invoked when submit button is clicked
const recordEntry = entry => entriesArr.push(journalEntry);