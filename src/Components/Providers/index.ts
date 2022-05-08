import combineComponents from '../../Helpers/CombineComponents';
import Auth from './Auth';
import Localization from './Localization';
import MUITheme from './MUITheme';
import StrictMode from './StrictMode';

const Providers = combineComponents(StrictMode, Localization, Auth, MUITheme);

export default Providers;
