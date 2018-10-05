import {
  expect,
  SkyHostBrowser
} from '@skyux-sdk/e2e';

describe('Avatar', () => {
  beforeEach(() => {
    SkyHostBrowser.get('visual/avatar');
    SkyHostBrowser.setWindowBreakpoint('lg');
  });

  it('should match previous screenshot when image is present', (done) => {
    expect('#screenshot-avatar-img').toMatchBaselineScreenshot(done);
  });

  it('should match previous screenshot when initials are present', (done) => {
    expect('#screenshot-avatar-initials').toMatchBaselineScreenshot(done);
  });
});
