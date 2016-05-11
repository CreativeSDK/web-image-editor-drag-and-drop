$(document).ready(function() {

	// The visibility of these 2 elements is toggled by `toggleDragDrop()`
	var imageElement = $('#editable-image').hide();
	var dropArea = $("#drop-area");

	var originalImageSrc; // assigned when image file is dropped
	var currentImage; // assigned when the Edit button is clicked


	// Image Editor configuration
	var csdkImageEditor = new Aviary.Feather({
		apiKey: configObj.apiKey,
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

	// Edit
	$('#edit-image-button').click(function() {
		launchImageEditor();
	});

	// Reset
	$('#reset-image-button').click(function() {

		if ($('#editable-image').attr('src') === originalImageSrc || !originalImageSrc) {
			alert('Nothing to reset.');
		}
		else {
			$('#editable-image').attr('src', originalImageSrc);
		}
	});

	// Clear
	$('#clear-image-button').click(function() {
		if (imageElement.attr('src')) {
			clearImage();
			toggleDragDrop();
		}
		else {
			alert("Nothing to clear.");
		}
	});

	// Download
	$('#download-image-button').click(function(e) {
		e.preventDefault();

		if (imageElement.attr('src')) {
			downloadImage();
		}
		else {
			alert("Nothing to download.");
		}
	});


	// Drop
	//// Prevent defaults on drag/drop events
	dropArea.on('drag dragstart dragend dragover dragenter dragleave drop', function(e) {
		if (e.preventDefault) e.preventDefault(); 
		if (e.stopPropagation) e.stopPropagation(); 
	})
	.on('click', function(e) {

		// Click anywhere in Droparea to upload file
	  $('#click-upload').click();

	})
	.on('drop', function(e) {

		// Get the dropped file
		var file = e.originalEvent.dataTransfer.files[0];

		validateFileType(file);

	});

	// Click
	//// Takes file from file chooser
	$('#click-upload').on('change', function(e){

		var file = e.originalEvent.target.files[0];

		validateFileType(file);

	});

	// Checks if the file type is in the array of supported types
	function fileIsSupported(file) {
		var supportedFileTypes = ['image/jpeg', 'image/png'];
		return supportedFileTypes.indexOf(file.type) >= 0 ? true : false;
	}

	// Toggle visibility of the drag/drop div and img element
	function toggleDragDrop() {
		dropArea.toggle();
		imageElement.toggle();
	}

	function setImage(file) {
		imageElement.attr('src', window.URL.createObjectURL(file));
		originalImageSrc = imageElement.attr('src');
	}

	function clearImage() {
		imageElement.attr('src', '');
	}

	function validateFileType(file) {
		if (fileIsSupported(file)) {
			setImage(file);
			toggleDragDrop();
			launchImageEditor();
			return true;
		}
		else {
			alert('Try a JPEG or PNG image');
			return false;
		}
	}

	function launchImageEditor() {

		if (!originalImageSrc) {
			alert('Drop an image in the drop area first.');
			return false;
		}

		// Get the image to be edited
		// `[0]` gets the image itself, not the jQuery object
		currentImage = $('#editable-image')[0];

		csdkImageEditor.launch({
			image: currentImage.id,
			//url: currentImage.src
		});
	}

	function downloadImage() {
		var url = currentImage ? currentImage.src : originalImageSrc;
		var link = document.createElement("a");
		
		link.href = url;

		// Download attr 
		//// Only honored for links within same origin, 
		//// therefore won't work once img has been edited (i.e., S3 URLs)
		link.download = 'my-pic';
		link.click();
	}
});