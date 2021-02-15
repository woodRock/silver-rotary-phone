import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Runs {
  readonly id: string;
  readonly name: string;
  readonly runs?: (Run | null)[];
  constructor(init: ModelInit<Runs>);
  static copyOf(source: Runs, mutator: (draft: MutableModel<Runs>) => MutableModel<Runs> | void): Runs;
}

export declare class Run {
  readonly id: string;
  readonly runsID: string;
  readonly date: string;
  constructor(init: ModelInit<Run>);
  static copyOf(source: Run, mutator: (draft: MutableModel<Run>) => MutableModel<Run> | void): Run;
}