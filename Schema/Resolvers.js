import { employees, authors, books } from "./../data.js";

export const resolvers = {
  Query: {
    getAllEmployees: () => {
      return employees;
    },
    getEmployeebyId(parent, args) {
      return employees.find((employee) => employee.id === Number(args.id));
    },
    getAllAuthors: () => {
      return authors;
    },
    getAuthorbyId(parent, args) {
      return authors.find((author) => author.id === Number(args.id));
    },
    getAllBooks: () => {
      return books;
    },
    getBookbyId(parent, args) {
      return books.find((book) => book.id === Number(args.id));
    },
  },
  Mutation: {
    addEmployee: (parent, args) => {
      const { employeeData } = args;
      employees.push({ id: employees.length + 1, ...employeeData });
      return employees;
    },
    updateEmployee: (parent, args) => {
      const { employeeData } = args;
      employees.forEach((employee) => {
        if (employee.id === Number(employeeData.id)) {
          employee.name = employeeData.name;
        }
      });
      return employees;
    },
    deleteEmployee: (parent, args) => {
      const { id } = args;
      employees.filter((employee) => employee.id !== Number(id));
      return employees.filter((employee) => employee.id !== Number(id));
    },
  },
  Author: {
    books: (author) => {
      return books.filter((book) => book.authorId === author.id);
    },
  },
  Book: {
    author: (book) => {
      return authors.find((author) => book.authorId === author.id);
    },
  },
};
