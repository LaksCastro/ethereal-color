import * as Types from './types'

interface IComponentMethods<TState> {
  getState: Types.PrivateMethodGetState<TState>
  setState: Types.PrivateMethodSetState<TState>
}

export default IComponentMethods
