import React from "react";

const NoMatch = ({ location }) => (
	<div>
		<h2>Page Not Found</h2>
		No match for <code>{location.pathname}</code>
	</div>
);

export default NoMatch;
