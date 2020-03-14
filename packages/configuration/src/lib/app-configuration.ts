import { Inject, Injectable } from '@angular/core';
import { CONFIG_SOURCE } from './tokens';
import * as dotProp from 'dot-prop';

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
    return dotProp.get(this.config, key, fallback);
  }
}
