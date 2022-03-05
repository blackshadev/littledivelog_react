import joinComponents from '../../Helpers/JoinComponents';
import BodyStyle from './body.style';
import ResetStyle from './reset.style';

const GlobalStyles = joinComponents(ResetStyle, BodyStyle);
GlobalStyles.displayName = 'GlobalStyles';

export default GlobalStyles;
