import { Component, Input, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'sb-cta-fab',
  templateUrl: './cta-fab.component.html',
  styleUrls: ['./cta-fab.component.css']
})
export class CtaFabComponent implements OnInit {
  @Input() text!: string;
  private position!: FabPosition;
  
  constructor() {

  }

  ngOnInit() {
    
  }

  public getPosition(): FabPosition {
    return this.position;
  }
  
  public setPosition(value: FabPosition) {
    this.position = value;
  }
}

export declare type FabPosition = 'aside' | 'aside-bottom' | 'bottom';