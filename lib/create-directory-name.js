/**
 * Create directory name using the date and name of the event.
 *
 * @param {Object} object     Event data.
 * @return {string}         Directory name.
 */
function createDirectoryName(object) {
    const date = getDate(object.eventDate);
    const title = getTitle(object.eventTitle);

    return [date, title].join('-');
}

/**
 * Sanitize date of event to be used as part of directory name.
 *
 * @param {String} date     Date string.
 * @return {string}         Sanitized date.
 */
function getDate(date) {
    return date.substring(0, date.indexOf('T'));
}

/**
 * Sanitize title of event to be used as part of directory name.
 *
 * @param title         Title string.
 * @return {string}     Sanitize title.
 */
function getTitle(title) {
    return title.toLowerCase().replace(/\s+/g, '-');
}

module.exports = createDirectoryName;
