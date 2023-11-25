import Link from 'next/link'
import logo from './icons/jor.png'
import styled from '@emotion/styled'
import Image from 'next/image'

const LogoBox = styled.span`
  display: inline-flex;
  align-items: center;
  width: 160px;
  padding: 10px;
`

const Logo = () => {
  return (
    <Link href="/" scroll={false}>
      <LogoBox>
        <Image src={logo} alt="" />
      </LogoBox>
    </Link>
  )
}

export default Logo
