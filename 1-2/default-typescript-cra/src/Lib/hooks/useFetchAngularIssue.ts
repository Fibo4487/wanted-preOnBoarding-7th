import { useMemo, useState } from "react";
import IssueService from "../states/Issue.service";
import { useIssueContext } from "../states/IssueProvider";

const useFetchAngularIssue = () => {
  const owner = process.env.REACT_APP_OWNER;
  const repo = process.env.REACT_APP_REPO;

  const angularIssueFetcher = useMemo(() => {
    if (!owner || !repo) {
      throw new Error("owner or repo 가 env 에 설정되지 않았습니다.");
    }
    return new IssueService(owner, repo);
  }, [owner, repo]);

  const { issueList, setIssueList } = useIssueContext();
  const [isFetching, setIsFetching] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchIssueList = async () => {
    if (!hasNextPage) return;
    setIsFetching(true);
    const fetchedIssueList = await angularIssueFetcher.getIssueList(0);
    if (!fetchedIssueList) {
      setIsFetching(false);
      setIsError(true);
      return;
    }
    if (fetchedIssueList.length < angularIssueFetcher.per_page) {
      setHasNextPage(false);
    }
    setIsFetching(false);
  };

  const fetchNextPage = async () => {
    if (!hasNextPage || isFetching) return;
    setIsFetching(true);
    const page = issueList.length / angularIssueFetcher.per_page + 1;
    const fetchedIssueList = await angularIssueFetcher.getIssueList(page);
    if (!fetchedIssueList) {
      setIsFetching(false);
      setIsError(true);
      return;
    }
    if (
      fetchedIssueList.length < angularIssueFetcher.per_page ||
      fetchedIssueList.length === 0
    ) {
      setHasNextPage(false);
    }
    setIssueList((prevIssueList) => [...prevIssueList, ...fetchedIssueList]);
    setIsFetching(false);
  };

  const fetchIssue = async (issueNumber: number) => {
    const fetchedIssue = await angularIssueFetcher.getIssue(issueNumber);
    if (!fetchedIssue) {
      setIsError(true);
      return;
    }
    return fetchedIssue;
  };

  return {
    issueList,
    hasNextPage,
    isFetching,
    fetchIssueList,
    fetchNextPage,
    fetchIssue,
    isError
  };
};

export default useFetchAngularIssue;
