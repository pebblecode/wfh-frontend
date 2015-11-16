# WFH Front-End

![Build](https://api.travis-ci.org/pebblecode/wfh_frontend.svg?token=F5kJ2zgCzNfgE9rzZNys)

A dashboard to let you quickly see where your colleagues are: in the office, working from elsewhere, or on holiday.

Designed to be used with the [WFH API](https://github.com/pebblecode/wfh-api).

For an overview, see our [blog post](http://pebblecode.com/blog/november-wfh-slack/).

![example](http://i.imgur.com/TL3YusG.png)

## Development

You will need the WFH API to be running alongside. See [its own README](https://github.com/pebblecode/wfh-api/blob/master/README.md)
for the relevant instructions. Then you can run up this front-end with:

`npm install && npm start`

## Deployment

We use Travis CI and host statically on Amazon S3.

`npm run build`

## TV Display (Raspberry PI Kiosk mode)
![TV Display](http://pebblecode.com/img/posts/2015-11-03-wfh-slack/tv.jpg)
 - We have this on a screen in the office. Running on a raspberry pi A+.
 - On amazon there is a [Shopping list](http://www.amazon.co.uk/registry/wishlist/KPLLE5XXL6DK) to help find the bits you need.
 - Once you have your pi delivered, (we used prime as we were impatient!) Flash the SD card with: [Raspbian](https://www.raspberrypi.org/documentation/installation/installing-images/README.md) 
 - Then follow the steps [here](https://github.com/pebblecode/raspberry-pi-kiosk-screen/tree/feature/updates-to-lxsession-lxde-path#epiphany-browser) to boot the device into fullscreen kiosk mode.

## LICENSE

MIT

