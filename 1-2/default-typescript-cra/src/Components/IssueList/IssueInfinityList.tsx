import React from "react";

import { IssueListType } from "@/Lib/states/IssueProvider";
import styled from "styled-components";
import IssueCard from "./IssueCard";
import FeedAd from "./FeedAd";
import useIntersect from "@/Lib/hooks/useIntersect";
import useFetchAngularIssue from "@/Lib/hooks/useFetchAngularIssue";
import Spinner from "../Loading/Spinner";
import { Navigate } from "react-router-dom";

const IssueInfinityList = () => {
  const {
    issueList,
    hasNextPage,
    isFetching,
    fetchIssueList,
    fetchNextPage,
    isError
  } = useFetchAngularIssue();

  const ref = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target);
    if (hasNextPage && !isFetching) {
      await fetchNextPage();
    }
  });

  React.useEffect(() => {
    fetchIssueList();
  }, []);

  if (isError) {
    return <Navigate to="/Error" />;
  }

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
      {isFetching && <Spinner />}
      <Target ref={ref} />
    </IssueListContainer>
  );
};

export default IssueInfinityList;

const IssueListContainer = styled.div`
  height: 100%;
  overflow-y: hidden;
`;

const Target = styled.div`
  height: 1px;
`;
