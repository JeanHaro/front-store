import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

// Componentes
import { BannerComponent } from "./components/banner/banner.component";
import { HomeComponent } from "./components/home/home.component";

// Rutas
import { HomeRoutingModule } from "./home-routing.module";

@NgModule({
    // TODO: Acá estarán los componentes
    declarations: [
        BannerComponent,
        HomeComponent
    ],
    // TODO: El routing se importa
    imports: [
        CommonModule,
        HomeRoutingModule
    ]
})

export class HomeModule {

}

