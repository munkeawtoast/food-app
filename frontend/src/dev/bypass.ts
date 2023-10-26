import { LoginRequest } from '../api/auth/types'

export type BypassLogin = {
  target: 'merchant' | 'customer'
  cred: LoginRequest
}

type Bypass = {
  login?: BypassLogin
}

const vasana: BypassLogin = {
  target: 'merchant',
  cred: {
    password: '123456',
    username: 'Vasana',
  },
}

const customer: BypassLogin = {
  target: 'customer',
  cred: {
    username: 'Kay',
    password: '123456789',
  },
}

const bypass: Bypass = {
  login: customer,
  // login: vasana,
}

export default bypass
