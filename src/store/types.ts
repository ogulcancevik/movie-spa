
export interface ISearchResponse<T> {
  Search: T[]
  totalResults: number
  Response: string
}

export interface IinitialState {
  activeQuery: IActiveQuery;
  searchData: ISearchResponse<ISearch[]>;
  selectedData: ISearch;
  selectedId: string;
}

export interface IActiveQuery {
  s?: string;
  page?: number;
  type?: string;
  y?: string;
}

export interface ISearch {
  Title: string
  Year: string
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Poster: string
  Ratings: IRating[]
  Metascore: string
  imdbRating: string
  imdbVotes: string
  imdbID: string
  Type: string
  DVD: string
  BoxOffice: string
  Production: string
  Website: string
  Response: string
}

export interface IRating {
  Source: string
  Value: string
}