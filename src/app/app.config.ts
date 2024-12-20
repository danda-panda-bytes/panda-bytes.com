import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { provideNgxDcNavbarService } from '@devcrate/ngx-dc-navbar';
import { NgxDcModalService, provideNgxDcModalService } from '@devcrate/ngx-dc-utils';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(),
    provideNgxDcNavbarService(),
    NgxDcModalService,
    provideNgxDcModalService()
  ]
};
