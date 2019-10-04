import { createGlobalStyle } from "styled-components"

const InitStyle = createGlobalStyle`
	* {
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
	}

	body {
		display: flex
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100vh;
		margin: 0;		
	}

	#layout {
		display: flex
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
	}

	#title {
		color: #222;
		text-align: center;
		font-weight: normal;
		margin: 0 0 30px 0;
	}

	#status {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		width: 100%;
		margin: 0 0 30px 0;
	}

	#status > .detail {
		color: #222;
		font-size: 24px;
		text-align: center;
		font-weight: normal;
		padding: 0 25px;
	}

	#controller {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		margin: 0 0 30px 0;
	}

	#controller > .update {
		appearance: none;
		-webkit-appearance: none;
		-moz-appearance: none;
		font-size: 21px;
		width: 220px;
		color: #fff;
		border: 0;
		background-color: #007aff;
		margin: 10px 0;
		padding: 8px 0;
		border-radius: 4px;
		box-shadow: 0 2px 4px rgba(0,123,255,.175),
					0 4px 8px rgba(0,123,255,.175),
					0 8px 16px rgba(0,123,255,.175);
		transition: box-shadow .2s ease-out;
		outline: none;
		cursor: pointer;
	}

	#controller > .update:hover,
	#controller > .update:focus {
		box-shadow: 0 4px 8px rgba(0,123,255,.4),
					0 8px 16px rgba(0,123,255,.4);
	}

	#github {
		display: inline-block;
		color: #757575;
		text-align: center;
		margin: 0;
		padding: 8px 25px;
	}

	::selection, ::-webkit-selection {
		background-color: rgba(0,123,255,.25);
	}
`

export default InitStyle