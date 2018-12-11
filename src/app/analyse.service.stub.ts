import { Injectable } from "@angular/core";

import { Http } from "@angular/http";

import {
  HeadlineAnalysisRequest,
  HeadlineAnalysisResponse
} from "./analyse.service";

const SUGGESTED_KEYWORDS = ["Trump", "May", "Putin", "G20", "MBS"];

@Injectable({
  providedIn: "root"
})
export class AnalyseServiceStub {
  constructor(private http: Http) {}

  async getHeadlineAnalysis(
    input: HeadlineAnalysisRequest
  ): Promise<HeadlineAnalysisResponse> {
    await new Promise(x => setTimeout(x, 1000));
    return {
      score:
        50 +
        SUGGESTED_KEYWORDS.filter(x => contains(input.headline, x)).length * 10,
      suggestedKeywords: SUGGESTED_KEYWORDS.filter(
        x => contains(input.headline, x) === false
      )
    };
  }
}

function contains(string: string, value: string) {
  return string.toLowerCase().includes(value.toLowerCase());
}
