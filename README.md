## WELCOME TO ITUNES WEB API!

NOTE:
If you do not enter limit, lang or country values, the default language and country code are set to English. Limit Number default is 1.
Please Check [ISO_3166](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) For Language and Country Codes.

## Usage

ES5 Syntax

```js
const { getSong } = require("itunes-web-api");

getSong("Lil Nas X, Jack Harlow - INDUSTRY BABY", {
  limit: 1,
  language: "en",
  country: "US",
}).then((result) => console.log(result)); // -> { song object }
```

ES6 Syntax

```js
import { getSong } from "itunes-web-api";

const main = async () => {
  const result = await getSong("Lil Nas X, Jack Harlow - INDUSTRY BABY", {
    limit: 1,
    language: "en",
    country: "US",
  });

  console.log(result); // -> { song object }
};

main();
```

##### Example Output for Song

```json
{
  "wrapperType": "track",
  "kind": "song",
  "artistId": 1400730578,
  "collectionId": 1576552540,
  "trackId": 1576552565,
  "artistName": "Lil Nas X & Jack Harlow",
  "collectionName": "INDUSTRY BABY - Single",
  "trackName": "INDUSTRY BABY",
  "collectionCensoredName": "INDUSTRY BABY - Single",
  "trackCensoredName": "INDUSTRY BABY",
  "artistViewUrl": "https://music.apple.com/us/artist/lil-nas-x/1400730578?uo=4",
  "collectionViewUrl": "https://music.apple.com/us/album/industry-baby/1576552540?i=1576552565&uo=4",
  "trackViewUrl": "https://music.apple.com/us/album/industry-baby/1576552540?i=1576552565&uo=4",
  "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/63/c5/9a/63c59a18-6610-173c-5a78-65a06fb251cc/mzaf_9849876950553161459.plus.aac.p.m4a",
  "artworkUrl30": "https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/2d/43/83/2d438323-6b09-b746-c05a-f36014244599/source/30x30bb.jpg",
  "artworkUrl60": "https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/2d/43/83/2d438323-6b09-b746-c05a-f36014244599/source/60x60bb.jpg",
  "artworkUrl100": "https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/2d/43/83/2d438323-6b09-b746-c05a-f36014244599/source/100x100bb.jpg",
  "collectionPrice": 1.29,
  "trackPrice": 1.29,
  "releaseDate": "2021-07-23T12:00:00Z",
  "collectionExplicitness": "explicit",
  "trackExplicitness": "explicit",
  "discCount": 1,
  "discNumber": 1,
  "trackCount": 1,
  "trackNumber": 1,
  "trackTimeMillis": 212000,
  "country": "USA",
  "currency": "USD",
  "primaryGenreName": "Hip-Hop/Rap",
  "contentAdvisoryRating": "Explicit",
  "isStreamable": true
}
```

## WARNING!

If you are confronted with any problems, you can come to our discord support server below.

[Support Server](https://discord.gg/4agCuVt)
