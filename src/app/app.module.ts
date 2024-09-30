import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Widget1Component } from './widgets/widget1/widget1.component';
import { Widget2Component } from './widgets/widget2/widget2.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { ReportsComponent } from './reports/reports.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { HelpComponent } from './help/help.component';
import { LoginComponent } from './login/login.component';
import { ContactSupportComponent } from './contact-support/contact-support.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    NavbarComponent,
    Widget1Component,
    Widget2Component,
    ProfileComponent,
    SettingsComponent,
    ReportsComponent,
    AnalyticsComponent,
    HelpComponent,
    LoginComponent,
    ContactSupportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
