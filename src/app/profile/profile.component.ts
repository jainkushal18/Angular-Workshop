import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  // Sample user data
  user = {
    name: 'Kushal Jain',
    email: 'jkushale@example.com',
    phone: '123-456-7890',
    address: 'SKIT, Jaipur',
    bio: 'A curious explorer of ideas and cultures, blending creativity with technology to craft engaging experiences. Passionate about storytelling through code, I strive to inspire and connect with others in the digital realm.'
  };

  // Add any additional logic if necessary
}
