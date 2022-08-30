// FIXME: PREPARAR EL PROYECTO PARA LAZY LOADING
import { NgModule } from "@angular/core";

// Componentes
import { BannerComponent } from "./components/banner/banner.component";
import { HomeComponent } from "./home.component";

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
        HomeRoutingModule
    ]
})

export class HomeModule {

}

