# Hexagonal Architecture for React

This is a simple example of how to implement the hexagonal architecture in a React application.

![image](https://github.com/user-attachments/assets/d903221e-cef3-4f88-809f-7e53832ee385)
[Learn more about the hexagonal architecture (pt-br)](https://enzosakamoto.notion.site/Arquitetura-Hexagonal-b25a2b72346c48fb9b0ffdaf5e535a9b)


## Overview

This repository provides a template for implementing Hexagonal Architecture (also known as Ports and Adapters Architecture) in a React project using TypeScript. The main goal of this architecture is to create a maintainable, testable, and scalable codebase by decoupling the core business logic from external concerns such as UI frameworks, databases, and APIs.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Folder Structure](#folder-structure)
3. [Core Concepts](#core-concepts)
4. [Use Cases](#use-cases)
5. [Adapters](#adapters)
6. [Running the Project](#running-the-project)
7. [Testing](#testing)
8. [Contributing](#contributing)
9. [License](#license)

## Getting Started

To get started with this template, clone the repository and install the dependencies:

```bash
git clone https://github.com/Maua-Dev/hexagonal_arch_react_template.git
cd hexagonal_arch_react_template
npm install
```

## Folder Structure

```plaintext
src/
|-- application/
|   |-- usecases/
|
|-- domain/
|   |-- entities/
|   |-- interfaces/
|
|-- infrastructure/
|   |-- adapters/
|   |   |-- http/
|   |   |-- repositories/
|   |-- http/
```

- **domain**: Contains the domain entities and value objects representing the core business logic.
- **application**: Houses the application use cases (business logic) that interact with domain entities.
- **infrastructure**: Includes configurations and implementations of external services (e.g., API clients, databases).

## Core Concepts

### Domain

The **domain** layer is the heart of the application. It includes entities and value objects that represent the core business logic. This layer should not depend on any external libraries or frameworks.

### Use Cases

**Use cases** are application-specific business rules. They orchestrate the flow of data to and from the entities and manage the business logic. Use cases do not depend on the user interface or any external service.

### Adapters

Adapters are used to connect the core logic to the external world, such as UI components, APIs, databases, or any other external systems. In this template, we have two primary adapters:

- **HTTP Adapter**: Handles communication with external APIs.

## Running the Project

To run the project locally, use the following command:

```bash
npm run dev
```

This will start the development server, and you can view the application in your browser at `http://localhost:3000`.

## Testing

The project includes a set of tests to ensure the integrity of the core business logic and the adapters.

To run the tests:

```bash
npm run test
```
