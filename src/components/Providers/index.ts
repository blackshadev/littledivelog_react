import combineComponents from '../utils/combineComponents';
import Auth from './Auth';
import Localization from './Localization';

const Providers = combineComponents(Localization, Auth);

export default Providers;
