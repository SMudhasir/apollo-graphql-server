export const typeDefs = `#graphql
  type Employee {
    id: ID!
    name: String!
    doj: String!
    dob: String!
    designation: Designation!
  }

  type Author {
    id: ID!
    name: String!
    books: [Book!]!
  }

  type Book {
    id: ID!
    name: String!
    authorId:Int!
    author: Author!
  }

  enum Designation {
    MANAGER
    DEV_OPS
    SENIOR_DEV
    TESTER
    SCRUM_PLANNER
    QA
    DEV
  }

  input addEmployeeInput {
    name: String!
    doj: String = "01/01/1982",
    dob: String = "01/01/2002"
    designation: Designation = DEV
  }

  input updateEmployeeInput {
    id: ID!
    name: String!
  }

  #Queries
  type Query {
    getAllEmployees: [Employee!]!
    getEmployeebyId(id: ID!): Employee!
    getAllAuthors: [Author!]!
    getAuthorbyId(id: ID!): Author!
    getAllBooks: [Book!]!
    getBookbyId(id: ID!): Book!
  }

  #Mutation
  type Mutation {
    addEmployee(employeeData: addEmployeeInput): [Employee!]!
    updateEmployee(employeeData: updateEmployeeInput): [Employee!]!
    deleteEmployee(id: ID!): [Employee!]! 
  }
`;
