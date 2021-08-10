"use strict";

import fetch from "node-fetch";
import { options, entity, attribute, ReturnTypes } from "../@types/type";

export async function getSong(
  name: string,
  options?: options
): Promise<ReturnTypes | void> {
  try {
    const res = await fetch(
      `https://itunes.apple.com/search?term=${encodeURI(
        name
      )}&media=music&limit=${options.limit ?? "1"}&lang=${
        options.language ?? "en"
      }&country=${options.country ?? "US"}`
    );

    const json: ReturnTypes = await res.json();

    return json;
  } catch (e: any) {
    const errorTouse: Error = e;
    const { message, name, stack } = errorTouse;

    console.log({ message, name, stack });
  }
}

export async function getSongVideo(
  name: string,
  options?: options
): Promise<ReturnTypes | void> {
  try {
    const res = await fetch(
      `https://itunes.apple.com/search?term=${encodeURI(
        name
      )}&media=musicVideo&limit=${options.limit ?? "1"}&lang=${
        options.language ?? "en"
      }&country=${options.country ?? "US"}`
    );

    const json: ReturnTypes = await res.json();

    return json;
  } catch (e: any) {
    const errorTouse: Error = e;
    const { message, name, stack } = errorTouse;

    console.log({ message, name, stack });
  }
}

export async function getArtist(
  name: string,
  options?: options
): Promise<ReturnTypes | void> {
  try {
    const res = await fetch(
      `https://itunes.apple.com/search?term=${encodeURI(
        name
      )}&entity=allArtist&attribute=allArtistTerm&limit=${
        options.limit ?? "1"
      }&lang=${options.language ?? "en"}&country=${options.country ?? "US"}`
    );

    const json: ReturnTypes = await res.json();

    return json;
  } catch (e: any) {
    const errorTouse: Error = e;
    const { message, name, stack } = errorTouse;

    console.log({ message, name, stack });
  }
}

export async function getAlbum(
  name: string,
  options?: options
): Promise<ReturnTypes | void> {
  try {
    const res = await fetch(
      `https://itunes.apple.com/search?term=${encodeURI(
        name
      )}&entity=album&limit=${options.limit ?? "1"}&lang=${
        options.language ?? "en"
      }&country=${options.country ?? "US"}`
    );

    const json: ReturnTypes = await res.json();

    return json;
  } catch (e: any) {
    const errorTouse: Error = e;
    const { message, name, stack } = errorTouse;

    console.log({ message, name, stack });
  }
}

export async function getApp(
  name: string,
  options?: options
): Promise<ReturnTypes | void> {
  try {
    const res = await fetch(
      `https://itunes.apple.com/search?term=${encodeURI(
        name
      )}&entity=software&limit=${options.limit ?? "1"}&lang=${
        options.language ?? "en"
      }&country=${options.country ?? "US"}`
    );

    const json: ReturnTypes = await res.json();

    return json;
  } catch (e: any) {
    const errorTouse: Error = e;
    const { message, name, stack } = errorTouse;

    console.log({ message, name, stack });
  }
}

export async function getMovie(
  name: string,
  options?: options
): Promise<ReturnTypes | void> {
  try {
    const res = await fetch(
      `https://itunes.apple.com/search?term=${encodeURI(
        name
      )}&entity=movie&limit=${options.limit ?? "1"}&lang=${
        options.language ?? "en"
      }&country=${options.country ?? "US"}`
    );

    const json: ReturnTypes = await res.json();

    return json;
  } catch (e: any) {
    const errorTouse: Error = e;
    const { message, name, stack } = errorTouse;

    console.log({ message, name, stack });
  }
}

export async function getBook(
  name: string,
  options?: options
): Promise<ReturnTypes | void> {
  try {
    const res = await fetch(
      `https://itunes.apple.com/search?term=${encodeURI(
        name
      )}&entity=ebook&limit=${options.limit ?? "1"}&lang=${
        options.language ?? "en"
      }&country=${options.country ?? "US"}`
    );

    const json: ReturnTypes = await res.json();

    return json;
  } catch (e: any) {
    const errorTouse: Error = e;
    const { message, name, stack } = errorTouse;

    console.log({ message, name, stack });
  }
}

export async function getVoiceBook(
  name: string,
  options?: options
): Promise<ReturnTypes | void> {
  try {
    const res = await fetch(
      `https://itunes.apple.com/search?term=${encodeURI(
        name
      )}&entity=audiobook&limit=${options.limit ?? "1"}&lang=${
        options.language ?? "en"
      }&country=${options.country ?? "US"}`
    );

    const json: ReturnTypes = await res.json();

    return json;
  } catch (e: any) {
    const errorTouse: Error = e;
    const { message, name, stack } = errorTouse;

    console.log({ message, name, stack });
  }
}

export async function getPodcast(
  name: string,
  options?: options
): Promise<ReturnTypes | void> {
  try {
    const res = await fetch(
      `https://itunes.apple.com/search?term=${encodeURI(
        name
      )}&entity=podcast&limit=${options.limit ?? "1"}&lang=${
        options.language ?? "en"
      }&country=${options.country ?? "US"}`
    );

    const json: ReturnTypes = await res.json();

    return json;
  } catch (e: any) {
    const errorTouse: Error = e;
    const { message, name, stack } = errorTouse;

    console.log({ message, name, stack });
  }
}

export async function getAll(
  name: string,
  entity: entity,
  attribute: attribute,
  options?: options
): Promise<ReturnTypes | void> {
  try {
    const res = await fetch(
      `https://itunes.apple.com/search?term=${encodeURI(
        name
      )}&entity=${entity}&attribute=${attribute}&limit=${
        options.limit ?? "1"
      }&lang=${options.language ?? "en"}&country=${options.country ?? "US"}`
    );

    const json: ReturnTypes = await res.json();

    return json;
  } catch (e: any) {
    const errorTouse: Error = e;
    const { message, name, stack } = errorTouse;

    console.log({ message, name, stack });
  }
}
