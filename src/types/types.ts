export interface CharacterData {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
}

export interface Response {
  results: CharacterData[];
  pages: number;
}

interface ILocation {
  name: string;
  url: string;
}

export interface IData {
  id: number;
  name: string;
  status: string;
  species: string;
  url: string;
  image: string;
  gender: string;
  episode: string[];
  location: ILocation;
  origin: ILocation;
  type: string;
}
