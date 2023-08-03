import { ClipboardIcon } from "@heroicons/react/24/outline";

export interface TextProps {
  label?: string;
  style?: string;
  level?: string;
  separator?: boolean;
}

export default function Text(props: TextProps) {
  return (
    <div
      className={`${props.separator && "border-t border-einfra-900/10"} pt-4`}
    >
      {props.style === "heading" && props.level === "h1" && (
        <h1 className="text-xl font-semibold leading-6 text-einfra-900">
          {props.label}
        </h1>
      )}
      {props.style === "heading" && props.level === "h2" && (
        <>
          <h2 className="text-lg font-semibold leading-6 text-einfra-900">
            {props.label}
          </h2>
        </>
      )}
      {props.style === "heading" && props.level === "h3" && (
        <h3 className="text-base font-semibold leading-6 text-einfra-900">
          {props.label}
        </h3>
      )}
    </div>
  );
}
