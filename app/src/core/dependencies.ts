import 'reflect-metadata';
import { container } from 'tsyringe';

import TruckVansRepositoryImpl from './data/repository/trucksVansRepositoryImpl';
import AuthRepositoryImpl from './data/repository/authRepositoryImpl';
import TrucksVansUseCases from './usecases/truckVans';
import AuthUseCases from './usecases/auth';

container.register('TruckVansRepositoryImpl', { useClass: TruckVansRepositoryImpl });
container.register('TrucksVansUseCases', { useClass: TrucksVansUseCases });
container.register('AuthRepositoryImpl', { useClass: AuthRepositoryImpl });
container.register('AuthUseCases', { useClass: AuthUseCases });

export { container };
