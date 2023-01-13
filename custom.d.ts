declare module '*.svg' {
  import React = require('react')
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
  const src: string
  export default src
}

declare module '*.png' {
  const value: string
  export default value
}
declare module '*.webp' {
  const value: string
  export default value
}

declare module '*.module.css' {
  const classes: { [key: string]: string }
  export default classes
}

declare module '*.json' {
  const value: string
  export default value
}
