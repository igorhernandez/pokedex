import { AntDesign } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'

import { colors } from '../../utils/colors'
import { IconContainer } from './EggGroupIcon.styles'

interface IEggGroupsIcons {
  eggName: string
}

interface IEggGroups {
  [icon: string]: JSX.Element
}
interface IEggGroupsColors {
  [color: string]: string
}

const EggGroupsIcons = ({ eggName }: IEggGroupsIcons) => {
  if (!eggName) return null

  const eggGroupsColors: IEggGroupsColors = {
    monster: colors.purple,
    bug: colors.darkGreen,
    flying: colors.softBlue,
    ground: colors.lightBrown,
    fairy: colors.purple,
    plant: colors.lightGreen,
    humanshape: colors.purple,
    water1: colors.lightBlue,
    water3: colors.lightBlue,
    water2: colors.lightBlue,
    mineral: colors.purple,
    indeterminate: colors.purple,
    ditto: colors.purple,
    dragon: colors.orange,
    'no-eggs': colors.purple
  }

  const iconSize = 17
  const iconColor = colors.white

  const eggGroups: IEggGroups = {
    monster: <FontAwesome5 name="skull" size={iconSize} color={iconColor} />,
    bug: <FontAwesome5 name="bug" size={iconSize} color={iconColor} />,
    flying: <FontAwesome5 name="feather" size={iconSize} color={iconColor} />,
    ground: <FontAwesome5 name="mountain" size={13} color={iconColor} />,
    fairy: <AntDesign name="dingding" size={iconSize} color={iconColor} />,
    plant: <FontAwesome5 name="leaf" size={iconSize} color={iconColor} />,
    humanshape: <FontAwesome5 name="child" size={iconSize} color={iconColor} />,
    water1: <FontAwesome5 name="water" size={iconSize} color={iconColor} />,
    water3: <FontAwesome5 name="water" size={iconSize} color={iconColor} />,
    water2: <FontAwesome5 name="water" size={iconSize} color={iconColor} />,
    mineral: <FontAwesome5 name="gem" size={iconSize} color={iconColor} />,
    indeterminate: (
      <MaterialIcons
        name="indeterminate-check-box"
        size={24}
        color={iconColor}
      />
    ),
    ditto: <FontAwesome5 name="equals" size={iconSize} color={iconColor} />,
    dragon: <FontAwesome5 name="fire" size={iconSize} color={iconColor} />,
    'no-eggs': <FontAwesome5 name="egg" size={iconSize} color={iconColor} />
  }

  return (
    <IconContainer bgColor={eggGroupsColors[eggName]}>
      {eggGroups[eggName] || null}
    </IconContainer>
  )
}

export default EggGroupsIcons
