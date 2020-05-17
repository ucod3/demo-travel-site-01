exports.handler = function (event, context, callback) {
	const secretContent = `
    <h3>Welcome to The Secret Area</h3>
    <p>Sky is blue like <strong>blue</strong> bubble gum and two plus three is five.</p>
    `;

	let body;

	if (event.body) {
		body = JSON.parse(event.body);
	} else {
		body = {};
	}

	if (body.password == 'javascript') {
		callback(null, {
			statusCode: 200,
			body: secretContent,
		});
	} else {
		callback(null, {
			statusCode: 401,
		});
	}
};
