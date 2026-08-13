import { Mail } from "lucide-react";
import { useState } from "react";
import Input from "../../ui/Input/Input";
import Button from "../../ui/Button/Button";

function NewsletterForm() {
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log("Subscribed:", email);

    setEmail("");
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-10 flex max-w-2xl flex-col gap-4 sm:flex-row">
      <Input type="email" placeholder="Enter your email address" value={email} onChange={(e) => setEmail(e.target.value)}/>

      <Button type="submit">
        <Mail size={18} />
        Subscribe
      </Button>
    </form>
  );
}

export default NewsletterForm;