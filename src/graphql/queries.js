/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRuns = /* GraphQL */ `
  query GetRuns($id: ID!) {
    getRuns(id: $id) {
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
export const listRunss = /* GraphQL */ `
  query ListRunss(
    $filter: ModelRunsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRunss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        runs {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getRun = /* GraphQL */ `
  query GetRun($id: ID!) {
    getRun(id: $id) {
      id
      runsID
      date
      createdAt
      updatedAt
    }
  }
`;
export const listRuns = /* GraphQL */ `
  query ListRuns(
    $filter: ModelRunFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRuns(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        runsID
        date
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
