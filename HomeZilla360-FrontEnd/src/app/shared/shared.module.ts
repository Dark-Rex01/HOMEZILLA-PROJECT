import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SearchComponent } from "./components/search/search.component";
import { TopNavComponent } from './components/top-nav/top-nav.component';
import {MenubarModule} from 'primeng/menubar';
import { ButtonModule } from "primeng/button";
import { TieredMenuModule } from 'primeng/tieredmenu';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";


@NgModule({
    declarations: [SearchComponent, TopNavComponent],
    imports: [
        FormsModule,
        MenubarModule,
        ButtonModule,
        TieredMenuModule,
        CommonModule,
        RouterModule
    ],
    exports: [SearchComponent, TopNavComponent]
})

export class SharedModule {}