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

@Injectable({
  providedIn: "root"
})
export class AnalyseServiceImplementation implements AnalyseService {
  constructor(private http: Http) {}

  async getHeadlineAnalysis(
    input: HeadlineAnalysisRequest
  ): Promise<HeadlineAnalysisResponse> {
    throw new Error("Not implemented");
  }
}
