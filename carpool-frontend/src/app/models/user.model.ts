export class User{
  username: string;
  userImage: File;
  name: {
    firstName: string,
    lastName: string
  };
  mobile: number;
  gender: string;
  address: {
    permanent: {
      address1: string;
      // address2: string;
      // city: string;
      // state: string;
      // country: string;
      zipCode: number;
    },
    isCurrentSameToPermanent: boolean,
    current: {
      address1: string;
      // address2: string;
      // city: string;
      // state: string;
      // country: string;
      zipCode: number;
    }
  };
}
