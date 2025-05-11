---

# 🎰 Lottery Draw

[![License: BSD-3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
[![GitHub forks](https://img.shields.io/github/forks/ricky-sharma/lottery-draw?style=social)](https://github.com/ricky-sharma/lottery-draw/network/members)
[![GitHub stars](https://img.shields.io/github/stars/ricky-sharma/lottery-draw?style=social)](https://github.com/ricky-sharma/lottery-draw/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/ricky-sharma/lottery-draw)](https://github.com/ricky-sharma/lottery-draw/issues)
[![GitHub downloads](https://img.shields.io/github/downloads/ricky-sharma/lottery-draw/total)](https://github.com/ricky-sharma/lottery-draw/releases)

This project is built using **React.js** for the frontend and **.NET 6.0** for the backend, providing a seamless and interactive user experience.

---

## 📸 Preview

![image](https://user-images.githubusercontent.com/61348196/202344519-556ecfc9-b8ce-4e9b-b1a5-3ce27e5ebad5.png)

---

## 🧩 Tech Stack

* **Frontend**: React.js, Material UI
* **Backend**: .NET 6.0 (ASP.NET Core Web API)
* **Testing**: Jest, React Testing Library
* **Development Tools**: Microsoft Visual Studio 2022, Node.js

---

## 🔧 Prerequisites

Before running the project, ensure you have the following installed:

* **Microsoft Visual Studio 2022**: For backend development and running the application.
* **Node.js**: For managing frontend dependencies and running the React development server. [Download Node.js](https://nodejs.org/en/download/)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/ricky-sharma/lottery-draw.git
cd lottery-draw
```

### 2. Backend Setup

* Open the solution file `lottery-draw.sln` in **Microsoft Visual Studio 2022**.
* Restore NuGet packages and build the solution.
* Run the application using Visual Studio's built-in tools.
* The project is configured to use SSL. So on first run, it may ask to deploy ASP.NET Core self-signed certificate to avoid browser warnings and IIS Express SSL certicate for secure browser connection. Please accept the certifcates to run the project using SSL.

### 3. Frontend Setup

* Navigate to the `ClientApp` directory:

  ```bash
  cd lottery-draw/ClientApp
  ```

* Install frontend dependencies:

  ```bash
  npm install
  ```

* Start the development server:

  ```bash
  npm start
  ```

The application should now be running at `http://localhost:3000`.

---

## 🧪 Running Tests

### Backend Tests

* Open the solution in Visual Studio.
* Build the solution to discover and run tests using the Test Explorer.

### Frontend Tests

* Navigate to the `ClientApp` directory:

  ```bash
  cd lottery-draw/ClientApp
  ```

* Run tests using:

  ```bash
  npm test
  ```

---

## 📄 License

This project is licensed under the **BSD-3-Clause License**. See the [LICENSE](https://github.com/ricky-sharma/lottery-draw/blob/master/LICENSE) file for more details.

---


