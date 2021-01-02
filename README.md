## WELCOME TO ITUNES WEB API! 
## WARNING!! (IF U ARE USING VER 1.0.4 or LOWER PLEASE UPDATE YOUR MODULE) 
### NOTE: OPTIONS ARE OPTIONAL - NOT NECESSARY

NOTE:
If you do not enter limit, lang or country values, the default language and country code are set to English. Limit Number default is 1.
Please Check https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 For Language and Country Codes.

### EXAMPLE FOR USAGE
````js
//##### USAGE FOR TRACK INFO #####\\
const itunes = require('itunes-api');
let data = await itunes.track(songName, {limit: Number, lang: 'lang-code', country: 'country-code'})
console.log(data)//track infos in resulst array


//##### USAGE FOR TRACK-VIDEO INFO #####\\
const itunes = require('itunes-api');
let data = await itunes.trackVideo(songName, {limit: Number, lang: 'lang-code', country: 'country-code'})
console.log(data) //album infos in resulst array


//##### USAGE FOR ARTIST INFO #####\\
const itunes = require('itunes-api');
let data = await itunes.artist(artistName, {limit: Number, lang: 'lang-code', country: 'country-code'})
console.log(data) //album infos in resulst array


//##### USAGE FOR ALBUM INFO #####\\
const itunes = require('itunes-api');
let data = await itunes.album(albumName, {limit: Number, lang: 'lang-code', country: 'country-code'})
console.log(data) //album infos in resulst array


//##### USAGE FOR APP INFO #####\\
const itunes = require('itunes-api');
let data = await itunes.app(songName, {limit: Number, lang: 'lang-code', country: 'country-code'})
console.log(data)//app infos in resulst array


//##### USAGE FOR MOVIE INFO #####\\
const itunes = require('itunes-api');
let data = await itunes.movie(movieName, {limit: Number, lang: 'lang-code', country: 'country-code'})
console.log(data)//movie infos in resulst array


//##### USAGE FOR BOOK INFO #####\\
const itunes = require('itunes-api');
let data = await itunes.book(bookName, {limit: Number, lang: 'lang-code', country: 'country-code'})
console.log(data)//book infos in resulst array


//##### USAGE FOR VOICE-BOOK INFO #####\\
const itunes = require('itunes-api');
let data = await itunes.voicebook(voicebookName, {limit: Number, lang: 'lang-code', country: 'country-code'})
console.log(data)//voice-book infos in resulst array


//##### USAGE FOR PODCAST INFO #####\\
const itunes = require('itunes-api');
let data = await itunes.voicebook(voicebookName, {limit: Number, lang: 'lang-code', country: 'country-code'})
console.log(data)//podcast infos in resulst array


//##### USAGE FOR ALL INFO #####\\
const itunes = require('itunes-api');
let data = await itunes.searchAll(searchString, entity, attribute, {limit: Number, lang: 'lang-code', country: 'country-code'})
//entity examples === movie, album, allArtist, podcast, musicVideo, mix, audiobook, tvSeason, allTrack

//attribute examples === actorTerm, languageTerm, allArtistTerm, tvEpisodeTerm, shortFilmTerm, directorTerm, releaseYearTerm, titleTerm, featureFilmTerm, ratingIndex, keywordsTerm, descriptionTerm, authorTerm, genreIndex, mixTerm, allTrackTerm, artistTerm, composerTerm, tvSeasonTerm, producerTerm, ratingTerm, songTerm, movieArtistTerm, showTerm, movieTerm, albumTerm
console.log(data)//string infos in resulst array
````
##### EXAMPLE OUTPUT FOR TRACK
```js
const itunes = require('itunes-api');
let data = await itunes.track(songName, {limit: Number, lang: 'lang-code', country: 'country-code'})
console.log(data)
/* data OUTPUT
{
  resultCount: 1,
  results: [
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 1400730578,
      collectionId: 1468166325,
      trackId: 1468166457,
      artistName: 'Lil Nas X & Cardi B',
      collectionName: '7 - EP',
      trackName: 'Rodeo',
      collectionCensoredName: '7 - EP',
      trackCensoredName: 'Rodeo',
      collectionArtistName: 'Lil Nas X',
      artistViewUrl: 'https://music.apple.com/us/artist/lil-nas-x/1400730578?uo=4',
      collectionViewUrl: 'https://music.apple.com/us/album/rodeo/1468166325?i=1468166457&uo=4',
      trackViewUrl: 'https://music.apple.com/us/album/rodeo/1468166325?i=1468166457&uo=4',
      previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview123/v4/9e/33/d3/9e33d321-54f9-07cc-e3ad-4070f2b91007/mzaf_7571049535424902725.plus.aac.p.m4a',
      artworkUrl30: 'https://is2-ssl.mzstatic.com/image/thumb/Music113/v4/0d/f9/28/0df92898-90d1-6e15-3b04-9a860feabd0d/source/30x30bb.jpg',
      artworkUrl60: 'https://is2-ssl.mzstatic.com/image/thumb/Music113/v4/0d/f9/28/0df92898-90d1-6e15-3b04-9a860feabd0d/source/60x60bb.jpg',
      artworkUrl100: 'https://is2-ssl.mzstatic.com/image/thumb/Music113/v4/0d/f9/28/0df92898-90d1-6e15-3b04-9a860feabd0d/source/100x100bb.jpg',
      collectionPrice: 6.99,
      trackPrice: 1.29,
      releaseDate: '2019-06-21T07:00:00Z',
      collectionExplicitness: 'explicit',
      trackExplicitness: 'explicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 8,
      trackNumber: 5,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Alternative',
      contentAdvisoryRating: 'Explicit',
      isStreamable: true
    }
  ]
}*/
```
## WARNING!!

If you are confronted with any problems, you can come to our discord support server below.

  

[Support Server](https://discord.gg/4agCuVt)