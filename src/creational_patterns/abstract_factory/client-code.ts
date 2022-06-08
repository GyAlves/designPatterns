import { EnterpriseCreateVehicleCustomerFactory } from "./factories/enterprise-customer-vehicle-factory";
import { IndividualCreateVehicleCustomerFactory } from "./factories/individual-customer-vehicle-factory";

const enterpriseFactory = new EnterpriseCreateVehicleCustomerFactory();
const individualFactory = new IndividualCreateVehicleCustomerFactory();


const Bentley = enterpriseFactory.createVehicle("Bentley", "Augusto");
const Golf = individualFactory.createVehicle("Golf", "João");

Bentley.pickUp();
Golf.pickUp();