const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.register = async (req, res) => {
  try {
    // console.log('Register req.body:', req.body);
    const { name, email, password } = req.body;
    const trimmedEmail = email.trim();
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email: trimmedEmail, password: hashedPassword });

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });

    res.cookie('token', token, {
      httpOnly: true,
      sameSite: 'None',
      secure: true,
    });

    res.status(201).json({ user : { email: user.email, _id: user._id } }); 
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const email = req.body.email.trim();
    const password = req.body.password; 
    console.log('Login req.body:', req.body);
    const user = await User.findOne({ email });
    console.log('Trying to log in with:', email);
    console.log('Found user:', user);
    console.log('Stored hash:', user?.password);

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });
    res.cookie('token', token, {httpOnly: true,
  secure: true,
  sameSite: 'None',
  maxAge: 7 * 24 * 60 * 60 * 1000 });
    res.json({ user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.logout = (req, res) => {
  res.clearCookie('token').json({ message: 'Logged out' });
};

