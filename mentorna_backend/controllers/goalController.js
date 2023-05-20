const asyncHandler = require("express-async-handler");

const Goal = require("../models/goalModel");
const User = require("../models/userModel");

//@desc     Get goals
//@route    GET /api/goals
//@access   Private
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find({ user: req.user.id});
    res.status(200).json(goals);
});

//@desc     Create goals
//@route    POST /api/goals
//@access   Private
const createGoal = asyncHandler(async (req, res) => {
    if(!req.body.name){
        res.status(400);
        throw new Error("Please add a text field");
    }
    
    const goal = await Goal.create({
        name: req.body.name,
        description: req.body.description,
        user: req.user.id
    });


    res.status(200).json(goal);
});

//@desc     Update goals
//@route    PUT /api/goals/:id
//@access   Private
const updateGoal = asyncHandler(async (req, res) => {

    const goal = await Goal.findById(req.params.id);

    if(!goal){
        res.status(404);
        throw new Error("Goal not found");
    }

    const user = await User.findById(req.user.id);

    if(!user){
        res.status(401);
        throw new Error("User not Found");
    }

    // Check if logged in user matches the user who created the goal
    if(req.user.id !== goal.user.toString()){
        res.status(401);
        throw new Error("User not authorized");
    }


    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
        
    res.status(200).json(updatedGoal);
});

//@desc     Delete goals
//@route    DELETE /api/goals/:id
//@access   Private
const deleteGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);

    if(!goal){
        res.status(404);
        throw new Error("Goal not found");
    } 

    const user = await User.findById(req.user.id);

    if(!user){
        res.status(401);
        throw new Error("User not Found");
    }

    // Check if logged in user matches the user who created the goal
    if(req.user.id !== goal.user.toString()){
        console.log(goal.user.toString());
        console.log(req.user.id);
        res.status(401);
        throw new Error("User not authorized");
    }

    await goal.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: "Goal removed" });
});

module.exports = {
    getGoals,
    createGoal,
    updateGoal,
    deleteGoal
};
