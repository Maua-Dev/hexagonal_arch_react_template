type Address = {
  street: string
  suite: string
  city: string
  zipcode: string
}

type UserJsonProps = {
  id: number
  name: string
  email: string
  address: Address
}

export class User {
  private _id: number
  private _name: string
  private _email: string
  private _address: Address

  constructor(id: number, name: string, email: string, address: Address) {
    this._id = id
    this._name = name
    this._email = email
    this._address = address
  }

  get id() {
    return this._id
  }

  set id(id: number) {
    this._id = id
  }

  get name() {
    return this._name
  }

  set name(name: string) {
    this._name = name
  }

  get email() {
    return this._email
  }

  set email(email: string) {
    this._email = email
  }

  get address() {
    return this._address
  }

  set address(address: Address) {
    this._address = address
  }

  static fromJson({ id, name, email, address }: UserJsonProps): User {
    return new User(id, name, email, address)
  }
}
