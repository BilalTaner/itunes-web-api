"use strict";

import fetch from "node-fetch";
import { options, entity, attribute, ReturnTypes } from "../@types/type";

export async function getSong(
  name: string,
  options?: options
): Promise<ReturnTypes> {
  const res = await fetch(
    `https://itunes.apple.com/search?term=${encodeURI(
      name
    )}&media=music&limit=${options.limit ?? "1"}&lang=${
      options.language ?? "en"
    }&country=${options.country ?? "US"}`
  )
    .then((x) => x.json())
    .catch((e) => console.log(e));

  if (!res.resultCount) throw new Error("Resulsts are doesn't exist.");
  if (res.errorMessage)
    throw new TypeError(
      `Unspecified language or country. ${res.errorMessage}\nPlease Check https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2`
    );
  if (res) return res;
  throw new Error("Song not found.");
}

export async function getSongVideo(
  name: string,
  options?: options
): Promise<ReturnTypes> {
  const res = await fetch(
    `https://itunes.apple.com/search?term=${encodeURI(
      name
    )}&media=musicVideo&limit=${options.limit ?? "1"}&lang=${
      options.language ?? "en"
    }&country=${options.country ?? "US"}`
  )
    .then((x) => x.json())
    .catch((e) => console.log(e));

  if (!res.resultCount) throw new Error("Resulsts are doesn't exist.");
  if (res.errorMessage)
    throw new TypeError(
      `Unspecified language or country. ${res.errorMessage}\nPlease Check https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2`
    );
  if (res) return res;
  throw new Error("Song not found.");
}

export async function getArtist(
  name: string,
  options?: options
): Promise<ReturnTypes> {
  const res = await fetch(
    `https://itunes.apple.com/search?term=${encodeURI(
      name
    )}&entity=allArtist&attribute=allArtistTerm&limit=${
      options.limit ?? "1"
    }&lang=${options.language ?? "en"}&country=${options.country ?? "US"}`
  )
    .then((x) => x.json())
    .catch((e) => console.log(e));

  if (!res.resultCount) throw new Error("Resulsts are doesn't exist.");
  if (res.errorMessage)
    throw new TypeError(
      `Unspecified language or country. ${res.errorMessage}\nPlease Check https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2`
    );
  if (res) return res;
  throw new Error("Artist not found.");
}

export async function getAlbum(
  name: string,
  options?: options
): Promise<ReturnTypes> {
  const res = await fetch(
    `https://itunes.apple.com/search?term=${encodeURI(
      name
    )}&entity=album&limit=${options.limit ?? "1"}&lang=${
      options.language ?? "en"
    }&country=${options.country ?? "US"}`
  )
    .then((x) => x.json())
    .catch((e) => console.log(e));

  if (!res.resultCount) throw new Error("Resulsts are doesn't exist.");
  if (res.errorMessage)
    throw new TypeError(
      `Unspecified language or country. ${res.errorMessage}\nPlease Check https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2`
    );
  if (res) return res;
  throw new Error("Album not found.");
}

export async function getApp(
  name: string,
  options?: options
): Promise<ReturnTypes> {
  const res = await fetch(
    `https://itunes.apple.com/search?term=${encodeURI(
      name
    )}&entity=software&limit=${options.limit ?? "1"}&lang=${
      options.language ?? "en"
    }&country=${options.country ?? "US"}`
  )
    .then((x) => x.json())
    .catch((e) => console.log(e));

  if (!res.resultCount) throw new Error("Resulsts are doesn't exist.");
  if (res.errorMessage)
    throw new TypeError(
      `Unspecified language or country. ${res.errorMessage}\nPlease Check https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2`
    );
  if (res) return res;
  throw new Error("App not found.");
}

export async function getMovie(
  name: string,
  options?: options
): Promise<ReturnTypes> {
  const res = await fetch(
    `https://itunes.apple.com/search?term=${encodeURI(
      name
    )}&entity=movie&limit=${options.limit ?? "1"}&lang=${
      options.language ?? "en"
    }&country=${options.country ?? "US"}`
  )
    .then((x) => x.json())
    .catch((e) => console.log(e));

  if (!res.resultCount) throw new Error("Resulsts are doesn't exist.");
  if (res.errorMessage)
    throw new TypeError(
      `Unspecified language or country. ${res.errorMessage}\nPlease Check https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2`
    );
  if (res) return res;
  throw new Error("Movie not found.");
}

export async function getBook(
  name: string,
  options?: options
): Promise<ReturnTypes> {
  const res = await fetch(
    `https://itunes.apple.com/search?term=${encodeURI(
      name
    )}&entity=ebook&limit=${options.limit ?? "1"}&lang=${
      options.language ?? "en"
    }&country=${options.country ?? "US"}`
  )
    .then((x) => x.json())
    .catch((e) => console.log(e));

  if (!res.resultCount) throw new Error("Resulsts are doesn't exist.");
  if (res.errorMessage)
    throw new TypeError(
      `Unspecified language or country. ${res.errorMessage}\nPlease Check https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2`
    );
  if (res) return res;
  throw new Error("Book not found.");
}

export async function getVoiceBook(
  name: string,
  options?: options
): Promise<ReturnTypes> {
  const res = await fetch(
    `https://itunes.apple.com/search?term=${encodeURI(
      name
    )}&entity=audiobook&limit=${options.limit ?? "1"}&lang=${
      options.language ?? "en"
    }&country=${options.country ?? "US"}`
  )
    .then((x) => x.json())
    .catch((e) => console.log(e));

  if (!res.resultCount) throw new Error("Resulsts are doesn't exist.");
  if (res.errorMessage)
    throw new TypeError(
      `Unspecified language or country. ${res.errorMessage}\nPlease Check https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2`
    );
  if (res) return res;
  throw new Error("Voice Book not found.");
}

export async function getPodcast(
  name: string,
  options?: options
): Promise<ReturnTypes> {
  const res = await fetch(
    `https://itunes.apple.com/search?term=${encodeURI(
      name
    )}&entity=podcast&limit=${options.limit ?? "1"}&lang=${
      options.language ?? "en"
    }&country=${options.country ?? "US"}`
  )
    .then((x) => x.json())
    .catch((e) => console.log(e));

  if (!res.resultCount) throw new Error("Resulsts are doesn't exist.");
  if (res.errorMessage)
    throw new TypeError(
      `Unspecified language or country. ${res.errorMessage}\nPlease Check https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2`
    );
  if (res) return res;
  throw new Error("Podcast not found.");
}

export async function getAll(
  name: string,
  entity: entity,
  attribute: attribute,
  options?: options
): Promise<ReturnTypes> {
  const res = await fetch(
    `https://itunes.apple.com/search?term=${encodeURI(
      name
    )}&entity=${entity}&attribute=${attribute}&limit=${
      options.limit ?? "1"
    }&lang=${options.language ?? "en"}&country=${options.country ?? "US"}`
  )
    .then((x) => x.json())
    .catch((e) => console.log(e));

  if (!res.resultCount) throw new Error("Resulsts are doesn't exist.");
  if (res.errorMessage)
    throw new TypeError(
      `Unspecified language or country. ${res.errorMessage}\nPlease Check https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2`
    );
  if (res) return res;
  throw new Error("Resulsts are doesn't exist.");
}
