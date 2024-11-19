# Multiverser

multiverser is a random data generator that can create simple mocks using functions or data models.
It's very useful for debuging, generating random data without having to create boring schemas.

---

## Instalation

requirements:

-   NodeJS

```bash
npm install multiverser
```

## Usage

**From Input**

With multiverser methods you can provide any type of data and get a return based on the model you provided but with random values.

```js
import { generateArrayFromInput } from "multieverser"

const model = {
    name: "John Doe",
    age: 25,
    email: "john.doe@email.com"
    skills: ["communication", "resilience", "empathy"]
}

const arrayOfModels = generateArrayFromInput(model, 10);

console.log(arrayOfModels) // [{ name: "Lorem Ipsum", age: 37, ... }, {...}]
```

## Author

Jonathan Assunção | almeida_jn@hotmail.com
