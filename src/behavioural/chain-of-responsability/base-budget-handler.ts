import { CustomerBudget } from "./customer-budget";

export abstract class BaseBudgetHandler {
  protected nexHandler: BaseBudgetHandler | null = null;

  setNextHandler(handler: BaseBudgetHandler): BaseBudgetHandler {
    this.nexHandler = handler;
    return handler;
  }

  handle(budget: CustomerBudget): CustomerBudget {
    if (this.nexHandler) return this.nexHandler.handle(budget);
    return budget;
  }
}
