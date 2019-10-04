import { Fragment } from 'react'

import App from 'next/app'

import { Provider } from "react-redux"
import store from "stores"

import InitStyle from "styles/initStyle"

class MyApp extends App {
    render(){
        const { Component, pageProps } = this.props

        return(
            <Fragment>
                <InitStyle />
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            </Fragment>
        )
    }
}

export default MyApp