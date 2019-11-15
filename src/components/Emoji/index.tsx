/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Bird from 'src/components/Emoji/Bird'
import CryingCat from 'src/components/Emoji/CryingCat'
import Question from 'src/components/Emoji/Question'
import Run from 'src/components/Emoji/Run'

export const emojiToComponent = {
  bird: Bird,
  cryingCat: CryingCat,
  question: Question,
  run: Run
}

const Emoji = ({
  type,
  noVerticalTransform
}: {
  type: keyof typeof emojiToComponent
  noVerticalTransform?: boolean
}) => {
  const Component = emojiToComponent[type]
  return (
    <span
      css={[
        css`
          display: inline-flex;
          vertical-align: middle;
          height: 1em;
        `,
        !noVerticalTransform &&
          css`
            transform: translateY(-0.125em);
          `
      ]}
    >
      <Component />
    </span>
  )
}

export default Emoji