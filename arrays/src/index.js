import Senators from './data/senators'

export const republicans = () => {
  const republicanSenators = Senators.filter((senator) => {
    return senator.party === 'Republican'
  })
  return republicanSenators
}

export const democrats = () => {
  const democratSenators = Senators.filter((senator) => {
    return senator.party === 'Democrat'
  })
  return democratSenators
}

export const independents = () => {
  const senatorIndependent = Senators.filter((senator) => {
    return senator.party === 'Independent'
  })
  return senatorIndependent
}

export const males = () => {
  const maleSenators = Senators.filter((senator) => {
    return senator.person.gender === 'male'
  })
  return maleSenators
}

export const females = () => {
  const femaleSenators = Senators.filter((senator) => {
    return senator.person.gender === 'female'
  })
  return femaleSenators
}

export const byState = (state = 'UT') => {
  const senatorState = Senators.filter((senator) => {
    return senator.state === state
  })
  return senatorState
}

export const mapping = () => {
  const validSenators = Senators.filter((senator) => {
    return !!senator.person
  })
  const senatorMap = validSenators.map((senator) => {
    return {
      firstName: senator.person.firstname,
      lastName: senator.person.lastname,
      party: senator.party,
      gender: senator.person.gender
    }
  })
  return senatorMap
}

export const reducedCount = () => {
  const partyCount = Senators.reduce((counts,senator) => {
    if (senator.party === 'Republican'){
      counts.republican++
    }
    if (senator.party === 'Democrat'){
      counts.democrat++
    }
    if (senator.party === 'Independent'){
      counts.independent++
    }
    return counts
  }, {
    republican: 0,
    democrat: 0,
    independent: 0
  })
  return partyCount
}


const REPLACE_ME_WITH_CODE = false
