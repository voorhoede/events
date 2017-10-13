const fs = require('fs');
const path = require('path');
const distPath = path.resolve(__dirname, '../dist');
const file = [distPath, 'index.html'].join('/');

/**
 * Create the overview page using the HTML and found event data.
 * Write file to correct location.
 *
 * @param {Array} data
 * @return {Promise}
 */
function renderOverviewHtml(data) {
    return new Promise((resolve, reject) => {
        // Create directory if it doesn't exist.
        if (!fs.existsSync(distPath)) {
            fs.mkdirSync(distPath);
        }

        // Write file to directory.
        fs.writeFile(file, data, (err) => {
            if (err) reject(err);

            resolve(console.log('created event page at:', distPath));
        });
    });
}

module.exports = renderOverviewHtml;
