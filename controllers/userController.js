const User = require('../models/User');

// Update user's project
exports.updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const { project } = req.body;

    // Find and update the user
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { project },
      { new: true, runValidators: true }
    );

    // Check if user exists
    if (!updatedUser) {
      return res.status(404).json({
        status: 'fail',
        message: 'No user found with that ID'
      });
    }

    res.status(200).json({
      status: 'success',
      data: {
        user: updatedUser
      }
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
}; 