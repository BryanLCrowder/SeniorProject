import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CrewsComponent } from './crews/crews.component';
import { MessagesComponent } from './messages/messages.component';
import { FriendListsComponent } from './friends/friend-lists/friend-lists.component';
import { AuthGuard } from './_guards/auth.guard';
import { FriendDetailComponent } from './friends/friend-detail/friend-detail.component';
import { FriendDetailResolver } from './_resolvers/friend-detail.resolver';
import { FriendListsResolver } from './_resolvers/friend-lists.resolver';
import { MemberEditComponent } from './friends/member-edit/member-edit.component';
import { MemberEditResolver } from './_resolvers/member-edit.resolver';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';
import { ListResolver } from './_resolvers/list.resolver';
import { MessagesResolver } from './_resolvers/messages.resolver';

export const appRoutes: Routes = [
    { path : '', component: HomeComponent},
    {
      path: '',
      runGuardsAndResolvers: 'always',
      canActivate: [AuthGuard],
      children: [
        {path: 'crews', component: CrewsComponent,
          resolve: {users: ListResolver}},
        {path: 'messages', component: MessagesComponent,
          resolve: {messages: MessagesResolver}},
        {path: 'friends', component: FriendListsComponent,
          resolve: {users: FriendListsResolver}},
        {path: 'friends/:id', component: FriendDetailComponent,
          resolve: {user: FriendDetailResolver}},
        {path: 'member/edit', component: MemberEditComponent,
        resolve: {user: MemberEditResolver}, canDeactivate: [PreventUnsavedChanges]},
      ]
    },
    { path : '**', redirectTo: 'home', pathMatch: 'full'}
];
