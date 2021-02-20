const fetch = require("node-fetch");
module.exports = {
    
async track(songName, options = {}){
    if(!songName) throw new TypeError('ERROR: You must enter a Valid Song Name!')
    if(options.limit > 200) throw new TypeError("ERROR: Limit number cannot be more than 200.")
    if(!options.limit || options.limit === null || options.limit === undefined || options.limit === 0) options.limit = 1
    if(isNaN(options.lang) === false) throw new TypeError("ERROR: Language cannot be number.")
    if(!options.lang || options.lang === null || options.lang === undefined || options.lang === 0) options.lang = 'en'
    if(isNaN(options.country) === false) throw new TypeError("ERROR: Country cannot be number.")
    if(!options.country || options.country === null || options.country === undefined || options.country === 0) options.country = 'US'
    const res = await fetch(`https://itunes.apple.com/search?term=${encodeURI(songName)}&media=music&limit=${options.limit}&lang=${options.lang}&country=${options.country}`);
    const response = await res.json();
    if(response.resultCount === 0) throw new Error("ERROR: This Song is doesn't exist.");
    if(response.errorMessage && options.lang && options.country || response.errorMessage && options.lang || response.errorMessage) {
        throw new TypeError(`Unspecified Language or Country or Strings. ERROR: ${response.errorMessage}\nPlease Check https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2`);
    }
    return response; 
},
async trackVideo(songName, options = {}){
    if(!songName) throw new TypeError('ERROR: You must enter a Valid Song Name!')
    if(options.limit > 200) throw new TypeError("ERROR: Limit number cannot be more than 200.")
    if(!options.limit || options.limit === null || options.limit === undefined || options.limit === 0) options.limit = 1
    if(isNaN(options.lang) === false) throw new TypeError("ERROR: Language cannot be number.")
    if(!options.lang || options.lang === null || options.lang === undefined || options.lang === 0) options.lang = 'en'
    if(isNaN(options.country) === false) throw new TypeError("ERROR: Country cannot be number.")
    if(!options.country || options.country === null || options.country === undefined || options.country === 0) options.country = 'US'
    const res = await fetch(`https://itunes.apple.com/search?term=${encodeURI(songName)}&media=musicVideo&limit=${options.limit}&lang=${options.lang}&country=${options.country}`);
    const response = await res.json();
    if(response.resultCount === 0) throw new Error("ERROR: This Song is doesn't exist.") ;
    if(response.errorMessage && options.lang && options.country || response.errorMessage && options.lang || response.errorMessage) {
        throw new TypeError(`Unspecified Language or Country or Strings. ERROR: ${response.errorMessage}\nPlease Check https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2`);
    }
    return response; 
},
async artist(artistName, options = {}){
    if(!artistName) throw new TypeError('ERROR: You must enter a Valid Album Name!')
    if(options.limit > 200) throw new TypeError("ERROR: Limit number cannot be more than 200.")
    if(!options.limit || options.limit === null || options.limit === undefined || options.limit === 0) options.limit = 1
    if(isNaN(options.lang) === false) throw new TypeError("ERROR: Language cannot be number.")
    if(!options.lang || options.lang === null || options.lang === undefined || options.lang === 0) options.lang = 'en'
    if(isNaN(options.country) === false) throw new TypeError("ERROR: Country cannot be number.")
    if(!options.country || options.country === null || options.country === undefined || options.country === 0) options.country = 'US'
    const res = await fetch(`https://itunes.apple.com/search?term=${encodeURI(artistName)}&entity=allArtist&attribute=allArtistTerm&limit=${options.limit}&lang=${options.lang}&country=${options.country}`);
    const response = await res.json();
    if(response.resultCount === 0) throw new Error("ERROR: This Artist is doesn't exist.");
    if(response.errorMessage && options.lang && options.country || response.errorMessage && options.lang || response.errorMessage) {
        throw new TypeError(`Unspecified Language or Country or Strings. ERROR: ${response.errorMessage}\nPlease Check https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2`);
    }
    return response; 
},
async album(albumName, options = {}){
    if(!albumName) throw new TypeError('ERROR: You must enter a Valid Album Name!')
    if(options.limit > 200) throw new TypeError("ERROR: Limit number cannot be more than 200.")
    if(!options.limit || options.limit === null || options.limit === undefined || options.limit === 0) options.limit = 1
    if(isNaN(options.lang) === false) throw new TypeError("ERROR: Language cannot be number.")
    if(!options.lang || options.lang === null || options.lang === undefined || options.lang === 0) options.lang = 'en'
    if(isNaN(options.country) === false) throw new TypeError("ERROR: Country cannot be number.")
    if(!options.country || options.country === null || options.country === undefined || options.country === 0) options.country = 'US'
    const res = await fetch(`https://itunes.apple.com/search?term=${encodeURI(albumName)}&entity=album&limit=${options.limit}&lang=${options.lang}&country=${options.country}`);
    const response = await res.json();
    if(response.resultCount === 0) throw new Error("ERROR: This Album is doesn't exist.");
    if(response.errorMessage && options.lang && options.country || response.errorMessage && options.lang || response.errorMessage) {
        throw new TypeError(`Unspecified Language or Country or Strings. ERROR: ${response.errorMessage}\nPlease Check https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2`);
    }
    return response; 
}, 
async app(appName, options = {}){
    if(!appName) throw new TypeError('ERROR: You must enter a Valid App Name!')
    if(options.limit > 200) throw new TypeError("ERROR: Limit number cannot be more than 200.")
    if(!options.limit || options.limit === null || options.limit === undefined || options.limit === 0) options.limit = 1
    if(isNaN(options.lang) === false) throw new TypeError("ERROR: Language cannot be number.")
    if(!options.lang || options.lang === null || options.lang === undefined || options.lang === 0) options.lang = 'en'
    if(isNaN(options.country) === false) throw new TypeError("ERROR: Country cannot be number.")
    if(!options.country || options.country === null || options.country === undefined || options.country === 0) options.country = 'US'
    const res = await fetch(`https://itunes.apple.com/search?term=${encodeURI(appName)}&entity=software&limit=${options.limit}&lang=${options.lang}&country=${options.country}`);
    const response = await res.json();
    if(response.resultCount === 0) throw new Error("ERROR: This App is doesn't exist.");
    if(response.errorMessage && options.lang && options.country || response.errorMessage && options.lang || response.errorMessage) {
        throw new TypeError(`Unspecified Language or Country or Strings. ERROR: ${response.errorMessage}\nPlease Check https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2`);
    }
    return response; 
},
async movie(movieName, options = {}){
    if(!movieName) throw new TypeError('ERROR: You must enter a Valid Movie Name!')
    if(options.limit > 200) throw new TypeError("ERROR: Limit number cannot be more than 200.")
    if(!options.limit || options.limit === null || options.limit === undefined || options.limit === 0) options.limit = 1
    if(isNaN(options.lang) === false) throw new TypeError("ERROR: Language cannot be number.")
    if(!options.lang || options.lang === null || options.lang === undefined || options.lang === 0) options.lang = 'en'
    if(isNaN(options.country) === false) throw new TypeError("ERROR: Country cannot be number.")
    if(!options.country || options.country === null || options.country === undefined || options.country === 0) options.country = 'US'
    const res = await fetch(`https://itunes.apple.com/search?term=${encodeURI(movieName)}&entity=movie&limit=${options.limit}&lang=${options.lang}&country=${options.country}`);
    const response = await res.json();
    if(response.resultCount === 0) throw new Error("ERROR: This Movie is doesn't exist.");
    if(response.errorMessage && options.lang && options.country || response.errorMessage && options.lang || response.errorMessage) {
        throw new TypeError(`Unspecified Language or Country or Strings. ERROR: ${response.errorMessage}\nPlease Check https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2`);
    }
    return response; 
},
async book(bookName, options = {}){
    if(!bookName) throw new TypeError('ERROR: You must enter a Valid Book Name!')
    if(options.limit > 200) throw new TypeError("ERROR: Limit number cannot be more than 200.")
    if(!options.limit || options.limit === null || options.limit === undefined || options.limit === 0) options.limit = 1
    if(isNaN(options.lang) === false) throw new TypeError("ERROR: Language cannot be number.")
    if(!options.lang || options.lang === null || options.lang === undefined || options.lang === 0) options.lang = 'en'
    if(isNaN(options.country) === false) throw new TypeError("ERROR: Country cannot be number.")
    if(!options.country || options.country === null || options.country === undefined || options.country === 0) options.country = 'US'
    const res = await fetch(`https://itunes.apple.com/search?term=${encodeURI(bookName)}&entity=ebook&limit=${options.limit}&lang=${options.lang}&country=${options.country}`);
    const response = await res.json();
    if(response.resultCount === 0) throw new Error("ERROR: This Book is doesn't exist.");
    if(response.errorMessage && options.lang && options.country || response.errorMessage && options.lang || response.errorMessage) {
        throw new TypeError(`Unspecified Language or Country or Strings. ERROR: ${response.errorMessage}\nPlease Check https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2`);
    }
    return response; 
},
async voicebook(voicebookName, options = {}){
    if(!voicebookName) throw new TypeError('ERROR: You must enter a Valid Voice Book Name!')
    if(options.limit > 200) throw new TypeError("ERROR: Limit number cannot be more than 200.")
    if(!options.limit || options.limit === null || options.limit === undefined || options.limit === 0) options.limit = 1
    if(isNaN(options.lang) === false) throw new TypeError("ERROR: Language cannot be number.")
    if(!options.lang || options.lang === null || options.lang === undefined || options.lang === 0) options.lang = 'en'
    if(isNaN(options.country) === false) throw new TypeError("ERROR: Country cannot be number.")
    if(!options.country || options.country === null || options.country === undefined || options.country === 0) options.country = 'US'
    const res = await fetch(`https://itunes.apple.com/search?term=${encodeURI(voicebookName)}&entity=audiobook&limit=${options.limit}&lang=${options.lang}&country=${options.country}`);
    const response = await res.json();
    if(response.resultCount === 0) throw new Error("ERROR: This Voice Book is doesn't exist.");
    if(response.errorMessage && options.lang && options.country || response.errorMessage && options.lang || response.errorMessage) {
        throw new TypeError(`Unspecified Language or Country or Strings. ERROR: ${response.errorMessage}\nPlease Check https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2`);
    }
    return response; 
},
async podcast(podcastName, options = {}){
    if(!podcastName) throw new TypeError('ERROR: You must enter a Valid Podcast Name!')
    if(options.limit > 200) throw new TypeError("ERROR: Limit number cannot be more than 200.")
    if(!options.limit || options.limit === null || options.limit === undefined || options.limit === 0) options.limit = 1
    if(isNaN(options.lang) === false) throw new TypeError("ERROR: Language cannot be number.")
    if(!options.lang || options.lang === null || options.lang === undefined || options.lang === 0) options.lang = 'en'
    if(isNaN(options.country) === false) throw new TypeError("ERROR: Country cannot be number.")
    if(!options.country || options.country === null || options.country === undefined || options.country === 0) options.country = 'US'
    const res = await fetch(`https://itunes.apple.com/search?term=${encodeURI(podcastName)}&entity=podcast&limit=${options.limit}&lang=${options.lang}&country=${options.country}`);
    const response = await res.json();
    if(response.resultCount === 0) throw new Error("ERROR: This Podcast is doesn't exist.");
    if(response.errorMessage && options.lang && options.country || response.errorMessage && options.lang || response.errorMessage) {
        throw new TypeError(`Unspecified Language or Country or Strings. ERROR: ${response.errorMessage}\nPlease Check https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2`);
    }
    return response; 
},
async searchAll(searchString, entity, attribute, options = {}){
    if(!searchString) throw new TypeError('ERROR: You must enter a string for search!')
    if(!entity) throw new TypeError('ERROR: You must enter a entity! Example entitys = (movie, album, allArtist, podcast, musicVideo, mix, audiobook, tvSeason, allTrack)')
    if(isNaN(entity) === false) throw new TypeError("ERROR: Entity cannot be number.")
    if(!attribute) throw new TypeError('ERROR: You must enter a attribute! Example attributes = (actorTerm, languageTerm, allArtistTerm, tvEpisodeTerm, shortFilmTerm, directorTerm, releaseYearTerm, titleTerm, featureFilmTerm, ratingIndex, keywordsTerm, descriptionTerm, authorTerm, genreIndex, mixTerm, allTrackTerm, artistTerm, composerTerm, tvSeasonTerm, producerTerm, ratingTerm, songTerm, movieArtistTerm, showTerm, movieTerm, albumTerm)')
    if(isNaN(attribute) === false) throw new TypeError("ERROR: Attribute cannot be number.")
    if(options.limit > 200) throw new TypeError("ERROR: Limit number cannot be more than 200.")
    if(!options.limit || options.limit === null || options.limit === undefined || options.limit === 0) options.limit = 1
    if(isNaN(options.lang) === false) throw new TypeError("ERROR: Language cannot be number.")
    if(!options.lang || options.lang === null || options.lang === undefined || options.lang === 0) options.lang = 'en'
    if(isNaN(options.country) === false) throw new TypeError("ERROR: Country cannot be number.")
    if(!options.country || options.country === null || options.country === undefined || options.country === 0) options.country = 'US'
    const res = await fetch(`https://itunes.apple.com/search?term=${searchString}&entity=${entity}&attribute=${attribute}&limit=${options.limit}&lang=${options.lang}&country=${options.country}`);
    const response = await res.json();
    if(response.resultCount === 0) throw new Error("ERROR: Resulsts are doesn't exist.");
    if(response.errorMessage && options.lang && options.country || response.errorMessage && options.lang || response.errorMessage) {
        throw new TypeError(`Unspecified Language or Country or Strings. ERROR: ${response.errorMessage}\nPlease Check https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2`);
    }
    return response; 
}
}
