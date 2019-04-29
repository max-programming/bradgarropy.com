import React from "react"
import Helmet from "react-helmet"
import Layout from "../components/Layout"
import FourOhFour from "../components/FourOhFour"

const NotFound = () => {
    return (
        <Layout>
            <Helmet>
                <title>404</title>
            </Helmet>

            <FourOhFour/>
        </Layout>
    )
}

export default NotFound
