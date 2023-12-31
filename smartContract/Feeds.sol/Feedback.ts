/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export declare namespace Feedback {
  export type FeedbackStructStruct = {
    id: PromiseOrValue<BigNumberish>;
    username: PromiseOrValue<string>;
    role: PromiseOrValue<string>;
    Name: PromiseOrValue<string>;
    email: PromiseOrValue<string>;
    feedback: PromiseOrValue<string>;
  };

  export type FeedbackStructStructOutput = [
    BigNumber,
    string,
    string,
    string,
    string,
    string
  ] & {
    id: BigNumber;
    username: string;
    role: string;
    Name: string;
    email: string;
    feedback: string;
  };
}

export interface FeedbackInterface extends utils.Interface {
  functions: {
    "addFeedback(string,string,string,string)": FunctionFragment;
    "getAllFeedback()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "addFeedback" | "getAllFeedback"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addFeedback",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllFeedback",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "addFeedback",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllFeedback",
    data: BytesLike
  ): Result;

  events: {
    "AddFeedback(address,uint256,string,string,string,string)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AddFeedback"): EventFragment;
}

export interface AddFeedbackEventObject {
  recipient: string;
  feedbackId: BigNumber;
  role: string;
  Name: string;
  email: string;
  feedback: string;
}
export type AddFeedbackEvent = TypedEvent<
  [string, BigNumber, string, string, string, string],
  AddFeedbackEventObject
>;

export type AddFeedbackEventFilter = TypedEventFilter<AddFeedbackEvent>;

export interface Feedback extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: FeedbackInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addFeedback(
      role: PromiseOrValue<string>,
      Name: PromiseOrValue<string>,
      email: PromiseOrValue<string>,
      feedback: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getAllFeedback(
      overrides?: CallOverrides
    ): Promise<[Feedback.FeedbackStructStructOutput[]]>;
  };

  addFeedback(
    role: PromiseOrValue<string>,
    Name: PromiseOrValue<string>,
    email: PromiseOrValue<string>,
    feedback: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getAllFeedback(
    overrides?: CallOverrides
  ): Promise<Feedback.FeedbackStructStructOutput[]>;

  callStatic: {
    addFeedback(
      role: PromiseOrValue<string>,
      Name: PromiseOrValue<string>,
      email: PromiseOrValue<string>,
      feedback: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    getAllFeedback(
      overrides?: CallOverrides
    ): Promise<Feedback.FeedbackStructStructOutput[]>;
  };

  filters: {
    "AddFeedback(address,uint256,string,string,string,string)"(
      recipient?: null,
      feedbackId?: null,
      role?: null,
      Name?: null,
      email?: null,
      feedback?: null
    ): AddFeedbackEventFilter;
    AddFeedback(
      recipient?: null,
      feedbackId?: null,
      role?: null,
      Name?: null,
      email?: null,
      feedback?: null
    ): AddFeedbackEventFilter;
  };

  estimateGas: {
    addFeedback(
      role: PromiseOrValue<string>,
      Name: PromiseOrValue<string>,
      email: PromiseOrValue<string>,
      feedback: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getAllFeedback(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    addFeedback(
      role: PromiseOrValue<string>,
      Name: PromiseOrValue<string>,
      email: PromiseOrValue<string>,
      feedback: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getAllFeedback(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
