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
	    if (value && that.attr('type') != 'radio' && that.attr('id') != 'collection'){
	      ihcOut +=
	      '\n<'+name+'>'+value+'</'+name+'>';
	    };

	    if (that.attr('id') == 'station_id-0') {
	    	if (that[0].checked){
	    		ihcOut +=
	      		stn1xml;
	    	}
	    };
	    if (that.attr('id') == 'station_id-1') {
	    	if (that[0].checked){
				ihcOut +=
				stn2xml;
	    	}
	    };

	    if ((name == 'collection' && value == 'MWF Video Club') || (name == 'collection' && value == 'New Museum')){
	    		ihcOut +=
				'\n<collection>xfrstn</collection>'
				+'\n<'+name+'>'+value+'</'+name+'>';
	    	}
	    	else if (name == 'collection' && value == 'XFR STN'){
	    		ihcOut +=
				'\n<collection>xfrstn</collection>';
	    	}
	    


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



var stn1xml = (function () {/*
<DeviceChainProcHist>
	<DeviceList>
		<kind>A/D Converter</kind>
		<model>AJA IO</model>
		<serialNumber>G30268</serialNumber>
		<videoInput>Composite BNC and S-Video</videoInput>
		<videoOutput>Firewire</videoOutput>
		<audioInput>XLR</audioInput>
		<audioOutput>Firewire and SDI</audioOutput>
		<referenceInput>Composite BNC</referenceInput>
		<referenceOutput>N/A</referenceOutput>
	</DeviceList>
	<DeviceList>
		<kind>Sony U-matic deck</kind>
		<model>BVU-950</model>
		<serialNumber>18982</serialNumber>
		<videoInput>Composite BNC</videoInput>
		<videoOutput>Composite BNC</videoOutput>
		<audioInput>XLR</audioInput>
		<audioOutput>XLR</audioOutput>
		<referenceInput>BNC Composite</referenceInput>
		<referenceOutput>BNC Composite</referenceOutput>	
	</DeviceList>
	<DeviceList>
		<kind>SVHS Videocassette Recorder</kind>
		<model>SONY SVO-5800</model>
		<serialNumber>12997</serialNumber>
		<videoInput>Composite BNC</videoInput>
		<videoOutput>Composite BNC</videoOutput>
		<audioInput>XLR</audioInput>
		<audioOutput>XLR</audioOutput>
		<referenceInput>Composite BNC</referenceInput>
		<referenceOutput>Composite BNC</referenceOutput>
	</DeviceList>
	<DeviceList>
		<kind>CRT monitor</kind>
		<model>JVC TM-H150CG</model>
		<serialNumber>17901584</serialNumber>
		<videoInput>Component and composite BNC</videoInput>
		<videoOutput>Component and composite BNC</videoOutput>
		<audioInput>N/A</audioInput>
		<audioOutput>N/A</audioOutput>
		<referenceInput>N/A</referenceInput>
		<referenceOutput>N/A</referenceOutput>
	</DeviceList>
	<DeviceList>
		<kind>Digital Scope</kind>
		<model>Tektronix Serial Component Monitor WFM 601E</model>
		<serialNumber>B012541</serialNumber>
		<videoInput>SDI</videoInput>
		<videoOutput>SDI</videoOutput>
		<audioInput>N/A</audioInput>
		<audioOutput>N/A</audioOutput>
		<referenceInput>Composite BNC</referenceInput>
		<referenceOutput>Composite BNC</referenceOutput>
	</DeviceList>
	<DeviceList>
		<kind>Time Based Corrector</kind>
		<model>DPS-295</model>
		<serialNumber>7G295005</serialNumber>
		<videoInput>Composite BNC and S-Video</videoInput>
		<videoOutput>Composite BNC and S-Video</videoOutput>
		<audioInput>N/A</audioInput>
		<audioOutput>N/A</audioOutput>
		<referenceInput>Composite BNC</referenceInput>
		<referenceOutput>Composite BNC</referenceOutput>
	</DeviceList>
	<DeviceList>
		<kind>DVCAM Digital Videocassette Recorder</kind>
		<model>SONY DSR-45</model>
		<serialNumber>117422</serialNumber>
		<videoInput>Firewire</videoInput>
		<videoOutput>Firewire</videoOutput>
		<audioInput>Firewire</audioInput>
		<audioOutput>Firewire</audioOutput>
		<referenceInput>Firewire</referenceInput>
		<referenceOutput>Firewire</referenceOutput>
	</DeviceList>
	<DeviceList>
		<kind>Digital8 Camcorder</kind>
		<model>SONY DCR-TRV530 NTSC</model>
		<serialNumber>1149371</serialNumber>
		<videoInput>Firewire</videoInput>
		<videoOutput>Firewire</videoOutput>
		<audioInput>Firewire</audioInput>
		<audioOutput>Firewire</audioOutput>
		<referenceInput>Firewire</referenceInput>
		<referenceOutput>Firewire</referenceOutput>
	</DeviceList>
	<DeviceList>
		<kind>DVCAM Digital Videocassette Recorder</kind>
		<model>SONY DSR-11</model>
		<serialNumber>76910</serialNumber>
		<videoInput>Firewire</videoInput>
		<videoOutput>Firewire</videoOutput>
		<audioInput>Firewire</audioInput>
		<audioOutput>Firewire</audioOutput>
		<referenceInput>Firewire</referenceInput>
		<referenceOutput>Firewire</referenceOutput>
	</DeviceList>
	<DeviceList>
		<kind>Horita Sync Generator</kind>
		<model>BSG-50</model>
		<serialNumber>None</serialNumber>
		<videoInput>Composite BNC</videoInput>
		<videoOutput>Composite BNC</videoOutput>
		<audioInput>N/A</audioInput>
		<audioOutput>N/A</audioOutput>
		<referenceInput>N/A</referenceInput>
		<referenceOutput>N/A</referenceOutput>
	</DeviceList>
	<DeviceList>
		<software>Final Cut Pro</software>
		<version>6.0.6</version>
		<role>Capture</role>
		<settings>
			<Name>Uncompressed 10-bit NTSC 48kHZ</Name>
			<FrameSize>720 x 486</FrameSize>
			<EditingTimebase>29.97 fps</EditingTimebase>
			<FieldDominance>Lower (Even)</FieldDominance>
			<PixelAspectRatio>NTSC - CCIR 601 / DV</PixelAspectRatio>
			<Anamorphic16:9>Off</Anamorphic>
			<VideoProcessing>YUV allowed (10-bit)</VideoProcessing>
			<WhitePoint>White</WhitePoint>
			<Compressor>Uncompressed 10-bit 4:2:2</Compressor>
			<Compressor>Millions of Colors (24 bit)</Compressor>
			<Compressor>No Data Rate Limit</Compressor>
			<Compressor>No Keyframes Set</Compressor>
			<Quality>100</Quality>
			<AudioSettings>24-bit 48.000 kHz Stereo</AudioSettings>
		</settings>	
	</DeviceList>
<DeviceChainProcHist>
*/}).toString().match(/[^]*\/\*([^]*)\*\/\}$/)[1];


var stn2xml = (function () {/*
<DeviceChainProcHist>
	<DeviceList>
		<kind>A/D Converter</kind>
		<model>AJA KONA LH</model>
		<serialNumber>00N23680</serialNumber>
		<videoInput>Composite and component BNC (via AJA breakout cable)</videoInput>
		<videoOutput>Composite and component BNC (via AJA breakout cable)</videoOutput>
		<audioInput>XLR (via AJA breakout cable)</audioInput>
		<audioOutput>XLR (via AJA breakout cable)</audioOutput>
		<referenceInput>Composite BNC</referenceInput>
		<referenceOutput>Composite BNC</referenceOutput>
	</DeviceList>
	<DeviceList>
		<kind>BetacamSP Videocassette Recorder</kind>
		<model>SONY BVW-75</model>
		<serialNumber>13790</serialNumber>
		<videoInput>Component BNC</videoInput>
		<videoOutput>Component BNC</videoOutput>
		<audioInput>XLR</audioInput>
		<audioOutput>XLR</audioOutput>
		<referenceInput>Composite BNC</referenceInput>
		<referenceOutput>Composite BNC</referenceOutput>
	</DeviceList>
	<DeviceList>
		<kind>SVHS Videocassette Recorder</kind>
		<model>SONY SVO-5800</model>
		<serialNumber>12659</serialNumber>
		<videoInput>Composite BNC</videoInput>
		<videoOutput>Composite BNC/videoOutput>
		<audioInput>XLR</audioInput>
		<audioOutput>XLR</audioOutput>
		<referenceInput>Composite BNC</referenceInput>
		<referenceOutput>Composite BNC</referenceOutput>
	</DeviceList>
	<DeviceList>
		<kind>CRT Monitor</kind>
		<model>JVC TM-H150CG</model>
		<serialNumber>17901585</serialNumber>
		<videoInput>Component and composite BNC</videoInput>
		<videoOutput>Component and composite BNC</videoOutput>
		<audioInput>N/A</audioInput>
		<audioOutput>N/A</audioOutput>
		<referenceInput>N/A</referenceInput>
		<referenceOutput>N/A</referenceOutput>
	</DeviceList>
	<DeviceList>
		<kind>Vectorscope / Waveform Monitor</kind>
		<model>Tektronix 1720 Vectorscope</model>
		<serialNumber>B041693</serialNumber>
		<videoInput>Composite BNC</videoInput>
		<videoOutput>Composite BNC</videoOutput>
		<audioInput>N/A</audioInput>
		<audioOutput>N/A</audioOutput>
		<referenceInput>Composite BNC</referenceInput>
		<referenceOutput>Composite BNC</referenceOutput>
	</DeviceList>
	<DeviceList>
		<kind>Vectorscope / Waveform Monitor</kind>
		<model>Tektronix 1730 Waveform Monitor</model>
		<serialNumber>B079815</serialNumber>
		<videoInput>Composite BNC</videoInput>
		<videoOutput>Composite BNC</videoOutput>
		<audioInput>N/A</audioInput>
		<audioOutput>N/A</audioOutput>
		<referenceInput>Composite BNC</referenceInput>
		<referenceOutput>Composite BNC</referenceOutput>
	</DeviceList>
	<DeviceList>
		<kind>DVCAM Digital Videocassette Recorder</kind>
		<model>SONY DSR-45</model>
		<serialNumber>117391</serialNumber>
		<videoInput>Firewire</videoInput>
		<videoOutput>Firewire</videoOutput>
		<audioInput>Firewire</audioInput>
		<audioOutput>Firewire</audioOutput>
		<referenceInput>Firewire</referenceInput>
		<referenceOutput>Firewire</referenceOutput>
	</DeviceList>
	<DeviceList>
		<kind>DVCAM Digital Videocassette Recorder</kind>
		<model>SONY DSR-11</model>
		<serialNumber>75601</serialNumber>
		<videoInput>Firewire</videoInput>
		<videoOutput>Firewire</videoOutput>
		<audioInput>Firewire</audioInput>
		<audioOutput>Firewire</audioOutput>
		<referenceInput>Firewire</referenceInput>
		<referenceOutput>Firewire</referenceOutput>
	</DeviceList>
	<DeviceList>
		<kind>Digital8 Camcorder</kind>
		<model>SONY DCR-TRV530 NTSC</model>
		<serialNumber>1149371</serialNumber>
		<videoInput>Firewire</videoInput>
		<videoOutput>Firewire</videoOutput>
		<audioInput>Firewire</audioInput>
		<audioOutput>Firewire</audioOutput>
		<referenceInput>Firewire</referenceInput>
		<referenceOutput>Firewire</referenceOutput>
	</DeviceList>
	<DeviceList>
		<kind>Sync Generator</kind>
		<model>Horita BSG-50</model>
		<serialNumber>None</serialNumber>
		<videoInput>N/A</videoInput>
		<videoOutput>Composite BNC</videoOutput>
		<audioInput>N/A</audioInput>
		<audioOutput>N/A</audioOutput>
		<referenceInput>N/A</referenceInput>
		<referenceOutput>Composite BNC</referenceOutput>
	</DeviceList>
	<DeviceList>
		<software>Final Cut Pro</software>
		<version>6.0.6</version>
		<role>Capture</role>
		<settings>
			<Name>Uncompressed 10-bit NTSC 48kHZ</Name>
			<FrameSize>720 x 486</FrameSize>
			<EditingTimebase>29.97 fps</EditingTimebase>
			<FieldDominance>Lower (Even)</FieldDominance>
			<PixelAspectRatio>NTSC - CCIR 601 / DV</PixelAspectRatio>
			<Anamorphic16:9>Off</Anamorphic>
			<VideoProcessing>YUV allowed (10-bit)</VideoProcessing>
			<WhitePoint>White</WhitePoint>
			<Compressor>Uncompressed 10-bit 4:2:2</Compressor>
			<Compressor>Millions of Colors (24 bit)</Compressor>
			<Compressor>No Data Rate Limit</Compressor>
			<Compressor>No Keyframes Set</Compressor>
			<Quality>100</Quality>
			<AudioSettings>24-bit 48.000 kHz Stereo</AudioSettings>
		</settings>	
	</DeviceList>
<DeviceChainProcHist>
*/}).toString().match(/[^]*\/\*([^]*)\*\/\}$/)[1];