# WFH Front-End

![Build](https://api.travis-ci.org/pebblecode/wfh_frontend.svg?token=F5kJ2zgCzNfgE9rzZNys)

A dashboard to let you quickly see where your colleagues are: in the office, working from elsewhere, or on holiday.

Designed to be used with the [WFH API](https://github.com/pebblecode/wfh-api).

For an overview, see our [blog post](http://pebblecode.com/blog/november-wfh-slack/).


## Development

You will need the WFH API to be running alongside. See [its own README](https://github.com/pebblecode/wfh-api/blob/master/README.md)
for the relevant instructions. Then you can run up this front-end with:

`npm install && npm start`

## Deployment

We use Travis CI and host statically on Amazon S3.

`npm run build`

## LICENSE

MIT

