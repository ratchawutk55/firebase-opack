import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { FirebaseComponent } from './components/firebase/firebase.component';
import { MainComponent } from './components/main/main.component';
import { ListComponent } from './components/list/list.component';
import { CategoryComponent } from './components/category/category.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { ProgressComponent } from './components/progress/progress.component';
import { PreviewComponent } from './components/preview/preview.component';
import { LoadingComponent } from './components/loading/loading.component';

const appRoutes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'list/:id', component: ListComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'category/:id', component: CategoryListComponent },
  { path: 'category/:category/:id', component: PreviewComponent },
  { path: 'progress/:id', component: ProgressComponent },
  {
    path: 'heroes',
    component: FirebaseComponent,
    data: { title: 'Heroes List' }
  },
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },
  { path: '**', component: FirebaseComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    FirebaseComponent,
    MainComponent,
    ListComponent,
    CategoryComponent,
    CategoryListComponent,
    ProgressComponent,
    PreviewComponent,
    LoadingComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // for database
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
