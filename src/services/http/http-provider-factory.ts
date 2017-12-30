import { HttpProvider } from './http-provider';

export enum HttpProviderType {
  Xhr = 'Xhr',
  Firebase = 'Firebase',
}

export interface HttpProviderFactory {
  createHttpProvider(providerType: HttpProviderType): HttpProvider;
}
