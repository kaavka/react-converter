import './LogoLink.scss';
export function LogoLink() {
  return (
    <a className={'logo-link'} href={'/'}>
      <img
        className={'logo-link__image'}
        src={'./logo-high-resolution-logo-black-transparent.png'}
        alt={'company logo'}
      />
    </a>
  )
}
