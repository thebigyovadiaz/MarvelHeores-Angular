import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-poll',
  templateUrl: './modal-poll.component.html',
  styleUrls: ['./modal-poll.component.css'],
})
export class ModalPollComponent implements OnInit {
  @Input() title_modal: string;
  @Input() team_selected: string;
  @Output() setTeam: EventEmitter<string> = new EventEmitter<string>();

  show_modal: boolean = false;

  constructor() {}

  ngOnInit() {}

  toggle_modal() {
    this.show_modal = !this.show_modal;
  }

  send_team(team: string) {
    this.setTeam.emit(team);
    this.toggle_modal();
  }
}
