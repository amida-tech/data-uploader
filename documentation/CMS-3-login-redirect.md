GET /dashboard.aspx HTTP/1.1
Host: mymedicare.gov
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:39.0) Gecko/20100101 Firefox/39.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate
Referer: https://mymedicare.gov/
Cookie: ASP.NET_SessionId=<<REMOVED>>; ORA_OSFS_SESSION=<<REMOVED>>; JSESSIONID=<<REMOVED>>; NGDOIFJSessionId=<<REMOVED>>
Connection: keep-alive

=====================================================================================================================

HTTP/1.1 200 OK
Cache-Control: private
Content-Type: text/html; charset=utf-8
Content-Encoding: gzip
Vary: Accept-Encoding
X-Frame-Options: SAMEORIGIN
Date: Thu, 16 Jul 2015 14:39:19 GMT
Content-Length: 12933

 

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html id="htmlHead" xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
<script type="text/javascript">
    // This assets link can be referenced dynamically via each page type.
    var assetsHosts = '';
    var assetsCheck = 'False';
    var medicareUrl = 'http://www.medicare.gov';
    var AssetsDown = "false";
    // For spanish Links, Medicare Links to be updated as Spanish
    
</script>

<head id="Top"><meta http-equiv="Content-Type" content="text/html;charset=utf-8" /><title>
	MyMedicare.gov - Home
</title><meta name="viewport" content="width=device-width,  initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0" /><link id="rwdTableCss" href="CSS/rwdtable-core.css" rel="stylesheet" />
    
  
    
    <!-- Header Scripts Start-->
    <!--[if IE]>

<meta http-equiv="imagetoolbar" content="no" />

<![endif]-->
<!-- -->

<script type='text/javascript'>var _sf_startpt=(new Date()).getTime()</script>

<link rel="shortcut icon" href="/favicon.ico" />



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

<link rel="stylesheet" href="/CSS/MedicareHeaderFooter.css" type="text/css" />
<!--<link rel="stylesheet" href="/Resources/Global/CSS/jquery.jcarousel.css" type="text/css" />-->


    <!-- Header Scripts End-->

    <!-- Responsive Scripts Start-->
    <meta name="HandheldFriendly" content="True" /><meta name="MobileOptimized" content="320" /><meta name="viewport" content="initial-scale=1" /><link rel="apple-touch-icon" AssetsSrc="/Resources/Global/Images/Icons/icon-iphone.png" href="/Resources/Global/Images/Icons/icon-iphone.png" /><link rel="apple-touch-icon" sizes="72x72" AssetsSrc="/Resources/Global/Images/Icons/icon-ipad.png" href="/Resources/Global/Images/Icons/icon-ipad.png" /><link rel="apple-touch-icon" sizes="114x114" AssetsSrc="/Resources/Global/Images/Icons/icon-iphone4.png" href="/Resources/Global/Images/Icons/icon-iphone4.png" /><link rel="apple-touch-icon" sizes="144x144" AssetsSrc="/Resources/Global/Images/Icons/icon-ipad2.png" href="/Resources/Global/Images/Icons/icon-ipad2.png" /><link AssetsSrc="/Resources/Global/css/lib/bootstrap.css" href="/Resources/Global/css/lib/bootstrap.css" rel="stylesheet" type="text/css" /><link AssetsSrc="/Resources/Global/css/lib/bootstrap-responsive.css" href="/Resources/Global/css/lib/bootstrap-responsive.css" rel="stylesheet" /><link rel="stylesheet" AssetsSrc="/Resources/Global/css/lib/jquery-ui-1.8.17.custom.css" href="/Resources/Global/css/lib/jquery-ui-1.8.17.custom.css" type="text/css" /><link rel="stylesheet" AssetsSrc="/Resources/Global/css/508Assets.css" href="/Resources/Global/css/508Assets.css" type="text/css" /><link rel="stylesheet" AssetsSrc="/Resources/Medicare/css/MedicareGlobal.css" href="/Resources/Medicare/css/MedicareGlobal.css" type="text/css" /><link rel="stylesheet" AssetsSrc="/Resources/Global/css/508addthis.css" href="/Resources/Global/css/508addthis.css" type="text/css" />



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

    <link href="/CSS/MyMedicareResponsive.css" rel="Stylesheet" type="text/css" /><link href="/css/AuthMyMedicareHeaderFooter.css" rel="Stylesheet" type="text/css" />


<script type="text/javascript" >
var timeoutMilliseconds = 1198000;
var warnMilliseconds = 1018000;
var siebelMilliseconds = 900000;


var alertPage = '../timeAlert.html';
var timeoutPage = '../signout.aspx';
var timeoutTimer;
var alertTimer=0;
var siebelTimer=0;
var timeOutWin;

function setSecurityTimer() {
    clearTimeout(timeoutTimer);  
	timeoutTimer = window.setTimeout("location.href='" + timeoutPage + "'", timeoutMilliseconds);
}



function loadTimer(initSiebelTimer) {
    if(timeOutWin!=null) timeOutWin.close();
    
    clearTimeout(alertTimer);  
	alertTimer = window.setTimeout('displayAlert()', warnMilliseconds);
	siebelTimer= window.setTimeout('CallSiebel();', initSiebelTimer);
	setSecurityTimer();
}

function unLoadPage() {
	var abssize = document.body.offsetWidth-30;
	if (event.clientY < 0 && event.clientX >= abssize) {
		location.href = timeoutPage;
	}
}

function displayAlert() {
	timeOutWin = window.open(alertPage, "smallwindow", 'toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=no,resizable=no,width=585,height=330');
	if (timeOutWin) timeOutWin.focus();
}

function keepalive() {
	if(timeOutWin!=null) timeOutWin.close();
	window.clearTimeout(alertTimer);
	alertTimer = window.setTimeout('displayAlert()', warnMilliseconds);
	window.clearTimeout(timeoutTimer);
	setSecurityTimer();
}

function resetTimer(){
    clearTimeout(alertTimer);  
    alertTimer = window.setTimeout('displayAlert()', warnMilliseconds);
    
    clearTimeout(timeoutTimer);
	timeoutTimer = window.setTimeout("location.href='" + timeoutPage + "'", timeoutMilliseconds);
}


function ReceiveServerData(rValue){}

var reqXML;

function CallSiebel(){
    var paramString = new Date().getTime();
    var url="../SiebelWSRenew.aspx?id="+paramString;
   
    if(window.XMLHttpRequest){
        reqXML = new XMLHttpRequest();
        reqXML.onreadystatechange = testResult;
        reqXML.open("GET",url,true);
        reqXML.send(null);

    } else if (window.ActiveXObject){
        reqXML = new ActiveXObject("Microsoft.XMLHTTP");
        reqXML.onreadystatechange = testResult;
        reqXML.open("GET",url,true);
        reqXML.send();
    }else{
        alert("Your browswer does not support Ajax");
        return;
    }
}

function testResult(){
    
    if(reqXML.readyState == 4){
        if (reqXML.status == 200){
            if(reqXML.responseText.indexOf("SUCCESS") ==0){
//                alert("session renewed!");
               	window.clearTimeout(siebelTimer);
	            siebelTimer = window.setTimeout('CallSiebel();', siebelMilliseconds);
            }else{
//              alert("Seibel Session will expire soon. Please save your data and click any menu to renew your session");
            }
        }else{
//            alert("There is a problem retrieving XML data");
        }
    }
}





</script>






</head>

<body>


        
<a name="Top"></a>
<div class="skipnav">
 <a  href="#maincontent" title="Skip Navigation">Skip Navigation</a>
 </div>
    <form name="formMyMedicare" method="post" action="applets/dashboard/dashboardresp.aspx?guid=<<REMOVED>>" id="formMyMedicare" autocomplete="off">
<div>
<input type="hidden" name="__EVENTTARGET" id="__EVENTTARGET" value="" />
<input type="hidden" name="__EVENTARGUMENT" id="__EVENTARGUMENT" value="" />
<input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="<<REMOVED>>" />
</div>

<script type="text/javascript">
//<![CDATA[
var theForm = document.forms['formMyMedicare'];
if (!theForm) {
    theForm = document.formMyMedicare;
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


<script src="/WebResource.axd?d=<<REMOVED>>&amp;t=<<REMOVED>>" type="text/javascript"></script>


<script type="text/javascript">
//<![CDATA[
function CallServer(arg, context){ WebForm_DoCallback('to1',arg,ReceiveServerData,context,null,false);}//]]>
</script>

<script src="/ScriptResource.axd?d=<<REMOVED>>t=<<REMOVED>>" type="text/javascript"></script>
<script src="/ScriptResource.axd?d=<<REMOVED>>t=<<REMOVED>>" type="text/javascript"></script>
<div>

	<input type="hidden" name="__VIEWSTATEGENERATOR" id="__VIEWSTATEGENERATOR" value="<<REMOVED>>" />
	<input type="hidden" name="__EVENTVALIDATION" id="__EVENTVALIDATION" value="<<REMOVED>>" />
</div>
        <div  id="OverallMedicareContainer"><div id="page">
        <script type="text/javascript">
//<![CDATA[
Sys.WebForms.PageRequestManager._initialize('Main_ScriptManager', document.getElementById('formMyMedicare'));
Sys.WebForms.PageRequestManager.getInstance()._updateControls([], [], [], 90);
//]]>
</script>

        <header id="header" role="banner">
            <!-- Header Markup and Navigation links Start-->
            <p class="needCSS">
  This application is not fully accessible to users whose browsers do not support or have the Cascading Style Sheets (CSS) disabled. For a more optimal experience viewing this application, please enable CSS in your browser and refresh the page.
</p>
<nav id="headertoolbar">

	<ul id="headertoolbarleft">

		<li lang="es" id="espanolli"><a href="/dashboard.aspx?Lang=es-mx" id="langlink" mporgnav="" title="Ver en español" onclick=" return true;">Espa&ntilde;ol</a></li>
    <li id="fontli">
      <ol>
        <li><a class="smallFont" href="#" title="Use a small font">A<span class="HiddenText"> Small Font</span></a></li>
				<li><a class="medFont" href="#" title="Use a medium font">A<span class="HiddenText"> Medium Font</span></a></li>
				<li><a class="largeFont" href="#" title="Use a large font">A<span class="HiddenText"> Large Font</span></a></li>
      </ol>
    </li>
    
		<li id="helpli"><a href="applets/dashboard/#" id="helplink" title="Help - Opens in a new window" onClick="openWindow('/help/mymedicare.help.aspx?Master=postpopup','LiveHelp',''); return false;">? Help</a></li>
		<li id="printli"><a id="printliIcon" href="#" title="Print this page"><span class="fa fa-print"></span>Print</a></li>
		<li  id="FAQli"><a href="http://questions.medicare.gov/app/home" id="faqlink" onClick="openWindow('http://questions.medicare.gov/app/home?Master=postpopup','',''); return false;"><abbr title="Frequently asked questions">FAQ</abbr></a></li>

   

	</ul>
  <div id="viewli" class="toolbarmenu">
    <a href="#" class="toolbarmenu-a">View<span class="HiddenText">options</span><span class="HiddenText 508State">, collapsed</span>
    </a>
    <ul>
      <li lang="es" id="espanolli-responsive">
        <a href="/dashboard.aspx?Lang=es-mx" id="langlink_responsive" mporgnav="" title="Ver en español" onclick="return true;">Español</a>
      </li>
      <li id="helpli-responsive">
        <a href="applets/dashboard/#" id="helplink_responsive" title="Select here to get Help" onClick="openWindow('/help/mymedicare.help.aspx?Master=postpopup','LiveHelp',''); return false;">? Help</a>
      </li>
      <li id="printli-responsive">
        <a href="#" title="Print this page">
          <span class="icon fa fa-print"></span>Print
        </a>
      </li>
      <li id="FAQli-responsive">
        <a href="http://questions.medicare.gov/app/home" id="faqlink_responsive" onClick="openWindow('http://questions.medicare.gov/app/home?Master=postpopup','',''); return false;">
          <abbr title="Frequently asked questions">FAQ</abbr>
        </a>
      </li>
    </ul>
  </div>

	<ul id="headertoolbarright">
  	<li class="welcometxt"  id="welcomeli">Welcome, <<REMOVED>> </li>
    <li class="authmymessages" id="messagesli"><a href="/mymessages.aspx" title="My Messages">My Messages</a></li>
		<li id="signoutli"><a href="/signout.aspx" title="Sign Out of MyMedicare.gov">Sign Out</a></li>
    <!--<li id="sitesli" class="toolbarmenu authName">
      <a href="#" class="toolbarmenu-a">
        Welcome, <<REMOVED>> 
        <span class="HiddenText">options</span>
        <span class="HiddenText 508State">, collapsed</span>
        <span class="toolbarDropDown">&nbsp;</span>
      </a>
    </li>-->
  </ul>
</nav>
<div id="headertoolbar2" class="UnAuthLive">
  <ul id="headertoolbarright2">
      <li id="messagesli-responsive" class="authmymessages">
          <a href="/mymessages.aspx" title="My Messages">My Messages</a>
      </li>
      <li id="signoutli-responsive">
          <a href="/signout.aspx" title="Sign Out of MyMedicare.gov">Sign Out</a>
      </li>
  </ul>
</div>

<div id="headerlogocontent" >
    <div id="headerlogo">
        <a title="MyMedicare.gov - the Official U.S. Government Site for Medicare" href="/dashboard.aspx" id="headerlogo-link">
            <img alt="MyMedicare.gov - the Official U.S. Government Site for Medicare" src="/Images/mymedicare_logo_sprite.png" />
        </a>
    </div>
</div>

<div id="livechatli" class="LiveChatHelp UnAuthLive">
  <a href="#" onclick="LiveHelp = window.open('/webchat/CMS-MBP_Webchat.aspx','LiveChat','height=730,width=680,scrollbars=1'); LiveHelp.moveTo(50,100);  return false;" title="Live Chat - Opens in a new window">
    <span class="icon fa fa-comment"></span>Live Chat
  </a>
</div>

<div id="headersearchrightcontent" onkeyup="searchTextBoxKeyUp(event);">

  <label id="SearchBoxLabelTop" class="HiddenText" title="Search Medicare.gov" for="Search_TextBox">Search Medicare.gov</label>

  <input id="Search_TextBox" role="search" class="SearchBox" type="text" title="type search term here" name="Search_TextBox" autocomplete="off" placeholder="type search term here" />

  <input id="SearchImageButton" class="btn" onclick="javascript:siteSearchRedirect(); return false;" type="submit" value="Search"/>

</div>


<div class="btn btn-primary opened" id="menu-btn">
	<a href="#">
		Menu <span class="icon">
			<span class="HiddenText 508State">, collapsed</span>
		</span>
	</a>
</div>

<nav aria-labelledby="navheading2" role="navigation" id="topnav" class="">
	<h2 class="HiddenText" id="navheading2">Main Menu</h2>
  
	<ul id="nav-list" class="MSP">
  
		<li class="top sub"> 
			<a title="Home" href="/dashboard.aspx">Home</a> 
		</li>
		<li class="top sub">
			<a title="Claims" href="/searchclaims.aspx">Claims</a> 
			<ul class="topnavsubmenu" style="display: none;">
				<li><a title="Search Claims" href="/searchclaims.aspx">Search Claims</a></li>
				<li><a title="Five Most Recent Claims" href="/recentclaims.aspx">Five Most Recent Claims</a></li>
				<li><a title="My Deductible Status" href="/claimdeductible.aspx">My Deductible Status</a></li>
			</ul> 
		</li>
		<li class="top sub">
			<a title="Plans & Coverage" href="/plansandcoverage.aspx">Plans &amp; Coverage</a> 
			<ul class="topnavsubmenu" style="display: none;">
				<li><a title="Current Plan & Insurance Information" href="/plansandcoverage.aspx">Current Plan &amp; Insurance Information</a></li>
			</ul> 
		</li>
		<li class="top sub">
			<a title="My Health" href="/myhealth.aspx">My Health</a> 
			<ul class="topnavsubmenu" style="display: none;">
				<li><a title="Health Summary" href="/myhealth.aspx">Health Summary</a></li>
				<li><a title="Personal Health & Family History" href="/selfreportedhealthinformation.aspx">Personal Health &amp; Family History</a></li>
				<li><a title="Drugs" href="/mydrugs.aspx">Drugs</a></li>
				<li><a title="Pharmacies" href="/mypharmacy.aspx">Pharmacies</a></li>
				<li><a title="Preventive Services" href="/mypreventiveservices.aspx">Preventive Services</a></li>
				<li><a title="Providers" href="/myproviders.aspx">Providers</a></li>
			</ul> 
		</li>
    
		<li class="top sub">
    
			<a title="My Account" href="/myaccount.aspx">My Account</a>
      <ul class="topnavsubmenu" style="display: none;">
        <li><a title="User Information" href="/myaccount.aspx">User Information</a></li>
			  <li><a title="Authorized Representative" href="/myaccount.aspx?MyAccount=AuthRep">Authorized Representative</a></li>
			  <li><a title="Order History" href="/myaccount.aspx?MyAccount=OrderHistory">Order History</a></li>
			  <li><a title="Replacement Medicare Card" href="/myaccount.aspx?MyAccount=ReplaceMedCard">Replacement Medicare Card</a></li>
        <li><a title="Enrollment Information" href="/myaccount.aspx?MyAccount=EnrollmentInfo">Enrollment Information</a></li>
      </ul>
    </li>
    
		<li class="top sub navbar-last">
			<a title="MSP" href="/mspdisclaimer.aspx">MSP</a>
		</li>
    
	</ul>
</nav>

<noscript>
  <p id="js-off-message">
    The page could not be loaded.  The MyMedicare.gov Home page currently does not fully support browsers with &quot;Javascript&quot; disabled.  Please note that if you choose to continue without enabling &quot;Javascript&quot; certain functionalities on this website may not be available.
  </p>
</noscript>
            <!-- Header Markup and Navigation links End-->
        </header>

        <!-- Main Content Start -->
        <div id="Content-wrap" class="dashboardPrint">
            <div id="MyMedicareContent" title="">
                
                <!-- Content Goes Here -->
                <script type="text/javascript" href='/Resources/Global/JS/lib/jquery-ui-1-8-17.custom.js'></script>
<script type="text/javascript" href='/Resources/Global/JS/jquery.jcarousel.js'></script>
<div id="breadCrumbs" class="breadcrumbs">
	<h2 class="HiddenText">Breadcrumbs</h2>
    
<ul id="mycarousel" class="jcarousel-skin-tango">

			<li>
				Home </li>

	</ul>

</div>
<div id="BlueButton">
  <input type="image" name="ibBB" id="ibBB" title="Download my data - Opens in a new window" class="ibBB" src="/images/bluebutton_breadcrumb.png" alt="Blue Button - Download My Data. Opens in a new window." onclick="javascript:window.open('/DownloadMyData.aspx?SourcePage=Banner', '_blank', 'location=no,scrollbars=yes,resizable=yes');return false;" style="height:30px;width:123px;border-width:0px;" />
</div>

                <a name="maincontent" tabindex="-1"></a>
                <div id="divHeader">
                    <h1>
                        <span id="lblHeader" title="Welcome to MyMedicare.gov">Welcome to MyMedicare.gov</span>
                    </h1>
                    <div id="divHeaderBot">
                        <span id="lblCheckPage">Check this page often for a snapshot of your Medicare account activities.</span>
                    </div>
                </div>
                <div id="LeftContent">
                    <div id="divMAClaims" class="divDotted">
                        <h2>
                            <span id="lblMAClaims">A note to people with Medicare who are in Medicare Advantage Plans</span>
                        </h2>
                        <div id="divMANote">
                            <span id="lblMANote">Medicare offers various preventive services which help you stay healthy, identify health problems early, and prevent certain diseases or illnesses. For complete information about Medicare preventive services, you can go to the</span>
                            <a id="hlPrevServPage" class="linkhlPrevServPage" href="/mypreventiveservices.aspx">Medicare.gov Preventive Services page.</a>
                            <span id="lblMANote2">Also, if you’re in a Medicare Advantage Plan, you should contact your plan to see if you’re eligible for any of the listed preventive services.</span>
                        </div>    
                    </div>
                    
                   <ul class="plain">
                    <li></li>
                    <li></li>
                    <li><div id="divFavoriteProviders" class="divDotted">
                         
                                

                    <div id="pnlProvidersNotFoundLink">
	
                        <div class="contentTop claimsTop">
                            <h2 class="first">
                                <a class="collapse-header collapsed" data-toggle="collapse" data-target="#1339" href="#collapse-1339" shape="rect">
                                    <i class="collapse-icon" title="expand">
                                        <span id="Label11" class="HiddenText">expand</span>
                                    </i> 
                                <span id="Label6" title="Favorite Providers" class="DashSubTitle">Favorite Providers</span> 
                                </a>
                            </h2>
                                                   
                        </div>
                        <div class="collapse" id="1339">
                        <span id="lblNotFound">You haven't entered any favorite providers.</span>
                        <a id="hlSelectProviders" title="Select  to add favorite providers" href="/myproviders.aspx">Select to add favorite providers.</a>                      	    
                        </div>	                       
                    
</div> 
                            
                    </div></li>
                  </ul>
                </div>
                <div id="RightContent">
                    
                    <div id="divAccountInformation" role="complementary">
                        <div class="sideContentTop">     
                            <h2> 
                                <span id="lblDashSubTitleSecond" title="My Account Information" class="DashSubTitle">My Account Information</span> 
                            </h2>
                        </div>            
                        <div class="sideContent">
                            
                                <div class="sideRow">
                                    <a id="rptPlanAndCoverageDB_ctl00_hlToMessages" title="Go to My Messages" Class="linkDashBoard" href="/mymessages.aspx">Go to My Messages</a>
                                </div>
                                <div class="sideRow">
                                    <a id="rptPlanAndCoverageDB_ctl00_HyperLink1" title="Go to My Account" class="linkDashBoard" href="/myaccount.aspx">Go to My Account</a>
                                </div>
                                <div class="sideRow">
                                <a href="/plansandcoverage.aspx"><span id="rptPlanAndCoverageDB_ctl00_lblPlanTypeNameA" title="Part A">Part A&nbsp;</span></a>
                                <span id="rptPlanAndCoverageDB_ctl00_lblEffectiveDate1" title="Effective Date:">Effective Date:</span>
                                <span id="rptPlanAndCoverageDB_ctl00_lblEffectiveDateA" title="Effective Date"><<REMOVED>></span>
                                </div>
                                <div class="sideRow">
                                <a href="/plansandcoverage.aspx"><span id="rptPlanAndCoverageDB_ctl00_lblPlanTypeNameB" title="Part B">Part B&nbsp;</span></a>
                                <span id="rptPlanAndCoverageDB_ctl00_lblEffectiveDate2" title="Effective Date:">Effective Date:</span>
                                <span id="rptPlanAndCoverageDB_ctl00_lblEffectiveDateB" title="Effective Date"><<REMOVED>></span>
                                </div>
                                                              
                        <div class="contentTop">
                             
                                    <div class="sideRow">
                                        <span id="rptPlanAndCoverageDB2_ctl00_lblMedicareHealthAndDrugPlan" title="Health &amp; Drug Plan: ">Health & Drug Plan: </span>
                                        <<REMOVED>>
                                    </div>
                                    <div class="sideRow">
                                        Plan ID : <<REMOVED>>
                                    </div> 
                                    <div class="sideRow">
                                        <<REMOVED>>
                                    </div>                 
                                                              
                        </div>                  
                        </div>
                    </div>
                    <div id="divAdditionalInfo" role="complementary">
                        <div class="sideContentTop">
                            <h2>
                                <span id="lblAdditionalInfo" title="Additional Information" class="DashSubTitle">Additional Information</span>
                            </h2>
                        </div>
                        <div class="sideContent">
                            <ul>
                                <li>
                                        <a id="A1" title="Click to open in new window - Medicare Appeals Form" href="http://www.medicare.gov/MedicareOnlineForms" target="_blank">
                                        Forms
                                        <span class="HiddenText">- Opens in new window</span>
                                    </a>
                                </li>
                                <li>
                                    <!--<Token Type="Link" PageGuid="<<REMOVED>>" Title="Click here for Medicare Publications" Text="Medicare Publications" class="StaticHeadingLinks"/>-->            
                                    <a title="Click here to open in new window - View All Publications and Podcasts"  href="http://www.medicare.gov/Publications/Search/SearchCriteria.asp" target="_blank">
                                        Medicare Publications and Podcasts
                                        <span class="HiddenText">- Opens in new window</span>
                                    </a>
                                </li>
                                <li>
                                    <!--<Token Type="Link" PageGuid="<<REMOVED>>" Title="Click here for Medicare &amp; You Handbook" Text="Medicare &amp; You Handbook" class="StaticHeadingLinks"/>-->
                                    <a title="Click here to open in new window - Medicare &amp; You Handbook"
                                        href="http://www.medicare.gov/Library/PDFNavigation/PDFInterim.asp?Language=English&Type=Pub&PubID=10050" target="_blank">
                                        Medicare &amp; You Handbook
                                        <span class="HiddenText">- Opens in new window</span>
                                    </a>
                                </li>
                                <li>
                                    <!--<Token Type="Link" PageGuid="<<REMOVED>>" Title="Click here for Appeals and Grievances" Text="Medicare Appeals and Grievances" class="StaticHeadingLinks"/>-->
                                    <a title="Click here to open in new window - Medicare Appeals and Grievances" 
                                        href="http://www.medicare.gov/claims-and-appeals/index.html" target="_blank">
                                        Medicare Appeals and Grievances
                                        <span class="HiddenText">- Opens in new window</span>
                                    </a>
                                </li>
                                <li>
                                    <!--<Token Type="Link" PageGuid="<<REMOVED>>" Title="Click here for information on Medicare Fraud" Text="Medicare Fraud" class="StaticHeadingLinks"/>-->
                                    <a title="Click here to open in new window - Medicare Fraud" 
href="http://www.medicare.gov/forms-help-and-resources/report-fraud-and-abuse/fraud-and-abuse.html" target="_blank">
                                        Medicare Fraud
                                        <span class="HiddenText">- Opens in new window</span>
                                    </a>
                                </li>
                                <li>
                                    <!--<Token Type="Link" PageGuid="<<REMOVED>>" Title="Click here for Medicare.gov FAQs and General Medicare FAQs" Text="Medicare.gov FAQs and General Medicare FAQs" class="StaticHeadingLinks"/>-->
                                    <a title="Click here to open in new window -  Medicare.gov FAQs and General Medicare FAQs" 
 href="https://questions.medicare.gov/" target="_blank">
                                        Medicare.gov FAQs and General Medicare FAQs
                                        <span class="HiddenText">- Opens in new window</span>
                                    </a>
                                </li>
                            </ul>
                        </div>    
                    </div>
                </div>
            </div>
        </div>
        <!-- Main Content End --> 
        
        <footer id="footer" role="contentinfo">
              <!-- footer Markup Start-->
        <div id="divDashboardButtons">
  <a href="http://www.healthcare.gov" target="_blank" title="Opens in new window- www.healthcare.gov">
    <img alt="HealthCare.gov - Opens in a new window" src="/Images/berndt/badge-hhs-healthcare.gif" />
  </a>
  <a href="http://www.stopmedicarefraud.gov" target="_blank" title="Opens in new window- www.stopmedicarefraud.gov">
    <img alt="Stop Medicare Fraud - Opens in a new window" src="/Images/berndt/applet/icons/stopMedicareFraud.jpg" />
  </a>
  <a id="imgHHS" href="http://www.hhs.gov/open"  target="_blank" title="Opens in new window- Department of Health and Human Services">
    <img alt="HHS.gov/Open - Opens in a new window" src="/Images/berndt/applet/icons/HHSgovOpen.jpg" />
  </a>
</div>
<h2 class="HiddenText">Footer</h2>
<div id="footer-top">
    <div id="footer-home-logo-wrapper">
        <div id="footer_home_logo">
            <a href="/dashboard.aspx" title="Go to MyMedicare.gov" id="footer_home_logo_link">
                <img alt="MyMedicare.gov" src="/Images/mymedicare_logo_sprite.png" />
            </a>
        </div>
    </div>  
    <div id="footer-address">
        A federal government website managed by the Centers for Medicare &amp; Medicaid Services<br />
        7500 Security Boulevard, Baltimore, MD 21244
    </div>
    <div id="footer-hhs-logo-wrapper">
        <div id="footer_hhs_logo">
            <a id="footer_hhs_logo_link" title="Health and Human Services USA home page - Opens in a new window" href="http://www.hhs.gov/" target="_blank">
  			      <img alt="Health and Human Services USA home page" src='/Resources/Medicare/Images/home/logoSprite.png' />
      		    <span class="HiddenText"> - Open in a new window</span>
          </a>
        </div>
    </div>
</div><div id="footer-bottom">
    <div id="footer-column1">
      <a title="Claims" href="/searchclaims.aspx"><h3 class="footer-headline">Claims</h3></a>
		  <ul>
			  <li><a title="Search Claims" href="/searchclaims.aspx">Search Claims</a></li>
			  <li><a title="Five Most Recent Claims" href="/recentclaims.aspx">Five Most Recent Claims</a></li>
			  <li><a title="My Deductible Status" href="/claimdeductible.aspx">My Deductible Status</a></li>
		  </ul> 
    </div>
    <div id="footer-column2">
      <a title="Plans & Coverage" href="/plansandcoverage.aspx"><h3 class="footer-headline">Plans &amp; Coverage</h3></a>
      <ul>
        <li><a title="Current Plan & Insurance Information" href="/plansandcoverage.aspx">Current Plan &amp; Insurance Information</a></li>
      </ul>
    </div>
    <div id="footer-column3">
      <a title="My Health" href="/myhealth.aspx"><h3 class="footer-headline">My Health</h3></a>
      <ul>
          <li><a title="Health Summary" href="/myhealth.aspx">Health Summary</a></li>
			    <li><a title="Personal Health & Family History" href="/selfreportedhealthinformation.aspx">Personal Health &amp; Family History</a></li>
			    <li><a title="Drugs" href="/mydrugs.aspx">Drugs</a></li>
			    <li><a title="Pharmacies" href="/mypharmacy.aspx">Pharmacies</a></li>
			    <li><a title="Preventive Services" href="/mypreventiveservices.aspx">Preventive Services</a></li>
			    <li><a title="Providers" href="/myproviders.aspx">Providers</a></li>
      </ul>
    </div>
    <div id="footer-column4">
      <a title="My Account" href="/myaccount.aspx"><h3 class="footer-headline">My Account</h3></a>
      <ul>
          <li><a title="User Information" href="/myaccount.aspx">User Information</a></li>
			    <li><a title="Authorized Representative" href="/myaccount.aspx?MyAccount=AuthRep">Authorized Representative</a></li>
			    <li><a title="Order History" href="/myaccount.aspx?MyAccount=OrderHistory">Order History</a></li>
			    <li><a title="Replacement Medicare Card" href="/myaccount.aspx?MyAccount=ReplaceMedCard">Replacement Medicare Card</a></li>
          <li><a title="Enrollment Information" href="/myaccount.aspx?MyAccount=EnrollmentInfo">Enrollment Information</a></li>
      </ul>
    </div>
</div>

            <!-- footer Markup End-->

            <!-- footer Scripts Start -->
            <script type='text/javascript' src='/Javascript/jquery-1.7.2.js'></script>

<script type='text/javascript' src='/Resources/Global/JS/lib/jquery.listen.js'></script>

<script type='text/javascript' src='/Resources/Global/JS/lib/jquery-ui-1.8.17.custom.js'></script>

<!--<script type='text/javascript' src='/Resources/Global/JS/508addthis.js'></script>-->

<script type='text/javascript' src='/Resources/Medicare/JS/topNavigation.js'></script>

<script type='text/javascript' src='/Resources/Medicare/JS/medicareutils.js'></script>

<link href='/Resources/Medicare/CSS/MedicarePrint.css' type='text/css' rel='stylesheet' media='print' />


<!-- Execute JS on media queries -->
<!--[if lt IE 10]>
  <script type="text/javascript" src="/Resources/Global/JS/matchMedia.js"></script>
  <script type="text/javascript" src="/Resources/Global/JS/matchMedia.addListener.js"></script>
<![endif]-->
<script type='text/javascript' src='/Resources/Global/JS/enquire.min.js'></script>
<script type='text/javascript' src='/Javascript/responsive-actions.js'></script>


<!--Font Resize Script-->

<script type='text/javascript' src='/Resources/Medicare/JS/fontsizer.jquery.js'></script>

<script type='text/javascript'>

  $(document).ready(function () {

  fontResizer();
  $("html").click(function () {
  $("li[class*='-active'] a.toolbarmenu-a").click();
  });

  $(".toolbarmenu-a").on("click", function () {
  if ($(this).parent().hasClass("toolbarmenu-active") || $(this).hasClass("active")) {
  var self = $(this);

  $("#menu-btn[class*='active'] a").click();
  $("li[class*='-active'] a.toolbarmenu-a").each(function (index) {
  if (self.parent().attr("id") != $(this).parent().attr("id")) {
  $(this).click();
  }
  });

  }
  });

  });

  function handleBtnKeyUp(event, id)
  {
  event = event || window.event;
  //alert($(id).attr("href"));
  if(event.keyCode === 32)
  {
  $(id).click();
  }
  event.stopPropagation();
  }
</script>


<!-- Scripts to replace the Relative path for Medicare links  -->
<script type='text/javascript'>
  $(document).ready(function () {
  //Footer Images if Assets is down
  $('#footer-bottom img').each(function () {
  var $this = $(this);
  imgHref = $this.attr('src');
  //alert(AssetsDown);
  //alert(imgHref);
  if (AssetsDown == 'true') {
  if (imgHref.indexOf('logoSprite.png') > 0) {
  $this.attr('src', '/../Images/Medicare/logoSprite.png');
  }
  else if (imgHref.indexOf('socialMedia.png') > 0) {
  $this.attr('src', '/../Images/Medicare/socialMedia.png');
  }
  }
  });
  $('#footer-top img').each(function () {
  var $this = $(this);
  imgHref = $this.attr('src');
  //alert(AssetsDown);
  //alert(imgHref);
  if (AssetsDown == 'true') {
  if (imgHref.indexOf('logoSprite.png') > 0) {
  $this.attr('src', '/../Images/Medicare/logoSprite.png');
  }
  else if (imgHref.indexOf('socialMedia.png') > 0) {
  $this.attr('src', '/../Images/Medicare/socialMedia.png');
  }
  }
  });
  });
</script>

<!-- Scripts to address skipnav issue for Chrome -->  
<script type='text/javascript'>
  $('a#skipNavigation').bind('keydown', function(event){
  
      //remove deafult href if set
      $(this).attr("href", "javascript:void(0);");
            
      //use page h1 as target or set rel attribute to set up custom area of focus
      //for custom, set rel to ".classname" or "#idname"
      var elemet =($(this).attr("rel")) ? $(this).attr("rel") : "h1";
      
      //if no custom element is et get position of h1
      
      var pos = (element) ? $(element).offset() : $("h1").offset();
      
      //detect if enter key is pressed
      if (event.keyCode === 13){
                
          $(element).attr("tabindex", "-1");  //set nagative index on scroll target
          $(document).scrollTop(pos.top);  //scroll to top of target
          $(element).focus(); //set visual focus to tagret
          event.preventDefault(); //prevent default Enter key functionality for page
          
          }
          
});

      
</script>


<script type='text/javascript' src='/Resources/Global/JS/jquery.hcmode-detection.js'></script>


  
            <!-- footer Scripts End -->

            <!-- Expand/Collapse -->
        <script type="text/javascript" AssetsSrc="/Resources/Global/JS/jquery.508expcollapse.js" src='/Resources/Global/JS/jquery.508expcollapse.js'></script>

            <!-- End Expand/COllapse -->
        </footer>     
        </div>
        </div>        
    

<script type="text/javascript">
//<![CDATA[

var callBackFrameUrl='/WebResource.axd?d=<<REMOVED>>&t=<<REMOVED>>';
WebForm_InitCallback();//]]>
</script>
<script>loadTimer(900000);</script>
<script type="text/javascript">
//<![CDATA[
Sys.Application.initialize();
//]]>
</script>
</form>
     <link href="/Applets/Dashboard/CSS/DashboardResponsive.css" rel="Stylesheet" type="text/css" />
    <link href="/CSS/MedicarePrint.css" rel="Stylesheet" type="text/css" media="print" />

</body>
</html>

<script type="text/javascript">
    $(document).ready(function(){
        //scroll page with keyboard focus 	
	        $(':focusable').on('keyup', function(e) {
		        var keyCode = e.keyCode || e.which; 
		        if (keyCode == 9) {
			        $('html, body').stop().animate({
				        scrollTop: $(this).offset().top - 100
			        }, 500);
		        }
	        }); 
        // Adding the scroll to top for the Section click events
        $(".collapse-header").bind('click', function () {
        	    $('html, body').stop().animate({
				    scrollTop: $(this).offset().top - 100
			    }, 500);
        });

        
            $("#htmlHead").attr("lang", "en");        
        
    });       
</script>