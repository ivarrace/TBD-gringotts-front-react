export default function NotFound({ type, id }) {
  return (
    <p>
      ¯\_(ツ)_/¯ {type ? type : ""} {id ? id : ""} NOT FOUND
    </p>
  );
}
