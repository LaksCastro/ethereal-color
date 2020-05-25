import * as Types from './types'

import ComponentMethodsInterface from '../../shared/component/interface'

import { PrivatePropertyColorState } from '../../shared/@types'

interface ColorMethodsInterface extends ComponentMethodsInterface<PrivatePropertyColorState> {
  get: Types.PublicMethodGet
  set: Types.PublicMethodSet
}

export default ColorMethodsInterface
