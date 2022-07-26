import Link from 'next/link'

const Header = () => {
    return (
        <div className="mb-8 font-bold">
            <Link href="/">
                <a>Haru no Hi (ハルノヒ)</a>
            </Link>
        </div>
    )
}

export default Header
