import IRoute from '../interfaces/route';

import HomeIcon from '../assets/icons/Homeicon';
import EmployeeIcon from '../assets/icons/Employee';
import FinanceIcon from '../assets/icons/Finance';
import DataIcon from '../assets/icons/Data';
import ConfigIcon from '../assets/icons/Config';

import LoginPage from '../pages/Login';
import HomePage from '../pages/Home';
import EmployeesPage from '../pages/Employees';
import CreateEmployeePage from '../pages/CreateEmployee';
import DetailsDriver from '../pages/DetailsDriver';
import WalletPage from '../pages/Wallet';
import ActionsEmployees from '../pages/ActionsEmployees';
import Page404 from '../pages/Page404';

const routes: IRoute[] = [
  {
    icon: HomeIcon,
    path: '/home',
    name: 'home',
    component: HomePage,
    isPrivate: true,
    exact: true,
  },
  {
    icon: EmployeeIcon,
    path: '/employees',
    name: 'employees',
    component: EmployeesPage,
    isPrivate: true,
    exact: true,
  },
  {
    icon: FinanceIcon,
    path: '/wallet',
    name: 'wallet',
    component: WalletPage,
    isPrivate: true,
    exact: true,
  },
  {
    icon: DataIcon,
    path: '/actions-employees',
    name: 'Actions Employees',
    component: ActionsEmployees,
    isPrivate: true,
    exact: true,
  },
  {
    icon: ConfigIcon,
    path: '/config',
    name: 'config',
    component: HomePage,
    isPrivate: true,
    exact: true,
  },
  {
    icon: null,
    path: '/login',
    name: 'login',
    component: LoginPage,
    isPrivate: true,
    exact: true,
  },
  {
    icon: null,
    path: '/employees/create-employee',
    name: 'create employee',
    component: CreateEmployeePage,
    isPrivate: true,
    exact: true,
  },
  {
    icon: null,
    path: '/employees/driver',
    name: 'show driver',
    component: DetailsDriver,
    isPrivate: true,
    exact: true,
  },
  {
    icon: null,
    path: '*',
    name: 'page404',
    component: Page404,
    isPrivate: false,
    exact: false,
  },
];

export default routes;
