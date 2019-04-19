export interface PeopleModel {
  name: string;
  birth_year: string;
  homeworld: string;
  films: string[];
  id?: string;
  url: string;
  species: string[];
  speciesList: string[];
  filmsList: string[];
}
export interface PeopleApiResponse {
  results: PeopleModel[];
}
