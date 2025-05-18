import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { ToastrModule } from 'ngx-toastr';
import { ErrorCodeComponent, HeaderComponent, SidebarComponent } from './components';
import { HttpClientModule } from '@angular/common/http';

const MODULES: any[] = [
  CommonModule,
  RouterModule,
  ReactiveFormsModule,
  FormsModule,
  MaterialModule,
  ToastrModule,
  HttpClientModule
];
const COMPONENTS: any[] = [
  ErrorCodeComponent,
  HeaderComponent,
  SidebarComponent,
];
const DIRECTIVES: any[] = [];
const PIPES: any[] = [];

@NgModule({
  imports: [...MODULES, ...COMPONENTS, ...DIRECTIVES, ...PIPES],
  exports: [...MODULES, ...COMPONENTS, ...DIRECTIVES, ...PIPES],
  declarations: [],
})
export class SharedModule {}
