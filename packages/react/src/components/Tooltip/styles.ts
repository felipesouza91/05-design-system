import { styled } from '../../styles'

export const TooltipContainer = styled('div', {
  height: 44,
  padding: '$3 $4',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$gray900',
  borderRadius: '$sm',
  position: 'relative',
  span: {
    color: '$gray100',
    fontWeight: '$medium',
    lineHeight: '$short',
    fontFamily: '$default',
  },
  '&:before': {
    position: 'absolute',
    content: ' ',
    width: 0,
    height: 0,
    borderLeft: '8px solid transparent',
    borderRight: '8px solid transparent',
    borderTop: '8px solid $gray900',
    bottom: -8,
  },
})
