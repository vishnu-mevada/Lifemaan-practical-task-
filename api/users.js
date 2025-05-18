const data = require('../db.json');

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(data.users);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
