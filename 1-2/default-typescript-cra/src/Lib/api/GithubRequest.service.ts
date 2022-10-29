import { request } from "@octokit/request";
import { Endpoints } from "@octokit/types";

export type IssueListConfig =
  Endpoints["GET /repos/{owner}/{repo}/issues"]["parameters"];
export type IssueConfig =
  Endpoints["GET /repos/{owner}/{repo}/issues/{issue_number}"]["parameters"];

class GithubRequestService {
  protected requestWithAuth: typeof request;

  constructor(githubToken: string | undefined) {
    if (!githubToken) {
      throw new Error("env를 확인해주세요");
    }
    this.requestWithAuth = request.defaults({
      headers: {
        authorization: `token ${githubToken}`
      }
    });
  }

  async getIssueList(config: IssueListConfig) {
    try {
      const response = await this.requestWithAuth(
        "GET /repos/{owner}/{repo}/issues",
        {
          ...config
        }
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async getIssue(config: IssueConfig) {
    try {
      const response = await this.requestWithAuth(
        "GET /repos/{owner}/{repo}/issues/{issue_number}",
        {
          ...config
        }
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}

export default new GithubRequestService(process.env.REACT_APP_GITHUB_TOKEN);
