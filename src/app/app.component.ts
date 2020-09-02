import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IProfile, ProfileService } from './services/profile/profile.service';
import StringLint from './utils/stringLint';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public title = 'Profile';
  public userProfile;
  public fName;
  public lName;
  public error;
  public isLoading = false;
  public isSaving = false;
  public isToast = false;

  stringLint = new StringLint();

  @ViewChild('firstName', null) firstName: ElementRef;
  @ViewChild('lastName', null) lastName: ElementRef;

  public user: IProfile;

  constructor(private profile: ProfileService) { }

  ngOnInit() {
    this.loadProfile();
  }

  loadProfile() {
    this.isLoading = true;
    this.profile.getProfileUser().then((profile) => {
      this.userProfile = profile;
      this.clearSpinners();
      this.isToast = false;
    }).catch((error) => {
      this.setToast(error.error);
      this.ngOnInit();
    })
  }

  saveProfile() {
    this.isSaving = true;
    this.isToast = false;
    this.fName = this.firstName.nativeElement.value;
    this.lName = this.lastName.nativeElement.value;
    this.profile.setName(this.fName, this.lName).then((user) => {
      this.profile.setUserEmailName(this.fName, this.lName).then((email) => {
        this.userProfile.email = email;
      }).catch((error) => {
        this.setToast(error.error);
        this.userProfile.username = this.userProfile.username;
        this.userProfile.email = this.userProfile.email;
      })
      this.userProfile = user;
      console.log(this.userProfile);
      this.isToast = false;
      this.clearSpinners();
    }).catch((error) => {
      this.setToast(error.error);
    })
  }

  setToast(message) {
    this.isToast = true;
    this.error = message;
    this.clearSpinners();
  }

  clearSpinners() {
    this.isLoading = false;
    this.isSaving = false;
  }

  languageToggle(language) {
    switch (language) {
      case 'english': {
        this.title = 'Profile'
        break;
      }
      case 'italian': {
        this.title = 'Profilo';
        break;
      }
      case 'french': {
        this.title = 'Profil';
        break;
      }
      default: {
        this.title = 'Profile'
        break;
      }
    }
  }

}