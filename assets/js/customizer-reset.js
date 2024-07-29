document.addEventListener('DOMContentLoaded', function () {
	let container = document.getElementById('customize-header-actions');

	// create button type element
	let button = document.createElement('button');
	button.type = 'button';
	button.id = 'zoom-reset';
	button.className = 'button-secondary button';
	button.textContent = _ZoomCustomizerReset.reset;
	button.style.cssText = 'float: right; margin-right: 10px; margin-top: 9px;';


	button.addEventListener('click', function (event) {
		console.log('Reset button clicked');

		let data = {
			wp_customize: 'on',
			action: 'customizer_reset',
			nonce: _ZoomCustomizerReset.nonce.reset
		};

		let response = confirm(_ZoomCustomizerReset.confirm);

		if (!response) return;

		button.disabled = true;

		// Use fetch for AJAX request
		fetch(ajaxurl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: new URLSearchParams(data).toString()
		})
			.then(response => response.json())
			.then(data => {
				if (data.success) {
					wp.customize.state('saved').set(true);
					location.reload(); // necessary for a page refresh
				}
			})
			.catch(error => console.error('Customizer Reset Error:', error));
	});

	// Append the button to the container
	container.append(button);
});
