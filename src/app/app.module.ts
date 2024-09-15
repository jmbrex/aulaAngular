import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ContentComponent } from './content/content.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatMenuModule} from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { ItemSobreComponent } from './content/item-sobre/item-sobre.component';
import { ItemProjetosComponent } from './content/item-projetos/item-projetos.component';
import { ItemFormacaoComponent } from './content/item-formacao/item-formacao.component';
import { ItemExperienciasComponent } from './content/item-experiencias/item-experiencias.component';



@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    ContentComponent,
    ItemSobreComponent,
    ItemProjetosComponent,
    ItemFormacaoComponent,
    ItemExperienciasComponent,
    ContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
