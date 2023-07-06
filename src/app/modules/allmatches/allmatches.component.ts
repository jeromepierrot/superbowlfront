import { Component } from '@angular/core';

@Component({
  selector: 'sb-allmatches',
  templateUrl: './allmatches.component.html',
  styleUrls: ['./allmatches.component.css']
})
export class AllmatchesComponent {
  matchListFiller = Array.from({length: 100}, (_, i) => `Match Item ${i+1}`)

}
