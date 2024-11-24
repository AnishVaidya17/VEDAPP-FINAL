import mongoose from 'mongoose'

const CasepaperSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    middlename: {
        type: String,
    },
    lastname: {
        type: String,
    },
    gender: {
        type: String,
    },
    address: {
        type: String,
        default: 'mycity'
    },
    mobilenumber: {
        type: String,
    },
    occupation: {
        type: String,
    },
    birthdate: {
        type: Date,
    },
    weight: {
        type: String,
    },
    height: { type: String },
    age: { type: String },
    date: {
        type: Date,
        // default: new Date().toJSON().slice(0,10)
    },
    time: { type: String },
    casepaperNumber: { type: String },

    pulse: { type: String },
    bloodPressure: { type: String },
    bloodOxyLvl: { type: String },
    respiration: { type: String },

    presentIllness: { type: String },
    chestExam: { type: String },
    abdominalExam: { type: String },

    investigations: { type: String },

    dontDiet: { type: String },
    dontRoutine: { type: String },
    doDiet: { type: String },
    doRoutine: { type: String },

    hetu: { type: String },
    dooshya: { type: String },
    dosh: { type: String },
    nidanOne: { type: String },
    nidanTwo: { type: String },
    avastha: { type: String },
    chikitsaTatva: { type: String },
    chikitsa: { type: String },
    sanprapti: { type: String },


    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please Provide User']
    },
},
    { timestamps: true }
)

export default mongoose.model('Casepaper', CasepaperSchema)