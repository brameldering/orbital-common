import { IRoleObj } from '../../types/mongoose-model-types/mongoose-access-types';
import { CUSTOMER_ROLE, ADMIN_ROLE } from '../../constants/role-constants';

export const roles: IRoleObj[] = [
  { role: CUSTOMER_ROLE, roleDisplay: 'Customer' },
  { role: ADMIN_ROLE, roleDisplay: 'Administrator' },
];
