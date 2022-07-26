import bookmark from '../../../../static/bookmark.json'

const getListPost = async (req, res) => {
    const page =
        isNaN(req.query.page) || +req.query.page < 0 ? 0 : +req.query.page
    const limit = 20
    const posts = [...bookmark].splice(page * limit, page * limit + limit)

    return res.json({ page: page, posts: posts })
}

export default getListPost
