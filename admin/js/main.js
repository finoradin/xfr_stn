// XML creation
$(".makeXML").click(function() {
	$('form.ajax').each(function () {
	if (document.forms['frm'].identifier.value == ""){
	  alert("Please complete all required fields.");
	  return false;
	}
	else{
	  window.ihcOut = "<?xml version='1.0' encoding='UTF-8'?>\n<metadata>";
	  var that = $(this);
	  that.find('[name]').each(function(index, value) {
	    var that = $(this),
	    name = that.attr('name'),
	    value = that.val();
	    if (value && that.attr('type') != 'radio'){
	      ihcOut +=
	      '\n<'+name+'>'+value+'</'+name+'>';
	    };

	    if (that.attr('type') == 'radio') {
	    	chosen = ""
	    	len = that.length
		    for (i=0;i<len;i++){
		    	if (that[i].checked){
		    		chosen = that.value
		    	}
		    }

		    if (chosen != ""){
				ihcOut +=
				'\n<'+name+'>'+value+'</'+name+'>';	
		    }

	    };
	  });

	  // Here are the static elements that need to be the same for each XML file
	  ihcOut +=
	  '\n<uploader>New Museum</uploader>'
	  + '\n</metadata>';

	  var thisID = document.forms['frm'].identifier.value;
	  // Output xml to textarea for preview, and put into base64 w/ application header for download.
	  $('#output').val(ihcOut);
	  $('.modal-footer').html('<button class="btn" data-dismiss="modal" aria-hidden="true">Go back</button><a onclick="submitthis()" type="submit" class="btn btn-success" href="data:application/octet-stream;charset=utf-8;base64,'+btoa(ihcOut)+'" download="'+ thisID +'.xml"> Download ' +thisID+'.xml and save to inventory </a>');
	  $('#myModal').modal('show');
	}
	});
});

$(".reset").click(function() {
    $(this).closest('form').find("input[type=text], textarea").val("");
});



// form submission
function submitthis(){

$('#myModal').modal('hide');

$('form.ajax').each(function(){
	var that = $(this),
		url = that.attr('action'),
		type = that.attr('method'),
		data = {};

	that.find('[name]').each(function(index, value) {
		var that = $(this),
			name = that.attr('name'),
			value = that.val();

		data[name] = value;

	});
	data['xml_blob'] = ihcOut;

	$.ajax({
		url: url,
		type: type,
		data: data,
		success: function(response) {
			console.log(response);
		}
	});

	return false;
});

}

