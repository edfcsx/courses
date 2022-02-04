export function validateEmptyAndLength (length) {
  return function (value) {
    if (!value) {
      return '*Este campo é obrigatório'
    }

    if (value.length < length) {
      return `*Este campo precisa de no mínimo ${length} caracteres`
    }

    return true
  }
}

export function validateEmptyAndEmail (value) {
  if (!value) {
    return '*Este campo é obrigatório'
  }

  const isValid = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(value)

  if (!isValid) {
    return '*Este campo precisa ser um e-mail'
  }

  return true
}
