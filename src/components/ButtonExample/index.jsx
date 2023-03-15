import Button from 'react-bootstrap/Button';

export default function ButtonExample({text, variant, style}) {
  return (
    <>
      <Button variant={variant} style={style}>{text}</Button>{' '}
    </>
  );
}
