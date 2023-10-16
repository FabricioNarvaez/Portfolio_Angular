import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";
import { AboutMeComponent } from "./components/about-me/about-me.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { ContactComponent } from "./components/contact/contact.component";
import { ErrorComponent } from "./components/error/error.component";
import { ProjectsComponent } from "./components/projects/projects.component";

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'aboutMe', component: AboutMeComponent},
    {path: 'aboutme', component: AboutMeComponent},
    {path: 'skills', component: SkillsComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: '**', component: ErrorComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);