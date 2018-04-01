# JWCx Registration Frontend

This is the frontend used for handling registration requests by Junior Webmaster Camp X.

## TODOs

1.  Update font to RSU, RSU Text and KeepCalm, and update style according to JWCx CI

2.  Develop Stats API in Cloud Functions to count campers in each majors

### Bugs

* Redirection Loop on Windows (Status: Unknown)
* Navigation Between Pages are Stuck (Status: Unknown)
  * Might be caused by trying to submit while in re-deployment mode
* Back Button not working as intended on Safari (Status: Confirmed)

### Notes

Nice to have:

* Resume to previously completed steps
* Add Steppers to allow switching between pages, and show completion percentage.

Won't Fix: Set Design Uploader to Full Height with Fixed Width (Not Possible because it is a dropzone, not a normal `<img />` tag)
