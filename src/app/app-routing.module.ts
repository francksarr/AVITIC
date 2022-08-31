import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginPage } from './login/login.page';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'login',
    
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'accueil',
    loadChildren: () => import('./accueil/accueil.module').then( m => m.AccueilPageModule)
  },
  {
    path: 'profile-utilisateur',
    loadChildren: () => import('./profile-utilisateur/profile-utilisateur.module').then( m => m.ProfileUtilisateurPageModule)
  },
  {
    path: 'clients',
    loadChildren: () => import('./clients/clients.module').then( m => m.ClientsPageModule)
  },
  {
    path: 'inscription',
    loadChildren: () => import('./inscription/inscription.module').then( m => m.InscriptionPageModule)
  },
  {
    path: 'edit-clients/:idclient',
    loadChildren: () => import('./edit-clients/edit-clients.module').then( m => m.EditClientsPageModule)
  },
  {
    path: 'add-clients',
    loadChildren: () => import('./add-clients/add-clients.module').then( m => m.AddClientsPageModule)
  },
  {
    path: 'sujets',
    loadChildren: () => import('./sujets/sujets.module').then( m => m.SujetsPageModule)
  },
  {
    path: 'poulailler/:idsujet',
    loadChildren: () => import('./poulailler/poulailler.module').then( m => m.PoulaillerPageModule)
  },
  {
    path: 'calendrier-pondeuse',
    loadChildren: () => import('./calendrier-pondeuse/calendrier-pondeuse.module').then( m => m.CalendrierPondeusePageModule)
  },
  {
    path: 'calendrier-chaire',
    loadChildren: () => import('./calendrier-chaire/calendrier-chaire.module').then( m => m.CalendrierChairePageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
