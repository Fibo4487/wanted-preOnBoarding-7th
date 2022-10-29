import React from "react";

import { useIssueContext, IssueListType } from "@/Lib/states/IssueProvider";
import styled from "styled-components";
import IssueCard from "./IssueCard";

const IssueInfinityList = () => {
  const { issueList, actions } = useIssueContext();

  const handleClickNext = () => {
    actions.fetchNextPageIssueList();
  };

  return (
    <IssueListContainer>
      {issueList.map((issue: IssueListType[number]) => (
        <IssueCard issue={issue} key={issue.id} />
      ))}
      <button onClick={handleClickNext}>다음 페이지</button>
    </IssueListContainer>
  );
};

export default IssueInfinityList;

const IssueListContainer = styled.div`
  height: 100%;
  overflow-y: auto;
`;
