import { HomeRoutingModule } from './home.routing.module';
import { HomeComponent } from './components/home.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        HomeRoutingModule,
        SharedModule
    ],
    exports: [],
    providers: [],
    entryComponents: [HomeComponent]
})
export class HomeModule {}