import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";
import { AboutMeComponent } from "./components/about-me/about-me.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { ContactComponent } from "./components/contact/contact.component";

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'aboutMe', component: AboutMeComponent},
    {path: 'aboutme', component: AboutMeComponent},
    {path: 'skills', component: SkillsComponent},
    {path: 'contact', component: ContactComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);