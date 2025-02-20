# Bootstrap 5 easyToast
Simple JS/JQuery script to implement pop-up toasts in Bootstrap 5
Tested on Bootstrap 5.2.3 with JQuery 3.6.1

This is a single-file library that implements toasts in your website.
Requirements: Bootstrap 5, JQuery

# Installation
Add the file easyToast.js to your project and call it like any other script:

`<script src="path/to/easyToast.js"></script>`

# Usage
To use easyToast in your code, call one of the below functions.

`successModal(title="Success",body="")`

![0tljscb](https://github.com/CttCJim/easyToast/assets/31054746/6257172b-f6f5-4a15-9936-a33856d53b19)

`errorModal(title="Success",body="")`

![rGOgbs2](https://github.com/CttCJim/easyToast/assets/31054746/db5e630a-4a8d-49ca-b63a-434b836a99d8)

`infoModal(title="Info",body="")`

![Psf1AnY](https://github.com/CttCJim/easyToast/assets/31054746/3c823c1f-9638-4c9b-a063-be2ca8979e3c)

# Arguments
An easyToast can be called with one or two string arguments. If only one is provided, it becomes the toast body and a default title is used.

`infoModal("One String");`

![sF2x4C3](https://github.com/CttCJim/easyToast/assets/31054746/a94358bd-1eca-4548-9c4e-460721bdd197)

`infoModal("One String","Two Strings");`

![image](https://github.com/CttCJim/easyToast/assets/31054746/4d34c4de-933e-4545-99f1-7b075393d15e)

# Positioning
Dynamic positioning is not yet supported. You can change the positioning of the toast popups by uncommenting thje appropriate "pos=" line at the top of easyToast.js as in the image below:
![image](https://github.com/user-attachments/assets/460abd7d-f378-4a98-a4b4-3760fd7168e4)

# Support and Questions
Send me a message on Patreon if you'd like support with easyToast.

[https://www.patreon.com/CttCJim](url)

# Future Development
At present, this is a VERY simple version of easyToast. It lets Bootstrap decide the duration to show the message for and only displays in the bottom right. In the future, I will add a duration argument and allow the user to customize display location.
