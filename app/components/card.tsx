type Props = { className?: string };
export default function Card({
  className,
  children,
}: React.PropsWithChildren<Props>) {
  return (
    <div className={`${className} size-full rounded-xl bg-slate-300 p-5`}>
      {children}
    </div>
  );
}
