// @flow

export type Application = {
  id: string
}

export type Agent = {
  id: string
}

export type Provider = {
  id: string
}

export type Contact = {
  id: string
}

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

export type ErrorType = {
  code: string,
  message: string
}

export type Operation = "CREATE" | "UPDATE" | "DELETE" | "GET"
