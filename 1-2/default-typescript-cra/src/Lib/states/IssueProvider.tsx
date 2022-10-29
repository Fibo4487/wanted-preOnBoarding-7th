import { Endpoints } from "@octokit/types";
import React, { createContext, useContext } from "react";
import IssueService from "./Issue.service";

export type IssueListType =
  Endpoints["GET /repos/{owner}/{repo}/issues"]["response"]["data"];

type IssueActionType = {
  fetchIssueList: () => Promise<void>;
  fetchNextPageIssueList: () => Promise<void>;
};

interface IssueContextType {
  issueList: IssueListType;
  actions: IssueActionType;
  hasNextPage: boolean;
}

const IssueContext = createContext<IssueContextType | null>(null);

export const IssueProvider = ({ children }: { children: React.ReactNode }) => {
  const [issueList, setIssueList] = React.useState<IssueListType>([]);
  const [isFetching, setIsFetching] = React.useState<boolean>(false);
  const [hasNextPage, setHasNextPage] = React.useState<boolean>(true);

  const owner = process.env.REACT_APP_OWNER;
  const repo = process.env.REACT_APP_REPO;

  const angularIssueFetcher = React.useMemo(() => {
    if (!owner || !repo) {
      throw new Error("owner or repo 가 env 에 설정되지 않았습니다.");
    }
    return new IssueService(owner, repo);
  }, []);

  const actions = React.useMemo(() => {
    return {
      fetchIssueList: async () => {
        if (isFetching) {
          return;
        }
        setIsFetching(true);
        const issueList = await angularIssueFetcher.getIssueList();
        if (!issueList) {
          throw new Error("데이터를 불러오지 못했습니다.");
        }
        setIssueList(issueList);
        setIsFetching(false);
      },

      fetchNextPageIssueList: async () => {
        if (isFetching) {
          return;
        }
        setIsFetching(true);
        const issueList = await angularIssueFetcher.getNextPageIssueList();
        if (!issueList) {
          setHasNextPage(false);
          setIsFetching(false);
          return;
        }
        setIssueList((prevIssueList) => [...prevIssueList, ...issueList]);
        setIsFetching(false);
      }
    };
  }, [setIssueList, angularIssueFetcher, isFetching]);

  const value = React.useMemo(
    () => ({ issueList, actions, hasNextPage, isFetching }),
    [issueList, actions, hasNextPage, isFetching]
  );

  return (
    <IssueContext.Provider value={value}>{children}</IssueContext.Provider>
  );
};

export const useIssueContext = () => {
  const state = useContext(IssueContext);
  if (!state) {
    throw new Error("IssueProvider로 감싸지지 않았습니다.");
  }
  return state;
};
