import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule  } from '@angular/fire'
import { AngularFireDatabaseModule  } from '@angular/fire/database'


import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { TodoComponent } from './todo/todo.component';
import { ListsComponent } from './lists/lists.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { NavbarComponent } from './navbar/navbar.component'
import { TodoService } from './todo/shared/todo.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    ListsComponent,
    ButtonsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
