export type AuhtoriseUser = {
  avatarUrl: string;
  email: string;
  id: number;
  isPro: boolean;
  name: string;
  token: string;
}

export type AuthData = {
  login: string;
  password: string;
}

export type Token = string;
