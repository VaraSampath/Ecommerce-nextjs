import { LoginForm } from "@/components/LoginForm";

export default function Home() {
  return (
    <main className="flex  flex-col items-center gap-8 overflow-y-auto">
      <LoginForm />
    </main>
  );
}
