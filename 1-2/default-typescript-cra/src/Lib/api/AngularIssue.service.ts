import githubIssueApi, {
  IssueConfig,
  IssueListConfig
} from "./GithubRequest.service";

class AngularIssueService {
  public page: number;
  private owner: string;
  private repo: string;
  protected issueListConfig: IssueListConfig;
  protected issueConfig: IssueConfig;

  constructor() {
    this.page = 1;
    this.owner = "angular";
    this.repo = "angular-cli";
    this.issueListConfig = {
      state: "open",
      page: this.page,
      sort: "comments",
      owner: this.owner,
      repo: this.repo
    };
    this.issueConfig = {
      owner: this.owner,
      repo: this.repo,
      issue_number: 0
    };
  }

  getIssueList() {
    return githubIssueApi.getIssueList({
      ...this.issueListConfig
    });
  }

  getIssue(issueNumber: number) {
    return githubIssueApi.getIssue({
      ...this.issueConfig,
      issue_number: issueNumber
    });
  }
}

export default new AngularIssueService();
