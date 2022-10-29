import { Endpoints } from "@octokit/types";
import React, { createContext, useContext } from "react";

export type IssueListType =
  Endpoints["GET /repos/{owner}/{repo}/issues"]["response"]["data"];

interface IssueContextType {
  issueList: IssueListType;
  setIssueList: React.Dispatch<React.SetStateAction<IssueListType>>;
}

const IssueContext = createContext<IssueContextType | null>(null);

export const IssueProvider = ({ children }: { children: React.ReactNode }) => {
  const [issueList, setIssueList] = React.useState<IssueListType>([]);

  const value = React.useMemo(
    () => ({ issueList, setIssueList }),
    [issueList, setIssueList]
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
