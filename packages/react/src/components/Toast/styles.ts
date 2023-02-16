import { styled } from '../../styles'

export const ToastContainer = styled('div', {
  height: '$20',
  maxWidth: 360,
  backgroundColor: '$gray800',
  padding: '$3 $5',
  border: '1px solid $gray600',
  borderRadius: '$sm',
  display: 'flex',
  gap: 4,
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
})
export const Info = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'row',

  alignItems: 'center',
  justifyContent: 'space-between',
})

export const CloseButton = styled('button', {
  all: 'unset',
  cursor: 'pointer',
  svg: {
    color: '$gray200',
  },
})
export const Message = styled('span', {
  fontSize: '$xl',
  fontFamily: '$default',
  fontWeight: 'bold',
  color: '$white',
  lineHeight: '$base',
})
export const Date = styled('span', {
  fontSize: '$sm',
  fontFamily: '$default',
  fontWeight: 'bold',
  color: '$gray200',
  lineHeight: '$base',
})
