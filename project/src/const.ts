import { City } from './types/city';
import { Rating } from './types/offer';
import { Star } from './types/review';

export enum AppRoute
{
  Main = '/',
  Login = '/login',
  Room = '/offer',
  RoomById = '/offer/:id'
}

export enum AuthorizationStatus
{
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export const enum UrlMarker {
  UrlMarkerDefault = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg',
  UrlMarkerCurrent = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg',
}

export const enum ZoomMap {
  ZoomMapGlobal = 12,
  ZoomMapRoom = 13,
}

export const LAYER_MAP = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
export const ATTRIBUTE_LAYER_MAP = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

export const enum RequridSymbolCont {
  MinRequridSymbolCont = 50,
  MaxRequridSymbolCont = 300,
}

export const REVIEW_ITEMS_COUNT = 10;
export const ONE_STAR_WIDTH = 20;
export const NEAR_PLACES_COUNT = 3;
export const GALLERY_ITEMS_COUNT = 6;

export enum OrderOffer
{
  Popular = 1,
  LowToHighPrice = 2,
  HighToLowPrice = 3,
  TopRatedFirst = 4
}

export const OrderOffers =
[
  {
    key: OrderOffer.Popular,
    title: 'Popular'
  },
  {
    key: OrderOffer.LowToHighPrice,
    title: 'Price: low to high'
  },
  {
    key: OrderOffer.HighToLowPrice,
    title: 'Price: high to low'
  },
  {
    key: OrderOffer.TopRatedFirst,
    title: 'Top rated first'
  },
];

export const DEFAULT_ORDER_OFFERS = OrderOffer.Popular;


export const BACKEND_URL = 'https://11.react.pages.academy/six-cities-simple';
export const REQUEST_TIMEOUT = 5000;
export const AUTH_TOKEN_KEY_NAME = 'six-cities-2200573';

export enum APIRoute {
  Hotels = '/hotels',
  HotelById = '/hotels/:id',
  HotelsNearby = '/hotels/:id/nearby',
  Comments = '/comments/:id',
  Login = '/login',
  Logout = '/logout',
}

export const DEFAULT_CITY = 'Paris';

export const citys: City[] =
[{
  name: 'Paris',
  location: {
    latitude: 48.85,
    longitude: 2.35,
    zoom: 10
  }
},
{
  name: 'Cologne',
  location: {
    latitude: 50.93,
    longitude: 6.95,
    zoom: 10
  }
},
{
  name: 'Brussels',
  location: {
    latitude: 50.84,
    longitude: 4.34,
    zoom: 10
  }
},
{
  name: 'Amsterdam',
  location: {
    latitude: 52.374,
    longitude: 4.88,
    zoom: 10
  }
},
{
  name: 'Hamburg',
  location: {
    latitude: 53.55,
    longitude: 10.00,
    zoom: 10
  }
},
{
  name: 'Dusseldorf',
  location: {
    latitude: 51.22,
    longitude: 6.77,
    zoom: 10
  }
},
];

export const stars: Star[] =
[
  {
    key: '02202d05-a1f3-443c-9e26-77c5b24e0cba',
    value: Rating.Five,
    description: 'perfect'
  },
  {
    key: '1c387cb7-e89d-4b57-96ba-1e002efdb2af',
    value: Rating.Four,
    description: 'good'
  },
  {
    key: '37aa1b4d-c277-4e67-a93b-58d8106aea0f',
    value: Rating.Three,
    description: 'not bad'
  },
  {
    key: '5b6315da-94ad-46a8-ac00-813a9d06aae0',
    value: Rating.Two,
    description: 'badly'
  },
  {
    key: '00aa67ca-8bf3-436e-bbca-741572817c6f',
    value: Rating.One,
    description: 'terribly'
  },
];

export enum NameSpace {
  OfferSearchData = 'OFFER_SEARCH_DATA',
  OfferSearchProcess = 'OFFER_SEARCH_PROCESS',
  OfferRoomData = 'OFFER_ROOM_DATA',
  User = 'USER'
}
