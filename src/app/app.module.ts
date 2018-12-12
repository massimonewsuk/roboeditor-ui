import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HttpModule } from "@angular/http";
import { AnalyseService, AnalyseServiceImplementation } from "./analyse.service";
import { AnalyseServiceStub } from "./analyse.service.stub";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpModule, FormsModule],
  providers: [
    {
      provide: AnalyseService,
      useClass: AnalyseServiceImplementation
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
