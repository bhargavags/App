// JScript source code nw
// Created by Nagalakshmi
var currentPage = 'indexPage';
var prevPage = '';
var pageData = ["indexPage"];
var datetime = '';

function gobackPage() {
    pageData.pop();
    currentPage = pageData[pageData.length - 1];
    $.mobile.changePage('#' + currentPage, {
        transition: "none",
        reverse: true,
        changeHash: false
    });
}
function goindexPage() {
    $.mobile.changePage('#indexPage', {
        transition: "none",
        reverse: false,
        changeHash: false
    });
    currentPage = 'indexPage';
    pageData.push(currentPage);
}

function gotoaccidentReportPage() {

    $.mobile.changePage('#accidentReportPage', {
        transition: "none",
        reverse: false,
        changeHash: false
    });
    currentPage = 'accidentReportPage';
    pageData.push(currentPage);
    getDateTimeIncident();
    getGPSIncidentLocation();

}
function gotoAccidentReportToDescPage() {


    $.mobile.changePage('#accidentDescriptionPage', {
        transition: "none",
        reverse: false,
        changeHash: false
    });
    currentPage = 'accidentDescriptionPage';
    pageData.push(currentPage);
}
function gotoPhotoPage() {

    $.mobile.changePage('#photoPage', {
        transition: "none",
        reverse: false,
        changeHash: false
    });
    currentPage = 'photoPage';
    pageData.push(currentPage);
}

function gotoDamagePhotoPage() {
    $.mobile.changePage('#DamagePhotoPage', {
        transition: "none",
        reverse: false,
        changeHash: false
    });
    currentPage = 'DamagePhotoPage';
    pageData.push(currentPage);
}

function gotoFirstPartyPage() {

    $.mobile.changePage('#FirstPartyPage', {
        transition: "none",
        reverse: false,
        changeHash: false
    });
    currentPage = 'FirstPartyPage';
    pageData.push(currentPage);
}
function gotoSecondPartyPage() {

    $.mobile.changePage('#SecondPartyPage', {
        transition: "none",
        reverse: false,
        changeHash: false
    });
    currentPage = 'SecondPartyPage';
    pageData.push(currentPage);
}

function gotoWitnessPageFromFP() {
    /*var FPEmailID = document.getElementById('txtFirstpartyemail').value;
	if (document.getElementById('txtidPartyName').value == "") {
		jAlert("Please enter 3rd party name.", "Warning");
		return false;
	}

	else if (document.getElementById('txtFirstpartyIDNumber').value == "") {
		jAlert("Please enter 3rd party ID number.", "");

		return false;
	}
	
	else if (document.getElementById('txtFirstpartyPhNumber').value == "") {
		jAlert("Please enter 3rd party phone number.", "");
		return false;
	}
	

	else if (document.getElementById('txtFirstpartyVehicleMake').value == "") {
		jAlert("Please enter 3rd party vehicle make.", "");
		return false;
	}

	else if (document.getElementById('txtFirstpartyVehicleModel').value == "") {
		jAlert("Please enter 3rd party vehicle model.", "");
		return false;
	} else if (document.getElementById('txtFirstpartyVehicleYear').value == "") {
		jAlert("Please enter year of 3rd party vehicle.", "");

		return false;
	} else if (document.getElementById('txtFirstpartyVehiclecolor').value == "") {
		jAlert("Please enter 3rd party vehicle colour.", "");

		return false;
	}

	else if (document.getElementById('txtFirstpartyRegNum').value == "") {
		jAlert("Please enter 3rd party vehicle registration number.", "");

		return false;
	}
	

	else if (document.getElementById('txtFirstpartyInsurer').value == "") {
		jAlert("Please enter 3rd party insurer.", "");
		return false;
	}*/


    $.mobile.changePage('#WitnessPage', {
        transition: "none",
        reverse: false,
        changeHash: false
    });
    currentPage = 'WitnessPage';
    pageData.push(currentPage);
}

/*new popup function*/
function showpopupdivSP() {

    $.mobile.changePage('#popup', {
        transition: "none",
        reverse: false,
        changeHash: false
    });
    currentPage = 'popup';
    pageData.push(currentPage);


}

function thirdpartyoneFP() {

    $.mobile.changePage('#FirstPartyPage', {
        transition: "none",
        reverse: false,
        changeHash: false
    });
    currentPage = 'FirstPartyPage';
    pageData.push(currentPage);


}




function gotoWitnessPageFromSP() {

    /*var SPEmailID = document.getElementById('txtSecondpartyemail').value;
	if (document.getElementById('txtidSecondPartyName').value == "") {
		jAlert("Please enter 3rd party name.", "");
		return false;
	}

	else if (document.getElementById('txtSecondpartyIDNumber').value == "") {
		jAlert("Please enter 3rd party ID number.", "");
		return false;
	}
	
	else if (document.getElementById('txtSecondpartyPhNumber').value == "") {
		jAlert("Please enter 3rd party phone number.", "");
		return false;
	}
	

	else if (document.getElementById('txtSecondpartyVehicleMake').value == "") {
		jAlert("Please enter 3rd party vehicle make.", "");
		return false;
	}

	else if (document.getElementById('txtSecondpartyVehicleModel').value == "") {
		jAlert("Please enter 3rd party vehicle model.", "");
		return false;
	} else if (document.getElementById('txtSecondpartyVehicleYear').value == "") {
		jAlert("Please enter year of 3rd party vehicle.", "");
		return false;
	} else if (document.getElementById('txtSecondpartyVehiclecolor').value == "") {
		jAlert("Please enter 3rd party vehicle colour.", "");
		return false;
	}

	else if (document.getElementById('txtSecondpartyRegNum').value == "") {
		jAlert("Please enter 3rd party vehicle registration number.", "");
		return false;
	}
	
	else if (document.getElementById('txtSecondpartyInsurer').value == "") {
		jAlert("Please enter 3rd party insurer.", "Info");
		return false;
	}*/


    $.mobile.changePage('#WitnessPage', {
        transition: "none",
        reverse: false,
        changeHash: false
    });
    currentPage = 'WitnessPage';
    pageData.push(currentPage);
}

function gotoSecondWitnessPage() {

    $.mobile.changePage('#SecondWitnessPage', {
        transition: "none",
        reverse: false,
        changeHash: false
    });
    currentPage = 'SecondWitnessPage';
    pageData.push(currentPage);
}

function gotopolicecasePageFromFirstWitness() {

    $.mobile.changePage('#policecasePage', {
        transition: "none",
        reverse: false,
        changeHash: false
    });
    currentPage = 'policecasePage';
    pageData.push(currentPage);

}
function gotopolicecasePageFromSecondWitness() {

    $.mobile.changePage('#policecasePage', {
        transition: "none",
        reverse: false,
        changeHash: false
    });
    currentPage = 'policecasePage';
    pageData.push(currentPage);

}

function gotoaboutAAPage() {

    $.mobile.changePage('#aboutAAPage', {
        transition: "none",
        reverse: false,
        changeHash: false
    });
    currentPage = 'aboutAAPage';
    pageData.push(currentPage);

}

function btnAAAccidentassist() {
    $.mobile.changePage('#AAAccidentAssistPage', {
        transition: "none",
        reverse: false,
        changeHash: false
    });
    currentPage = 'AAAccidentAssistPage';
    pageData.push(currentPage);
}
function gotoWhatTodoPage() {
    $.mobile.changePage('#WhatTodoPage', {
        transition: "none",
        reverse: false,
        changeHash: false
    });
    currentPage = 'WhatTodoPage';
    pageData.push(currentPage);
}
function gotoHistroyPage() {
    $.mobile.changePage('#WhatTodoPage', {
        transition: "none",
        reverse: false,
        changeHash: false
    });
    currentPage = 'WhatTodoPage';
    pageData.push(currentPage);
}
function gotoAboutAAPage() {


    $.mobile.changePage('#aboutAAPage', {
        transition: "none",
        reverse: false,
        changeHash: false
    });
    currentPage = 'aboutAAPage';
    pageData.push(currentPage);
}


function gotopopup() {


    $.mobile.changePage('#popuppage', {
        transition: "none",
        reverse: false,
        changeHash: false
    });
    currentPage = 'popuppage';
    pageData.push(currentPage);
}






function getDateTimeIncident() {

    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    var ampm = hour >= 12 ? 'PM' : 'AM';
    if (month.toString().length == 1) {
        var month = '0' + month;
    }
    if (day.toString().length == 1) {
        day = '0' + day;
    }
    if (hour.toString().length == 1) {
        hour = '0' + hour;
    }
    if (minute.toString().length == 1) {
        minute = '0' + minute;
    }
    if (second.toString().length == 1) {
        second = '0' + second;
    }

    localStorage.date = day + '/' + month + '/' + year;
    // localStorage.Time = hour + ':' + minute + ':' + ampm;
    localStorage.Time = hour + ':' + minute;
    datetime = day + '-' + month + '-' + year + ' ' + hour + ':' + minute + ':'
			+ second;

    $('#txtdatepicker').val(localStorage.date);
    $('#txttimepicker').val(localStorage.Time);

}

function getGPSIncidentLocation() {

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPositionLatLng, Errorpage);
    } else {

        jAlert("Please make sure GPS is enabled. Please try again.", "");
    }
}
function Errorpage(error) {

    GPSLocationLatitude = "0";
    GPSLocationLongitude = "0";
    $('#txtidGPSIncident').val("0,0");
}
function showPositionLatLng(position) {


    if ((position.coords.latitude == undefined) && (position.coords.longitude == undefined)) {

        GPSLocationLatitude = "0";
        GPSLocationLongitude = "0";
        $('#txtidGPSIncident').val("0,0");
    }
    else {
        $('#txtidGPSIncident').val(
				position.coords.latitude + ", " + position.coords.longitude);
        GPSLocationLatitude = position.coords.latitude;
        GPSLocationLongitude = position.coords.longitude;
    }

}




$(document).ready(function () {
    $("body").fadeIn(2000);


});


var AID = "";
var LocDescription = "";
var AccDescription = "";
var RoadCondition = "";
var AccRoadnNotes = "";
/* w1 */
var Wtitle = "";
var Wname = "";
var Wsurname = "";
var Wphnum = "";
var Wemail = "";
var Wnotes = "";
var Wst = "";
/* w2 */
var SWtitle = "";
var SWname = "";
var SWsurname = "";
var SWphnum = "";
var SWemail = "";
var SWnotes = "";
var SWst = "";
/* p1 */
var Ptitle = "";
var Pname = "";
var Psurname = "";
var Pidnum = "";
var Pdlnum = "";
var Pphnum = "";
var Ppemail = "";
var Ppnotes = "";
var Ppvmake = "";
var Ppvmodel = "";
var Ppvyear = "";
var Ppvcolor = "";
var Ppvregnum = "";
var Ppvvinnum = "";
var Ppvnotes = "";
var Ppvinsurer = "";
var Ppvipcnum = "";
var Ppviphnum = "";
/* p2 */
var SPtitle = "";
var SPname = "";
var SPsurname = "";
var SPidnum = "";
var SPdlnum = "";
var SPphnum = "";
var SPpemail = "";
var SPpnotes = "";
var SPpvmake = "";
var SPpvmodel = "";
var SPpvyear = "";
var SPpvcolor = "";
var SPpvregnum = "";
var SPpvvinnum = "";
var SPpvnotes = "";
var SPpvinsurer = "";
var SPpvipcnum = "";
var SPpviphnum = "";
/* Police case */
var POname = "";
var POnumber = "";
var CaseNumber = "";
function btnSaveAllDetails(msidn) {
    //jAlert("test");

    alert(document.getElementById("txtidpolicenumber").value)
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    var ampm = hour >= 12 ? 'PM' : 'AM';
    if (month.toString().length == 1) {
        var month = '0' + month;
    }
    if (day.toString().length == 1) {
        var day = '0' + day;
    }
    if (hour.toString().length == 1) {
        var hour = '0' + hour;
    }
    if (minute.toString().length == 1) {
        var minute = '0' + minute;
    }
    if (second.toString().length == 1) {
        var second = '0' + second;
    }

    datetime = day + '-' + month + '-' + year + ' ' + hour + ':' + minute + ':'
			+ second;
    document.getElementById('view-loading').style.display = "block";
    try {


        if ($('#taidLocDesc').val() == '' || $('#taidLocDesc').val() == null
				|| $('#taidLocDesc').val() == undefined) {
            LocDescription = "";
        } else {
            LocDescription = $('#taidLocDesc').val();

        }
        if ($('#idAccDesc').val() == '' || $('#idAccDesc').val() == null
				|| $('#idAccDesc').val() == undefined) {
            AccDescription = "";
        } else {
            AccDescription = $('#idAccDesc').val();
        }

        if ($('#idSelectRoadCondition').val() == ''
				|| $('#idSelectRoadCondition').val() == null
				|| $('#idSelectRoadCondition').val() == undefined) {
            RoadCondition = "";
        } else {
            RoadCondition = $('#idSelectRoadCondition').val();
        }
        if ($('#idAccDescNotes').val() == ''
				|| $('#idAccDescNotes').val() == null
				|| $('#idAccDescNotes').val() == undefined) {
            AccRoadnNotes = "";
        } else {
            AccRoadnNotes = $('#idAccDescNotes').val();
        }

        if ($('#idselectwitnesstitle').val() == ''
				|| $('#idselectwitnesstitle').val() == null
				|| $('#idselectwitnesstitle').val() == undefined) {
            Wtitle = "";
        } else {
            Wtitle = $('#idselectwitnesstitle').val();
        }
        if ($('#txtidwitnessName').val() == ''
				|| $('#txtidwitnessName').val() == null
				|| $('#txtidwitnessName').val() == undefined) {
            Wname = "";
        } else {
            Wname = $('#txtidwitnessName').val();
        }
        if ($('#txtidwitnessSurName').val() == ''
				|| $('#txtidwitnessSurName').val() == null
				|| $('#txtidwitnessSurName').val() == undefined) {
            Wsurname = "";
        } else {
            Wsurname = $('#txtidwitnessSurName').val();
        }
        if ($('#txtidwitnessPhnum').val() == ''
				|| $('#txtidwitnessPhnum').val() == null
				|| $('#txtidwitnessPhnum').val() == undefined) {
            Wphnum = "";
        } else {
            Wphnum = $('#txtidwitnessPhnum').val();
        }
        if ($('#txtidwitnessEmail').val() == ''
				|| $('#txtidwitnessEmail').val() == null
				|| $('#txtidwitnessEmail').val() == undefined) {
            Wemail = "";
        } else {
            Wemail = $('#txtidwitnessEmail').val();
        }
        if ($('#taidwitnessnotes').val() == ''
				|| $('#taidwitnessnotes').val() == null
				|| $('#taidwitnessnotes').val() == undefined) {
            Wnotes = "";
        } else {
            Wnotes = $('#taidwitnessnotes').val();
        }
        if ($('#txtidwitnessSt').val() == ''
				|| $('#txtidwitnessSt').val() == null
				|| $('#txtidwitnessSt').val() == undefined) {
            Wst = "";
        } else {
            Wst = $('#txtidwitnessSt').val();
        }

        if ($('#idselectSwitnesstitle').val() == ''
				|| $('#idselectSwitnesstitle').val() == null
				|| $('#idselectSwitnesstitle').val() == undefined) {
            SWtitle = "";
        } else {
            SWtitle = $('#idselectSwitnesstitle').val();
        }
        if ($('#txtidSwitnessName').val() == ''
				|| $('#txtidSwitnessName').val() == null
				|| $('#txtidSwitnessName').val() == undefined) {
            SWname = "";
        } else {
            SWname = $('#txtidSwitnessName').val();
        }
        if ($('#txtidSwitnessSurName').val() == ''
				|| $('#txtidSwitnessSurName').val() == null
				|| $('#txtidSwitnessSurName').val() == undefined) {
            SWsurname = "";
        } else {
            SWsurname = $('#txtidSwitnessSurName').val();
        }
        if ($('#txtidSwitnessPhnum').val() == ''
				|| $('#txtidSwitnessPhnum').val() == null
				|| $('#txtidSwitnessPhnum').val() == undefined) {
            SWphnum = "";
        } else {
            SWphnum = $('#txtidSwitnessPhnum').val();
        }
        if ($('#txtidSwitnessEmail').val() == ''
				|| $('#txtidSwitnessEmail').val() == null
				|| $('#txtidSwitnessEmail').val() == undefined) {
            SWemail = "";
        } else {
            SWemail = $('#txtidSwitnessEmail').val();
        }
        if ($('#taidSwitnessnotes').val() == ''
				|| $('#taidSwitnessnotes').val() == null
				|| $('#taidSwitnessnotes').val() == undefined) {
            SWnotes = "";
        } else {
            SWnotes = $('#taidSwitnessnotes').val();
        }
        if ($('#txtidSwitnessSt').val() == ''
				|| $('#txtidSwitnessSt').val() == null
				|| $('#txtidSwitnessSt').val() == undefined) {
            SWst = "";
        } else {
            SWst = $('#txtidSwitnessSt').val();
        }
        //alert(document.getElementById('idselectpartyTitle').value);
        if (document.getElementById('idselectpartyTitle').value == ''
				|| document.getElementById('idselectpartyTitle').value == null
				|| document.getElementById('idselectpartyTitle').value == undefined) {
            Ptitle = "";
        } else {

            Ptitle = document.getElementById('idselectpartyTitle').value;
        }
        if ($('#txtidPartyName').val() == ''
				|| $('#txtidPartyName').val() == null
				|| $('#txtidPartyName').val() == undefined) {
            Pname = "";
        } else {
            Pname = $('#txtidPartyName').val();
        }
        if ($('#txtidPartySurName').val() == ''
				|| $('#txtidPartySurName').val() == null
				|| $('#txtidPartySurName').val() == undefined) {
            Psurname = "";
        } else {
            Psurname = $('#txtidPartySurName').val();
        }
        if ($('#txtFirstpartyIDNumber').val() == ''
				|| $('#txtFirstpartyIDNumber').val() == null
				|| $('#txtFirstpartyIDNumber').val() == undefined) {
            Pidnum = "";
        } else {
            Pidnum = $('#txtFirstpartyIDNumber').val();
        }
        if ($('#txtidDriverLicenseNum').val() == ''
				|| $('#txtidDriverLicenseNum').val() == null
				|| $('#txtidDriverLicenseNum').val() == undefined) {
            Pdlnum = "";
        } else {
            Pdlnum = $('#txtidDriverLicenseNum').val();
        }
        if ($('#txtFirstpartyemail').val() == ''
				|| $('#txtFirstpartyemail').val() == null
				|| $('#txtFirstpartyemail').val() == undefined) {
            Ppemail = "";
        } else {
            Ppemail = $('#txtFirstpartyemail').val();
            ;
        }

        if ($('#txtFirstpartyNotes').val() == ''
				|| $('#txtFirstpartyNotes').val() == null
				|| $('#txtFirstpartyNotes').val() == undefined) {
            Ppnotes = "";
        } else {
            Ppnotes = $('#txtFirstpartyNotes').val();
        }
        if ($('#txtFirstpartyVehicleMake').val() == ''
				|| $('#txtFirstpartyVehicleMake').val() == null
				|| $('#txtFirstpartyVehicleMake').val() == undefined) {
            Ppvmake = "";
        } else {
            Ppvmake = $('#txtFirstpartyVehicleMake').val();
        }
        if ($('#txtFirstpartyVehicleModel').val() == ''
				|| $('#txtFirstpartyVehicleModel').val() == null
				|| $('#txtFirstpartyVehicleModel').val() == undefined) {
            Ppvmodel = "";
        } else {
            Ppvmodel = $('#txtFirstpartyVehicleModel').val();
        }
        if ($('#txtFirstpartyVehicleYear').val() == ''
				|| $('#txtFirstpartyVehicleYear').val() == null
				|| $('#txtFirstpartyVehicleYear').val() == undefined) {
            Ppvyear = "";
        } else {
            Ppvyear = $('#txtFirstpartyVehicleYear').val();
        }
        if ($('#txtFirstpartyVehiclecolor').val() == ''
				|| $('#txtFirstpartyVehiclecolor').val() == null
				|| $('#txtFirstpartyVehiclecolor').val() == undefined) {
            Ppvcolor = "";
        } else {
            Ppvcolor = $('#txtFirstpartyVehiclecolor').val();
        }
        if ($('#txtFirstpartyRegNum').val() == ''
				|| $('#txtFirstpartyRegNum').val() == null
				|| $('#txtFirstpartyRegNum').val() == undefined) {
            Ppvregnum = "";
        } else {
            Ppvregnum = $('#txtFirstpartyRegNum').val();
        }
        if ($('#txtFirstpartyVINNum').val() == ''
				|| $('#txtFirstpartyVINNum').val() == null
				|| $('#txtFirstpartyVINNum').val() == undefined) {
            Ppvvinnum = "";
        } else {
            Ppvvinnum = $('#txtFirstpartyVINNum').val();
        }
        if ($('#txtFirstpartyVehicleNotes').val() == ''
				|| $('#txtFirstpartyVehicleNotes').val() == null
				|| $('#txtFirstpartyVehicleNotes').val() == undefined) {
            Ppvnotes = "";
        } else {
            Ppvnotes = $('#txtFirstpartyVehicleNotes').val();
        }
        if ($('#txtFirstpartyInsurer').val() == ''
				|| $('#txtFirstpartyInsurer').val() == null
				|| $('#txtFirstpartyInsurer').val() == undefined) {
            Ppvinsurer = "";
        } else {
            Ppvinsurer = $('#txtFirstpartyInsurer').val();
        }
        if ($('#txtFirstpartyInsurerPcnum').val() == ''
				|| $('#txtFirstpartyInsurerPcnum').val() == null
				|| $('#txtFirstpartyInsurerPcnum').val() == undefined) {
            Ppvipcnum = "";
        } else {
            Ppvipcnum = $('#txtFirstpartyInsurerPcnum').val();
        }
        if ($('#txtFirstpartyInsurerPhnum').val() == ''
				|| $('#txtFirstpartyInsurerPhnum').val() == null
				|| $('#txtFirstpartyInsurerPhnum').val() == undefined) {
            Ppviphnum = "";
        } else {
            Ppviphnum = $('#txtFirstpartyInsurerPhnum').val();
        }
        if ($('#txtFirstpartyPhNumber').val() == ''
				|| $('#txtFirstpartyPhNumber').val() == null
				|| $('#txtFirstpartyPhNumber').val() == undefined) {
            Pphnum = "";
        } else {
            Pphnum = $('#txtFirstpartyPhNumber').val();
        }

        if (document.getElementById('idselectsecondpartyTitle').value == ''
				|| document.getElementById('idselectsecondpartyTitle').value == null
				|| document.getElementById('idselectsecondpartyTitle').value == undefined) {
            SPtitle = "";
        } else {
            SPtitle = document.getElementById('idselectsecondpartyTitle').value;
        }
        if ($('#txtidSecondPartyName').val() == ''
				|| $('#txtidSecondPartyName').val() == null
				|| $('#txtidSecondPartyName').val() == undefined) {
            SPname = "";
        } else {
            SPname = $('#txtidSecondPartyName').val();
        }
        if ($('#txtidSecondPartySurName').val() == ''
				|| $('#txtidSecondPartySurName').val() == null
				|| $('#txtidSecondPartySurName').val() == undefined) {
            SPsurname = "";
        } else {
            SPsurname = $('#txtidSecondPartySurName').val();
        }
        if ($('#txtSecondpartyIDNumber').val() == ''
				|| $('#txtSecondpartyIDNumber').val() == null
				|| $('#txtSecondpartyIDNumber').val() == undefined) {
            SPidnum = "";
        } else {
            SPidnum = $('#txtSecondpartyIDNumber').val();
        }
        if ($('txtidSecondpartyDriverLicenseNum').val() == ''
				|| $('txtidSecondpartyDriverLicenseNum').val() == null
				|| $('txtidSecondpartyDriverLicenseNum').val() == undefined) {
            SPdlnum = "";
        } else {
            SPdlnum = $('txtidSecondpartyDriverLicenseNum').val();
        }
        if ($('txtSecondpartyPhNumber').val() == ''
				|| $('txtSecondpartyPhNumber').val() == null
				|| $('txtSecondpartyPhNumber').val() == undefined) {
            SPphnum = "";
        } else {
            SPphnum = $('txtSecondpartyPhNumber').val();
        }
        if ($('#txtSecondpartyemail').val() == ''
				|| $('#txtSecondpartyemail').val() == null
				|| $('#txtSecondpartyemail').val() == undefined) {
            SPpemail = "";
        } else {
            SPpemail = $('#txtSecondpartyemail').val();
        }
        if ($('#txtSecondpartyNotes').val() == ''
				|| $('#txtSecondpartyNotes').val() == null
				|| $('#txtSecondpartyNotes').val() == undefined) {
            SPpnotes = "";
        } else {
            SPpnotes = $('#txtSecondpartyNotes').val();
        }
        if ($('#txtSecondpartyVehicleMake').val() == ''
				|| $('#txtSecondpartyVehicleMake').val() == null
				|| $('#txtSecondpartyVehicleMake').val() == undefined) {
            SPpvmake = "";
        } else {
            SPpvmake = $('#txtSecondpartyVehicleMake').val();
        }
        if ($('#txtSecondpartyVehicleModel').val() == ''
				|| $('#txtSecondpartyVehicleModel').val() == null
				|| $('#txtSecondpartyVehicleModel').val() == undefined) {
            SPpvmodel = "";
        } else {
            SPpvmodel = $('#txtSecondpartyVehicleModel').val();
        }
        if ($('#txtSecondpartyVehicleYear').val() == ''
				|| $('#txtSecondpartyVehicleYear').val() == null
				|| $('#txtSecondpartyVehicleYear').val() == undefined) {
            SPpvyear = "";
        } else {
            SPpvyear = $('#txtSecondpartyVehicleYear').val();
        }
        if ($('#txtSecondpartyVehiclecolor').val() == ''
				|| $('#txtSecondpartyVehiclecolor').val() == null
				|| $('#txtSecondpartyVehiclecolor').val() == undefined) {
            SPpvcolor = "";
        } else {
            SPpvcolor = $('#txtSecondpartyVehiclecolor').val();
        }
        if ($('#txtSecondpartyRegNum').val() == ''
				|| $('#txtSecondpartyRegNum').val() == null
				|| $('#txtSecondpartyRegNum').val() == undefined) {
            SPpvregnum = "";
        } else {
            SPpvregnum = $('#txtSecondpartyRegNum').val();
        }
        if ($('#txtSecondpartyVINNum').val() == ''
				|| $('#txtSecondpartyVINNum').val() == null
				|| $('#txtSecondpartyVINNum').val() == undefined) {
            SPpvvinnum = "";
        } else {
            SPpvvinnum = $('#txtSecondpartyVINNum').val();
        }
        if ($('#txtSecondpartyVehicleNotes').val() == ''
				|| $('#txtSecondpartyVehicleNotes').val() == null
				|| $('#txtSecondpartyVehicleNotes').val() == undefined) {
            SPpvnotes = "";
        } else {
            SPpvnotes = $('#txtSecondpartyVehicleNotes').val();

        }
        if ($('#txtSecondpartyInsurer').val() == ''
				|| $('#txtSecondpartyInsurer').val() == null
				|| $('#txtSecondpartyInsurer').val() == undefined) {
            SPpvinsurer = "";
        } else {
            SPpvinsurer = $('#txtSecondpartyInsurer').val();
        }
        if ($('#txtSecondpartyInsurerPcnum').val() == ''
				|| $('#txtSecondpartyInsurerPcnum').val() == null
				|| $('#txtSecondpartyInsurerPcnum').val() == undefined) {
            SPpvipcnum = "";
        } else {
            SPpvipcnum = $('#txtSecondpartyInsurerPcnum').val();
        }
        if ($('#txtSecondpartyInsurerPhnum').val() == ''
				|| $('#txtSecondpartyInsurerPhnum').val() == null
				|| $('#txtSecondpartyInsurerPhnum').val() == undefined) {
            SPpviphnum = "";
        } else {
            SPpviphnum = $('#txtSecondpartyInsurerPhnum').val();
        }
        if ($('#txtidpolicename').val() == ''
				|| $('#txtidpolicename').val() == null
				|| $('#txtidpolicename').val() == undefined) {
            POname = "";
        } else {
            POname = $('#txtidpolicename').val();
        }
        if ($('#txtidpolicenumber').val() == ''
				|| $('#txtidpolicenumber').val() == null
				|| $('#txtidpolicenumber').val() == undefined) {
            POnumber = "";
        } else {
            POnumber = $('#txtidpolicenumber').val();
        }
        if ($('#txtidcasenumber').val() == ''
				|| $('#txtidcasenumber').val() == null
				|| $('#txtidcasenumber').val() == undefined) {
            CaseNumber = "";
        } else {
            CaseNumber = $('#txtidcasenumber').val();
        }


        insertAccidentRecord(msidn);
    } catch (err) {
        jAlert("The System is temporarily <br/>unavailable, please <br/>try again later.");
        document.getElementById('view-loading').style.display = "none";
    }
}

function fail(result) {


    if (result.message != "") {
        jAlert("System temporarly unavailable.<br/> Please try later");
        document.getElementById('view-loading').style.display = "none";
    } else {
        jAlert("System temporarly unavailable.<br/> Please try later");
        document.getElementById('view-loading').style.display = "none";
    }

}
function sucess(result) {


    var res = result.status;
    AID = result.ID;
    if (res == 200) {

        uploadLocPicture(AID);
        uploadAccDmgPicture(AID);
        uploadDLicensePicture(AID);
        uploadPartyLocPicture(AID);
        uploadPartyDmgPicture(AID);
        uploadSPDLicensePicture(AID);
        uploadSecondPartyLocPicture(AID);
        uploadSecondPartyDmgPicture(AID);
        uploadVedio(AID);
        uploadAudio(AID);
        uploadAudioSwit(AID);
        document.getElementById("view-loading").style.display = "none";


        if (document.getElementById("idDelImgPhotoImg").innerHTML != "") {
            document.getElementById("idDelImgPhotoImg").innerHTML = "";
            $('#idAddPhotoImg').show();
        }
        if (document.getElementById("idDelImgDamagePhotoImg").innerHTML != "") {
            document.getElementById("idDelImgDamagePhotoImg").innerHTML = "";
            $('#idAddDamagePhotoImg').show();
            $('#idAddanotherDamagephotoImg').hide();

        }
        if (document.getElementById("idDriverLicenseNumPhoto").innerHTML != "") {
            document.getElementById("idDriverLicenseNumPhoto").innerHTML = "";
        }
        if (document.getElementById("idLicenseDiskPhoto").innerHTML != "") {
            document.getElementById("idLicenseDiskPhoto").innerHTML = "";
        }
        if (document.getElementById("idDamagePhoto").innerHTML != "") {
            document.getElementById("idDamagePhoto").innerHTML = "";
        }
        if (document.getElementById("idSecondpartyDriverLicenseNumPhoto").innerHTML != "") {
            document.getElementById("idSecondpartyDriverLicenseNumPhoto").innerHTML = "";
        }
        if (document.getElementById("idSecondpartyLicenseDiskPhoto").innerHTML != "") {
            document.getElementById("idSecondpartyLicenseDiskPhoto").innerHTML = "";
        }
        if (document.getElementById("idSecondpartyDamagePhoto").innerHTML != "") {
            document.getElementById("idSecondpartyDamagePhoto").innerHTML = "";
        }
        if (document.getElementById("idVedioShowdiv").innerHTML != "") {
            document.getElementById("idVedioShowdiv").innerHTML = "";
            $('#capture-result').text('');
        }
        if (document.getElementById("idAudioDiv").innerHTML != "") {
            document.getElementById("idAudioDiv").innerHTML = "";
            $('#capture-resultAudio').text('');
        }
        if (document.getElementById("idSecondWitAudio").innerHTML != "") {
            document.getElementById("idSecondWitAudio").innerHTML = "";
            $('#capture-resultswitAudio').text('');

        }




        $('#idAddanotherphotoImg').hide();

        $('#taidLocDesc').val("");
        $('#idAccDesc').val("");
        $('#idSelectRoadCondition').val("");
        $('#idAccDescNotes').val("");
        $('#txtidPartyName').val("");
        $('#txtidPartySurName').val("");
        $('#txtFirstpartyIDNumber').val("");
        $('#txtidDriverLicenseNum').val("");
        $('#txtFirstpartyPhNumber').val("");
        $('#txtFirstpartyemail').val("");
        $('#txtFirstpartyNotes').val("");
        $('#txtFirstpartyVehicleMake').val("");
        $('#txtFirstpartyVehicleModel').val("");
        $('#txtFirstpartyVehicleYear').val("");
        $('#txtFirstpartyVehiclecolor').val("");
        $('#txtFirstpartyRegNum').val("");
        $('#txtFirstpartyVINNum').val("");
        $('#txtFirstpartyVehicleNotes').val("");
        $('#txtFirstpartyInsurer').val("");
        $('#txtFirstpartyInsurerPcnum').val("");
        $('#txtFirstpartyInsurerPhnum').val("");

        $('#txtidSecondPartyName').val("");
        $('#txtidSecondPartySurName').val("");
        $('#txtSecondpartyIDNumber').val("");
        $('#txtidSecondpartyDriverLicenseNum').val("");
        $('#txtSecondpartyPhNumber').val("");
        $('#txtSecondpartyemail').val("");
        $('#txtSecondpartyNotes').val("");
        $('#txtSecondpartyVehicleMake').val("");
        $('#txtSecondpartyVehicleModel').val("");
        $('#txtSecondpartyVehicleYear').val("");
        $('#txtSecondpartyVehiclecolor').val("");
        $('#txtSecondpartyRegNum').val("");
        $('#txtSecondpartyVINNum').val("");
        $('#txtSecondpartyVehicleNotes').val("");
        $('#txtSecondpartyInsurer').val("");
        $('#txtSecondpartyInsurerPcnum').val("");
        $('#txtSecondpartyInsurerPhnum').val("");

        $('#txtidwitnessName').val("");
        $('#txtidwitnessSurName').val("");
        $('#txtidwitnessPhnum').val("");
        $('#txtidwitnessEmail').val("");
        $('#taidwitnessnotes').val("");
        $('#txtidwitnessSt').val("");
        $('#txtidSwitnessName').val("");
        $('#txtidSwitnessSurName').val("");
        $('#txtidSwitnessPhnum').val("");
        $('#txtidSwitnessEmail').val("");
        $('#taidSwitnessnotes').val("");
        $('#txtidSwitnessSt').val("");
        $('#txtidpolicename').val("");
        $('#txtidpolicenumber').val("");
        $('#txtidcasenumber').val("");
        $('#savecancel').attr('onclick', 'goindexPage()');
        $('#saveback').attr('onclick', 'gobackPage()');

        jAlert("Your FNB Road Assist Accident Report will be <br/>uploaded to your profile on the<br/>  FNB Road Assist website <br/> at  www.fnbroadassist.co.za. <br/>This generally takes a few moments <br/>but is dependent on your service<br/> provider network and file size.", "");
        $("#popup_ok").click(function () {

            Arrayclear();

        });

    } else {
        if (result.message != "") {
            jAlert("User doesnot exists");
            document.getElementById('view-loading').style.display = "none";
        } else {
            jAlert("System temporarly unavailable.<br/> Please try later");
            document.getElementById('view-loading').style.display = "none";
        }
    }

}
CallWebService = function (url, inputData, method, contentType, callback) {

    try {
        var xhr;
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xhr.onreadystatechange = function () {
            // alert(xhr.status);
            // alert(xhr.readyState);
            if (xhr.readyState == 4 && xhr.status == 200) {

                // alert(this.responseText);
                callback(this.responseText);
            }
            if (xhr.readyState == 4 && (xhr.status == 404 || xhr.status == 403 || xhr.status == 500 || xhr.status == 504)) {
                jAlert("The System is temporarily <br/>unavailable, please <br/>try again later.");
                document.getElementById('view-loading').style.display = "none";
            }
        };
        xhr.onerror = function (e) {
            jAlert("The System is temporarily <br/>unavailable, please <br/>try again later.");
            document.getElementById('view-loading').style.display = "none";
        };
        xhr.open(method, url);
        xhr.setRequestHeader("Content-Type", contentType);
        xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
        xhr.setRequestHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
        xhr.setRequestHeader("Access-Control-Allow-Headers", "X-PINGOTHER");
        xhr.setRequestHeader("Access-Control-Max-Age", "1728000");
        xhr.timeout = 120000;
        xhr.ontimeout = function (e) {
            jAlert("The System is temporarily <br/>unavailable, please <br/>try again later.");
            document.getElementById('view-loading').style.display = "none";
        }
        if (inputData !== '') {
            if (window.navigator.onLine == true) {
                xhr.send(inputData);
            } else {
                jAlert('No network connection,<br/>Please check your <br/>network connectivity!');
                document.getElementById('view-loading').style.display = "none";
            }
        } else {
            if (window.navigator.onLine == true) {
                xhr.send(null);
            } else {
                jAlert('No network connection,<br/>Please check your <br/>network connectivity!');
                document.getElementById('view-loading').style.display = "none";
            }
        }
    } catch (ex) {
        jAlert("The System is temporarily <br/>unavailable, please <br/>try again later.");
        document.getElementById('view-loading').style.display = "none";
    }
}
function insertAccidentRecord(msidn) {

    if (window.navigator.onLine == true) {
        //alert(datetime);
        svc = new AppService();
        var accident = {
            AccidentDate: datetime,
            AccidentDescription: AccDescription,
            ID: 0,
            Latitude: GPSLocationLatitude,
            LocationDescription: LocDescription,
            Longitude: GPSLocationLongitude,
            RoadCondition: RoadCondition,
            Msisdn: msidn,
            Notes: AccRoadnNotes,
            PoliceOfficerName: POname,
            PoliceOfficerNumber: POnumber,
            PoliceCaseNumber: CaseNumber
        };
        var witness1 = {
            AccidentID: 0,
            Email: Wemail,
            FirstName: Wname,
            ID: 0,
            IDNumber: "00",
            LastName: Wsurname,
            Notes: Wnotes,
            Phone: Wphnum,
            Title: Wtitle,
            VoiceRecordedStatement: "Test",
            WitnessType: 1,
            WitnessStatement: Wst
        };
        var witness2 = {
            AccidentID: 0,
            Email: SWemail,
            FirstName: SWname,
            ID: 0,
            IDNumber: "00",
            LastName: SWsurname,
            Notes: SWnotes,
            Phone: SWphnum,
            Title: SWtitle,
            VoiceRecordedStatement: "Test",
            WitnessType: 2,
            WitnessStatement: SWst
        };
        var party1 = {
            AccidentID: 0,
            Email: Ppemail,
            FirstName: Pname,
            ID: 0,
            IDNumber: Pidnum,
            InsurerID: "4545",
            InsurerName: Ppvinsurer,
            InsurerPhoneNo: Ppviphnum,
            LastName: Psurname,
            LicenseCopy: "656",
            LicenseNumber: Pdlnum,
            Notes: Ppnotes,
            PartyType: 1,
            Phone: Pphnum,
            PolicyNumber: Ppvipcnum,
            Title: Ptitle,
            VechileColour: Ppvcolor,
            VehicleMake: Ppvmake,
            VehicleModel: Ppvmodel,
            VehicleNotes: Ppvnotes,
            VehicleRegistrationNo: Ppvregnum,
            VehicleVinNumber: Ppvvinnum,
            VehicleYear: Ppvyear
        };
        var party2 = {
            AccidentID: 0,
            Email: SPpemail,
            FirstName: SPname,
            ID: 0,
            IDNumber: SPidnum,
            InsurerID: "6575",
            InsurerName: SPpvinsurer,
            InsurerPhoneNo: SPpviphnum,
            LastName: SPsurname,
            LicenseCopy: "677",
            LicenseNumber: SPdlnum,
            Notes: SPpnotes,
            PartyType: 2,
            Phone: SPphnum,
            PolicyNumber: SPpvipcnum,
            Title: SPtitle,
            VechileColour: SPpvcolor,
            VehicleMake: SPpvmake,
            VehicleModel: SPpvmodel,
            VehicleNotes: SPpvnotes,
            VehicleRegistrationNo: SPpvregnum,
            VehicleVinNumber: SPpvvinnum,
            VehicleYear: SPpvyear
        };
        svc.AddAccidentDetails(accident, witness1, witness2, party1, party2,
				sucess, fail);
    } else {
        jAlert(
				"No network connection,<br/>Please check your network <br/>connectivity!",
				'Info');
        document.getElementById('view-loading').style.display = "none";
    }

}
function GetCallback(responsedata) {

    //	alert('res:  '+responsedata);
    document.getElementById('view-loading').style.display = "none";
    responsedata = responsedata.replace(/&gt;/gi, '>');
    responsedata = responsedata.replace(/&lt;/gi, '<');
    try {
        if (responsedata != '' && responsedata != null) {
            var parser = new DOMParser();
            var doc = parser.parseFromString(responsedata, "text/xml");
            //alert(doc.getElementsByTagName('AddAccidentResult')[0].textContent);

        }
    } catch (ex) {
        jAlert("The System is temporarily <br/>unavailable, please <br/>try again later.");
        document.getElementById('view-loading').style.display = "none";
    }
}

function dBcall() {

    var db = window.openDatabase("aarescuepoidb", "1.0", "AAPOIdatabase", 4 * 1024 * 1024);

    db.transaction(function (tx) {

        var queryAccom = "CREATE TABLE IF NOT EXISTS AAAccommodation(Name varchar(255) NULL,AA_rating INTEGER NULL,Latitude varchar(255) NULL,Longitude varchar(255) NULL,Seopermalink varchar(255) NULL,PhoneNumber varchar(255) NULL,Email varchar(255) NULL)";

        tx.executeSql(queryAccom);

        var querySalesAgent = "CREATE TABLE IF NOT EXISTS SalesAgent(Name varchar(255) NULL,Catery varchar(255) NULL,Lat varchar(255) NULL,Long varchar(255) NULL,Tel varchar(255) NULL,Email varchar(255) NULL,Website varchar(255) NULL,AddressStreet varchar(255) NULL,AddressSuburb varchar(255) NULL,AddressCity varchar(255) NULL,AddressPostal varchar(255) NULL)";

        tx.executeSql(querySalesAgent);

        var queryFuelStation = "CREATE TABLE IF NOT EXISTS FuelStation(SiteName varchar(255) NULL,SalesAreaName varchar(255) NULL,SalesManager varchar(255) NULL,Latitude varchar(255) NULL,Longitude varchar(255) NULL,DealerName varchar(255) NULL,Telno varchar(255) NULL,StreetNo varchar(255) NULL,StreetName varchar(255) NULL,Suburb varchar(255) NULL,PostCode varchar(255) NULL,AddressLine1 varchar(255) NULL,ProvinceName varchar(255) NULL,CoreArea varchar(255) NULL,LocationType varchar(255) NULL,PricingZone varchar(255) NULL,ExpressShop varchar(255) NULL,ShopSize varchar(255) NULL,WildBean varchar(255) NULL,QSR varchar(255) NULL,CarWash varchar(255) NULL,ATM varchar(255) NULL)";

        tx.executeSql(queryFuelStation);
      
        tx.executeSql("delete from AAAccommodation");
        tx.executeSql("delete from SalesAgent");
        tx.executeSql("delete from FuelStation");

        //Accomodation
        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('6th main mysore 1', 2, 12.321675, 76.621536, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/addo/zuurberg-mountain-village-PA43650', NULL, 'henri@addo.co.za')");
        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('3rd main mysore', 2, 12.323662, 76.622389, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/addo/zuurberg-mountain-village-PA43650', NULL, 'henri@addo.co.za')");

        //sales
      
        tx.executeSql("INSERT INTO SalesAgent (Name, Catery, Lat, Long, Tel, Email, Website, AddressStreet, AddressSuburb, AddressCity, AddressPostal) VALUES ('Garsfontei', NULL, 12.3323016, 76.6393292, '(012)9408999', 'teller2@voetspore.co.za  raymond@voetspore.co.za', NULL, 'Shop 315, Woodlands Boulevard, c/0 Garsfontein & De Villa Bois Str', 'Pretoria', 'Gauteng', 'P.O. Box 92256, Mooikloof,0059')");
        tx.executeSql("INSERT INTO SalesAgent (Name, Catery, Lat, Long, Tel, Email, Website, AddressStreet, AddressSuburb, AddressCity, AddressPostal) VALUES ('Garsfontei', NULL, 12.3323016, 76.6393292, '(012)9408999', 'teller2@voetspore.co.za  raymond@voetspore.co.za', NULL, 'Shop 315, Woodlands Boulevard, c/0 Garsfontein & De Villa Bois Str', 'Pretoria', 'Gauteng', 'P.O. Box 92256, Mooikloof,0059')");

        // FUEL STATION
      
        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Loskop Vallei Vulstasie', 'Rtl Sales Ops-Gauteng North', 'Ledwaba, Emma', -25.16441, 29.39499, 'Jardin, Johnnie (MR J)', '013 2625565', NULL, 'Cnr Hereford & Van Riebeeck Street', 'GROBLERSDAL', 450, NULL, 'Mpumalanga', 'Core 4 - The Rest', NULL, '10C', '--', '--', '--', '--', '--', '--')");
        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Loskop Vallei Vulstasie', 'Rtl Sales Ops-Gauteng North', 'Ledwaba, Emma', 12.3323016, 76.6393292, 'Jardin, Johnnie (MR J)', '013 2625565', NULL, 'Cnr Hereford & Van Riebeeck Street', 'GROBLERSDAL', 450, NULL, 'Mpumalanga', 'Core 4 - The Rest', NULL, '10C', '--', '--', '--', '--', '--', '--')");
        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Loskop Vallei Vulstasie', 'Rtl Sales Ops-Gauteng North', 'Ledwaba, Emma', 12.3323016, 76.6393292, 'Jardin, Johnnie (MR J)', '013 2625565', NULL, 'Cnr Hereford & Van Riebeeck Street', 'GROBLERSDAL', 450, NULL, 'Mpumalanga', 'Core 4 - The Rest', NULL, '10C', '--', '--', '--', '--', '--', '--')");


        //FUEL STATION END

    });

}