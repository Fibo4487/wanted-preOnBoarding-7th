import React from "react";

import { useParams } from "react-router-dom";
import { useIssueContext } from "@/Lib/states/IssueProvider";

const IssueDescription = () => {
  const { issueId } = useParams();
  const { issueList } = useIssueContext();

  const issue = issueList.find((issue) => issue.id === Number(issueId));

  return <div>{issue?.title}</div>;
};

export default IssueDescription;
