interface Intern {
  name: string;
  age: number;
  skills: string[];
}

enum webDomain {
  Web = "Web",
  Connect = "true",
  Backend = "Backend",
}

interface Junior {
  name: string;
  age: number;
  skills: string[];
  date_of_promotion: Date;
  domain: webDomain;
}

interface Company {
  Interns: Intern[];
  Juniors: Junior[];
  Country: string;
}

export default Company;
