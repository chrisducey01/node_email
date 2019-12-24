# node_email

Simple Node app that will send an email from your Gmail account to a user.  The user's email address is entered on the command line using an Inquirer prompt.

# Pre-requisites
1. A valid gmail address
2. Configure gmail account to turn `on` "Less secure app access".  This is needed to allow node to send emails using your email address and password.  Read this [article](https://support.google.com/a/answer/6260879?hl=en) for more information on how to do this.
3. Node installed on your local machine

# Setup
1. Clone the git project to your machine (example below is using ssh)
    ``` bash
    git clone git@github.com:chrisducey01/node_email.git
    ```
2.  Install the node module dependencies from the package.json file
    ``` bash
    npm install
    ```

3.  Create a .env file in the top level directory.  This will contain your gmail account email address and password.  The .env is local to your machine only and isn't included in the git repository.

* The contents of the .env file should look similar to below (replace everything to the right of the equals sign, including the carats <>):
    ```
    # Gmail account info

    EMAIL_USER=fake_user@gmail.com
    EMAIL_PASSWORD=Password12345
    ```

# Running the App
Execute the `index.js` file and it will display an Inquirer prompt of who to send the email to.  The subject and body of the email are hard-coded in the `index.js` file.  Some assumptions are being made:
* You have setup a valid email address and password of an active gmail account in the .env file
* The email address you enter at the Inquirer prompt is valid (no validations are performed)
``` bash
node index.js
```

# Authors

* **Christopher Ducey** - *Initial work* - [chrisducey01](https://github.com/chrisducey01)