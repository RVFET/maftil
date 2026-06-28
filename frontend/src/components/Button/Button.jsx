export function Button(props) {
  const { class: className, children, ...rest } = props;

  return (
    <button
      {...rest}
      class={`btn ${className || ""}`}
      data-size={rest["data-size"] || "sm"}
    >
      {children}
    </button>
  );
}
