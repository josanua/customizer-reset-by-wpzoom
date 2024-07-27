/* global jQuery, _ZoomCustomizerReset, ajaxurl, wp */

jQuery(function ($) {
	let $container = $('#customize-header-actions');

	// create input button object
	let $button = $('<input>', {
		type: 'submit',
		name: 'zoom-reset', //TODO: zoom-reset to zoom-customizer-reset?
		id: 'zoom-reset',
		class: 'button-secondary button',
		value: _ZoomCustomizerReset.reset,
		css: {
			'float': 'right',
			'margin-right': '10px',
			'margin-top': '9px'
		},
	})

	$button.on('click', function (event) {
		event.preventDefault();

		let data = {
			wp_customize: 'on',
			action: 'customizer_reset',
			nonce: _ZoomCustomizerReset.nonce.reset
		};

		const response = confirm(_ZoomCustomizerReset.confirm);

		if (!response) return;

		$button.attr('disabled', 'disabled');

		$.post(ajaxurl, data, function () {
			wp.customize.state('saved').set(true);
			location.reload();
		});
	});
	$container.append($button);
});
