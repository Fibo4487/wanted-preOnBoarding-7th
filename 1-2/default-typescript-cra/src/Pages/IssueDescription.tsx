import React from "react";

import { Navigate, useParams } from "react-router-dom";
import { IssueListType } from "@/Lib/states/IssueProvider";
import styled from "styled-components";
import DescriptionTitle from "@/Components/IssueDescription/DescriptionTitle";
import DescriptionBody from "@/Components/IssueDescription/DescriptionBody";
import useFetchAngularIssue from "@/Lib/hooks/useFetchAngularIssue";
import Spinner from "@/Components/Loading/Spinner";

const IssueDescription = () => {
  const params = useParams();
  const issueNumber = Number(params?.issueNumber);
  const [issue, setIssue] = React.useState<IssueListType[number] | null>(null);
  const { fetchIssue, isError } = useFetchAngularIssue();

  React.useEffect(() => {
    fetchIssue(issueNumber).then((issue) => {
      if (issue) {
        setIssue(issue);
      }
    });
  }, []);

  if (isError && !issue) {
    return <Navigate to="/Error" />;
  }

  return (
    <>
      <Container>
        {issue ? (
          <>
            <DescriptionTitle issue={issue} />
            <DescriptionBody issue={issue} />
          </>
        ) : (
          <Spinner />
        )}
      </Container>
    </>
  );
};

export default IssueDescription;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;
