import { Component } from '@angular/core';

import {
  SkyAvatarSrc
} from '../avatar-src';

@Component({
  selector: 'sky-test-cmp',
  templateUrl: './avatar.component.fixture.html'
})
export class AvatarTestComponent {
  public src: SkyAvatarSrc;

  public name: string;

  public size: 'large' | 'medium' | 'small';
}
