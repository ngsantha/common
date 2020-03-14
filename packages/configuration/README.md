# Configuration

Provides dynamic application configuration capability. Source of configuration is
plain JSON that can be loaded via http request on startup when on client side or
required by node.js module system on server side.

Configuration JSON can be later substituted via Azure DevOps deployments to provide environment
specific values. More about this topic [here](https://docs.microsoft.com/en-us/azure/devops/pipelines/tasks/transforms-variable-substitution?view=azure-devops#jsonvarsubs).

## Providing config source

Angular application needs to register `CONFIG_SOURCE` provider that provides raw JSON config.

### Loading config in browser

Use `fetchConfiguration` function to load config, transform it to `CONFIG_SOURCE` provider and
pass this provider to the application via `platformBrowserDynamic` argument.

```typescript
import { fetchConfiguration } from '@ngsantha/configuration';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

fetchConfiguration('/assets/config.json').then(configProvider => {
  platformBrowserDynamic([configProvider]).bootstrapModule(AppModule)
    .catch(err => console.error(err));
});
```

### Loading config in server (universal apps)

Similary to browser, provide `CONFIG_SOURCE` to the server side engine and
require the config file.

```typescript
import { CONFIG_SOURCE } from '@ngsantha/configuration';

ngExpressEngine({
    bootstrap: AppServerModule,
    providers: [        
      // Prefer `__non_webpack_require__` or angular.json `externalDependencies`
      // to skip webpack bundling of config.json file to have environment agnostic build.
      { provide: CONFIG_SOURCE, useValue: __non_webpack_require__('./config.json') } 
    ]
});
```

## Getting values from config

To access value from config use `AppConfiguration` service.

```typescript
import { AppConfiguration } from '@ngsantha/configuration';

export class FooService {
    constructor(private readonly config: AppConfiguration) {}

    run() {
        // Optionally specify second argument fallback value in case
        // when config does not contain provided key/path. 
        if (this.config.get<boolean>('debug', false)) {
            console.log('running');
        }

        // Use dot notation to access nested properties
        const clientId = this.config.get<string>('oauth.clientId');
    }
}
```
