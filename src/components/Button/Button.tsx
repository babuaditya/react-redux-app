import clsx from 'clsx'
// type ButtonType={
//   varian
// }

export const Button = ({variant="primary",size="medium",children,...props}) => {
  return (
    <button className={clsx('btn',{
      'bg-primary':variant==="primary",
      'bg-secondary':variant==="secondary",
      '':size='large',
      '':size='medium',
      '':size='small',
    })}>
      {children}
    </button>
  )
}



