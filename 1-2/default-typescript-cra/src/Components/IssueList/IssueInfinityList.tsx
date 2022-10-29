import React from "react";

import { useIssueContext, IssueListType } from "@/Lib/states/IssueProvider";
import styled from "styled-components";
import IssueCard from "./IssueCard";
import FeedAd from "./FeedAd";

const IssueInfinityList = () => {
  const { issueList, actions } = useIssueContext();

  const handleClickNext = () => {
    actions.fetchNextPageIssueList();
  };

  return (
    <IssueListContainer>
      {issueList.map((issue: IssueListType[number], index) => {
        if ((index + 1) % 4 === 0) {
          return (
            <FeedAd key={index}>
              <IssueCard key={issue.id} issue={issue} />
            </FeedAd>
          );
        }
        return <IssueCard key={issue.id} issue={issue} />;
      })}
      <button onClick={handleClickNext}>다음 페이지</button>
    </IssueListContainer>
  );
};

export default IssueInfinityList;

const IssueListContainer = styled.div`
  height: 100%;
  overflow-y: auto;
`;
