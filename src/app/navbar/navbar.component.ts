import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toSkills() {
    // @ts-ignore
    document.getElementById("skills").scrollIntoView({behavior:"smooth"});
  }

  toExp() {
    // @ts-ignore
    document.getElementById("exp").scrollIntoView({behavior:"smooth"});

  }

  toAboutMe() {
    // @ts-ignore
    document.getElementById("abtme").scrollIntoView({behavior:"smooth"})
  }

  toContact() {
    // @ts-ignore
    document.getElementById("cont").scrollIntoView({behavior:"smooth"});
  }
}
