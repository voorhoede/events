const formatDate = require('./format-date');
const nunjucks = require('nunjucks');
const path = require('path');
const env = new nunjucks.Environment(
    new nunjucks.FileSystemLoader([path.join(__dirname, '/../src/')], {
        noCache: true
    })
);

/**
 * Render event templates using collected data.
 *
 * @param {Array} data
 * @return {Promise.<*[]>}
 */
function parseEventTemplate(data) {
    const promises = data.map((item) => {
        return new Promise((resolve, reject) => {
            env.addFilter('date', formatDate);
            env.render('templates/event.html', item, (err, html) => {
                err ? reject(err) : resolve({data: item, html: html});
            });
        });
    });

    return Promise.all(promises);
}

module.exports = parseEventTemplate;
