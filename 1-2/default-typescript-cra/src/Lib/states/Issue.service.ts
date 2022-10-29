import githubIssueApi, {
  IssueConfig,
  IssueListConfig
} from "../api/GithubRequest.service";

class IssueService {
  protected page: number;
  readonly owner: string;
  readonly repo: string;
  readonly per_page: number;
  protected issueListConfig: IssueListConfig;
  protected issueConfig: IssueConfig;

  constructor(owner: string, repo: string) {
    this.page = -1;
    this.owner = owner;
    this.repo = repo;
    this.per_page = 10;
    this.issueListConfig = {
      state: "open",
      page: this.page,
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

  getIssueList() {
    this.page = 0;
    this.issueListConfig.page = this.page;
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

  getNextPageIssueList() {
    this.page += 1;
    this.issueListConfig.page = this.page;
    return githubIssueApi.getIssueList({
      ...this.issueListConfig
    });
  }
}

export default IssueService;
