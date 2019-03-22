import { NgModule } from '@angular/core';

import { ZdCfExampleSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [ZdCfExampleSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [ZdCfExampleSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class ZdCfExampleSharedCommonModule {}
