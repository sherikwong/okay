import crypto from 'crypto-js';

export interface Query {
  [key: string]: string | number;
}

export class QueryStringUtils {
  public static stringify(query): string {
    return Object.entries(query).map(([key, value]) => {
      const string = `${key}=${value}`;
      return crypto.AES.encrypt(string, 'ok');
    }).join('&');
  }
}
