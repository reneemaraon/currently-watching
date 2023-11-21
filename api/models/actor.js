const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const actorSchema = new Schema ({
    name: {type: String, required: true},
    imdbId: String,
    tmdbId: {type: String, required: true, unique: true},
    profileImage: String,
    gender: {type: String, values: ['female', 'male', 'other']},
    homepage: String,
    birthday: Date,
    biography: String,
    alsoKnownAs: [String],
    starredIn: [{show: {type: mongoose.SchemaTypes.ObjectId, ref:'Show'}, title: String, character: String, order: Number}],
})

const Actor = mongoose.model('actor', actorSchema);


module.exports = Actor;