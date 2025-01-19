import { Routes } from '@angular/router';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { LoginPageComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DocumentsComponent } from './pages/documents/documents.component';
import { SettingComponent } from './pages/setting/setting.component';
import { GamesComponent } from './pages/games/games.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginPageComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'docs', component: DocumentsComponent },
    { path: 'setting', component: SettingComponent },
    { path: 'games', component: GamesComponent }

];
