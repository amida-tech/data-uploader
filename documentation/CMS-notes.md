Workflow:

* Get homepage
* regex VIEWSTATE, VIEWSTATEGENERATOR, EVENTVALIDATION
* post to CMS-2 (browser should get cookie?)
* get CMS-4
* regex for VIEWSTATE, VIEWSTATEGENERATOR, EVENTVALIDATION
* post to CMS-5
* get CMS-7 and CMS-8

Need the following from CMS-1:

* __EVENTTARGET=ctl00%24ContentPlaceHolder1%24ctl00%24HomePage%24SignIn
* __EVENTARGUMENT=
* __VIEWSTATE= retrieve the value string for this and URL encode it
* __VIEWSTATEGENERATOR= retrieve the value string for this and URL encode it
* __EVENTVALIDATION= retrieve the value string for this and URL encode it
* Search_TextBox=
* ctl00%24ContentPlaceHolder1%24ctl00%24HomePage%24confirmString=
* ctl00%24ContentPlaceHolder1%24ctl00%24HomePage%24Agree=True
* ctl00%24ContentPlaceHolder1%24ctl00%24HomePage%24isError=False
* ctl00%24ContentPlaceHolder1%24ctl00%24HomePage%24SWEUserName= <<USERNAME>>
* ctl00%24ContentPlaceHolder1%24ctl00%24HomePage%24SWEPassword= <<PASSWORD>>
* category_id=USCMS_C110
* email=

That gets POSTED to CMS-2, which automatically redirects to CMS-3

Nothing gets POSTED to CMS-4, so It can probably just be requested once the cookie is obtained.
Need the following from CMS-4:

* __EVENTTARGET=btnSubmit
* __EVENTARGUMENT=
* __VIEWSTATE= retrieve the value string for this and URL encode it
* __VIEWSTATEGENERATOR= retrieve the value string for this and URL encode it
* __EVENTVALIDATION= retrieve the value string for this and URL encode it
* TypeSelectRange=rbtnAllType
* ServiceDateRange=months36
* chkAgree=on
* inpScreenWidth=1381

Once POSTed to CMS-5... it redirects to CMS-6.  CMS-6 contains the download links.

CMS-6 is actually the same as the download links, but also contains a `mode=pdf` or `mode=text` URL Parameter