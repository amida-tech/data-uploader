GET /DownloadMyData.aspx?SourcePage=Banner HTTP/1.1
Host: mymedicare.gov
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:39.0) Gecko/20100101 Firefox/39.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate
Referer: https://mymedicare.gov/dashboard.aspx
Cookie: ASP.NET_SessionId=<<REMOVED>>; ORA_OSFS_SESSION=<<REMOVED>>; JSESSIONID=<<REMOVED>>; NGDOIFJSessionId=<<REMOVED>>
Connection: keep-alive

========================================================================

HTTP/1.1 200 OK
Cache-Control: private
Content-Type: text/html; charset=utf-8
Content-Encoding: gzip
Vary: Accept-Encoding
X-Frame-Options: SAMEORIGIN
Date: Thu, 16 Jul 2015 14:41:55 GMT
Content-Length: 11106



<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml"id="htmlHead" lang="en"
xml:lang="en" meta:resourcekey="htmlLineLang" >
<script src="/Javascript/rwdcallback.js" type="text/javascript"></script>
<script type="text/javascript">
    // This assets link can be referenced dynamically via each page type.
    var assetsHosts = '';
    var assetsCheck = 'True';
    var medicareUrl = 'http://www.medicare.gov';
    var AssetsDown = "false";
    // For spanish Links, Medicare Links to be updated as Spanish
    
    
</script>

<head id="Top"><meta http-equiv="Content-Type" content="text/html;charset=utf-8" /><title>
	MyMedicare.gov - Blue Button Download My Data
</title>
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
<link href="/css/AuthMyMedicareHeaderFooter.css" rel="Stylesheet" type="text/css" /><link href="/CSS/MyMedicareResponsive.css" rel="Stylesheet" type="text/css" media="screen" /><link href="/applets/BlueButton/CSS/BlueButton.css" rel="Stylesheet" type="text/css" /><link href="/CSS/formvalidator.css" rel="Stylesheet" type="text/css" /><link href="/CSS/MedicarePrint.css" rel="Stylesheet" type="text/css" media="print" /><link href="/applets/BlueButton/CSS/BlueButtonResp.css" rel="Stylesheet" type="text/css" /></head>
<body onload='window.opener.resetTimer();'>
   
   
 <input name="inptFlags" type="hidden" id="inptFlags" /> 
    <noscript>
        <p id="js-off-message" class="alert-error">
            The page could not be loaded.  MyMedicare.gov currently does not fully support browsers with &quot;JavaScript&quot; disabled.  Please note that if you choose to continue without enabling &quot;JavaScript&quot; certain functionalities on this website may not be available.
        </p>
    </noscript>
     <a name="Top"></a>
    <div class="SkipNav">
        <a href="#maincontent" title='Skip Navigation'>Skip Navigation</a>
    </div>
    <form name="formMyMedicare" method="post" action="applets/BlueButton/bluebuttonresp.aspx?guid=<<REMOVED>>&amp;SourcePage=Banner" id="formMyMedicare" autocomplete="off">
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


<script src="/ScriptResource.axd?d=<<REMOVED>>&amp;t=<<REMOVED>>" type="text/javascript"></script>
<script src="/ScriptResource.axd?d=<<REMOVED>>&amp;t=<<REMOVED>>" type="text/javascript"></script>
<div>

	<input type="hidden" name="__VIEWSTATEGENERATOR" id="__VIEWSTATEGENERATOR" value="<<REMOVED>>" />
	<input type="hidden" name="__EVENTVALIDATION" id="__EVENTVALIDATION" value="<<REMOVED>>" />
</div>
   <div id="OverallMedicareContainer" class="BBPrint">
        <div id="page">
            <script type="text/javascript">
//<![CDATA[
Sys.WebForms.PageRequestManager._initialize('Main_ScriptManager', document.getElementById('formMyMedicare'));
Sys.WebForms.PageRequestManager.getInstance()._updateControls([], [], [], 90);
//]]>
</script>

            <header id="header" role="banner">
            <!-- Header Markup and Navigation links Start-->
            <!--All changes made to this file should also be made to MyMedicareHeaderMarkup.ssi in the Home Solution for the integration pages-->
<p class="needCSS">
  This application is not fully accessible to users whose browsers do not support or have the Cascading Style Sheets (CSS) disabled. For a more optimal experience viewing this application, please enable CSS in your browser and refresh the page.
</p>
<nav id="headertoolbar">
  
  <ul id="headertoolbarleft">
		<li id="fontli">
			<ol>
				<li><a class="smallFont" href="#" title="Use a small font">A<span class="HiddenText"> Small Font</span></a></li>
				<li><a class="medFont" href="#" title="Use a medium font">A<span class="HiddenText"> Medium Font</span></a></li>
				<li><a class="largeFont" href="#" title="Use a large font">A<span class="HiddenText"> Large Font</span></a></li>
			</ol>
		</li>
    
    <li id="printli"><a id="printliIcon" href="#"  title="Print this page"><span class="fa fa-print"></span>Print</a></li>
    
    
  </ul>
  <div id="viewli" class="toolbarmenu">
 
        <a id="printli-responsive" href="#" title="Print this page" style="display:none;" onclick="window.print();">
          <span class="icon fa fa-print">
            
          </span>Print
        </a>
      
  </div>

  
	<ul id="headertoolbarright">
		<li id="closeli"><a id="closeli" href="#" title="Close this window" onclick="window.close(); return false;">Close Window</a>
    </li>
	</ul>

</nav>

<div id="headerlogocontent">
    <div id="headerlogo">
      <a title="MyMedicare.gov - the Official U.S. Government Site for Medicare" href="#" id="headerlogo-link">
         <img alt="MyMedicare.gov - the Official U.S. Government Site for Medicare" src="/Images/mymedicare_logo_sprite.png" />
      </a>
    </div>
</div>

            <!-- Header Markup and Navigation links End-->
            
            </header>
            <div id="Content-wrap">                
                <div id="MyMedicareContent" title="">
                    <a name="maincontent" tabindex="-1"></a>
                    <!-- Content Goes Here -->
                   

     <div class="BBHeader" id="BBHeader">
    <h1>
        Blue Button Download My Data</h1>
    <span class="SubTitle">
        <span id="lbSubTitle">My Download Request</span></span>
</div>
<div id="errorForm"> 
<table class="TableWidthNew" role="presentation">
<tr>
<td>               
<div style="margin-top:15px;font-size:.9em;">
 <br /><br />
 <span id="Label1" class="subMessageClass2">Fields marked with an asterisk (<span class="required">*</span>) are required.</span>
  <br /><br />
  </div>
</td></tr>
    <tr>
        <td class="tdSection">
            <p class="paragraphSpacing">
                Blue Button is safe, simple and reliable, making it possible for you to view, print, or save your personal health information. It is a blend of self entered data and available information from your MyMedicare.gov account.
            </p>
            <br />
            <a id="readmore" class="collapse" data-target="#expand-divReadMore"
                href="#collapse-expand-divReadMore"><i id="icon" class="collapse-img" title="expand">
                <span class="HiddenText">expand</span>
                </i>
                <span id="lbReadMore">Read more about Blue Button Download</span>
            </a>
            <div id="divReadMore">
                <p class="MainText paragraphSpacing1">
                    You can download your personal health information to share with other health management tools, such as a Personal Health Record (PHR). <br />To download the data to your computer:
                </p>
                <ol class="olStyleNew">
                    <li class="liStyleNew">
                        Select the option – “All types of information” or “One or more types of information”.</li>
                    <li class="liStyleNew">
                        Select date range, if claims parameter is checked.<br /><i>Note: The claims section returns as much as 36 months of data creating a larger file. You can limit the number of claims to be included by selecting a date range. If you make no selection, 12 months of claims data will be downloaded. </i>                      
                    </li>
                    <li class="liStyleNew">
                        Click on Submit button, the download results page will appear.</li>
                    <li class="liStyleNew">
                        Select &quot;Save&quot; and enter the name and location for your file, and click OK.</li>
                    <li class="liStyleNew">
                        You can also print at a specified printer by selecting the &quot;Print&quot; button.</li>
                </ol>
            </div>
        </td>
    </tr>
    <tr>
        <td class="dotline">
        </td>
    </tr>
    <tr>
        <td class="selectTypeTitle">
        <div id="selectWrapper">
        <fieldset id="fschkBoxes" data-validate="checkboxGroupMinimum-1" data-no_inline_on_blur data-errormsg-checkboxgroupminimum="  Please select at least one option to continue.">
             <span class="required left">*</span>
             <legend class="left">      
            <h2>
            
                Select Types of Information to Download<span class="HiddenText">:</span>
            
            </h2>     
          </legend> 
          <div class="clear"></div>
                <div class="form_column allTypesWidth">
                    <input id="rbtnAllType" type="radio" name="TypeSelectRange" value="rbtnAllType" /><label for="rbtnAllType">All Types of Information</label>
                </div>
              
                <div class="form_column selectOneWidth">
                    <input id="rbtnSelectType" type="radio" name="TypeSelectRange" value="rbtnSelectType" checked="checked" /><label for="rbtnSelectType">Select one or more types of information</label>
                </div>
                  
               
               
                    <div class="trSelectType">
                        <div class="form_column labelWdthB">
                            <input id="chkClaims" type="checkbox" name="chkClaims" /><label for="chkClaims">Claims</label>
                        </div>
                        <div id="SelectDateRange" style="display:none;">
                        <fieldset>
                           <legend>
                                    <span id="lbSelectDateRange" class="form_column1">Select Claims Date Range</span>
                            
                            </legend> 

                            <div class="form_column1">
                                <span style="display:inline-block;width:150px;"><input id="rdoMonths12" type="radio" name="ServiceDateRange" value="months12" checked="checked" onclick="javascript:rdoSpecificRange_CheckedChanged_client();" /><label for="rdoMonths12">12 Months</label></span>
                            </div>
                            <div class="form_column1">
                                <span style="display:inline-block;width:150px;"><input id="rdoMonths24" type="radio" name="ServiceDateRange" value="months24" onclick="javascript:rdoSpecificRange_CheckedChanged_client();" /><label for="rdoMonths24">24 Months</label></span>
                            </div>
                            <div class="form_column1">
                                <span style="display:inline-block;width:150px;"><input id="rdoMonths36" type="radio" name="ServiceDateRange" value="months36" onclick="javascript:rdoSpecificRange_CheckedChanged_client();" /><label for="rdoMonths36">36 Months</label></span>
                            </div>
                            </fieldset>
                        </div>
                        </div>
                  
                     <div class="trSelectType">
                        <div id="dvParmEnable">
                            <div>
                                <div class="form_column">
                                    <input id="chkDrugs" type="checkbox" name="chkDrugs" /><label for="chkDrugs">Drugs</label>
                                </div>
                                <div class="form_column">
                                    <input id="chkEmerContact" type="checkbox" name="chkEmerContact" /><label for="chkEmerContact">Emergency Contact</label>
                                </div>
                                <div class="form_column">
                                    <input id="chkFamilyHistory" type="checkbox" name="chkFamilyHistory" /><label for="chkFamilyHistory">Family Medical History</label>
                                </div>
                                <div class="form_column">
                                    <input id="chkPharmacies" type="checkbox" name="chkPharmacies" /><label for="chkPharmacies">Pharmacies</label>
                                </div>
                            </div>
                            <div class="chkColumn2">
                                <div class="form_column labelWdthB">
                                    <input id="chkPlans" type="checkbox" name="chkPlans" /><label for="chkPlans">Plans</label>
                                </div>
                                <div class="form_column labelWdthA">
                                    <input id="chkPreventiveServices" type="checkbox" name="chkPreventiveServices" /><label for="chkPreventiveServices">Preventive Services</label>
                                </div>
                                <div class="form_column labelWdthB">
                                    <input id="chkProviders" type="checkbox" name="chkProviders" /><label for="chkProviders">Providers</label>
                                </div>
                                <div class="form_column labelWdthA">
                                    <span class="chkAlignSRI"><input id="chkSelfReportedInfo" type="checkbox" name="chkSelfReportedInfo" /><label for="chkSelfReportedInfo">Self-Reported Health Information</label></span>
                                </div>
                            </div>
                        </div>
                       </div>
                      
           
               </fieldset>  
               </div> 
        </td>
    </tr>
    <tr>
        <td class="dotline">  
        <br />
        </td>
    </tr>
    <tr>
        <td>
            <a id="ProtectInfo" class="collapse" data-target="#expand-divProtectInfo"
                href="#collapse-expand-divProtectInfo"><i id="icon2" class="collapse-img" title="expand">
                <span class="HiddenText">expand</span></i>
                <span id="lbProtectInfo">Protecting your personal health  information</span></a>
         
            <div id="divProtectInfo">
                <ul class="ulStyleNew">
                    <li class="UListNew">
                        Remember to always protect the privacy of your medical information.
                    </li>
                    <li class="UListNew">
                        Please only download your information onto a secure computer. NEVER use this function on a public or shared computer. CMS does not take responsibility or risk for your computer use. CMS’ policies and procedures are explained in more detail in the <a class="Link" onclick="JavaScript:window.open('/help/securityprivacy_policy.aspx?Lang=en-us','','toolbar=no,scrollbars=yes,location=no,directories=no,resizable=yes,status=no,menubar=no')"
                href="#">&quot;CMS Privacy Policy&quot;.<span class="HiddenText">- Opens in a new window</span></a>
                    </li>
                    <li class="UListNew">
                        Only upload and store your data on trusted sites.
                    </li>
                    <li class="UListNew">
                        Not all Personal Health Record (PHR) applications will provide the ability to upload data into their system. If you have questions regarding the ability to upload this data, or need help in performing the upload, please contact the PHR vendor directly.
                    </li>
                    <li class="UListNew">
                        For additional information on Personal Health Records and how they can help you better manage your health care, please visit the <a
                class="Link" onclick="window.open('http://www.medicare.gov/manage-your-health/personal-health-records/personal-health-records.html'); return false"
                href="http://www.medicare.gov/manage-your-health/personal-health-records/personal-health-records.html">PHR section on Medicare.gov.<span class="HiddenText"> - Opens in a new window</span></a>
                        <span id="lbl508Open" style="display: none;"> - Opens in a new Window</span>
                    </li>
                </ul>
            </div>
        </td>
    </tr>
    <tr>
        <td class="Agree" >
            <div id="agreeWrapper">
           
           <fieldset id="fschkAgree" data-validate="checkboxGroupMinimum-1" data-no_inline_on_blur data-errormsg-checkboxgroupminimum=" The privacy warning checkbox field is required. Please check the box to continue.">
           <legend class="HiddenText">Privacy warning:</legend>
            <label for="chkAgree" id="lbChkReq" style="width:2px;"><span class="required">*</span></label>
         
            <span class="chkAlign"><input id="chkAgree" type="checkbox" name="chkAgree" /><label for="chkAgree">By checking this box, you agree that you have read and understand the “Protecting Your Personal Health Information” section shown above and wish to continue.</label></span>                       
         </fieldset>
         </div>
                <br />
                <br />
        </td>
    </tr>
    <tr>
        <td style="text-align: right">
            <input type="submit" name="btnSubmit" value="Submit" id="btnSubmit" title="Blue Button - Download My Data.  Opens in a new dialog." class="btn-primary BBsubmit" data-validationtrigger="" />
            <!--<input type="submit" name="Button1" value="Submit" id="Button1" title="Blue Button - Download My Data.  Opens in a new dialog." class="btn-primary BBsubmit" />  -->
            <input type="submit" name="btnReset" value="Reset" id="btnReset" title="Reset" class="btn1" AutoPostBack="False" />
            <input type="submit" name="btnCancel" value="Cancel" onclick="javascript:self.close();" id="btnCancel" title="Cancel. Selecting this button will close this page, and will return you to the prior page." class="btn1" AutoPostBack="False" />
                <span class="HiddenText">Selecting this button will close this page and will return you to the prior page.</span>
                <br />
                <br />
        </td>
    </tr>
</table>
</div>

    
 <div id="UpdateProgress1">
    <div class="loadingWrapper">
    <div class="loadingMessage">
        <div>
            <em>File Downloading...</em>
        </div>
    </div>
    </div>
    </div>
   
<span id="litBB" style="display: none"></span>
<input name="inpScreenWidth" type="hidden" id="inpScreenWidth" maxlength="5" value="0" />
                    </div>


    </div>
    </div>
    </div>
    

<script type="text/javascript">
//<![CDATA[
Sys.Application.initialize();
//]]>
</script>
</form>
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


<script type='text/javascript' src='/Javascript/CGIFormValidatorConfig.js'></script>
<script type='text/javascript' src='/Javascript/CGIFormValidator.js'></script>
<link rel='stylesheet'type='text/css' href='/CSS/formvalidator.css'></link>  
      <!-- footer Scripts End -->

<script type="text/javascript">
    var myValidator;
    var rechecking = false;

    function adjustErrorBorder() {
        if ($('#fschkBoxes').hasClass('errorField')) {
            $('#fschkBoxes').removeClass('errorField');
            $('#selectWrapper').addClass('BBerrorField');
        }
        if ($('#fschkAgree').hasClass('errorField')) {
            $('#fschkAgree').removeClass('errorField');
            $('#agreeWrapper').addClass('BBerrorField');
        }
    }

    function validateForm() {
        var myCustomRules = {};
        myValidator = new CGI.FormValidator($("#errorForm"), $("#btnSubmit"), myCustomRules);

        myValidator.setValidationCompletedHandler(function () {
            if (!rechecking)
                __doPostBack('btnSubmit', '');
            rechecking = false;
        });
        myValidator.setValidationFailedHandler(function () {
            adjustErrorBorder();
        });
    }

    var clearValidation = function () {
        myValidator.unsetError(".selectTypeTitle fieldset");
        myValidator.unsetError("#fschkAgree");
        $('#selectWrapper').removeClass('BBerrorField');
        $('#agreeWrapper').removeClass('BBerrorField');
        var sumExists = $(".errorSummaryContainer").length
        $(".errorSummaryContainer").remove();
        if (sumExists > 0) {
            rechecking = true;
            myValidator.triggerBucketCollection();
            adjustErrorBorder();
        }
    }

    $(document).ready(validateForm);

    $(document).ready(function () {

//        $("input[type=radio]").bind('focus', function () {
//            //$(this).css('outline', '#E59700 solid');
//        }
//                        );
        $("input[type=radio]").bind('keydown mousedown click', function () {
            $(this).css('outline', 'none');
            clearValidation();
        });
        $('#divReadMore').hide();
        $('#divProtectInfo').hide();

        $('#UpdateProgress1').hide();
        if ($('#inpScreenWidth').val() == "0") {
            $('#inpScreenWidth').val($(window).width());
        }
        $('#readmore').click(function () {
            if ($('#icon').hasClass('collapse-img')) {
                $('#icon').removeClass('collapse-img').addClass('img-expand');
                $('#icon').attr("title", "collapse");
                $('#icon').children("span").html("collapse")
                $('#divReadMore').show();
            }
            else if ($('#icon').hasClass('img-expand')) {
                $('#icon').removeClass('img-expand').addClass('collapse-img');
                $('#icon').attr("title", "expand");
                $('#icon').children("span").html("expand")
                $('#divReadMore').hide();
            }
        });

        $('#ProtectInfo').click(function () {
            if ($('#icon2').hasClass('collapse-img')) {
                $('#icon2').removeClass('collapse-img').addClass('img-expand');
                $('#icon2').attr("title", "collapse");
                $('#icon2').children("span").html("collapse")
                $('#divProtectInfo').show();
            }
            else if ($('#icon2').hasClass('img-expand')) {
                $('#icon2').removeClass('img-expand').addClass('collapse-img');
                $('#icon2').attr("title", "expand");
                $('#icon2').children("span").html("expand")
                $('#divProtectInfo').hide();
            }
        });

        $('#chkClaims').is(':checked') ? $('#SelectDateRange').show() : $('#SelectDateRange').hide();
        $('#chkClaims').click(function () {
            
            if (this.checked) {
                $('#SelectDateRange').show();
            }
            else {
                $('#SelectDateRange').hide();
            }
            
        });
        $('.trSelectType input[type=checkbox]').click(function () {
            
            if (!this.checked) {
                $('#rbtnSelectType').attr('checked', true);
                $('#rbtnAllType').attr('checked', false);
            }
            if ($(this.checked)) {
                this.focus();
            }
            clearValidation();
            
        });

        $('#rbtnAllType').click(function () {
            
            $('.trSelectType input[type=checkbox]').attr({ checked: true, disabled: true });
            $('#SelectDateRange').show();
            clearValidation();
            
        });
        $('#rbtnSelectType').click(function () {
        
            $('.trSelectType input[type=checkbox]').attr('disabled', false)
            clearValidation();
            
        });


        $('#btnReset').click(function () {
        
            flags = "";
            $('input[type=checkbox]').attr('checked', false);
            $('.trSelectType input[type=checkbox]').attr({ checked: false, disabled: false });
            $('#rbtnSelectType').attr('checked', true);
            $('#SelectDateRange').hide();
            $('#rdoMonths12').attr('checked', true);
            $('#readmore').focus();
            //$('.feedbackMsg').html("");
            //$('.feedbackMsg').removeClass('error');
            //$('input').removeClass('errorField');
            //$('.errorSummaryContainer').remove();
            //$('.errorField').removeClass('errorField');
            $('input[type=radio]').css('outline', 'none');

            myValidator.unsetError(".selectTypeTitle fieldset");
            myValidator.unsetError("#fschkAgree");
            $('#selectWrapper').removeClass('BBerrorField');
            $('#agreeWrapper').removeClass('BBerrorField');
            $(".errorSummaryContainer").remove();

            
            return false;
        });

        $('#chkAgree').click(function () {
            clearValidation();            
        });

        var typeselect = false; var agree = false; var flags = "";
        $('#btnSubmit').click(function () {
            
            if ($('.trSelectType :checkbox:checked').length < 1) {
                typeselect = false;
                //return false;
            }
            else {
                typeselect = true;
            }
            if (!$('#chkAgree').is(':checked')) {
                agree = false;
                //return false;
            }
            else { agree = true; }
            if (typeselect == true && agree == true) {

                $('#UpdateProgress1').show();
                //checkFlags();
            }
            else {
                window.scroll(0, 0);
                //$("html,body").animate({ scrollTop: 0 }, 'slow');
                return false;
            }
            adjustErrorBorder();
            
        });

        var myQuery = window.location.search.substring(1);
        var strings = myQuery.split('=');
        if (strings[2]) {
            var s = strings[2];
            var chkIdList = new Array('chkClaims', 'chkDrugs',
                                      'chkEmerContact', 'chkFamilyHistory',
                                      'chkPharmacies', 'chkPlans',
                                      'chkPreventiveServices', 'chkProviders',
                                      'chkSelfReportedInfo');

            for (var i = 0; i < s.length; i++) {
                if (s.substr(0, 1) != "0") {
                    $('#' + chkIdList[0]).attr('checked', true);
                    $('#SelectDateRange').show();
                    if (s.substr(i, 1) == "A")
                        $('#rdoMonths12').attr('checked', true);
                    else if (s.substr(i, 1) == "B")
                        $('#rdoMonths24').attr('checked', true);
                    else if (s.substr(i, 1) == "C")
                        $('#rdoMonths36').attr('checked', true);
                }
                if (s.substr(i, 1) == "1")
                    $('#' + chkIdList[i]).attr('checked', true);
            }

        }

        function checkFlags() {
            
            flags = "";
            $('.trSelectType :checkbox').each(function () {
                if (this.checked) {
                    if ($(this).attr('id').indexOf('chkClaims') != -1) {
                        if ($('#rdoMonths12').is(':checked'))
                            flags += "A";
                        else if ($('#rdoMonths24').is(':checked'))
                            flags += "B";
                        else
                            if ($('#rdoMonths36').is(':checked'))
                                flags += "C";
                    }
                    else
                        flags += "1";
                }
                else if (!this.checked) {
                    flags += "0";
                }
            });
            
        }
        
    });
    $(window).load(function () {
        MQ.init(queries);
    });

    checkResponsive = function (type) {

        if (type == "desktop" || type == "tablet") {
            $("#printli-responsive").hide();
        }

        if (type == "phone") {
            $("#printli-responsive").show();
        }
    }
</script>
</body>

</html>
