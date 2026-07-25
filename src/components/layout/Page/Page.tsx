import type { ReactNode } from "react";
import Container from "../../ui/Container/Container";

interface PageProps {
  children: ReactNode;
  className?: string;
}

function Page({
  children,
  className = "",
}: PageProps) {
  return (
    <section className={`py-12 lg:py-16 ${className}`}>
      <Container>
        {children}
      </Container>
    </section>
  );
}

export default Page;