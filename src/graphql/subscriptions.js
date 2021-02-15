/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRuns = /* GraphQL */ `
  subscription OnCreateRuns {
    onCreateRuns {
      id
      name
      runs {
        items {
          id
          runsID
          date
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateRuns = /* GraphQL */ `
  subscription OnUpdateRuns {
    onUpdateRuns {
      id
      name
      runs {
        items {
          id
          runsID
          date
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteRuns = /* GraphQL */ `
  subscription OnDeleteRuns {
    onDeleteRuns {
      id
      name
      runs {
        items {
          id
          runsID
          date
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateRun = /* GraphQL */ `
  subscription OnCreateRun {
    onCreateRun {
      id
      runsID
      date
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateRun = /* GraphQL */ `
  subscription OnUpdateRun {
    onUpdateRun {
      id
      runsID
      date
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteRun = /* GraphQL */ `
  subscription OnDeleteRun {
    onDeleteRun {
      id
      runsID
      date
      createdAt
      updatedAt
    }
  }
`;
