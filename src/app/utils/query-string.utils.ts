export interface Query {
  [key: string]: string
}

export class QueryStringUtils {
  public static parse(queryString: string): Query {
    const queryArray = queryString.split('&');
    const queryObj = {};

    queryArray.forEach(section => {
      const [key, value] = section.split('=');
      queryObj[key] = value;
    })

    return queryObj;
  }

  public static stringify(query: Query): string {
    return Object.entries(query).reduce((queryString, pair) =>
      queryString += `${pair[0]}=${pair[1]}`
    , '');
  }
}
