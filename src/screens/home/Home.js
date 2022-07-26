import bookmark from '../../../static/bookmark.json'

const Home = () => {
    const renderBookmark = (item, i) => {
        return <div key={i}>{item.title}</div>
    }

    return <div>{bookmark.map(renderBookmark)}</div>
}

export default Home
