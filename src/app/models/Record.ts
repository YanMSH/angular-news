export interface BackResponse {
  hits: DataRecord[]
  nbHits: number,
  page: number,
  nbPages: number,
  hitsPerPage: number,
  query: string,
  params: string,
}


export interface DataRecord {
  "created_at": string,
  "title": string,
  "url": null | string,
  "author": string,
  "points": number,
  "story_text": string
  "comment_text": null | string,
  "num_comments": number,
  "story_id": null | string,
  "story_title": null | string,
  "story_url": null | string,
  "parent_id": null | string,
  "created_at_i": number,
  "_tags": string[],
  "objectID": string,
  "_highlightResult": {
    "title": HighlightResult,
    "author": HighlightResult,
    "story_text": HighlightResult
  },
  serial_number: number;
}


export interface HighlightResult {
  "value": string,
  "matchLevel": string,
  "matchedWords": string[]
}
