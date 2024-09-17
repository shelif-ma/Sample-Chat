export interface ResponseEntry {
  pattern: RegExp;
  response: string;
}

export interface Responses {
  [key: string]: ResponseEntry;
}
