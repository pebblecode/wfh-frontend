# WFH Front-End 

![Build](https://travis-ci.org/pebblecode/wfh-frontend.svg)

A dashboard to let you quickly see where your colleagues are: in the office, working from elsewhere, or on holiday. Built with React, Redux and Webpack.

Designed to be used with the [WFH API](https://github.com/pebblecode/wfh-api).

For an overview, see our [blog post](http://pebblecode.com/blog/november-wfh-slack/).

![example](http://i.imgur.com/TL3YusG.png)

## Development

You will need the WFH API to be running alongside. See [its own README](https://github.com/pebblecode/wfh-api/blob/master/README.md)
for the relevant instructions. Then you can run up this front-end with:

`npm install && npm start`

## Deployment

We use Travis CI and host statically on Amazon S3.

This creates the built version for Production: `npm run build`

Update the .travis.yml according to your S3 config. we used `travis encrypt ` here.


## TV Display (Raspberry PI Kiosk mode)
![TV Display](http://pebblecode.com/img/posts/2015-11-03-wfh-slack/tv.jpg)
 - We have this on a screen in the office. Running on a raspberry pi A+.
 - On amazon there is a [Shopping list](http://www.amazon.co.uk/registry/wishlist/KPLLE5XXL6DK) to help find the bits you need. We actually didn't need the Power adapter as the USB is directly plugged into the TV.
 - Once you have your pi delivered, (we used prime as we were impatient!) Flash the SD card with: [Raspbian](https://www.raspberrypi.org/documentation/installation/installing-images/README.md) 
 - Then follow the steps [here](https://github.com/elalemanyo/raspberry-pi-kiosk-screen#epiphany-browser) to boot the device into fullscreen kiosk mode.

## Next Steps
TV Mode: Avoid burn in on office displays using animations. A way to cycle through users not in view to allow for larger teams.

## LICENSE

MIT 

