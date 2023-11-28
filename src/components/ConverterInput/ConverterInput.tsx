import './ConverterInput.scss'

interface Props {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: number
}

export function ConverterInput({ onChange, value }: Props) {
  return (
    <input
      className={'converter-input'}
      type={'number'}
      onChange={onChange}
      value={value.toString()}
    />
  )
}
