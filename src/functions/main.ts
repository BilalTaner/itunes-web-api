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
): Promise<MusicReturn> {
  try {
    const res = await fetch(
      `https://itunes.apple.com/search?term=${encodeURIComponent(
        name,
      )}&media=music&limit=${options.limit ?? "1"}&lang=${
        options.language ?? "en"
      }&country=${options.country ?? "US"}`,
    );

    return (await res.json()) as MusicReturn;
  } catch (e: any) {
    const { message, name, stack }: Error = e;

    console.log({ message, name, stack });
  }
}

export async function getSongVideo(
  name: string,
  options?: options,
): Promise<MusicVideoReturn> {
  try {
    const res = await fetch(
      `https://itunes.apple.com/search?term=${encodeURIComponent(
        name,
      )}&media=musicVideo&limit=${options.limit ?? "1"}&lang=${
        options.language ?? "en"
      }&country=${options.country ?? "US"}`,
    );

    return (await res.json()) as MusicVideoReturn;
  } catch (e: any) {
    const { message, name, stack }: Error = e;

    console.log({ message, name, stack });
  }
}

export async function getArtist(
  name: string,
  options?: options,
): Promise<ArtistReturn> {
  try {
    const res = await fetch(
      `https://itunes.apple.com/search?term=${encodeURIComponent(
        name,
      )}&entity=allArtist&attribute=allArtistTerm&limit=${
        options.limit ?? "1"
      }&lang=${options.language ?? "en"}&country=${options.country ?? "US"}`,
    );

    return (await res.json()) as ArtistReturn;
  } catch (e: any) {
    const { message, name, stack }: Error = e;

    console.log({ message, name, stack });
  }
}

export async function getAlbum(
  name: string,
  options?: options,
): Promise<AlbumReturn> {
  try {
    const res = await fetch(
      `https://itunes.apple.com/search?term=${encodeURIComponent(
        name,
      )}&entity=album&limit=${options.limit ?? "1"}&lang=${
        options.language ?? "en"
      }&country=${options.country ?? "US"}`,
    );

    return (await res.json()) as AlbumReturn;
  } catch (e: any) {
    const { message, name, stack }: Error = e;

    console.log({ message, name, stack });
  }
}

export async function getApp(
  name: string,
  options?: options,
): Promise<SoftwareReturn> {
  try {
    const res = await fetch(
      `https://itunes.apple.com/search?term=${encodeURIComponent(
        name,
      )}&entity=software&limit=${options.limit ?? "1"}&lang=${
        options.language ?? "en"
      }&country=${options.country ?? "US"}`,
    );

    return (await res.json()) as SoftwareReturn;
  } catch (e: any) {
    const { message, name, stack }: Error = e;

    console.log({ message, name, stack });
  }
}

export async function getMovie(
  name: string,
  options?: options,
): Promise<MovieReturn> {
  try {
    const res = await fetch(
      `https://itunes.apple.com/search?term=${encodeURIComponent(
        name,
      )}&entity=movie&limit=${options.limit ?? "1"}&lang=${
        options.language ?? "en"
      }&country=${options.country ?? "US"}`,
    );

    return (await res.json()) as MovieReturn;
  } catch (e: any) {
    const { message, name, stack }: Error = e;

    console.log({ message, name, stack });
  }
}

export async function getBook(
  name: string,
  options?: options,
): Promise<EbookReturn> {
  try {
    const res = await fetch(
      `https://itunes.apple.com/search?term=${encodeURIComponent(
        name,
      )}&entity=ebook&limit=${options.limit ?? "1"}&lang=${
        options.language ?? "en"
      }&country=${options.country ?? "US"}`,
    );

    return (await res.json()) as EbookReturn;
  } catch (e: any) {
    const { message, name, stack }: Error = e;

    console.log({ message, name, stack });
  }
}

export async function getVoiceBook(
  name: string,
  options?: options,
): Promise<VoiceBookReturn> {
  try {
    const res = await fetch(
      `https://itunes.apple.com/search?term=${encodeURIComponent(
        name,
      )}&entity=audiobook&limit=${options.limit ?? "1"}&lang=${
        options.language ?? "en"
      }&country=${options.country ?? "US"}`,
    );

    return (await res.json()) as VoiceBookReturn;
  } catch (e: any) {
    const { message, name, stack }: Error = e;

    console.log({ message, name, stack });
  }
}

export async function getPodcast(
  name: string,
  options?: options,
): Promise<PodcastReturn> {
  try {
    const res = await fetch(
      `https://itunes.apple.com/search?term=${encodeURIComponent(
        name,
      )}&entity=podcast&limit=${options.limit ?? "1"}&lang=${
        options.language ?? "en"
      }&country=${options.country ?? "US"}`,
    );

    return (await res.json()) as PodcastReturn;
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
): Promise<AllReturn> {
  try {
    const res = await fetch(
      `https://itunes.apple.com/search?term=${encodeURIComponent(
        name,
      )}&entity=${entity}&attribute=${attribute}&limit=${
        options.limit ?? "1"
      }&lang=${options.language ?? "en"}&country=${options.country ?? "US"}`,
    );

    return (await res.json()) as AllReturn;
  } catch (e: any) {
    const { message, name, stack }: Error = e;

    console.log({ message, name, stack });
  }
}
