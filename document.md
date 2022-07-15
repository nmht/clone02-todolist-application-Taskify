# TypeScript

- https://www.typescriptlang.org/

- define variable: let variable1: string = 'value1';
- types of variable in TS: string, number, boolean, undefined, function, array, object, tuple, null, void, never, unknown, any, ..
  - string[] = array of strings
  - [number, string] = tuple = an array of defined types
- define new Type (instead of Object): type NewType = { prop1: string; prop2: number}
- define optional: prop1?: string
- define union type: let variable1: string | number;
- define function in common way (instead of Function): let Function1: (param1: string) => number;
- TS alias: type, interface (interface could be extendable)

# Project Tree

app
- model types: Todo 
- <InputField>
- <TodoList>
- <SingleTodo>


# Record

## Set Up

- npx create-react-app taskify --template typescript
- clean up project files
- npm install react-icons

## Create Components

- create components, pass props
- create model of TS new types & interfaces
- create logic function

# Great to keep in mind!

- create prettierignore file
- declare type Props of each component
- apply optional chaining with question mark "?"
- apply useRef, useEffect hook
- apply react-icons lib
