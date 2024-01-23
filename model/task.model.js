const { Schema, model } = require('mongoose')

const taskSchema = new Schema({
    title: {
        type: String,
    },
    des: {
        type: String,
    },
    date: {
        type: Date,
    },
    completed: {
        type: Boolean,
        default: false,
    },
    
    priority: {
        type: String,
        enum: ["High", "Medium", "Low"],
        default:'Low'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});

const Task = model('Task', taskSchema);
module.exports = Task;