import { InjectionToken, NgModule } from '@angular/core';
// import modules
import {
  MatAutocompleteModule, MatButtonModule, MatButtonToggleModule,
  MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule,
  MatDialogModule, MatExpansionModule, MatIconModule, MatInputModule,
  MatListModule, MatMenuModule, MatNativeDateModule, MatProgressSpinnerModule,
  MatRadioModule, MatSelectModule, MatSidenavModule, MatSlideToggleModule,
  MatSliderModule, MatSnackBarModule, MatTableModule, MatTabsModule,
  MatToolbarModule, MatTooltipModule
} from '@angular/material';
// import other imports seperately
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material';
import { MAT_MOMENT_DATE_FORMATS, MatMomentDateModule, MomentDateAdapter } from '@angular/material-moment-adapter';

const MATERIAL_MODULES: any[] = [
  MatAutocompleteModule, MatButtonModule, MatButtonToggleModule,
  MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule,
  MatDialogModule, MatExpansionModule, MatIconModule, MatInputModule,
  MatListModule, MatMenuModule, MatNativeDateModule, MatProgressSpinnerModule,
  MatRadioModule, MatSelectModule, MatSidenavModule, MatSlideToggleModule,
  MatSliderModule, MatSnackBarModule, MatTableModule, MatTabsModule,
  MatToolbarModule, MatTooltipModule
];
const ADDITIONAL_MATERIAL_MODULES: any[] = [
  MatMomentDateModule
];

const CHART_MODULES: any[] = [

];

/**
 * TOAST_DURATION the injection token for the toast message duration
 */
export const TOAST_DURATION = new InjectionToken<number>('TOAST_DURATION');
const toastMessageDuration = 5000;

/**
 * UIBundleModule module that bundles all the used UI modules
 * @class UIBundleModule
 * @classdesc The module imports and re-exports all the UI dependencies,
 * all the used external UI modules should included here.
 */
@NgModule({
  imports: [
    MATERIAL_MODULES,
    ADDITIONAL_MATERIAL_MODULES,
    CHART_MODULES
  ],
  exports: [
    MATERIAL_MODULES,
    CHART_MODULES
  ],
  providers: [
    { provide: TOAST_DURATION, useValue: toastMessageDuration },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS }
  ]
})
export class UIBundleModule {}
