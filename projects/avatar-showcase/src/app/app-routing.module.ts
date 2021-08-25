import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvatarVisualComponent } from './visual/avatar/avatar-visual.component';
import { VisualComponent } from './visual/visual.component';

const routes: Routes = [
  {
    path: '',
    component: VisualComponent
  },
  {
    path: 'visual/avatar',
    component: AvatarVisualComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
