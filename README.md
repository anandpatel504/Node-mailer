# Node-mailer-APP

This is the nodemailer app you can send the email by using this app. but before sending the email you have to open your less secure app which is provided by Google. for open less secure app press [here](https://myaccount.google.com/lesssecureapps?pli=1). if you will fill any incorrect information then it will throw error please check your details. this is the app link(https://nodemailer.ml/), it's hosted on aws.

## Requirements

If you're using Linux-based OS, install the latest version of Nodejs and npm, by typing the following commands on your terminal.
```
sudo apt update
sudo apt install build-essential apt-transport-https lsb-release ca-certificates curl

```
Then, for the **Latest** release (version 12), add this PPA, by typing the following command on your terminal
```
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt install nodejs

```
Now, you need to install necessary dependencies using npm (node-package-manager), open your termial, and first type <br>
`npm init` to initialize **package.json** file. Then, type <br>
```
npm install express
npm install body-parser
npm install nodemailer

```
