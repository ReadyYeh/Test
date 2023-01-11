import { getGuessStatuses } from '../../lib/statuses'
import { Cell } from './Cell'
import { unicodeSplit } from '../../lib/words'
import { VALID_GUESSES } from '../../constants/validGuesses'
import { SUPP_WIDTH } from '../../constants/settings'

type Props = {
  solution: string
  guess: string
  isRevealing?: boolean
}

export const CompletedRow = ({ solution, guess, isRevealing }: Props) => {
  const statuses = getGuessStatuses(solution, guess)
  const splitGuess = unicodeSplit(guess)
  let WordArr = []
  for(let i=0;i<=splitGuess.length-1;i++)
  {
    if(splitGuess[i] === "B")
    {
      WordArr.push("金１");
    }
    else if(splitGuess[i] === "C")
    {
      WordArr.push("木１");
    }
    else if(splitGuess[i] === "D")
    {
      WordArr.push("水１");
    }
    else if(splitGuess[i] === "E")
    {
      WordArr.push("火１");
    }
    else if(splitGuess[i] === "F")
    {
      WordArr.push("土１");
    }
    else if(splitGuess[i] === "G")
    {
      WordArr.push("金２");
    }
    else if(splitGuess[i] === "H")
    {
      WordArr.push("木２");
    }
    else if(splitGuess[i] === "I")
    {
      WordArr.push("水２");
    }
    else if(splitGuess[i] === "J")
    {
      WordArr.push("火２");
    }
    else if(splitGuess[i] === "K")
    {
      WordArr.push("土２");
    }
    else if(splitGuess[i] === "L")
    {
      WordArr.push("金３");
    }
    else if(splitGuess[i] === "M")
    {
      WordArr.push("木３");
    }
    else if(splitGuess[i] === "N")
    {
      WordArr.push("水３");
    }
    else if(splitGuess[i] === "O")
    {
      WordArr.push("火３");
    }
    else if(splitGuess[i] === "P")
    {
      WordArr.push("土３");
    }
    else if(splitGuess[i] === "Q")
    {
      WordArr.push("金４");
    }
    else if(splitGuess[i] === "R")
    {
      WordArr.push("木４");
    }
    else if(splitGuess[i] === "S")
    {
      WordArr.push("水４");
    }
    else if(splitGuess[i] === "T")
    {
      WordArr.push("火４");
    }
    else if(splitGuess[i] === "U")
    {
      WordArr.push("土４");
    }
    else if(splitGuess[i] === "V")
    {
      WordArr.push("金５");
    }
    else if(splitGuess[i] === "W")
    {
      WordArr.push("木５");
    }
    else if(splitGuess[i] === "X")
    {
      WordArr.push("水５");
    }
    else if(splitGuess[i] === "Y")
    {
      WordArr.push("火５");
    }
    else if(splitGuess[i] === "Z")
    {
      WordArr.push("土５");
    }
  }
  return (
    <div className="flex justify-center mb-1">
      {WordArr.map((letter, i) => (
        <Cell
          key={i}
          value={letter}
          status={statuses[i]}
          position={i}
          isRevealing={isRevealing}
          isCompleted
        />
      ))}
    <span className="dark:text-white" style={{maxWidth: SUPP_WIDTH, width: SUPP_WIDTH}}>{VALID_GUESSES[guess]}</span>
    </div>
  )
}
