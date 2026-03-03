import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { AppRoutingModule } from './app/app-routing-module';
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(App, {
  providers: [
    provideHttpClient(),
    importProvidersFrom(AppRoutingModule)
  ]
}).catch(err => console.error(err));
