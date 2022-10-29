import React from "react";
import IssueListLayout from "@/Components/IssueList/IssueListLayout";
import Header from "@/Components/Header/Header";
import IssueInfinityList from "@/Components/IssueList/IssueInfinityList";

const IssueList = () => {
  return (
    <>
      <Header />
      <IssueListLayout>
        <IssueInfinityList />
      </IssueListLayout>
    </>
  );
};

export default IssueList;
