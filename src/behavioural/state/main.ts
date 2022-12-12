import { ShoppingOrder } from "./shopping-order/shopping-order";

const order = new ShoppingOrder(); // penddente
order.approvePayment(); // Aprovado
order.waitPayment(); // Pendente
order.shipOrder();
order.rejectPayment(); // daqui não altera mais o resultado
order.approvePayment(); // n
order.waitPayment(); // n
order.approvePayment(); // n
order.shipOrder(); // n
