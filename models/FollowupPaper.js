import mongoose from 'mongoose'

const FollowupPaperSchema = new mongoose.Schema({
    followup_date: {
        type: Date,
    },
    followup_name: {
        type: String,
    },
    followup_middlename: {
        type: String,
    },
    followup_lastname: {
        type: String,
    },
    followup_lakshan: {
        type: String,
    },
    followup_chikitsa: {
        type: String,
    },
    
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please Provide User']
    },
},
    { timestamps: true }
)

export default mongoose.model('FollowupPaper', FollowupPaperSchema)