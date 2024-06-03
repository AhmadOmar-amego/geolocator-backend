import { Injectable } from '@nestjs/common';
import { CreateLocationDto } from './dto/create-location.dto';

@Injectable()
export class LocationsService {

  private users = [
    {
      'id': 1,
      'address': 'Leanne Graham',
      'email': 'Sincere@april.biz'
    },
    {
      'id': 2,
      'address': 'Ervin Howell',
      'email': 'Shanna@melissa.tv'
    },
    {
      'id': 3,
      'address': 'Clementine Bauch',
      'email': 'Nathan@yesenia.net'
    },
    {
      'id': 4,
      'address': 'Patricia Lebsack',
      'email': 'Julianne.OConner@kory.org'
    }
  ];

  findAll( ) {

    return this.users;
  }


  create(createLocationDto: CreateLocationDto) {
    const locationsByHighestId = [...this.users].sort((a, b) => b.id - a.id);
    const newLocation = {
      id: locationsByHighestId[0].id + 1,
      ...createLocationDto,
    };
    this.users.push(newLocation);
    return newLocation;
  }

}
