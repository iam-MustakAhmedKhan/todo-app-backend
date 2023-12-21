const Task = require("../model/task.model");
const customError = require("../utils/error");
const createTask = async (req, res, next) => {
    const user_id = req.user;

    const { title, description, date, priority } = req.body;

    try {
        if (!title) {
            return next(customError(403, "Please enter a title"));
        }
        if (!description) {
            return next(customError(403, "Please enter a description"));
        }

        const newDate = new Date(date).toISOString().split("T")[0];

        const task = new Task({
            title,
            des: description,
            date: newDate,
            priority: priority ? priority : "Low",
            user: user_id,
        });

        await task.save();

        return res.status(200).json(task);
    } catch (error) {
        next(customError(500, error.message));
    }
};

const getTask = async (req, res, next) => {
    const user_id = req.user;
    const { completed } = req.body

      let query={};

      if (completed=='true') {
          query = {
              user: user_id,
              completed: true,
          };
      } else if(completed=='false') {
          query = {
              user: user_id,
              completed: false,
          };
      } else {
          query = {
              user: user_id,
          };
      }

    try {
        const tasks = await Task.find(query).sort({
            createdAt: -1,
        });

        return res.status(200).json(tasks);
    } catch (error) {
        next(customError(500, error.message));
    }
};

const deleteTask = async (req, res, next) => {
    const { task_id } = req.body;

    try {
        await Task.findOneAndDelete({
            _id: task_id,
        });
        return res.status(200).json({
            message: "Task deleted successfully",
        });
    } catch (error) {
        next(customError(500, error.message));
    }
};

const updateTask = async (req, res, next) => {
    const { task_id,title,description,date,priority,completed } = req.body;

    try {
       const task = await Task.findByIdAndUpdate(
           {
               _id: task_id,
           },
           {
               $set: {
                   title,
                   des: description,
                   date,
                   priority,
                   completed,
               },
           },
           {
               new: true,
           }
       );
        return res.status(200).json(task);
    } catch (error) {
        next(customError(500, error.message));
    }
};

const getSingleTask = async (req, res, next) => {
    const { task_id } = req.body
    
    try {

        const task = await Task.findOne({ _id: task_id })
        
        return res.status(200).json(task)

    } catch (error) {
        next(customError(500, error.message));
    }
}


const filterTask = async (req, res, next) => {

    const { filter } = req.body
    
    try {
        


    } catch (error) {
        next(customError(500, error.message));
    }

}

module.exports = {
    createTask,
    getTask,
    deleteTask,
    updateTask,
    getSingleTask,
    filterTask
};
