// import cn from 'classnames';
// import { FC, ReactNode } from 'react';
// import Ticker from 'react-ticker';
// import s from './Marquee.module.css';


// interface Props {
// 	children: ReactNode[];
// 	variant?: 'primary' | 'secondary';
// }

// const Marquee: FC<Props> = ({ children, variant = 'primary' }) => {
// 	const rootClassName = cn(s.root, {
// 		[s.secondary]: variant === 'secondary',
// 	});

// 	return (
// 		<div className={rootClassName}>
// 			<Ticker offset={80}>
// 				{() => <div className={s.container}>{children}</div>}
// 			</Ticker>
// 		</div>
// 	);
// };

// export default Marquee;


import cn from 'classnames'
import dynamic from 'next/dynamic'
import { FC, ReactNode, useEffect, useState } from 'react'
import s from './Marquee.module.css'

//  Disable SSR for react-ticker
const Ticker = dynamic(() => import('react-ticker'), {
  ssr: false,
})

interface Props {
  children: ReactNode[]
  variant?: 'primary' | 'secondary'
}

const Marquee: FC<Props> = ({ children, variant = 'primary' }) => {
  const [mounted, setMounted] = useState(false)

  //  wait until client mount
  useEffect(() => {
    setMounted(true)
  }, [])

  const rootClassName = cn(s.root, {
    [s.secondary]: variant === 'secondary',
  })

  if (!mounted) {
    // SSR-safe fallback (no stacking)
    return (
      <div className={rootClassName}>
        <div className={s.fallback}>
          {children.map((child, i) => (
            <div key={i} className={s.fallbackItem}>
              {child}
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className={rootClassName}>
      <Ticker offset={80}>
        {() => <div className={s.container}>{children}</div>}
      </Ticker>
    </div>
  )
}

export default Marquee
