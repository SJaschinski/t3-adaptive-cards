export interface TextProps {
  label?: string;
  style?: string;
  level?: string;
}

export default function Text(props: TextProps) {
  return (
    <div className="py-2">
      {props.style === "heading" && props.level === "h1" && (
        <h1 className="text-xl font-semibold leading-6 text-gray-900">
          {props.label}
        </h1>
      )}
      {props.style === "heading" && props.level === "h2" && (
        <h2 className="text-lg font-semibold leading-6 text-gray-900">
          {props.label}
        </h2>
      )}
      {props.style === "heading" && props.level === "h3" && (
        <h3 className="text-base font-semibold leading-6 text-gray-900">
          {props.label}
        </h3>
      )}
    </div>
  );
}
