// @flow

export type User = {
  id: string
}

export type ErrorType = {
  code: string,
  message: string
}

export type Headers = {
  authorization: String
}

export type FunctionConfig = {
  region: string,
  environment: string
}

export type ProviderType = 'NATIVE' | 'THIRDY'
export type Provider = {
  type: ProviderType
}

export type Application = {
  name: string,
  description: ?string,
  accountID: string
}

export type Account = {
  id: string
}