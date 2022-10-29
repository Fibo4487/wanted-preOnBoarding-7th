import githubIssueApi, {
  IssueConfig,
  IssueListConfig
} from "../api/GithubRequest.service";

class IssueService {
  readonly owner: string;
  readonly repo: string;
  readonly per_page: number;
  protected issueListConfig: IssueListConfig;
  protected issueConfig: IssueConfig;

  constructor(owner: string, repo: string) {
    this.owner = owner;
    this.repo = repo;
    this.per_page = 30;
    this.issueListConfig = {
      state: "open",
      sort: "comments",
      owner: this.owner,
      repo: this.repo,
      per_page: this.per_page
    };
    this.issueConfig = {
      owner: this.owner,
      repo: this.repo,
      issue_number: 0
    };
  }

  getIssueList(page: number) {
    return githubIssueApi.getIssueList({
      ...this.issueListConfig,
      page
    });
  }

  getIssue(issueNumber: number) {
    return githubIssueApi.getIssue({
      ...this.issueConfig,
      issue_number: issueNumber
    });
  }
}

export default IssueService;
