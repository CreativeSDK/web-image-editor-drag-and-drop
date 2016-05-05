$(document).ready(function() {

	var originalImageSrc; // assigned when image file is dropped
	var currentImage; // assigned when the Edit button is clicked
	var dropArea = $("#drop-area");

	// Image Editor configuration
	var csdkImageEditor = new Aviary.Feather({
		apiKey: '<YOUR_KEY_HERE>',
		onSave: function(imageID, newURL) {
			currentImage.src = newURL;
			csdkImageEditor.close();
			console.log(newURL);
		},
		onError: function(errorObj) {
			console.log(errorObj.code);
			console.log(errorObj.message);
			console.log(errorObj.args);
		}
	});

	// Launch Image Editor
	$('#edit-image-button').click(function() {

		if (!originalImageSrc) {
			alert('Drop an image in the drop area first.')
			return false;
		}

		// Get the image to be edited
		// `[0]` gets the image itself, not the jQuery object
		currentImage = $('#editable-image')[0];

		csdkImageEditor.launch({
			image: currentImage.id,
			url: currentImage.src
		});
	});

	// Reset
	$('#reset-image-button').click(function() {

		if ($('#editable-image').attr('src') === originalImageSrc) {
			alert('Nothing to reset.');
		}
		else {
			$('#editable-image').attr('src', originalImageSrc);
		}
	});


	// Drop
	dropArea.on('dragover', function(e) {
		if (e.preventDefault) e.preventDefault(); 
		if (e.stopPropagation) e.stopPropagation(); 

		/* 
			jQuery passes the jQuery event object.
			We get the original event object like this:
		*/
		e.dataTransfer = e.originalEvent.dataTransfer;
		
		e.dataTransfer.dropEffect = 'copy';
	});

	dropArea.on('drop', function(e) {
		if (e.preventDefault) e.preventDefault(); 
		if (e.stopPropagation) e.stopPropagation();

		console.log("dropped");

		return false;
	});
});