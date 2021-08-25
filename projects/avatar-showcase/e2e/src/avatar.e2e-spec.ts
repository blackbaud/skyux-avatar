import {
  expect,
  SkyHostBrowser,
  SkyVisualThemeSelector
} from '@skyux-sdk/e2e';

describe('Avatar', () => {
  let currentTheme: string;
  let currentThemeMode: string;

  async function selectTheme(theme: string, mode: string): Promise<void> {
    currentTheme = theme;
    currentThemeMode = mode;

    return SkyVisualThemeSelector.selectTheme(theme, mode);
  }

  function getScreenshotName(name: string): string {
    if (currentTheme) {
      name += '-' + currentTheme;
    }

    if (currentThemeMode) {
      name += '-' + currentThemeMode;
    }

    return name;
  }

  function validateImage(done: DoneFn): void {
    expect('#screenshot-avatar-img').toMatchBaselineScreenshot(done, {
      screenshotName: getScreenshotName('avatar')
    });
  }

  function validateIinitials(done: DoneFn): void {
    expect('#screenshot-avatar-initials').toMatchBaselineScreenshot(done, {
      screenshotName: getScreenshotName('avatar-initials')
    });
  }

  function validateSizes(done: DoneFn): void {
    expect('#screenshot-avatar-sizes').toMatchBaselineScreenshot(done, {
      screenshotName: getScreenshotName('avatar-sizes')
    });
  }

  beforeEach(async () => {
    await SkyHostBrowser.get('visual/avatar');
    await SkyHostBrowser.setWindowBreakpoint('lg');
  });

  it('should match previous screenshot when image is present', (done) => {
    validateImage(done);
  });

  it('should match previous screenshot when initials are present', (done) => {
    validateIinitials(done);
  });

  it('should match previous screenshot of various avatar sizes', (done) => {
    validateSizes(done);
  });

  describe('when modern theme', () => {
    beforeEach(async () => {
      await selectTheme('modern', 'light');
    });

    it('should match previous screenshot when image is present', (done) => {
      validateImage(done);
    });

    it('should match previous screenshot when initials are present', (done) => {
      validateIinitials(done);
    });

    it('should match previous screenshot of various avatar sizes', (done) => {
      validateSizes(done);
    });
  });

  describe('when modern theme in dark mode', () => {
    beforeEach(async () => {
      await selectTheme('modern', 'dark');
    });

    it('should match previous screenshot when image is present', (done) => {
      validateImage(done);
    });

    it('should match previous screenshot when initials are present', (done) => {
      validateIinitials(done);
    });

    it('should match previous screenshot of various avatar sizes', (done) => {
      validateSizes(done);
    });
  });
});
