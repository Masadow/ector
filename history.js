const {db} = require('./db');

module.exports = {
    add: (req, res) => {
        const score = 100;

        const sql = `INSERT INTO history
            VALUES ('${req.body.email}',
                    '${req.body.location}',
                    '${req.body.date}',
                    '${score}');`;

        db.get(sql);

        res.send(req.body)
    }
}