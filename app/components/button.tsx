type Props = { className?: string };

export default function Button<
  T extends React.ComponentProps<P>,
  P extends React.ElementType,
>({
  real,
  className,
  children,
  ...props
}: React.PropsWithChildren<Props & { real: P } & T>) {
  const Real = real ?? "button";
  return (
    <Real
      className={`rounded-full border p-2 text-center ${className}`}
      {...props}
    >
      {children}
    </Real>
  );
}
