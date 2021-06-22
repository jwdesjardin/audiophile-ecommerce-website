export default function NumAPI(req, res) {
	const num = req.query.num
	res.status(200).json({ num })
}
