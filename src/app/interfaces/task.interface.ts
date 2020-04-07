// import moment from 'moment';

export interface Task {
  id: string;
  name: string;
  description?: string;
  room?: Room,
  rating?: number;
  queue?: number;
  comments?: Comment[];
  timeBegin?: Date;
  timeEnd?: Date;
  priority?: number;
  repeat?: IRepeat[];
}

export enum Room {
  LivingRoom = 'Living Room',
  DiningRoom = 'Dining Room',
  Kitchen = 'Kitchen',
  Closet = 'Closet',
  Pantry = 'Pantry',
  Bedroom = 'Bedroom',
  Bathroom = 'Bathroom',
  LaundyRoom = 'Laundry Room',
  Backyard = 'Backyard'
}

export interface IRepeat {
  duration: number;
  frequency: string;
}
