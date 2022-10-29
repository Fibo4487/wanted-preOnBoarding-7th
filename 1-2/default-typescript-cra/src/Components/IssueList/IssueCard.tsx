import { IssueListType } from "@/Lib/states/IssueProvider";
import React from "react";
import styled from "styled-components";

interface IssueCardProps {
  issue: IssueListType[number];
}

const IssueCard = ({ issue }: IssueCardProps) => {
  return (
    <IssueItem>
      <IssueTitle>{issue.title}</IssueTitle>
      <IssueDescription>{issue.body}</IssueDescription>
    </IssueItem>
  );
};

export default React.memo(IssueCard);

const IssueItem = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #e1e4e8;
`;

const IssueTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
`;

const IssueDescription = styled.p`
  margin-top: 0.5rem;
  font-size: 1rem;
  color: #586069;
`;
