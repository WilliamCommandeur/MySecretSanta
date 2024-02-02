const Member = require('./Member');
const Draw = require('./Draw');
const Participant = require('./Participant');
const Wishlist = require('./Wishlist');
// const DrawHasParticipant = require('./Draw_has_participant');

// Associations

// Member et Draw : one-to-many

Member.hasMany(Draw, {
    foreignKey: 'member_id',
    as: 'draws'
});
Draw.belongsTo(Member, {
    foreignKey: 'member_id',
    as: 'maker',
});

// Participant et Wishlist : one-to-one

Participant.hasOne(Wishlist, {
    foreignKey: 'participant_id',
    as: 'wishlist',
});
Wishlist.belongsTo(Participant, {
    foreignKey: 'participant_id',
    as: 'owner',
});

// Draw et Participant : one-to-many

Draw.hasMany(Participant, {
    foreignKey: 'draw_id',
    as: 'participants'
})
Participant.belongsTo(Draw, {
    foreignKey: 'draw_id',
    as: 'draw',
})

module.exports = { Member, Draw, Participant, Wishlist };

