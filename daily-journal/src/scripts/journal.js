API.getJournalEntries()
	.then(entries => {
		console.log(entries);
		renderJournalEntries(entries)
	});
