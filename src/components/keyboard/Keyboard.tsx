import { getStatuses } from '../../lib/statuses'
import { Key } from './Key'
import { useEffect } from 'react'
import { ENTER_TEXT } from '../../constants/strings'
import { localeAwareUpperCase } from '../../lib/words'

type Props = {
  onChar: (value: string) => void
  onDelete: () => void
  onEnter: () => void
  solution: string
  guesses: string[]
  isRevealing?: boolean
}

export const Keyboard = ({
  onChar,
  onDelete,
  onEnter,
  solution,
  guesses,
  isRevealing,
}: Props) => {
  const charStatuses = getStatuses(solution, guesses)
  //console.log(charStatuses)
  for (const [key, value] of Object.entries(charStatuses)) {
    if(key === "B")
    {
      charStatuses["金１"] = value
    }
    else if(key === "C")
    {
      charStatuses["木１"] = value
    }
    else if(key === "D")
    {
      charStatuses["水１"] = value
    }
    else if(key === "E")
    {
      charStatuses["火１"] = value
    }
    else if(key === "F")
    {
      charStatuses["土１"] = value
    }
    else if(key === "G")
    {
      charStatuses["金２"] = value
    }
    else if(key === "H")
    {
      charStatuses["木２"] = value
    }
    else if(key === "I")
    {
      charStatuses["水２"] = value
    }
    else if(key === "J")
    {
      charStatuses["火２"] = value
    }
    else if(key === "K")
    {
      charStatuses["土２"] = value
    }
    else if(key === "L")
    {
      charStatuses["金３"] = value
    }
    else if(key === "M")
    {
      charStatuses["木３"] = value
    }
    else if(key === "N")
    {
      charStatuses["水３"] = value
    }
    else if(key === "O")
    {
      charStatuses["火３"] = value
    }
    else if(key === "P")
    {
      charStatuses["土３"] = value
    }
    else if(key === "Q")
    {
      charStatuses["金４"] = value
    }
    else if(key === "R")
    {
      charStatuses["木４"] = value
    }
    else if(key === "S")
    {
      charStatuses["水４"] = value
    }
    else if(key === "T")
    {
      charStatuses["火４"] = value
    }
    else if(key === "U")
    {
      charStatuses["土４"] = value
    }
    else if(key === "V")
    {
      charStatuses["金５"] = value
    }
    else if(key === "W")
    {
      charStatuses["木５"] = value
    }
    else if(key === "X")
    {
      charStatuses["水５"] = value
    }
    else if(key === "Y")
    {
      charStatuses["火５"] = value
    }
    else if(key === "Z")
    {
      charStatuses["土５"] = value
    }
}

  const onClick = (value: string) => {
    if (value === 'ENTER') {
      onEnter()
    } else if (value === 'DELETE') {
      onDelete()
    } else {
      onChar(value)
    }
  }

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.code === 'Enter') {
        onEnter()
      } else if (e.code === 'Backspace') {
        onDelete()
      } else {
        const key = localeAwareUpperCase(e.key)
        // TODO: check this test if the range works with non-english letters
        if (key.length === 1 && key >= 'A' && key <= 'Z') {
          onChar(key)
        }
      }
    }
    window.addEventListener('keyup', listener)
    return () => {
      window.removeEventListener('keyup', listener)
    }
  }, [onEnter, onDelete, onChar])

  return (
    <div>
      <div className="flex justify-center mb-1">
        {[
          '金１',
          '木１',
          '水１',
          '火１',
          '土１',
        ].map((key) => (
          <Key
            value={key}
            key={key}
            onClick={onClick}
            status={charStatuses[key]}
            width={50}
            isRevealing={isRevealing}
          />
        ))}
      </div>
      <div className="flex justify-center mb-1">
        {[
          '金２',
          '木２',
          '水２',
          '火２',
          '土２',
        ].map((key) => (
          <Key
            value={key}
            key={key}
            onClick={onClick}
            status={charStatuses[key]}
            width={50}
            isRevealing={isRevealing}
          />
        ))}
      </div>
      <div className="flex justify-center mb-1">
        {[
          '金３',
          '木３',
          '水３',
          '火３',
          '土３',
        ].map((key) => (
          <Key
            value={key}
            key={key}
            onClick={onClick}
            status={charStatuses[key]}
            width={50}
            isRevealing={isRevealing}
          />
        ))}
      </div>
      <div className="flex justify-center mb-1">
        {[
          '金４',
          '木４',
          '水４',
          '火４',
          '土４',
        ].map((key) => (
          <Key
            value={key}
            key={key}
            onClick={onClick}
            status={charStatuses[key]}
            width={50}
            isRevealing={isRevealing}
          />
        ))}
      </div>
      <div className="flex justify-center mb-1">
        {[
          '金５',
          '木５',
          '水５',
          '火５',
          '土５',
        ].map((key) => (
          <Key
            value={key}
            key={key}
            onClick={onClick}
            status={charStatuses[key]}
            width={50}
            isRevealing={isRevealing}
          />
        ))}
      </div>
      <div className="flex justify-center mb-1">
        <Key width={50} value="ENTER" key={ENTER_TEXT} onClick={onClick}/>
      </div>
    </div>
  )
}
