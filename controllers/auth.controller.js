const { StatusCodes } = require('http-status-codes');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
function sign(userId) { return jwt.sign({ sub: userId }, process.env.JWT_SECRET, { expiresIn: '7d' }); }
exports.register = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    if (!fullName || !email || !password) return res.status(StatusCodes.BAD_REQUEST).json({ error: 'Missing fields' });
    const exists = await User.findOne({ email });
    if (exists) return res.status(StatusCodes.CONFLICT).json({ error: 'Email already in use' });
    const passwordHash = await bcrypt.hash(password, 10);
    const user = await User.create({ fullName, email, passwordHash });
    const token = sign(user.id);
    res.status(StatusCodes.CREATED).json({ token, user: { id: user.id, fullName: user.fullName, email: user.email } });
  } catch (err) { console.error(err); res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Server error' }); }
};
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(StatusCodes.BAD_REQUEST).json({ error: 'Missing fields' });
    const user = await User.findOne({ email });
    if (!user) return res.status(StatusCodes.UNAUTHORIZED).json({ error: 'Invalid credentials' });
    const ok = await bcrypt.compare(password, user.passwordHash);
    if (!ok) return res.status(StatusCodes.UNAUTHORIZED).json({ error: 'Invalid credentials' });
    const token = sign(user.id);
    res.json({ token, user: { id: user.id, fullName: user.fullName, email: user.email } });
  } catch (err) { console.error(err); res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Server error' }); }
};
exports.me = async (req, res) => {
  try {
    const user = await User.findById(req.userId)
      .select('fullName email photoUrl telephone company')
      .populate({
        path: 'company',
        select: 'title',
      });
    if (!user) {
      return res.status(StatusCodes.NOT_FOUND).json({ error: 'User not found' });
    }
    res.json({
      user: {
        id: user.id,
        fullName: user.fullName,
        email: user.email,
        photoUrl: user.photoUrl,
        telephone: user.telephone,
        company: user.company ? { id: user.company.id, title: user.company.title } : undefined,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Failed to fetch user' });
  }
};
