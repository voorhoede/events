const fs = require('fs');
const path = require('path');
const createDirectoryName = require('./create-directory-name');
const distPath = path.resolve(__dirname, '../dist');

/**
 * Create the event pages using the HTML and event data.
 * Write new files to correct locations.
 *
 * @param {Array} data
 * @return {Promise.<*[]>}
 */
function renderHtml(data) {
    const promises = data.map((page) => {
        const eventDirName = createDirectoryName(page.data);
        const distDirectory = [distPath, eventDirName].join('/');
        const file = [distDirectory, 'index.html'].join('/');

        return new Promise((resolve, reject) => {
            // Create directory if it doesn't exist.
            if (!fs.existsSync(distDirectory)) {
                fs.mkdirSync(distDirectory);
            }

            // Write file to directory.
            fs.writeFile(file, page.html, (err) => {
                if (err) reject(err);
                resolve(console.log('created event page at:', distDirectory));
            });
        });
    });

    return Promise.all(promises);
}

module.exports = renderHtml;
