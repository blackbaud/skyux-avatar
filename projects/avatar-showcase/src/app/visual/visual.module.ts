import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AvatarVisualComponent } from './avatar/avatar-visual.component';
import { VisualComponent } from './visual.component';
import { RouterModule } from '@angular/router';
import { SkyAvatarModule } from 'projects/avatar/src/public-api';
import { SkyDocsToolsModule } from '@skyux/docs-tools';



@NgModule({
  declarations: [
    AvatarVisualComponent,
    VisualComponent
  ],
  imports: [
    CommonModule,
    NoopAnimationsModule,
    RouterModule,
    SkyAvatarModule,
    SkyDocsToolsModule
  ]
})
export class VisualModule { }
