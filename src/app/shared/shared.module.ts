import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { UIBundleModule } from '../modules/ui';
import { PageNotFoundComponent } from './components/';
import { WebviewDirective } from './directives/';

@NgModule({
  declarations: [PageNotFoundComponent, WebviewDirective],
  imports: [CommonModule, TranslateModule, FormsModule, UIBundleModule],
  exports: [TranslateModule, WebviewDirective, FormsModule, UIBundleModule]
})
export class SharedModule {}
