import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StatusComponent } from './status/status';
import { StatusDetailComponent } from './status-detail/status-detail';
@NgModule({
	declarations: [StatusComponent,
    StatusDetailComponent],
	imports: [BrowserModule],
	exports: [StatusComponent,
    StatusDetailComponent]
})
export class ComponentsModule {}
