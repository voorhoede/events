const formatDate = require('./format-date');
const nunjucks = require('nunjucks');
const path = require('path');
const createDirectoryName = require('./create-directory-name');
const env = new nunjucks.Environment(
    new nunjucks.FileSystemLoader([path.join(__dirname, '/../src/')], {
        noCache: true
    })
);
let object = {};

/**
 * Render overview template using collected data.
 *
 * @param {Array} data
 * @return {Promise.<*[]>}
 */
function parseOverviewTemplate(data) {
    object.events = [];

    data.map((item) => {
        const eventDirName = createDirectoryName(item);
        const url = [eventDirName, 'index.html'].join('/');

        // TODO: this looks weird, needs refactoring.
        object.events.push({
            title: item.eventTitle,
            url: url,
            date: item.eventDate,
            id: item.streamId
        });
    });

    return new Promise((resolve, reject) => {
        env.addFilter('date', formatDate);
        env.render('templates/overview.html', object, (err, html) => {
            err ? reject(err) : resolve(html);
        });
    });
}

module.exports = parseOverviewTemplate;
