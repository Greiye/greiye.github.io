document.addEventListener('DOMContentLoaded', function() {
    const markdownContainer = document.getElementById('markdown-container');
    const markdownFiles = ['ErubounesuWikiMain.md', 'Session1.md', 'GeneralLore.md']; // List your Markdown files here

    markdownFiles.forEach(file => {
        fetch(file)
            .then(response => response.text())
            .then(text => {
                const htmlContent = marked(text);
                const markdownBlock = document.createElement('div');
                markdownBlock.innerHTML = htmlContent;
                markdownContainer.appendChild(markdownBlock);
            })
            .catch(error => console.error('Error fetching Markdown file:', error));
    });
});
