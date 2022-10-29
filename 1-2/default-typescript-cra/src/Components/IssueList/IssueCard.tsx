import { IssueListType } from "@/Lib/states/IssueProvider";
import dateToKorean from "@/Lib/utils/dateToKorean";
import React from "react";
import styled from "styled-components";

interface IssueCardProps {
  issue: IssueListType[number];
}

const IssueCard = ({ issue }: IssueCardProps) => {
  const { number, title, user, created_at, comments } = issue;

  return (
    <IssueItem>
      <div className="Column">
        <div className="Row">
          <IssueNumber>#{number}</IssueNumber>
          <IssueTitle>{title}</IssueTitle>
        </div>
        <div className="Row">
          <IssueInfo>
            {`작성자: ${user?.login}, 작성일: ${dateToKorean(created_at)}`}
          </IssueInfo>
        </div>
      </div>
      <div className="Column">
        <IssueCommentCount>코멘트:{comments}</IssueCommentCount>
      </div>
    </IssueItem>
  );
};

export default React.memo(IssueCard);

const IssueItem = styled.div`
  padding: 0 1rem;
  border-bottom: 1px solid #e1e4e8;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: space-between;

  .Column {
    display: flex;
    flex-direction: column;
    min-width: 65px;
  }

  .Row {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

const IssueTitle = styled.h2`
  font-size: 0.9rem;
  font-weight: 600;
  text-overflow: ellipsis;
`;

const IssueInfo = styled.div`
  font-size: 0.8rem;
  color: #586069;
`;

const IssueNumber = styled.span`
  font-size: 0.8rem;
  color: #586069;
  margin-right: 0.5rem;
`;

const IssueCommentCount = styled.span`
  font-size: 0.8rem;
  color: #586069;
  margin-left: 0.5rem;
`;
