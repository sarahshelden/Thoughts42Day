// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Character" model that matches up with DB
var Thought = sequelize.define("thoughts", {
    // the routeName gets saved as a string
    routeName: Sequelize.STRING,
    // the name of the character (a string)
    thoughts_name: Sequelize.STRING,
    // the character's role (a string)
    thought_name: Sequelize.STRING,
    // the character's age (a string)
    thought_archive: Sequelize.STRING,
    // and the character's force points (an int)
}, {
    timestamps: false
});

// Syncs with DB
Thought.sync();

// Makes the Character Model available for other files (will also create a table)
module.exports = Thought;
