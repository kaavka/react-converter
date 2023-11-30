export interface LatestResponse {
  "success": boolean,
  "terms": string,
  "privacy": string,
  "timestamp": number,
  "date": string,
  "base": string,
  "rates": {
    [key: string]: number;
  }
}
