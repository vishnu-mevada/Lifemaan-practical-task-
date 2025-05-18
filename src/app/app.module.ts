import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Error403Component } from './components/sessions/403.component';
import { Error404Component } from './components/sessions/404.component';
import { Error500Component } from './components/sessions/500.component';
import { SharedModule } from './shared/shared.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AboutComponent } from './components/about/about.component';
import { RoleGuard } from './shared/utils/role-guard.guard';

@NgModule({
  declarations: [
    AppComponent,
    Error403Component,
    Error404Component,
    Error500Component,
    DashboardComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    SharedModule,
  ],
  providers: [RoleGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
