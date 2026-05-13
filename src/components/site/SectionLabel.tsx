export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-muted-foreground">
      <span className="h-px w-8 bg-gold/60" />
      {children}
    </div>
  );
}
