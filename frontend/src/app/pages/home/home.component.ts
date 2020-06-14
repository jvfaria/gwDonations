import { Component, OnInit } from '@angular/core';
import { faGem, faGlobe, faHeart} from '@fortawesome/free-solid-svg-icons';
import { faConnectdevelop } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faGem = faGem;
  faCon = faConnectdevelop;
  faGlobe = faGlobe;
  faLove = faHeart;
  
  constructor() { }

  ngOnInit(): void {
  }

}
