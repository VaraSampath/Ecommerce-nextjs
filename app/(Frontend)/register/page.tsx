import RegisterForm from "@/components/RegisterForm";

export default function Register() {
  return (
    <main className="flex  flex-col items-center gap-8 overflow-y-auto max-w-screen-2xl">
      <h1>Register Now</h1>
      <RegisterForm />
    </main>
  );
}
