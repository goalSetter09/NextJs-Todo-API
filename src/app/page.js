import Link from "next/link";
import ToDoList from "./components/todo-list";

export default function Home() {
  return (
    <>
      <h1>
        <Link href="/todos">할일</Link>
      </h1>
    </>
  )
}
