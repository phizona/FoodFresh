import { useState } from "react";
import Container from "../../ui/Container/Container";
import Heading from "../../ui/Heading/Heading";
import FAQItem from "./FAQItem";
import { faqs } from "./faqData";
import Button from "../../ui/Button/Button";


function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1);

  function toggleFAQ(id: number) {
    setOpenId((current) => (current === id ? null : id));
  }

  return (
    <section className="bg-[var(--color-surface)] py-20">
      <Container>
        <div className="text-center">
          <Heading level={2}>
            Frequently Asked Questions
          </Heading>

          <p className="mx-auto mt-4 max-w-2xl text-[var(--color-text-secondary)]">
            Have questions? Here are answers to some of the most common questions
            about shopping with FoodFresh.
          </p>
        </div>

        <div className="mx-auto mt-16 flex max-w-4xl flex-col gap-5">
          {faqs.map((faq) => (
            <FAQItem key={faq.id} {...faq} isOpen={openId === faq.id} onToggle={() => toggleFAQ(faq.id)}/>
          ))}
        </div>

        <div className="mt-12 text-center">
           <p className="text-[var(--color-text-secondary)]">
               Still have questions? We'd love to help.
           </p>

           <Button className="mt-4">
               Contact Support
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default FAQ;