export type AspectMethods = {}

export type Aspect = () => Readonly<AspectMethods>

const Aspect: Aspect = () => {
  const self = {}

  return Object.freeze(self)
}

export default Aspect
