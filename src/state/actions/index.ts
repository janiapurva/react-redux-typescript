import { ActionType } from '../action-types';



// define action type for typeScript
interface DepositAction {
  type: ActionType.DEPOSIT
  payload: number
  }
  interface WithdrawAction {
    type: ActionType.WITHDRAW
    payload: number
  }
  
  interface BankruptAction {
    type: ActionType.BANKRUPT
  }
  
  export type Action = DepositAction | WithdrawAction | BankruptAction;
  