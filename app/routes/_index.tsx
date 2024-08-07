import type { MetaFunction } from "@remix-run/node";
import Contador from "../components/Contador";

export const meta: MetaFunction = () => {
  return [
    { title: "Budget" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="font-sans p-5">
      <h1 className="text-3xl">Welcome to Budget</h1>
      <br />
        <Contador/>
    </div>
  );
}
