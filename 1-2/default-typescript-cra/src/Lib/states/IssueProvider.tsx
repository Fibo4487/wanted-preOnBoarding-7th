import { Endpoints } from "@octokit/types";
import React, { createContext, useContext } from "react";
import IssueService from "./Issue.service";

export type IssueListType =
  Endpoints["GET /repos/{owner}/{repo}/issues"]["response"]["data"];

type IssueActionType = {
  fetchIssueList: () => Promise<void>;
  fetchNextPageIssueList: () => Promise<void>;
  getOwnerAndRepo: () => { owner: string; repo: string };
};

interface IssueContextType {
  issueList: IssueListType;
  actions: IssueActionType;
}

const IssueContext = createContext<IssueContextType | null>(null);

export const IssueProvider = ({ children }: { children: React.ReactNode }) => {
  const [issueList, setIssueList] = React.useState<IssueListType>([]);

  const angularIssueFetcher = React.useMemo(() => {
    return new IssueService("angular", "angular-cli");
  }, []);

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
      },

      getOwnerAndRepo: () => {
        return {
          owner: angularIssueFetcher.owner,
          repo: angularIssueFetcher.repo
        };
      }
    };
  }, [setIssueList, angularIssueFetcher]);

  const value = React.useMemo(
    () => ({
      issueList,
      actions
    }),
    [issueList, actions]
  );

  return (
    <IssueContext.Provider value={value}>{children}</IssueContext.Provider>
  );
};

export const useIssueContext = () => {
  const state = useContext(IssueContext);
  if (!state) {
    throw new Error("not wrapped with IssueProvider");
  }
  return state;
};
