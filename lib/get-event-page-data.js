const fs = require('fs');

/**
 * Get contents of event files.
 *
 * @param {String} folder
 * @return {Promise}
 */
function getEventPageData(folder) {
    return new Promise((resolve, reject) => {
        fs.readdir(folder, (err, filenames) => {
            err ? reject(err) : resolve(readFiles(folder, filenames));
        });
    });
}

/**
 * Read files and return content as JSON.
 *
 * @param {String} folder
 * @param {Array} filenames
 * @return {Promise.<*[]>}
 */
function readFiles(folder, filenames) {
    const promises = filenames.map((filename) => {
        return new Promise((resolve, reject) => {
            fs.readFile(folder + filename, 'utf-8', (err, content) => {
                if (err) reject(err);

                resolve(JSON.parse(content));
            });
        });
    });

    return Promise.all(promises);
}

module.exports = getEventPageData;
