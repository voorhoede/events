const getEventPageData = require('./lib/get-event-page-data');
const getOverviewPageData = require('./lib/get-overview-page-data');
const renderEventHtml = require('./lib/render-event-html');
const renderOverviewHtml = require('./lib/render-overview-html');
const parseEventTemplate = require('./lib/parse-event-template');
const parseOverviewTemplate = require('./lib/parse-overview-template');
const path = require('path');

const folder = process.argv[2] || __dirname;
const folderPath = path.resolve(__dirname, folder) + '/';

/**
 * Create event overview page.
 */
function overviewPage() {
    return getOverviewPageData(folderPath)
        .then(data => parseOverviewTemplate(data))
        .then(html => renderOverviewHtml(html))
        .catch((err) => {
            console.log(err);
        });
}

overviewPage();

/**
 * Create event pages.
 */
function eventPages() {
    return getEventPageData(folderPath)
        .then(data => parseEventTemplate(data))
        .then(html => renderEventHtml(html));
}

eventPages();
