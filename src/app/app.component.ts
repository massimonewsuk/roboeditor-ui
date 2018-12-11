import { Component } from "@angular/core";
import { AnalyseService, HeadlineAnalysisResponse } from "./analyse.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public content = "";
  public headline = "";
  public isContentSet = false;
  public isAnalysing = false;
  public responses: ResponseViewModel[] = [];
  public error: string | null = null;

  constructor(private analyseService: AnalyseService) {}

  public async analyse() {
    if (!this.content) {
      this.error = "You must set the content";
      return;
    }
    if (!this.headline) {
      this.error = "You must set the headline";
      return;
    }
    if (this.responses.find(x => x.headline === this.headline)) {
      this.error = "You've already tried this headline. Pick a different one.";
      return;
    }
    try {
      this.isAnalysing = true;
      this.isContentSet = true;
      const response = await this.analyseService.getHeadlineAnalysis({
        content: this.content,
        headline: this.headline
      });
      this.error = null;
      this.responses.unshift({
        headline: this.headline,
        ...response
      });
    } catch (e) {
      console.error(e);
      this.error = "There was an error performing analysis. Please try again.";
    } finally {
      this.isAnalysing = false;
    }
  }
}

type ResponseViewModel = HeadlineAnalysisResponse & {
  headline: string;
};
