import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

// Componentes
import { HomeComponent } from "./components/home/home.component";

const routes: Routes = [
    // Ruta inicial
    // TODO: Es el elemento inicial con el que va a iniciar el módulo
    {
        path: '',
        component: HomeComponent
    }
];

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


