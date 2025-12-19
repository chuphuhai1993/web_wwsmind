import Head from "next/head"
import Footer from "./ui/Footer"
import Navbar from "./ui/Navbar"

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>wwsmind</title>
                <meta name='description' content='wwsmind making it simple for you to build and grow your SaaS applications, or any business idea' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' type='image/png' href='/web_wwsmind/favicon.png' />
                <link rel='apple-touch-icon' href='/web_wwsmind/favicon.png' />
            </Head>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout