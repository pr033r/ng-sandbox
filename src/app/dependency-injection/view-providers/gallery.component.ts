import { Component, OnInit } from '@angular/core';
import { GalleryLoggerService } from './gallery-logger.service';

@Component({
  selector: 'ng-sandbox-gallery',
  template: `
    <div class="gallery-wrap">
      <h1 class="gallery-wrapper-text">Gallery [view providers]</h1>
      <div class="gallery-content">
        <ng-content></ng-content>
        <hr>
        It's usable only in components (because 'View' in the 'viewProvider' 
        doesn't have any element except the components). So if we use 'viewProviders'
        except of 'providers', the services provided through this way will be 
        <b>visible</b> for the 'view' of the current component - <b>not outside</b>.
        <br>
        It's useful for example in the content-projection, when for the <u>ng-content</u>
        is the service provided in 'viewProviders' <b>invisible</b>. Because into 
        ng-content is projecting component from <b>'outside'</b>. There's a rule, 
        that where is the component declared (means in the template it's selected
        through component's selector), there is also her view - so it doesn't 
        matter where it is rendered after all - which is exactly content-projection.
        <pre>
          @Component(&#x7b;
            selector: 'ng-sandbox-gallery',
            template: \`
              &lt;div class="gallery-wrap"&gt;
                &lt;h1 class="gallery-wrapper-text"&gt;Gallery [view providers]&lt;/h1&gt;
                  &lt;div class="gallery-content"&gt;
                  &lt;<b>ng-content</b>&gt;&lt;<b>/ng-content</b>&gt;
                &lt;/div&gt;
              &lt;/div&gt;\`,
            styles: &#091;&#092;,
            <b>viewProviders</b>: &#091;GalleryLoggerService&#092;
          &#125;)
        </pre>
      </div>
    </div>`,
  styles: [],
  viewProviders: [GalleryLoggerService]
})
export class GalleryComponent implements OnInit {
  constructor(private logger: GalleryLoggerService) {
  }

  ngOnInit() {
    this.logger.log('GalleryComponent initialization...');
  }
}
