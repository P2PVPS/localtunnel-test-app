# LocalTunnel Test Application
This is a test application that can be downloaded to a rented VPS in order to set up
a web page or web application that is accessible by a public URL.

This application is based on the LocalTunnel application. The source code can be found here:
https://github.com/localtunnel/localtunnel


## Installation
**You can [watch a video](http://p2pvps.org/serving-an-express-js-web-app-with-a-p2p-vps-rental/) on how to run this example program on a P2P VPS rented server**

1. After logging in, navigate to the storage directory:

`cd /media/storage`

2. Install LocalTunnel in your VPS with the following command:

`sudo npm install -g localtunnel`

3. After logging into your VM. Download this repository:

`git clone https://github.com/P2PVPS/localtunnel-test-app`

Occasionally, you'll get the following error:

`fatal: could not create work tree dir 'localtunnel-test-app': Permission denied`

You can fix this by giving yourself permission with this command:

`sudo chown -R $USER /media/storage/`

4. Install the dependencies for your new web application:

`npm install`

5. Run LocalTunnel and instruct it to forward port 3500. Note the URL it gives you.
This is the URL where you can access the website your device is serving.

`lt --host http://peerlink.fun --port 3500 &`

6. Run your web app:

`npm start`

## HTTPS
A note on HTTPS and SSL encryption:
[Let's Encrypt will issue wildcard certs](https://letsencrypt.org/2017/07/06/wildcard-certificates-coming-jan-2018.html)
at the end of February 2018. At that point, the peerlink.fun server will be updated
to allow HTTPS encryption from your rented device.
