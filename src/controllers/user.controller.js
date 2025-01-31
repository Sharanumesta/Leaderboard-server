import User from "../models/user.model.js";

const addUser = async (req, res) => {
  let { name } = req.body;

  if (!name || name.trim().toLowerCase() === "") {
    return res.status(400).json({ message: "Name cannot be empty" });
  }
  name = name.trim().toLowerCase();
  try {
    const existingUser = await User.findOne({ name });

    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User with this name already exists" });
    }

    const newUser = await User.create({ name });
    return res.status(201).json({ success: true, user: newUser });
  } catch (error) {
    console.error("Error adding user:", error);
    return res.status(500).json({ message: "Error while adding user" });
  }
};

const getUsers = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 10;
    const skip = (page - 1) * limit;

    const users = await User.find()
      .select("name points")
      .skip(skip)
      .limit(limit);

    const totalUsers = await User.countDocuments();
    const totalPages = Math.ceil(totalUsers / limit);

    return res.status(200).json({
      success: true,
      users,
      currentPage: page,
      totalPages,
      totalUsers,
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    return res.status(500).json({
      success: false,
      message: "Error fetching users",
    });
  }
};

const awardPoints = async (req, res) => {
  const { name, points } = req.body;

  try {
    const user = await User.findOne({ name });
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    user.points += points;
    user.pointsHistory.push({ points, timestamp: new Date() });

    await user.save();

    res.status(200).send({ message: "Points awarded successfully!" });
  } catch (error) {
    console.error("Error awarding points:", error);
    res
      .status(500)
      .send({ message: "An error occurred while awarding points" });
  }
};

const pointsHistory = async (req, res) => {
  try {
    const { name } = req.params;

    const user = await User.findOne({ name }).select("pointsHistory");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ pointsHistory: user.pointsHistory });
  } catch (error) {
    console.error("Error fetching points history:", error);
    return res.status(500).json({ message: "Error fetching points history" });
  }
};

const getLeaderboard = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = 10;
  const skip = (page - 1) * limit;

  try {
    const users = await User.find()
      .sort({ points: -1 })
      .skip(skip)
      .limit(limit);

    const totalUsers = await User.countDocuments();
    const totalPages = Math.ceil(totalUsers / limit);

    res.json({
      users,
      currentPage: page,
      totalPages,
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).send({ message: "Failed to fetch users." });
  }
};

export {
  addUser,
  getUsers,
  awardPoints,
  pointsHistory,
  getLeaderboard
};
