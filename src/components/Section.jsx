import Container from "./Container";

export default function Section({
  children,
  className = "",
  id
}) {
  return (
    <section
      id={id}
      className={`flex items-center border-t border-[color:var(--line)] py-10 sm:py-12 lg:min-h-[calc(100svh-5rem)] lg:py-12 ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
}
