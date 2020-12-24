/* eslint-disable import/no-unresolved */

import React from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import usePrismTheme from '@theme/hooks/usePrismTheme'
import Playground from '@theme/Playground'
import CodeLiveScope from '@theme/CodeLiveScope'
import CodeBlock from '@theme-init/CodeBlock'

const getLanguage = (className = '') => {
  const [, mode] = className.match(/language-(\w+)/) || []
  return mode
}

const withLiveEditor = (Component) => {
  const WrappedComponent = (props) => {
    const { isClient } = useDocusaurusContext()
    const prismTheme = usePrismTheme()

    if (props.live) {
      const language = props.language || getLanguage(props.className)

      return (
        <Playground
          key={isClient}
          scope={CodeLiveScope}
          theme={prismTheme}
          language={language}
          {...props}
        />
      )
    }

    return <Component {...props} />
  }

  return WrappedComponent
}

export default withLiveEditor(CodeBlock)
