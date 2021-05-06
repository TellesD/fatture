import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: "login",
    canActivate: [AuthGuard],
    loadChildren: () =>
      import("./pages/login/login.module").then(m => m.LoginPageModule)
  },
  {
    path: "sign-up",
    canActivate: [AuthGuard],
    loadChildren: () =>
      import("./pages/sign-up/sign-up.module").then(m => m.SignUpPageModule)
  },
  {
    path: 'lancamento',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/lancamento/lancamento.module').then( m => m.lancamentoPageModule)
  },
  {
    path: 'cadastrar-servico',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/cadastrar-servico/cadastrar-servico.module').then( m => m.CadastrarServicoPageModule)
  },
  {
    path: 'cadastrar-grupo',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/cadastrar-grupo/cadastrar-grupo.module').then( m => m.CadastrarGrupoPageModule)
  },
  {
    path: 'add-professional',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/add-professional/add-professional.module').then( m => m.AddProfessionalPageModule)
  },
  {
    path: 'service',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/service-page/service.module').then( m => m.ServicePageModule)
  },
  {
    path: 'faturamento',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/faturamento/faturamento.module').then( m => m.FaturamentoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
