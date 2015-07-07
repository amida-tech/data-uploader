data-uploader
=========

data-uploader is a Chrome App that will download your BlueButton Health Record from `Centers for Medicare & Medicade Services` or `My HealtheVet` and upload them to our [Data Reconciliation Engine](amida-tech/DRE)

Installation
===================
`npm install` then `bower install`

Usage
=================

After installation, run `grunt build` to generate a package suitable for using in chrome.  Once the build is complete, you can add a package in the Chrome Extensions menu by selecting either the "dist" folder or the zipped package in the package folder.  You may need to turn on Developer mode in the Chrome Extensions Menu

For debugging, use `grunt debug:server` which should open a page in chrome that you can use with livereloading

## License

Licensed under [Apache 2.0](./LICENSE)