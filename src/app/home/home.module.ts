// FIXME: PREPARAR EL PROYECTO PARA LAZY LOADING
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

// Componentes
import { BannerComponent } from "./components/banner/banner.component";
import { HomeComponent } from "./components/home/home.component";

// Rutas
import { HomeRoutingModule } from "./home-routing.module";

// FIXME: CREANDO UN SHARED MODULE Y CORE MODULE
// Modulos
import { SharedModule } from "../shared/shared.module";

@NgModule({
    // TODO: Acá estarán los componentes
    declarations: [
        BannerComponent,
        HomeComponent
    ],
    // TODO: El routing se importa
    // FIXME: IMPLEMENTACIÓN DEL LAZY LOADING
    imports: [
        CommonModule,
        SharedModule,
        HomeRoutingModule
    ]
})

export class HomeModule {

}

