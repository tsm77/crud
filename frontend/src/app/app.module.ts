import { ListagemComponent } from './modulos/produto/components/listagem/listagem.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { environment } from '../environments/environment';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {ToolbarModule} from 'primeng/toolbar';
import {CardModule} from 'primeng/card';
import {TabViewModule} from 'primeng/tabview';
import {ButtonModule} from 'primeng/button';
import { FormsModule } from '@angular/forms';
import {DialogModule} from 'primeng/dialog';
import { MenuModule } from 'primeng/menu';
import { HeaderComponent } from './components/template/header/header.component';
import { SidebarModule } from 'primeng/sidebar';
import { ConfirmationService, MessageService } from 'primeng/api';
import {SplitterModule} from 'primeng/splitter';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';

import { BlockUIModule } from 'ng-block-ui';
import { MensagensUtil } from './shared/util/mensagens.util';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
    

    ],
    imports: [

        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        SharedModule,
        HttpClientModule,
        MenuModule,
        ToolbarModule,
        CardModule,
        TabViewModule,
        ButtonModule,
        FormsModule,
        DialogModule,
        SidebarModule,
        SplitterModule,
        MessageModule,
        MessagesModule,
        BlockUIModule.forRoot({
            message: MensagensUtil.BLOCKUI_CARREGANDO
          }
        ),

    


    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
         ConfirmationService
    ],

    bootstrap: [AppComponent]
})
export class AppModule { }
