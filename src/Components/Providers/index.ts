import combineComponents from '../../Helpers/CombineComponents';
import Auth from './Auth';
import Localization from './Localization';
import StrictMode from './StrictMode';

const Providers = combineComponents(StrictMode, Localization, Auth);

export default Providers;
