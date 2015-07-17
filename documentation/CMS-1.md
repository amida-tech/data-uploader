GET / HTTP/1.1
Host: mymedicare.gov
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:39.0) Gecko/20100101 Firefox/39.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate
Connection: keep-alive

========================================================
note, when doing this via node http request, these are the headers I get in response:
statusCode:  200
headers:  { 'cache-control': 'private',
  'content-type': 'text/html; charset=utf-8',
  'set-cookie': [ 'ASP.NET_SessionId=<<REMOVED>>; path=/; secure; HttpOnly' ],
  'x-frame-options': 'SAMEORIGIN',
  date: 'Thu, 16 Jul 2015 17:30:33 GMT',
  'content-length': '117977' }

========================================================

HTTP/1.1 200 OK
Cache-Control: private
Content-Type: text/html; charset=utf-8
Content-Encoding: gzip
Vary: Accept-Encoding
Set-Cookie: ASP.NET_SessionId=<<REMOVED>>; path=/; secure; HttpOnly
X-Frame-Options: SAMEORIGIN
Date: Thu, 16 Jul 2015 14:37:23 GMT
Content-Length: 27827



<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd" />

<html id="ctl00_htmlHead" xmlns="http://www.w3.org/1999/xhtml" lang="en">
<script type="text/javascript">
    // This assets link can be referenced dynamically via each page type.
    var assetsHosts = '';
    var assetsCheck = 'False';
    var medicareUrl = 'http://www.medicare.gov';
    var AssetsDown = "false";
    // For spanish Links, Medicare Links to be updated as Spanish
    
</script>

<head id="ctl00_Top">
    <script type="text/javascript" src="/javascript/jsapi.js"></script>
    <script type='text/javascript' src='/Javascript/jquery-1.7.2.js'></script>
   
    <meta http-equiv="Content-Type" content="text/html;charset=utf-8" /><title>
	MyMedicare.gov:  Portal of Personalized Information
</title>

      <!-- apple-touch-icon start->
    
<!-- links for apple touch icon(add to homescreen)-->
<link rel="apple-touch-icon" AssetsSrc="/Resources/Global/Images/Icons/icon-iphone.png" href="/Resources/Global/Images/Icons/icon-iphone.png" /><link rel="apple-touch-icon" sizes="72x72" AssetsSrc="/Resources/Global/Images/Icons/icon-ipad.png" href="/Resources/Global/Images/Icons/icon-ipad.png" /><link rel="apple-touch-icon" sizes="114x114" AssetsSrc="/Resources/Global/Images/Icons/icon-iphone4.png" href="/Resources/Global/Images/Icons/icon-iphone4.png" /><link rel="apple-touch-icon" sizes="144x144" AssetsSrc="/Resources/Global/Images/Icons/icon-ipad2.png" href="/Resources/Global/Images/Icons/icon-ipad2.png" />
    <!-- apple-touch-icon End-->
<meta name="Keyword" content="medicare, medicare certified, Medicare, MyMedicare, Secure Medicare Portal, Personalized Medicare information, medicare benefits,  Interactive Site for peoples with Medicare, mymedicare.gov, Online Medicare service and benefits, Free Secure Online Medicare Service, Personalized Medicare Claims information, Customizable Medical Conditions, Customizable Allergies information, Customizable implantable devices, Medicare Health Information, Personalized Preventive Services, Quality information on Medicare Providers, Medicare Health Information" /><meta name="Description" content="MyMedicare.gov is an interactive Medicare portal containing personalized information regarding Claims, Plans and Coverage, Benefits and Entitlements, Preventive Services and other self entered health information like allergies, medical conditions and implantable devices" /><meta name="Robots" content="Index, Follow" /><NOSCRIPT><meta http-equiv='refresh' content='0;url=../Error_NoJavaScript.aspx'></NOSCRIPT><link id="ctl00_/Applets/HomePageResponsive/Login.css" href="/Applets/HomePageResponsive/Login.css" rel="stylesheet" type="text/css" /></head>

<body>

    <!-- Header Scripts Start-->
    <!--[if IE]>

<meta http-equiv="imagetoolbar" content="no" />

<![endif]-->
<!-- -->

<script type='text/javascript'>var _sf_startpt=(new Date()).getTime()</script>

<link rel="shortcut icon" href="/favicon.ico"/>



<!-- Pre-existing header scripts-->

<script type='text/javascript'>

  //<![CDATA[

        function mp_onload() {

            if (window.body_onload != null)

                window.body_onload();

        }

        function getAnchorValue() {

            var url = location.href;

            var urlArray = url.split('#');



            //Delete old cookie.

            document.cookie = "anchor=" + "" + "; expires=-1" + "; path=/";



            if (urlArray[1] != null && urlArray[1] != "") {

                //Create new cookie.

                document.cookie = "anchor=" + urlArray[1] + "; path=/";

            }

        }

        //]]>



</script>



<!--Medicare Libraries and styles-->

<link rel='stylesheet' href='/CSS/MedicareHeaderFooter.css'  type='text/css'/>
<!--<link rel='stylesheet' href='/Resources/Global/CSS/jquery.jcarousel.css' type='text/css' />-->


    <!-- Header Scripts End-->
    <!-- Responsive Scripts Start-->
    <meta name="HandheldFriendly" content="True" />
<meta name="MobileOptimized" content="320" />
<meta name="viewport" content="initial-scale=1">
<link rel="apple-touch-icon" AssetsSrc='/Resources/Global/Images/Icons/icon-iphone.png'  href='/Resources/Global/Images/Icons/icon-iphone.png' />
<link rel="apple-touch-icon" sizes="72x72" AssetsSrc='/Resources/Global/Images/Icons/icon-ipad.png' href='/Resources/Global/Images/Icons/icon-ipad.png' />
<link rel="apple-touch-icon" sizes="114x114" AssetsSrc='/Resources/Global/Images/Icons/icon-iphone4.png' href='/Resources/Global/Images/Icons/icon-iphone4.png' />
<link rel="apple-touch-icon" sizes="144x144" AssetsSrc='/Resources/Global/Images/Icons/icon-ipad2.png' href='/Resources/Global/Images/Icons/icon-ipad2.png' />

<link  AssetsSrc='/Resources/Global/css/lib/bootstrap.css' href='/Resources/Global/css/lib/bootstrap.css' rel="stylesheet" type="text/css"/>
<link  AssetsSrc='/Resources/Global/css/lib/bootstrap-responsive.css' href='/Resources/Global/css/lib/bootstrap-responsive.css' rel="stylesheet"/>
<link rel="stylesheet"  AssetsSrc='/Resources/Global/css/lib/jquery-ui-1.8.17.custom.css' href='/Resources/Global/css/lib/jquery-ui-1.8.17.custom.css' type="text/css"/>
<link rel="stylesheet"  AssetsSrc='/Resources/Global/css/508Assets.css' href='/Resources/Global/css/508Assets.css' type="text/css"/>
<link rel="stylesheet"  AssetsSrc='/Resources/Medicare/css/MedicareGlobal.css' href='/Resources/Medicare/css/MedicareGlobal.css' type="text/css"/>
<link rel="stylesheet"  AssetsSrc='/Resources/Global/css/508addthis.css' href='/Resources/Global/css/508addthis.css' type="text/css"/>



<!-- HTML5 shi/css3 media query, for IE6-8 support of HTML5 elements  -->
<!--[if lt IE 9]>
      <script src="/Javascript/html5shim.js"></script>
<![endif]-->
    
<script type="text/javascript">
    // Fix iPhone viewport scaling bug on orientation change
    (function (doc) {

        var addEvent = 'addEventListener',
        type = 'gesturestart',
        qsa = 'querySelectorAll',
        scales = [1, 1],
        meta = qsa in doc ? doc[qsa]('meta[name=viewport]') : [];

        function fix() {
            meta.content = 'width=device-width,minimum-scale=' + scales[0] + ',maximum-scale=' + scales[1];
            doc.removeEventListener(type, fix, true);
        }

        if ((meta = meta[meta.length - 1]) && addEvent in doc) {
            fix();
            scales = [.25, 4.0];
            doc[addEvent](type, fix, true);
        }

    } (document));
</script>

    <!-- Responsive Scripts End-->
<link href="/CSS/MyMedicareResponsive.css" rel="Stylesheet" type="text/css" media="screen" />
<link href="/CSS/UnAuthenticatedHeaderFooter.css" rel="Stylesheet" type="text/css" media="screen" />


        
<a name="Top"></a>
<div class="SkipNav">
 <a  href="#maincontent" title='Skip Navigation' >Skip Navigation</a>
</div>
<form name="aspnetForm" method="post" action="/default.aspx" id="aspnetForm" autocomplete="off">
<div>
<input type="hidden" name="__EVENTTARGET" id="__EVENTTARGET" value="" />
<input type="hidden" name="__EVENTARGUMENT" id="__EVENTARGUMENT" value="" />
<input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="/<<REMOVED>>==" />
</div>

<script type="text/javascript">
//<![CDATA[
var theForm = document.forms['aspnetForm'];
if (!theForm) {
    theForm = document.aspnetForm;
}
function __doPostBack(eventTarget, eventArgument) {
    if (!theForm.onsubmit || (theForm.onsubmit() != false)) {
        theForm.__EVENTTARGET.value = eventTarget;
        theForm.__EVENTARGUMENT.value = eventArgument;
        theForm.submit();
    }
}
//]]>
</script>

<div>

	<input type="hidden" name="__VIEWSTATEGENERATOR" id="__VIEWSTATEGENERATOR" value="<<REMOVED>>" />
	<input type="hidden" name="__EVENTVALIDATION" id="__EVENTVALIDATION" value="<<REMOVED>>" />
</div>

<!--REST OF DOCUMENT REMOVED BECAUSE IT IS NOT REQUIRED-->