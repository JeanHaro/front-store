// FIXME: PREPARAR EL PROYECTO PARA LAZY LOADING
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

const routes: Routes = [];

@NgModule({
    // TODO: Tiene metadata que son las rutas
    imports: [
        // TODO: Rutas en específico con forChild
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class HomeRoutingModule {

}


