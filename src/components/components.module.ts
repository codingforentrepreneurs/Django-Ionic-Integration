import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from 'ionic-angular';
import { StatusComponent } from './status/status';
import { StatusDetailComponent } from './status-detail/status-detail';
import { AuthComponent } from './auth/auth';
import { StatusCreateComponent } from './status-create/status-create';
@NgModule({
	declarations: [StatusComponent,
    StatusDetailComponent,
    AuthComponent,
    StatusCreateComponent],
	imports: [
        BrowserModule,   
        IonicModule
    ],
	exports: [StatusComponent,
    StatusDetailComponent,
    AuthComponent,
    StatusCreateComponent]
})
export class ComponentsModule {}
