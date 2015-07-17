## data-uploader

The "data uploader" is a Chrome App that can download health records from MyHealtheVet and upload them to Amida's Data Reconciliation Engine (DRE).  You can also use the app to manually upload files to the DRE.

For MyHealtheVet Basic accounts, the app will download a Blue Button ASCII file and a PDF of your self reported information.

For MyHealtheVet Premium accounts, the app will download a Blue Button ASCII file and PDF of your basic information, and a CCD-formatted XML file and PDF with your advanced information.

### Documentation

Endpoints used to access MyHealtheVet are documented in the `documentation` folder.

### Installation

For installation, run the following:

```
npm install -g grunt-cli
npm install
bower install
grunt build
```

The `grunt build` command will generate a `dist` folder which contains the built files.

In google chrome, go to `chrome://extensions` to bring up the extensions manager.

In the upper right corner of the window there will be a `Developer mode` checkbox.  Ensure that it is CHECKED

Then click `Load unpacked extension...` and use that to open the `dist` folder.  You should now be able to launch the app in chrome.

### Future Improvements

Add CMS support