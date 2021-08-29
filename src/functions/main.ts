"use strict";

import fetch from "node-fetch";
import {
  options,
  entity,
  attribute,
  MusicReturn,
  MusicVideoReturn,
  ArtistReturn,
  AlbumReturn,
  SoftwareReturn,
  MovieReturn,
  EbookReturn,
  VoiceBookReturn,
  PodcastReturn,
  AllReturn,
} from "../@types/type";

export async function getSong(
  name: string,
  options?: options,
): Promise<MusicReturn | void> {
  try {
    const res = await fetch(
      `https://itunes.apple.com/search?term=${encodeURI(
        name,
      )}&media=music&limit=${options.limit ?? "1"}&lang=${
        options.language ?? "en"
      }&country=${options.country ?? "US"}`,
    );

    const json: MusicReturn = await res.json();

    return json;
  } catch (e: any) {
    const { message, name, stack }: Error = e;

    console.log({ message, name, stack });
  }
}

export async function getSongVideo(
  name: string,
  options?: options,
): Promise<MusicVideoReturn | void> {
  try {
    const res = await fetch(
      `https://itunes.apple.com/search?term=${encodeURI(
        name,
      )}&media=musicVideo&limit=${options.limit ?? "1"}&lang=${
        options.language ?? "en"
      }&country=${options.country ?? "US"}`,
    );

    const json: MusicVideoReturn = await res.json();

    return json;
  } catch (e: any) {
    const { message, name, stack }: Error = e;

    console.log({ message, name, stack });
  }
}

export async function getArtist(
  name: string,
  options?: options,
): Promise<ArtistReturn | void> {
  try {
    const res = await fetch(
      `https://itunes.apple.com/search?term=${encodeURI(
        name,
      )}&entity=allArtist&attribute=allArtistTerm&limit=${
        options.limit ?? "1"
      }&lang=${options.language ?? "en"}&country=${options.country ?? "US"}`,
    );

    const json: ArtistReturn = await res.json();

    return json;
  } catch (e: any) {
    const { message, name, stack }: Error = e;

    console.log({ message, name, stack });
  }
}

export async function getAlbum(
  name: string,
  options?: options,
): Promise<AlbumReturn | void> {
  try {
    const res = await fetch(
      `https://itunes.apple.com/search?term=${encodeURI(
        name,
      )}&entity=album&limit=${options.limit ?? "1"}&lang=${
        options.language ?? "en"
      }&country=${options.country ?? "US"}`,
    );

    const json: AlbumReturn = await res.json();

    return json;
  } catch (e: any) {
    const { message, name, stack }: Error = e;

    console.log({ message, name, stack });
  }
}

export async function getApp(
  name: string,
  options?: options,
): Promise<SoftwareReturn | void> {
  try {
    const res = await fetch(
      `https://itunes.apple.com/search?term=${encodeURI(
        name,
      )}&entity=software&limit=${options.limit ?? "1"}&lang=${
        options.language ?? "en"
      }&country=${options.country ?? "US"}`,
    );

    const json: SoftwareReturn = await res.json();

    return json;
  } catch (e: any) {
    const { message, name, stack }: Error = e;

    console.log({ message, name, stack });
  }
}

export async function getMovie(
  name: string,
  options?: options,
): Promise<MovieReturn | void> {
  try {
    const res = await fetch(
      `https://itunes.apple.com/search?term=${encodeURI(
        name,
      )}&entity=movie&limit=${options.limit ?? "1"}&lang=${
        options.language ?? "en"
      }&country=${options.country ?? "US"}`,
    );

    const json: MovieReturn = await res.json();

    return json;
  } catch (e: any) {
    const { message, name, stack }: Error = e;

    console.log({ message, name, stack });
  }
}

export async function getBook(
  name: string,
  options?: options,
): Promise<EbookReturn | void> {
  try {
    const res = await fetch(
      `https://itunes.apple.com/search?term=${encodeURI(
        name,
      )}&entity=ebook&limit=${options.limit ?? "1"}&lang=${
        options.language ?? "en"
      }&country=${options.country ?? "US"}`,
    );

    const json: EbookReturn = await res.json();

    return json;
  } catch (e: any) {
    const { message, name, stack }: Error = e;

    console.log({ message, name, stack });
  }
}

export async function getVoiceBook(
  name: string,
  options?: options,
): Promise<VoiceBookReturn | void> {
  try {
    const res = await fetch(
      `https://itunes.apple.com/search?term=${encodeURI(
        name,
      )}&entity=audiobook&limit=${options.limit ?? "1"}&lang=${
        options.language ?? "en"
      }&country=${options.country ?? "US"}`,
    );

    const json: VoiceBookReturn = await res.json();

    return json;
  } catch (e: any) {
    const { message, name, stack }: Error = e;

    console.log({ message, name, stack });
  }
}

export async function getPodcast(
  name: string,
  options?: options,
): Promise<PodcastReturn | void> {
  try {
    const res = await fetch(
      `https://itunes.apple.com/search?term=${encodeURI(
        name,
      )}&entity=podcast&limit=${options.limit ?? "1"}&lang=${
        options.language ?? "en"
      }&country=${options.country ?? "US"}`,
    );

    const json: PodcastReturn = await res.json();

    return json;
  } catch (e: any) {
    const { message, name, stack }: Error = e;

    console.log({ message, name, stack });
  }
}

export async function getAll(
  name: string,
  entity: entity,
  attribute: attribute,
  options?: options,
): Promise<AllReturn | void> {
  try {
    const res = await fetch(
      `https://itunes.apple.com/search?term=${encodeURI(
        name,
      )}&entity=${entity}&attribute=${attribute}&limit=${
        options.limit ?? "1"
      }&lang=${options.language ?? "en"}&country=${options.country ?? "US"}`,
    );

    const json: AllReturn = await res.json();

    return json;
  } catch (e: any) {
    const { message, name, stack }: Error = e;

    console.log({ message, name, stack });
  }
}
