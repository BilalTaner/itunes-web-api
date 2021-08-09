"use strict";

export interface options {
  limit: number;
  language?: string;
  country?: string;
}

export type entity =
  | "movie"
  | "album"
  | "allArtist"
  | "podcast"
  | "musicVideo"
  | "mix"
  | "audiobook"
  | "tvSeason"
  | "allTrack";

export type attribute =
  | "actorTerm"
  | "languageTerm"
  | "allArtistTerm"
  | "tvEpisodeTerm"
  | "shortFilmTerm"
  | "directorTerm"
  | "releaseYearTerm"
  | "titleTerm"
  | "featureFilmTerm"
  | "ratingIndex"
  | "keywordsTerm"
  | "descriptionTerm"
  | "authorTerm"
  | "genreIndex"
  | "mixTerm"
  | "allTrackTerm"
  | "artistTerm"
  | "composerTerm"
  | "tvSeasonTerm"
  | "producerTerm"
  | "ratingTerm"
  | "songTerm"
  | "movieArtistTerm"
  | "showTerm"
  | "movieTerm"
  | "albumTerm";

export interface ReturnTypes {
  resultCount: number;
  results: [any: {}];
}
