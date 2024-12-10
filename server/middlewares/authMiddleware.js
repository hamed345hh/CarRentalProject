import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'

const protect = async (req, res, next) => {
  try {
    // Extract token from Authorization header
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer')) {
      return res.status(401).json({ message: 'No token provided' });
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'Authentication failed!' });
    }

    // Decode the token
    const verified = jwt.verify(token, process.env.JWT_SECRET);

    console.log('Token payload:', verified); // Debug token payload

    // Fetch the user from the database
    const user = await User.findById(verified.id).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    console.log('Authenticated user:', user); // Debug the fetched user

    req.user = user;
    next();
  } catch (err) {
    console.error('Error in protect middleware:', err); // Log error details
    res.status(400).json({ message: 'Invalid token!' });
  }
}


const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next()
  } else {
    res.status(401)
    throw new Error('Not Authorized as an Admin')
  }
}

export { protect, admin }
