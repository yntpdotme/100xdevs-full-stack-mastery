import mongoose from 'mongoose';

export default (req, res, next) => {
	if (!mongoose.Types.ObjectId.isValid(req.params.id))
		return res.status(404).json('Invalid ID');

	next();
}