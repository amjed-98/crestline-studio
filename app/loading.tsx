export default function Loading() {
  return (
    <div className="shell flex min-h-[50vh] items-center justify-center">
      <div className="flex items-center gap-3 rounded-full border border-line bg-panel px-5 py-3 text-sm text-muted">
        <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-accent" />
        Loading
      </div>
    </div>
  );
}
