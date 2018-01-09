# LocalTunnel Test Application
This is a test application that can be downloaded to a rented VPS in order to set up
a web page or web application that is accessible by a public URL.

This application is based on the LocalTunnel application. The source code can be found here:
https://github.com/localtunnel/localtunnel


## Installation
**You can [watch a video](http://p2pvps.org/serving-an-express-js-web-app-with-a-p2p-vps-rental/) on how to run this example program on a P2P VPS rented server**

1. Install LocalTunnel in your VPS with the following command:

`sudo npm install -g localtunnel`

2. After logging into your VM. Download this repository:

`git clone https://github.com/P2PVPS/localtunnel-test-app`

Occasionally, you'll get the following error:

`fatal: could not create work tree dir 'localtunnel-test-app': Permission denied`

You can fix this by giving yourself permission with this command:

`sudo chown -R $USER /media/storage/`

3. Install the dependencies for your new web application:

`npm install`

4. Run LocalTunnel and instruct it to forward port 3500. Not the URL it gives you.
This is the URL where you can access the website your device is serving.

`lt --port 3500 &`

5. Run your web app:

`npm start`
