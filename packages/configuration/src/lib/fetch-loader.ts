import { StaticProvider } from '@angular/core';
import { CONFIG_SOURCE } from './tokens';

export function fetchConfiguration(uri: string): Promise<StaticProvider> {
  return fetch(uri)
    .then(body => body.json())
    .then(useValue => ({
      provide: CONFIG_SOURCE,
      useValue
    }));
}
