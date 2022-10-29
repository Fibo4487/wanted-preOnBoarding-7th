import React from "react";
import styled from "styled-components";
import { IssueListType } from "@/Lib/states/IssueProvider";
import IssueCard from "../IssueList/IssueCard";

interface DescriptionTitleProps {
  issue: IssueListType[number];
}

const DescriptionTitle = ({ issue }: DescriptionTitleProps) => {
  return (
    <TitleContiner>
      <AuthorImage src={issue?.user?.avatar_url} />
      <IssueCard {...{ issue }} />
    </TitleContiner>
  );
};

export default DescriptionTitle;

const TitleContiner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const AuthorImage = styled.img`
  width: 5rem;
  height: 5rem;
  margin-right: 1rem;
`;
