import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { InterpolationBindingComponent } from './interpolation-binding/interpolation-binding.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { StructDirComponent } from './struct-dir/struct-dir.component';
import { AttrDirComponent } from './attr-dir/attr-dir.component';
import { PredefinedPipesComponent } from './predefined-pipes/predefined-pipes.component';
import { MyuppercasePipe } from './pipes/myuppercase.pipe';
import { TwowayBindComponent } from './twoway-bind/twoway-bind.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeesComponent } from './employees/employees.component';
import { HttpClientModule } from '@angular/common/http';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ModelDrivenComponent } from './model-driven/model-driven.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    InterpolationBindingComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    StructDirComponent,
    AttrDirComponent,
    PredefinedPipesComponent,
    MyuppercasePipe,
    TwowayBindComponent,
    EmployeesComponent,
    ParentComponent,
    ChildComponent,
    OneComponent,
    TwoComponent,
    TemplateDrivenComponent,
    ModelDrivenComponent
  ],
  imports: [
    BrowserModule,FormsModule, HttpClientModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
