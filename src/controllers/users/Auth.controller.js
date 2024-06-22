const authService = require('../../services/users/Auth.service');
const userSchema = require('../models/user');

exports.login = async (req, res) => {
  try {
    const { error, value } = userSchema.validate(req.body);
    if (error) {
      return res
        .status(400)
        .send(`Validation error: ${error.details[0].message}`);
    }

    const { token } = await authService.loginUser(value);
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).send(`Error logging in: ${error.message}`);
  }
};
