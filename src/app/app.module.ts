import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/app.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { UserDetailPageComponent } from './pages/user-detail-page/user-detail-page.component';
import { PostsPageComponent } from './pages/posts-page/posts-page.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { PostDetailPageComponent } from './pages/post-detail-page/post-detail-page.component';


const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {
        path: '', redirectTo: 'users', pathMatch: 'full'
      },
      {
        path: 'users', component: UsersPageComponent, children: [
          {
            path: ':id', component: UserDetailPageComponent
          }
        ]
      },
      {
        path: 'posts', component: PostsPageComponent, children: [
          {
            path: ':id', component: PostDetailPageComponent
          }
        ]
      }
    ]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    UserDetailsComponent,
    PostsPageComponent,
    HeaderComponent,
    MainLayoutComponent,
    UsersPageComponent,
    PostsComponent,
    PostComponent,
    UserDetailPageComponent,
    PostDetailsComponent,
    PostDetailPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
