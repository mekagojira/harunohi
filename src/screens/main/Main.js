import Header from './Header'

const Main = ({ Component, pageProps }) => (
    <div className="min-h-screen text-snow-storm-100 bg-polar-900">
        <div className="container mx-auto px-4 py-6">
            <Header />
            <Component {...pageProps} />
        </div>
    </div>
)

export default Main
