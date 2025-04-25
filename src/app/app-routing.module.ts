import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataFormComponent } from './components/data-form/data-form.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { ParentComponent } from './components/parent-child/parent/parent.component';
import { ChildComponent } from './components/parent-child/child/child.component';
import { ApiDataComponent } from './components/api-data/api-data.component';

const routes: Routes = [
{path: "add-data", component: DataFormComponent},
{path: "list", component: DataTableComponent},
{path: "parent-comp", component: ParentComponent},
{path: "child-comp", component: ChildComponent},
{path: "api-comp", component: ApiDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
