import Head from "next/head"
import Footer from "./ui/Footer"
import Navbar from "./ui/Navbar"

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>wwwsmind</title>
                <meta name='description' content='wwwsmind making it simple for you to build and grow your SaaS applications, or any business idea' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' type='image/png' href='/favicon.png' />
                <link rel='apple-touch-icon' href='/favicon.png' />
            </Head>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout