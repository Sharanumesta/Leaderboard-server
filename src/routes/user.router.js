import { Router } from "express";
import { addUser, getUsers, awardPoints, pointsHistory, getLeaderboard } from "../controllers/user.controller.js";

const router = Router();

router.route("/users").get(getUsers);
router.route("/add-user").post(addUser);
router.route("/claim-point").post(awardPoints);
router.route("/leaderboard").get(getLeaderboard);
router.route("/points-history/:name").get(pointsHistory);

export default router;