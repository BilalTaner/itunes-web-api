const fetch = require("node-fetch");
module.exports = {
    
async track(songName, options = {}){
    if(!songName) return console.log('ERROR: You must enter a Valid Song Name!')
    if(options.limit > 200) return console.log("ERROR: Limit number cannot be more than 200.")
    if(!options.limit || options.limit === null || options.limit === undefined || options.limit === 0) options.limit = 1
    if(isNaN(options.lang) === false) return console.log("ERROR: Language cannot be number.")
    if(!options.lang || options.lang === null || options.lang === undefined || options.lang === 0) options.lang = 'en'
    if(isNaN(options.country) === false) return console.log("ERROR: Country cannot be number.")
    if(!options.country || options.country === null || options.country === undefined || options.country === 0) options.country = 'US'
    const res = await fetch(`https://itunes.apple.com/search?term=${encodeURI(songName)}&media=music&limit=${options.limit}&lang=${options.lang}&country=${options.country}`);
    const response = await res.json();
    if(response.resultCount === 0) {
        console.error("ERROR: This Song is doesn't exist.");
        return undefined;
    }
    if(response.errorMessage && options.lang && options.country || response.errorMessage && options.lang || response.errorMessage) {
        console.error(`Unspecified Language or Country. ERROR: ${response.errorMessage}\nPlease Check https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2`);
        return undefined;
    }
    return response; 
},
async trackVideo(songName, options = {}){
    if(!songName) return console.log('ERROR: You must enter a Valid Song Name!')
    if(options.limit > 200) return console.log("ERROR: Limit number cannot be more than 200.")
    if(!options.limit || options.limit === null || options.limit === undefined || options.limit === 0) options.limit = 1
    if(isNaN(options.lang) === false) return console.log("ERROR: Language cannot be number.")
    if(!options.lang || options.lang === null || options.lang === undefined || options.lang === 0) options.lang = 'en'
    if(isNaN(options.country) === false) return console.log("ERROR: Country cannot be number.")
    if(!options.country || options.country === null || options.country === undefined || options.country === 0) options.country = 'US'
    const res = await fetch(`https://itunes.apple.com/search?term=${encodeURI(songName)}&media=musicVideo&limit=${options.limit}&lang=${options.lang}&country=${options.country}`);
    const response = await res.json();
    if(response.resultCount === 0) {
        console.error("ERROR: This Song is doesn't exist.");
        return undefined;
    }
    if(response.errorMessage && options.lang && options.country || response.errorMessage && options.lang || response.errorMessage) {
        console.error(`Unspecified Language or Country. ERROR: ${response.errorMessage}\nPlease Check https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2`);
        return undefined;
    }
    return response; 
},
async artist(artistName, options = {}){
    if(!artistName) return console.log('ERROR: You must enter a Valid Album Name!')
    if(options.limit > 200) return console.log("ERROR: Limit number cannot be more than 200.")
    if(!options.limit || options.limit === null || options.limit === undefined || options.limit === 0) options.limit = 1
    if(isNaN(options.lang) === false) return console.log("ERROR: Language cannot be number.")
    if(!options.lang || options.lang === null || options.lang === undefined || options.lang === 0) options.lang = 'en'
    if(isNaN(options.country) === false) return console.log("ERROR: Country cannot be number.")
    if(!options.country || options.country === null || options.country === undefined || options.country === 0) options.country = 'US'
    const res = await fetch(`https://itunes.apple.com/search?term=${encodeURI(artistName)}&entity=allArtist&attribute=allArtistTerm&limit=${options.limit}&lang=${options.lang}&country=${options.country}`);
    const response = await res.json();
    if(response.resultCount === 0) {
        console.error("ERROR: This Album is doesn't exist.");
        return undefined;
    }
    if(response.errorMessage && options.lang && options.country || response.errorMessage && options.lang || response.errorMessage) {
        console.error(`Unspecified Language or Country. ERROR: ${response.errorMessage}\nPlease Check https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2`);
        return undefined;
    }
    return response; 
},
async album(albumName, options = {}){
    if(!albumName) return console.log('ERROR: You must enter a Valid Album Name!')
    if(options.limit > 200) return console.log("ERROR: Limit number cannot be more than 200.")
    if(!options.limit || options.limit === null || options.limit === undefined || options.limit === 0) options.limit = 1
    if(isNaN(options.lang) === false) return console.log("ERROR: Language cannot be number.")
    if(!options.lang || options.lang === null || options.lang === undefined || options.lang === 0) options.lang = 'en'
    if(isNaN(options.country) === false) return console.log("ERROR: Country cannot be number.")
    if(!options.country || options.country === null || options.country === undefined || options.country === 0) options.country = 'US'
    const res = await fetch(`https://itunes.apple.com/search?term=${encodeURI(albumName)}&entity=album&limit=${options.limit}&lang=${options.lang}&country=${options.country}`);
    const response = await res.json();
    if(response.resultCount === 0) {
        console.error("ERROR: This Album is doesn't exist.");
        return undefined;
    }
    if(response.errorMessage && options.lang && options.country || response.errorMessage && options.lang || response.errorMessage) {
        console.error(`Unspecified Language or Country. ERROR: ${response.errorMessage}\nPlease Check https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2`);
        return undefined;
    }
    return response; 
}, 
async app(appName, options = {}){
    if(!appName) return console.log('ERROR: You must enter a Valid App Name!')
    if(options.limit > 200) return console.log("ERROR: Limit number cannot be more than 200.")
    if(!options.limit || options.limit === null || options.limit === undefined || options.limit === 0) options.limit = 1
    if(isNaN(options.lang) === false) return console.log("ERROR: Language cannot be number.")
    if(!options.lang || options.lang === null || options.lang === undefined || options.lang === 0) options.lang = 'en'
    if(isNaN(options.country) === false) return console.log("ERROR: Country cannot be number.")
    if(!options.country || options.country === null || options.country === undefined || options.country === 0) options.country = 'US'
    const res = await fetch(`https://itunes.apple.com/search?term=${encodeURI(appName)}&entity=software&limit=${options.limit}&lang=${options.lang}&country=${options.country}`);
    const response = await res.json();
    if(response.resultCount === 0) {
        console.error("ERROR: This App is doesn't exist.");
        return undefined;
    }
    if(response.errorMessage && options.lang && options.country || response.errorMessage && options.lang || response.errorMessage) {
        console.error(`Unspecified Language or Country. ERROR: ${response.errorMessage}\nPlease Check https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2`);
        return undefined;
    }
    return response; 
},
async movie(movieName, options = {}){
    if(!movieName) return console.log('ERROR: You must enter a Valid Movie Name!')
    if(options.limit > 200) return console.log("ERROR: Limit number cannot be more than 200.")
    if(!options.limit || options.limit === null || options.limit === undefined || options.limit === 0) options.limit = 1
    if(isNaN(options.lang) === false) return console.log("ERROR: Language cannot be number.")
    if(!options.lang || options.lang === null || options.lang === undefined || options.lang === 0) options.lang = 'en'
    if(isNaN(options.country) === false) return console.log("ERROR: Country cannot be number.")
    if(!options.country || options.country === null || options.country === undefined || options.country === 0) options.country = 'US'
    const res = await fetch(`https://itunes.apple.com/search?term=${encodeURI(movieName)}&entity=movie&limit=${options.limit}&lang=${options.lang}&country=${options.country}`);
    const response = await res.json();
    if(response.resultCount === 0) {
        console.error("ERROR: This Movie is doesn't exist.");
        return undefined;
    }
    if(response.errorMessage && options.lang && options.country || response.errorMessage && options.lang || response.errorMessage) {
        console.error(`Unspecified Language or Country. ERROR: ${response.errorMessage}\nPlease Check https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2`);
        return undefined;
    }
    return response; 
},
async book(bookName, options = {}){
    if(!bookName) return console.log('ERROR: You must enter a Valid Book Name!')
    if(options.limit > 200) return console.log("ERROR: Limit number cannot be more than 200.")
    if(!options.limit || options.limit === null || options.limit === undefined || options.limit === 0) options.limit = 1
    if(isNaN(options.lang) === false) return console.log("ERROR: Language cannot be number.")
    if(!options.lang || options.lang === null || options.lang === undefined || options.lang === 0) options.lang = 'en'
    if(isNaN(options.country) === false) return console.log("ERROR: Country cannot be number.")
    if(!options.country || options.country === null || options.country === undefined || options.country === 0) options.country = 'US'
    const res = await fetch(`https://itunes.apple.com/search?term=${encodeURI(bookName)}&entity=ebook&limit=${options.limit}&lang=${options.lang}&country=${options.country}`);
    const response = await res.json();
    if(response.resultCount === 0) {
        console.error("ERROR: This Book is doesn't exist.");
        return undefined;
    }
    if(response.errorMessage && options.lang && options.country || response.errorMessage && options.lang || response.errorMessage) {
        console.error(`Unspecified Language or Country. ERROR: ${response.errorMessage}\nPlease Check https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2`);
        return undefined;
    }
    return response; 
},
async voicebook(voicebookName, options = {}){
    if(!voicebookName) return console.log('ERROR: You must enter a Valid Voice Book Name!')
    if(options.limit > 200) return console.log("ERROR: Limit number cannot be more than 200.")
    if(!options.limit || options.limit === null || options.limit === undefined || options.limit === 0) options.limit = 1
    if(isNaN(options.lang) === false) return console.log("ERROR: Language cannot be number.")
    if(!options.lang || options.lang === null || options.lang === undefined || options.lang === 0) options.lang = 'en'
    if(isNaN(options.country) === false) return console.log("ERROR: Country cannot be number.")
    if(!options.country || options.country === null || options.country === undefined || options.country === 0) options.country = 'US'
    const res = await fetch(`https://itunes.apple.com/search?term=${encodeURI(voicebookName)}&entity=audiobook&limit=${options.limit}&lang=${options.lang}&country=${options.country}`);
    const response = await res.json();
    if(response.resultCount === 0) {
        console.error("ERROR: This Voice Book is doesn't exist.");
        return undefined;
    }
    if(response.errorMessage && options.lang && options.country || response.errorMessage && options.lang || response.errorMessage) {
        console.error(`Unspecified Language or Country. ERROR: ${response.errorMessage}\nPlease Check https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2`);
        return undefined;
    }
    return response; 
},
async podcast(podcastName, options = {}){
    if(!podcastName) return console.log('ERROR: You must enter a Valid Podcast Name!')
    if(options.limit > 200) return console.log("ERROR: Limit number cannot be more than 200.")
    if(!options.limit || options.limit === null || options.limit === undefined || options.limit === 0) options.limit = 1
    if(isNaN(options.lang) === false) return console.log("ERROR: Language cannot be number.")
    if(!options.lang || options.lang === null || options.lang === undefined || options.lang === 0) options.lang = 'en'
    if(isNaN(options.country) === false) return console.log("ERROR: Country cannot be number.")
    if(!options.country || options.country === null || options.country === undefined || options.country === 0) options.country = 'US'
    const res = await fetch(`https://itunes.apple.com/search?term=${encodeURI(podcastName)}&entity=podcast&limit=${options.limit}&lang=${options.lang}&country=${options.country}`);
    const response = await res.json();
    if(response.resultCount === 0) {
        console.error("ERROR: This Podcast is doesn't exist.");
        return undefined;
    }
    if(response.errorMessage && options.lang && options.country || response.errorMessage && options.lang || response.errorMessage) {
        console.error(`Unspecified Language or Country. ERROR: ${response.errorMessage}\nPlease Check https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2`);
        return undefined;
    }
    return response; 
},
async searchAll(searchString, entity, attribute, options = {}){
    if(!searchString) return console.log('ERROR: You must enter a string for search!')
    if(!entity) return console.log('ERROR: You must enter a entity! Example entitys = (movie, album, allArtist, podcast, musicVideo, mix, audiobook, tvSeason, allTrack)')
    if(isNaN(entity) === false) return console.log("ERROR: Entity cannot be number.")
    if(!attribute) return console.log('ERROR: You must enter a attribute! Example attributes = (actorTerm, languageTerm, allArtistTerm, tvEpisodeTerm, shortFilmTerm, directorTerm, releaseYearTerm, titleTerm, featureFilmTerm, ratingIndex, keywordsTerm, descriptionTerm, authorTerm, genreIndex, mixTerm, allTrackTerm, artistTerm, composerTerm, tvSeasonTerm, producerTerm, ratingTerm, songTerm, movieArtistTerm, showTerm, movieTerm, albumTerm)')
    if(isNaN(attribute) === false) return console.log("ERROR: Attribute cannot be number.")
    if(options.limit > 200) return console.log("ERROR: Limit number cannot be more than 200.")
    if(!options.limit || options.limit === null || options.limit === undefined || options.limit === 0) options.limit = 1
    if(isNaN(options.lang) === false) return console.log("ERROR: Language cannot be number.")
    if(!options.lang || options.lang === null || options.lang === undefined || options.lang === 0) options.lang = 'en'
    if(isNaN(options.country) === false) return console.log("ERROR: Country cannot be number.")
    if(!options.country || options.country === null || options.country === undefined || options.country === 0) options.country = 'US'
    const res = await fetch(`https://itunes.apple.com/search?term=${searchString}&entity=${entity}&attribute=${attribute}&limit=${options.limit}&lang=${options.lang}&country=${options.country}`);
    const response = await res.json();
    if(response.resultCount === 0) {
        console.error("ERROR: Resulsts are doesn't exist.");
        return undefined;
    }
    if(response.errorMessage && options.lang && options.country || response.errorMessage && options.lang || response.errorMessage) {
        console.error(`Unspecified Language or Country or Strings. ERROR: ${response.errorMessage}\nPlease Check https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2`);
        return undefined;
    }
    return response; 
}
}