import { Effects } from './effects';
import { indexName } from './index.config';
import { reducers } from './reducers';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

@NgModule({
	imports: [CommonModule, StoreModule.forFeature(indexName, reducers), EffectsModule.forFeature(Effects)],
	providers: []
})
export class IndexModule {}
