import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Validar titulo del App', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Clarín');
  });

  it('Validar datos del Back-End', () => {
    page.navigateTo();
    expect(page.getPublicsDays()).toBeGreaterThan(2);
  });

  it('Acceder a Modificar a un Feriado', ()=> {
    page.navigateTo();

    let motivo = page.getSubjectFromPublicDay();

    expect(page.getEditButton()).toBe('create');

    expect(page.getEditButton(true)).toBe(motivo);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
