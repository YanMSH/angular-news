export interface BackResponse {
  hits: DataRecord[]
  nbHits: number,
  page: number,
  nbPages: number,
  hitsPerPage: number,
  exhaustiveNbHits: boolean,
  exhaustiveTypo: boolean,
  exhaustive: {
    nbHits: boolean,
    typo: boolean,
  },
  processingTimeMS: number,
  serverTimeMS: number,
  query: string,
  params: string,
  processingTimingsMS: {
    afterFetch: {
      format?: {
        total: number,
        highlighting?: number,
      },
      total: number
    },
    getIdx?: {
      load: {
        dicts: number,
        total: number
      },
      total: number
    },
    request: {
      roundTrip: number
    },
    total: number
  },
}

export interface DataRecord {
  "created_at": string,
  "title": string | null,
  "url": null | string,
  "author": string,
  "points": number | null,
  "story_text": string | null,
  "comment_text": null | string,
  "num_comments": number | null,
  "story_id": null | number,
  "story_title": null | string,
  "story_url": null | string,
  "parent_id": null | number,
  "created_at_i": number,
  "_tags": string[],
  "objectID": string,
  "_highlightResult": {
    "title"?: HighlightResult,
    "url"?: HighlightResult,
    "author"?: HighlightResult,
    "story_text"?: HighlightResult,
    "comment_text"?: HighlightResult,
    "story_title"?: HighlightResult,
    "story_url"?: HighlightResult,
  },
  serial_number: number;
}


export interface HighlightResult {
  "value": string,
  "matchLevel": string,
  "matchedWords": string[]
}
