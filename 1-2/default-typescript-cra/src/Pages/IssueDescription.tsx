import React from "react";

import { useParams } from "react-router-dom";
import { useIssueContext } from "@/Lib/states/IssueProvider";
import styled from "styled-components";
import DescriptionTitle from "@/Components/IssueDescription/DescriptionTitle";
import DescriptionBody from "@/Components/IssueDescription/DescriptionBody";

const IssueDescription = () => {
  const { issueId } = useParams();
  const { issueList } = useIssueContext();

  const issue = React.useMemo(
    () => issueList.find((issue) => issue.id === Number(issueId)),
    [issueId, issueList]
  );

  React.useEffect(() => {
    console.log(issueList);
  }, []);
  if (!issue) {
    return <div>Issue Not Found</div>;
  }

  return (
    <>
      <Container>
        <DescriptionTitle issue={issue} />
        <DescriptionBody issue={issue} />
      </Container>
    </>
  );
};

export default IssueDescription;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;
