$(document).ready(function() {

	var imageElement = $('#editable-image');
	imageElement.hide();

	var originalImageSrc; // assigned when image file is dropped
	var currentImage; // assigned when the Edit button is clicked
	var dropArea = $("#drop-area");
	var droppedFiles; // assigned in the `.on('drop', ...)` listener

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
	//// Prevent defaults on drag/drop events
	dropArea.on('drag dragstart dragend dragover dragenter dragleave drop', function(e) {
		if (e.preventDefault) e.preventDefault(); 
		if (e.stopPropagation) e.stopPropagation(); 
	})
	.on('drop', function(e) {

		// Get the dropped file
		file = e.originalEvent.dataTransfer.files[0];

		if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
			alert('ahoy!')
			return false;
		}

		console.log(file);

		setImage(file);
		toggleDragDrop();
	});

	function toggleDragDrop() {
		dropArea.toggle();
		imageElement.toggle();
	}

	function setImage(file) {
		console.log(imageElement);
		imageElement.attr('src', window.URL.createObjectURL(file));
	}
});