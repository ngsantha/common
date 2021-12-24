import { Inject, Injectable } from '@angular/core';
import { CONFIG_SOURCE } from './tokens';

@Injectable({ providedIn: 'root' })
export class AppConfiguration {

  constructor(@Inject(CONFIG_SOURCE) private readonly config: any) {}

  /**
   * Returns value from a config file.
   * Optionally returns the provided fallback value
   * when the path is not defined in the config file.
   *
   * @example
   * CONFIG_SOURCE: {
   *   debug: false,
   *   api: { endpoint: 'http://localhost:5000 }
   * }
   *
   * get<boolean>('debug') // false
   * get<string>('api.endpoint') // 'http://localhost:5000'
   * get<string>('some.undefined.path', 'fallbackValue') // 'fallbackValue'
   */
  get<T>(key: string, fallback?: T): T {
    const path = key.split('.');
    let target = this.config;

    for (const key of path) {
      target = target[key];

      if (target == null) {
        break;
      }
    }

    return target ?? fallback;
  }
}
