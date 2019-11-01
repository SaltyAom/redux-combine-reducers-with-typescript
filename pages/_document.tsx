import Document, { Head, Main, NextScript } from "next/document"

import { ServerStyleSheet, createGlobalStyle } from "styled-components"

import InitStyle from 'styles/initStyle'

interface IProps {
	styleTags: string
}

class NextDocument extends Document<IProps> {
	static getInitialProps({ renderPage }) {
		const sheet = new ServerStyleSheet()
		const page = renderPage(App => props =>
			sheet.collectStyles(<App {...props} />)
		)
		const styleTags = sheet.getStyleElement()

		return { ...page, styleTags }
	}

	render() {
		return (
			<html>
				<Head>{this.props.styleTags}</Head>
				<body>
					<Main />
					<InitStyle />
					<NextScript />
				</body>
			</html>
		)
	}
}

export default NextDocument
