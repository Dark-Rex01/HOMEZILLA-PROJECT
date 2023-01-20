import { NgModule } from "@angular/core";
import { AuthModule } from "./Auth/auth.module";
import { FeatureRoutingModule } from "./features-routing.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
    declarations: [],
    imports: [
        AuthModule,
        FeatureRoutingModule,
        BrowserAnimationsModule,
    ]
})
export class FeaturesModule {}