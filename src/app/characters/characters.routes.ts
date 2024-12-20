import { Routes } from "@angular/router";
import { CocoTheCuriousCatComponent } from "./coco-the-curious-cat/coco-the-curious-cat.component";
import { LunaTheLovelyLemurComponent } from "./luna-the-lovely-lemur/luna-the-lovely-lemur.component";
import { PandaComponent } from "./panda/panda.component";

export const CHARACTERS_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'panda',
    pathMatch: 'full',
  },
  {
    path: 'panda',
    component: PandaComponent,
    data: { title: "Panda" },
  },
  {
    path: 'coco',
    component: CocoTheCuriousCatComponent,
    data: { title: "Coco the Curious Cat" },
  },
  {
    path: 'luna',
    component: LunaTheLovelyLemurComponent,
    data: { title: "Luna the Lovely Lemur" },
  }
];
