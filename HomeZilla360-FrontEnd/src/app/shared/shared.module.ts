import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ButtonModule } from "primeng/button";
import { DockModule } from "primeng/dock";
import { MenubarModule } from 'primeng/menubar';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ToastModule } from "primeng/toast";
import { SearchComponent } from "./components/search/search.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { TopNavComponent } from './components/top-nav/top-nav.component';


@NgModule({
    declarations: [SearchComponent, TopNavComponent, SidebarComponent],
    imports: [
        FormsModule,
        MenubarModule,
        ButtonModule,
        TieredMenuModule,
        CommonModule,
        RouterModule,
        DockModule,
        ToastModule
    ],
    exports: [SearchComponent, TopNavComponent, SidebarComponent]
})

export class SharedModule {}