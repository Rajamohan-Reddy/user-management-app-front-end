import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";
import ErrorBoundary from "./components/ErrorBoundary";
import "./App.css";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<UserList />} />
      <Route path="/add" element={<UserForm />} />
      <Route path="/edit/:id" element={<UserForm />} />
      <Route path="*" element={<ErrorBoundary />} />
    </Routes>
  </BrowserRouter>
);

export default App;
