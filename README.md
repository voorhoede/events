# Voorhoede Events Livestream Pages

This repository creates the livestream pages for our events.

## Getting started

### Start local server

```bash
$ npm start
```

### Setting up a page for a new event

1. In the `events` directory, create a new `.json` file.

    Put the following JSON in your new file:

    ```json
    {
    "eventTitle": "",
    "eventUrl": "",
    "eventDate": "",
    "streamId": ""
    }
    ```

_NOTE: if you're not sure what to put where, check any of the other event files._

2. Set up a livestream on YouTube and use it's ID for `streamId`.
3. Run `npm start` to generate the event pages.
