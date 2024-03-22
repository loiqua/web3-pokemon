import Link from "next/link"

type ButtonBaseProps = {
  color: "blue" | "green",
  label: string,
  onClick?: ()=>void
}

type ButtonProps = ButtonBaseProps & {
  href?: string
}

function ButtonBase({ color, label, onClick }: ButtonBaseProps) {
  return (
    <button onClick={onClick} style={{backgroundColor: color === "blue" ? "blue" : "green", color:"white"}}>
      {label}
    </button>
  )
}

export function Button({ href, onClick, ...baseProps }: ButtonProps) {
  return (
    href ? (
      <Link href={href}>
        <ButtonBase onClick={onClick} {...baseProps} />
      </Link>
    ) : <ButtonBase onClick={onClick} {...baseProps} />
  )
}

