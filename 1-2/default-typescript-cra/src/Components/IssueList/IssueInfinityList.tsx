import React from "react";

import { IssueListType } from "@/Lib/states/IssueProvider";
import styled from "styled-components";
import IssueCard from "./IssueCard";
import FeedAd from "./FeedAd";
import useIntersect from "@/Lib/hooks/useIntersect";
import useFetchAngularIssue from "@/Lib/hooks/useFetchAngularIssue";

const IssueInfinityList = () => {
  const { issueList, hasNextPage, isFetching, fetchIssueList, fetchNextPage } =
    useFetchAngularIssue();

  const ref = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target);
    if (hasNextPage && !isFetching) {
      await fetchNextPage();
    }
  });

  React.useEffect(() => {
    fetchIssueList();
  }, []);

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
      {isFetching && <Loading />}
      <Target ref={ref} />
    </IssueListContainer>
  );
};

export default IssueInfinityList;

const IssueListContainer = styled.div`
  height: 100%;
  overflow-y: auto;
`;

const Loading = styled.div`
  height: 100px;
  background-color: #e1e4e8;
`;

const Target = styled.div`
  height: 1px;
`;
