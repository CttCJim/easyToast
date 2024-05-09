$(document).ready(function() {
    var html = `<div class="toast-container position-fixed bottom-0 end-0 p-3" id="CttCJimEasyToast_toasthost"></div>`;
    $('body').append(html);
});

function CttCJimEasyToast_capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function CttCJimEasyToast_makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

function CttCJimEasyToast_createElementFromHTML(htmlString) {
	var div = document.createElement('div');
	div.innerHTML = htmlString.trim();
  
	// Change this to div.childNodes to support multiple top-level nodes.
	return div.firstChild;
}

function CttCJimEasyToast_newModal(type="info",body="",title="") { 
    var fill = "#007aff";

    if(body=="") {
        body=title;
        title=CttCJimEasyToast_capitalize(type);
    }

	switch(type) {
		case 'info':{
            fill = "#007aff";
		}break;
		case 'warning':{
            fill = "#ffc107";
		}break;
		case 'success':{
            fill = "#149c43";
		}break;
		case 'error':{
			fill="#b02a37";
		}break;
        default:return;
	}

    var toastID = CttCJimEasyToast_makeid(8);
    var toasthtml = `
        <div id="liveToast_${toastID}" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
            <svg class="bd-placeholder-img rounded me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                <rect id="toastRect_${toastID}" width="100%" height="100%" fill="${fill}"></rect>
            </svg>
            <strong class="me-auto">${title}</strong>
            <!--<small>11 mins ago</small>-->
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body">
                ${body}
            </div>
        </div>
        `;

    //create toast element
    var ele = CttCJimEasyToast_createElementFromHTML(toasthtml);

    $("#CttCJimEasyToast_toasthost")[0].appendChild(ele);
    const thistoast = new bootstrap.Toast(ele);

    ele.addEventListener('hidden.bs.toast', () => {
        //on hide, remove the element
        ele.remove();
    });

    thistoast.show();

}

function successModal(title="Success",body="") {
	CttCJimEasyToast_newModal('success',body,title);
	return;
}

function errorModal(title="Error",body="") {
	CttCJimEasyToast_newModal("error",body,title);
	return;
}

function infoModal(title="Info",body="") {
	CttCJimEasyToast_newModal("info",body,title);
	return;
}
