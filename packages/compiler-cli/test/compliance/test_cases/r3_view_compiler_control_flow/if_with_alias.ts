import {Component} from '@angular/core';

@Component({
  template: `
    <div>
      {{message}}
      {#if value(); as alias}{{value()}} as {{alias}}{/if}
    </div>
  `,
})
export class MyApp {
  message = 'hello';
  value = () => 1;
}
