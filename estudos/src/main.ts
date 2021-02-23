import { enableProdMode } from 'arg/src/node_modules/arg/src/node_modules/@angular/core';
import { platformBrowserDynamic } from 'arg/src/node_modules/arg/src/node_modules/@angular/platform-browser-dynamic';

import { AppModule } from 'estudos/src/app/app.module';
import { environment } from 'estudos/src/environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
