import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  isAddressSame = false;
  imagePreview: string;
  userProfile = new User();

  profileForm = this.fb.group({
    userImage: [''],
    name: this.fb.group({
      firstName: [''],
      lastName: ['']
    }),
    mobile: [''],
    gender: [''],
    address: this.fb.group({
      permanent: this.fb.group({
        address1: [''],
        // address2: [''],
        // city: [''],
        // state: [''],
        // country: [''],
        zipCode: ['']
      }),
      isCurrentSameToPermanent: [''],
      current: this.fb.group({
        address1: [''],
        // address2: [''],
        // city: [''],
        // state: [''],
        // country: [''],
        zipCode: ['']
      })
    })
  });

  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.userProfile = this.userService.getUserProfile();
    if (this.userProfile) {
      this.profileForm.setValue({
        userImage: this.userProfile.userImage,
        name: {
          firstName: this.userProfile.name.firstName,
          lastName: this.userProfile.name.lastName
        },
        gender: this.userProfile.gender,
        mobile: this.userProfile.mobile,
        address: {
          permanent: {
            address1: this.userProfile.address.permanent.address1,
            zipCode: this.userProfile.address.permanent.zipCode
          },
          isCurrentSameToPermanent: this.userProfile.address.isCurrentSameToPermanent,
          current: {
            address1: this.userProfile.address.current.address1,
            zipCode: this.userProfile.address.current.zipCode
          }
        }
      });
      debugger;
      this.readImageFile(this.userProfile.userImage);
    }
  }

  onProfileSubmit(): void {
    this.userProfile = this.profileForm.value;
    // need to use token
    this.userProfile.username = localStorage.getItem('user');
    if (this.userProfile.address.isCurrentSameToPermanent) {
      this.userProfile.address.current.address1 = null;
      this.userProfile.address.current.zipCode = null;
    }

    this.userService.modifyUserProfile(this.userProfile);
  }

  onImagePicked(event: Event): void {
    const selectedImage: File = (event.target as HTMLInputElement).files[0];
    this.profileForm.patchValue({ userImage: selectedImage });
    this.profileForm.get('userImage').updateValueAndValidity();

    this.readImageFile(selectedImage);
  }

  readImageFile(imageFile: File): void {
    // creating a reader to read the blob files from local machine
    const reader = new FileReader();
    // reading file as "data: URL"
    reader.readAsDataURL(imageFile);
    // setting the read data to image preview after the reader has loaded all the data
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
  }

  onUpload(selectedImage): void {
  }
}
