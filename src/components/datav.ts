import { MainTitle } from './text/main-title/src/main-title'
import { NumberTitleFlop } from './text/number-title-flop/src/number-title-flop'
import { DatePicker } from './other/date-picker/src/date-picker'

export function createComponent(name: string) {
  switch (name.substr(1)) {
    case 'MainTitle':
      return new MainTitle()
    case 'NumberTitleFlop':
      return new NumberTitleFlop()
    case 'DatePicker':
      return new DatePicker()
    default:
      throw Error(`Unknown component type: ${name}.`)
  }
}