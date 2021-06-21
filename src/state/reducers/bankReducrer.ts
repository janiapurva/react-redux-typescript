
const intialState = 0;

// define action type for typeScript
interface DepositAction {
type: "deposit"
payload: number
}
interface WithdrawAction {
  type: "withdraw"
  paload: number
}

interface BankruptAction {
  type: "bankrupt"
}


const reducer = (state: number = intialState,action : Action) => {
switch (action.type){
  case "deposit":
    return state + action.payload;
    case "withdraw":
      return state - action.payload;
      case "bankrupt":
      return 0;
      default:
        return state
}
}
export default reducer;