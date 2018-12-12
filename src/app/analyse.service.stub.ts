import { Injectable } from "@angular/core";

import { Http } from "@angular/http";

import {
  HeadlineAnalysisRequest,
  HeadlineAnalysisResponse,
  SCORE_ENDPOINT
} from "./analyse.service";

const SUGGESTED_KEYWORDS = [
  "bond",
  "brexit",
  "climbing",
  "deal",
  "drop",
  "eu",
  "government",
  "jeopardy",
  "mays",
  "ministers",
  "plan",
  "resign",
  "resignations",
  "senior",
  "stocks",
  "throw",
  "turmoil",
  "uk",
  "uks",
  "yields"
];

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
      score: Math.round(
        await this.http
          .post(SCORE_ENDPOINT, input.headline)
          .toPromise()
          .then(x => x.json() as number)
      ),
      suggestedKeywords: SUGGESTED_KEYWORDS.filter(
        x => contains(input.headline, x) === false
      )
    };
  }
}

function contains(string: string, value: string) {
  return string.toLowerCase().includes(value.toLowerCase());
}
