const admin = require('firebase-admin');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { db, secret } = require('../../config/firebase');

exports.loginUser = async ({ email, password }) => {
  const userSnapshot = await db
    .collection('users')
    .where('email', '==', email)
    .get();
  if (userSnapshot.empty) {
    throw new Error('Invalid email or password');
  }

  const user = userSnapshot.docs[0].data();
  const passwordIsValid = bcrypt.compareSync(password, user.password);

  if (!passwordIsValid) {
    throw new Error('Invalid email or password');
  }

  const token = jwt.sign({ id: userSnapshot.docs[0].id }, secret, {
    expiresIn: 86400, // 24 hours
  });

  return { token };
};
