# LocalTunnel Test Application
This is a test application that can be downloaded to a rented VPS in order to set up
a web page or web application that is accessible by a public URL.

This application is based on the LocalTunnel application. The source code can be found here:
https://github.com/localtunnel/localtunnel


## Installation

* After logging into your VM. Download this repository:

`git clone https://github.com/P2PVPS/localtunnel-test-app`

* Install LocalTunnel in your VPS with the following command:

`sudo npm install -g localtunnel`

* Run LocalTunnel and instruct it to forward port 3000:

`lt --port 3000`

* Install the dependencies for your new web application:

`npm install`

* Run your web app:

`npm start`
