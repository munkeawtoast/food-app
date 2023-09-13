type UserType = 'customer' | 'merchant' 

export type User = {
  id: number,
  type: UserType
  name: string
  'image-url': string
}
