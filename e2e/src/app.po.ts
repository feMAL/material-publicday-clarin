import { browser, by, element, ElementArrayFinder } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  /**
   *  Tools para URL  -->  /home/lists
   */

  getTitleText(): Promise<string> {
    return element(by.css('.app_name')).getText() as Promise<string>;
  }

  getPublicsDays(): Promise<number> {
    return element.all(by.css('.mat-cell.mat-column-motivo'))
                  .then(items => items.length ) as Promise<number> ;
  }

  getSubjectFromPublicDay(): Promise<string>{
    return element(by.css('.mat-cell.mat-column-motivo')).getText() as Promise<string>;
  }

  getEditButton( doSomething?:boolean ): Promise<string>{
    if(doSomething){
      element(by.css('.mat-cell .material-icons')).click();
      return element(by.css('input[name=motivo]')).getAttribute('value') as Promise<string>;
    }else{
      return element(by.css('.mat-cell .material-icons')).getText() as Promise<string> ;
    }
    
  }


}
