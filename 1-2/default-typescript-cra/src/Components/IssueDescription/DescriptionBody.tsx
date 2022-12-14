import React from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import { IssueListType } from "@/Lib/states/IssueProvider";
import { Navigate } from "react-router-dom";

interface DescriptionBodyProps {
  issue: IssueListType[number];
}

const DescriptionBody = ({ issue }: DescriptionBodyProps) => {
  const { body } = issue;

  if (!body) {
    return <Navigate to="/Error" />;
  }
  return (
    <BodyContainer>
      <ReactMarkdown>{body}</ReactMarkdown>
    </BodyContainer>
  );
};

export default DescriptionBody;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
