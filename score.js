module.exports = {
    score: (req, res) => {
        res.send({
            user: 'test@test.com',
            score: {
                quality: 125,
                quantity: 420
            }
        })
    }
}