# JWCx Registration Frontend

This is the frontend used for handling registration requests by Junior Webmaster Camp XI.

### Bugs

* Redirection Loop on Windows (Status: Unknown)
  * I just tried to fix this in https://github.com/WebmasterCamp/jwcx-registration-frontend/commit/6d551c27cda7a3c2869f31e5714e0faa101efa0a
* Navigation Between Pages are Stuck (Status: Unknown)
  * Might be caused by trying to submit while in re-deployment mode
* Back Button not working as intended on Safari (Status: Confirmed)

### Notes

Nice to have:

* Update font to RSU, RSU Text and KeepCalm, and update style according to JWCx CI
* Resume to previously completed steps
* Add Steppers to allow switching between pages, and show completion percentage.

Won't Fix: Set Design Uploader to Full Height with Fixed Width (Not Possible because it is a dropzone, not a normal `<img />` tag)

Additions:

* https://github.com/WebmasterCamp/jwcx-registration-frontend/commit/6c9ba7c3140ca64788467d1d7ac0cb81f93769c6
