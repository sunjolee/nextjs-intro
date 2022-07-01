import Layout from "../components/Layout";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {

    return (
        <>
            <Layout>
            {/*아래 Component가 layout.js의 children이 됨*/}

            <Component {...pageProps} />
            </Layout>
        </>
    );
}