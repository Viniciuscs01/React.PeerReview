import Company from "./company";

export default class User {
  id: number;
  name: string;
  email: string;
  role: string;
  company?: Company;
}
