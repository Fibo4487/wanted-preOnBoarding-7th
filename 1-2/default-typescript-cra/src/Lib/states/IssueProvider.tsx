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
}

const IssueContext = createContext<IssueContextType | null>(null);

export const IssueProvider = ({ children }: { children: React.ReactNode }) => {
  const [issueList, setIssueList] = React.useState<IssueListType>([]);

  const owner = process.env.REACT_APP_OWNER;
  const repo = process.env.REACT_APP_REPO;

  const angularIssueFetcher = React.useMemo(() => {
    if (!owner || !repo) {
      throw new Error("owner or repo 가 env 에 설정되지 않았습니다.");
    }
    return new IssueService(owner, repo);
  }, [owner, repo]);

  const actions = React.useMemo(() => {
    return {
      fetchIssueList: async () => {
        const data = await angularIssueFetcher.getIssueList();
        if (!data) {
          throw new Error("데이터를 불러오지 못했습니다.");
        }
        setIssueList(data);
      },

      fetchNextPageIssueList: async () => {
        const data = await angularIssueFetcher.getNextPageIssueList();
        if (!data) {
          throw new Error("데이터를 불러오지 못했습니다.");
        }
        setIssueList((prev) => [...prev, ...data]);
      }
    };
  }, [setIssueList, angularIssueFetcher]);

  const value = React.useMemo(
    () => ({ issueList, actions }),
    [issueList, actions]
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
