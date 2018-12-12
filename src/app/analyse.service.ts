import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

export abstract class AnalyseService {
  abstract getHeadlineAnalysis(
    input: HeadlineAnalysisRequest
  ): Promise<HeadlineAnalysisResponse>;
}

export type HeadlineAnalysisRequest = {
  headline: string;
  content: string;
};

export type HeadlineAnalysisResponse = {
  score: number;
  suggestedKeywords: string[];
};

const KEYWORDS_ENDPOINT = "http://localhost:3000/get-headline-score";
const SCORE_ENDPOINT = "";

@Injectable({
  providedIn: "root"
})
export class AnalyseServiceImplementation implements AnalyseService {
  constructor(private http: Http) {}

  async getHeadlineAnalysis(
    input: HeadlineAnalysisRequest
  ): Promise<HeadlineAnalysisResponse> {
    return {
      score: Math.round(Math.random() * 100),
      suggestedKeywords: await this.http
        .post(KEYWORDS_ENDPOINT, input)
        .toPromise()
        .then(x => x.json() as string[])
    };
  }
}
