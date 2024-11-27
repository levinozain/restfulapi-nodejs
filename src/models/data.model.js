const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const ApodSchema = new Schema(
    {
        date: {
            type: String,
            required: [true,'please enter name'],
        },

        explanation: {
            type: String,
            required: true,
            default: "-"
        },

        hdurl: {
            type: String,
            required: true,
            default: "-"
        },

        media_type: {
            type: String,
            required: true,
            default: "-"
        },

        service_version: {
            type: String,
            required: true,
            default: "-"
        },

        title: {
            type: String,
            required: true,
            default: "-"
        },

        url: {
            type: String,
            required: true,
            default: "-"
        }
    }
)

const Apod = mongoose.model("Apod", ApodSchema)

module.exports = Apod;