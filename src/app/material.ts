import {MatSelectModule, MatOptionModule, MatOption, MatOptionSelectionChange, MatListOption} from '@angular/material';
import {NgModule} from '@angular/core';

@NgModule({
    imports: [ 
        MatSelectModule, 
        MatOptionModule,
        MatOption,
        MatOptionSelectionChange,
        MatListOption,
    ],


    exports: [ 
        MatSelectModule, 
        MatOptionModule,
        MatOption,
        MatOptionSelectionChange,
        MatListOption
    ],
})

export class MaterialModule{ }