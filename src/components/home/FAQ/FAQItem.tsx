import { Minus, Plus } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: FAQItemProps) {
  return (
    <article className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-white">
      <button type="button" onClick={onToggle} className="flex w-full items-center justify-between p-6 text-left">
        <span className="font-semibold text-[var(--color-text-primary)]">
          {question}
        </span>

        {isOpen ? (
          <Minus size={20} />
        ) : (
          <Plus size={20} />
        )}
      </button>

      {isOpen && (
        <div className="px-6 pb-6">
          <p className="leading-7 text-[var(--color-text-secondary)]">
            {answer}
          </p>
        </div>
      )}
    </article>
  );
}

export default FAQItem;