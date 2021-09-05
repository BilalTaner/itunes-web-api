"use strict";

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

export interface options {
  limit?: number;
  language?: string;
  country?: string;
}

export interface MusicResult {
  wrapperType: string;
  kind: string;
  artistId: number;
  collectionId: number;
  trackId: number;
  artistName: string;
  collectionName: string;
  trackName: string;
  collectionCensoredName: string;
  trackCensoredName: string;
  artistViewUrl: string;
  collectionViewUrl: string;
  trackViewUrl: string;
  previewUrl: string;
  artworkUrl30: string;
  artworkUrl60: string;
  artworkUrl100: string;
  collectionPrice: number;
  trackPrice: number;
  releaseDate: Date;
  collectionExplicitness: string;
  trackExplicitness: string;
  discCount: number;
  discNumber: number;
  trackCount: number;
  trackNumber: number;
  trackTimeMillis: number;
  country: string;
  currency: string;
  primaryGenreName: string;
  contentAdvisoryRating: string;
  isStreamable: boolean;
}

export interface MusicVideoResult {
  wrapperType: string;
  kind: string;
  artistId: number;
  trackId: number;
  artistName: string;
  trackName: string;
  trackCensoredName: string;
  artistViewUrl: string;
  trackViewUrl: string;
  previewUrl: string;
  artworkUrl30: string;
  artworkUrl60: string;
  artworkUrl100: string;
  collectionPrice: number;
  trackPrice: number;
  releaseDate: Date;
  collectionExplicitness: string;
  trackExplicitness: string;
  trackTimeMillis: number;
  country: string;
  currency: string;
  primaryGenreName: string;
  contentAdvisoryRating: string;
}

export interface ArtistResult {
  wrapperType: string;
  artistType: string;
  artistName: string;
  artistLinkUrl: string;
  artistId: number;
  primaryGenreName: string;
  primaryGenreId: number;
}

export interface AlbumResult {
  wrapperType: string;
  collectionType: string;
  artistId: number;
  collectionId: number;
  amgArtistId: number;
  artistName: string;
  collectionName: string;
  collectionCensoredName: string;
  artistViewUrl: string;
  collectionViewUrl: string;
  artworkUrl60: string;
  artworkUrl100: string;
  collectionPrice: number;
  collectionExplicitness: string;
  contentAdvisoryRating: string;
  trackCount: number;
  copyright: string;
  country: string;
  currency: string;
  releaseDate: Date;
  primaryGenreName: string;
}

export interface SoftwareResult {
  screenshotUrls: string[];
  ipadScreenshotUrls: string[];
  appletvScreenshotUrls: any[];
  artworkUrl60: string;
  artworkUrl512: string;
  artworkUrl100: string;
  artistViewUrl: string;
  supportedDevices: string[];
  advisories: string[];
  isGameCenterEnabled: boolean;
  features: string[];
  kind: string;
  minimumOsVersion: string;
  trackCensoredName: string;
  languageCodesISO2A: string[];
  fileSizeBytes: string;
  sellerUrl: string;
  formattedPrice: string;
  contentAdvisoryRating: string;
  averageUserRatingForCurrentVersion: number;
  userRatingCountForCurrentVersion: number;
  averageUserRating: number;
  trackViewUrl: string;
  trackContentRating: string;
  trackId: number;
  trackName: string;
  genreIds: string[];
  releaseDate: Date;
  sellerName: string;
  primaryGenreName: string;
  isVppDeviceBasedLicensingEnabled: boolean;
  currentVersionReleaseDate: Date;
  releaseNotes: string;
  primaryGenreId: number;
  currency: string;
  description: string;
  artistId: number;
  artistName: string;
  genres: string[];
  price: number;
  bundleId: string;
  version: string;
  wrapperType: string;
  userRatingCount: number;
}

export interface MovieResult {
  wrapperType: string;
  kind: string;
  collectionId: number;
  trackId: number;
  artistName: string;
  collectionName: string;
  trackName: string;
  collectionCensoredName: string;
  trackCensoredName: string;
  collectionArtistId: number;
  collectionArtistViewUrl: string;
  collectionViewUrl: string;
  trackViewUrl: string;
  previewUrl: string;
  artworkUrl30: string;
  artworkUrl60: string;
  artworkUrl100: string;
  collectionPrice: number;
  trackPrice: number;
  trackRentalPrice: number;
  collectionHdPrice: number;
  trackHdPrice: number;
  trackHdRentalPrice: number;
  releaseDate: Date;
  collectionExplicitness: string;
  trackExplicitness: string;
  discCount: number;
  discNumber: number;
  trackCount: number;
  trackNumber: number;
  trackTimeMillis: number;
  country: string;
  currency: string;
  primaryGenreName: string;
  contentAdvisoryRating: string;
  shortDescription: string;
  longDescription: string;
  hasITunesExtras: boolean;
}

export interface EbookResult {
  artworkUrl60: string;
  artworkUrl100: string;
  artistViewUrl: string;
  trackCensoredName: string;
  fileSizeBytes: number;
  formattedPrice: string;
  trackViewUrl: string;
  artistIds: number[];
  genreIds: string[];
  releaseDate: Date;
  currency: string;
  description: string;
  artistId: number;
  artistName: string;
  genres: string[];
  price: number;
  trackId: number;
  trackName: string;
  kind: string;
  averageUserRating: number;
  userRatingCount: number;
}

export interface VoiceBookResult {
  artworkUrl60: string;
  artworkUrl100: string;
  artistViewUrl: string;
  trackCensoredName: string;
  fileSizeBytes: number;
  formattedPrice: string;
  trackViewUrl: string;
  artistIds: number[];
  genreIds: string[];
  releaseDate: Date;
  currency: string;
  description: string;
  artistId: number;
  artistName: string;
  genres: string[];
  price: number;
  trackId: number;
  trackName: string;
  kind: string;
  averageUserRating: number;
  userRatingCount: number;
}

export interface PodcastResult {
  wrapperType: string;
  kind: string;
  artistId: number;
  collectionId: number;
  trackId: number;
  artistName: string;
  collectionName: string;
  trackName: string;
  collectionCensoredName: string;
  trackCensoredName: string;
  artistViewUrl: string;
  collectionViewUrl: string;
  feedUrl: string;
  trackViewUrl: string;
  artworkUrl30: string;
  artworkUrl60: string;
  artworkUrl100: string;
  collectionPrice: number;
  trackPrice: number;
  trackRentalPrice: number;
  collectionHdPrice: number;
  trackHdPrice: number;
  trackHdRentalPrice: number;
  releaseDate: Date;
  collectionExplicitness: string;
  trackExplicitness: string;
  trackCount: number;
  country: string;
  currency: string;
  primaryGenreName: string;
  artworkUrl600: string;
  genreIds: string[];
  genres: string[];
}

export type MusicReturn = {
  resultCount: number;
  results: MusicResult[];
};

export type MusicVideoReturn = {
  resultCount: number;
  results: MusicVideoResult[];
};

export type ArtistReturn = {
  resultCount: number;
  results: ArtistResult[];
};

export type AlbumReturn = {
  resultCount: number;
  results: AlbumResult[];
};

export type SoftwareReturn = {
  resultCount: number;
  results: SoftwareResult[];
};

export type MovieReturn = {
  resultCount: number;
  results: MovieResult[];
};

export type EbookReturn = {
  resultCount: number;
  results: EbookResult[];
};

export type VoiceBookReturn = {
  resultCount: number;
  results: VoiceBookResult[];
};

export type PodcastReturn = {
  resultCount: number;
  results: PodcastResult[];
};

export type AllReturn = {
  resultCount: number;
  results: [any: {}];
};
