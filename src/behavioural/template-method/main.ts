import { resolve } from "path";
import { CustomerDataParserjson } from "./customer-data-parser-json";
import { CustomerDataParserTxt } from "./customer-data-parser-txt";

async function run() {
  const filePathTxt = resolve(__dirname, "files", "customer.txt");
  const customerDataParserTxt = new CustomerDataParserTxt(filePathTxt);
  await customerDataParserTxt.fixCustomerData();
  console.log(customerDataParserTxt.customerData);

  console.log();

  const filePathjson = resolve(__dirname, "files", "customer.json");
  const customerDataParserjson = new CustomerDataParserjson(filePathjson);
  await customerDataParserjson.fixCustomerData();
  console.log(customerDataParserjson.customerData);
}

run();
