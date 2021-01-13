const { Musicalgenre } = require("../models");

const musicalGenresController = {
  getAllMusicalGenres: async () => {
    const musicalGenre =await Musicalgenre.findAll();
    console.log("tous les genres de musiques", musicalGenre);
    return musicalGenre ;
  },
};

module.exports = musicalGenresController;
