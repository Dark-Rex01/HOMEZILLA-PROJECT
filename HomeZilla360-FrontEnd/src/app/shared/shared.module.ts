import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SearchComponent } from "./components/search/search.component";
import { TopNavComponent } from './components/top-nav/top-nav.component';
import {MenubarModule} from 'primeng/menubar';
import { ButtonModule } from "primeng/button";
import { TieredMenuModule } from 'primeng/tieredmenu';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { DockModule } from "primeng/dock";


@NgModule({
    declarations: [SearchComponent, TopNavComponent, SidebarComponent],
    imports: [
        FormsModule,
        MenubarModule,
        ButtonModule,
        TieredMenuModule,
        CommonModule,
        RouterModule,
        DockModule
    ],
    exports: [SearchComponent, TopNavComponent, SidebarComponent]
})

export class SharedModule {}