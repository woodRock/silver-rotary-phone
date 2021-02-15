/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRuns = /* GraphQL */ `
  mutation CreateRuns(
    $input: CreateRunsInput!
    $condition: ModelRunsConditionInput
  ) {
    createRuns(input: $input, condition: $condition) {
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
export const updateRuns = /* GraphQL */ `
  mutation UpdateRuns(
    $input: UpdateRunsInput!
    $condition: ModelRunsConditionInput
  ) {
    updateRuns(input: $input, condition: $condition) {
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
export const deleteRuns = /* GraphQL */ `
  mutation DeleteRuns(
    $input: DeleteRunsInput!
    $condition: ModelRunsConditionInput
  ) {
    deleteRuns(input: $input, condition: $condition) {
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
export const createRun = /* GraphQL */ `
  mutation CreateRun(
    $input: CreateRunInput!
    $condition: ModelRunConditionInput
  ) {
    createRun(input: $input, condition: $condition) {
      id
      runsID
      date
      createdAt
      updatedAt
    }
  }
`;
export const updateRun = /* GraphQL */ `
  mutation UpdateRun(
    $input: UpdateRunInput!
    $condition: ModelRunConditionInput
  ) {
    updateRun(input: $input, condition: $condition) {
      id
      runsID
      date
      createdAt
      updatedAt
    }
  }
`;
export const deleteRun = /* GraphQL */ `
  mutation DeleteRun(
    $input: DeleteRunInput!
    $condition: ModelRunConditionInput
  ) {
    deleteRun(input: $input, condition: $condition) {
      id
      runsID
      date
      createdAt
      updatedAt
    }
  }
`;
