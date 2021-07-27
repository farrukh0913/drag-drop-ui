import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  droppedItems = [];
  dragEnabled = true;
  currentDraggedItem: any;
  modalPopupObject: any;
  display: boolean = false;
  uiControls = [
    { name: 'label', type: 'label', inputType: 'label', value: 'Next Section' },
    { name: 'text', type: 'input-text', inputType: 'text', placeholder: '' },
    { name: 'checkbox', type: 'input-check', inputType: 'checkbox', placeholder: null, displayText: 'Check box' }];

  constructor() { }

  ngOnInit() {
    this.modalPopupObject = {};
  }

    /**
 * On Item Drop
 * @param e dragged item
 */
  onAnyDrop(e: any) {
    this.currentDraggedItem = e;
    if (e.dragData.type !== 'label') { this.display = true; }
    else {
      this.updateDroppedItem(this.currentDraggedItem);
    }
  }

  /**
   * 
   * @param f form field
   */
  onSubmit(f: any): void {
    this.display = false;
    this.updateDroppedItem(f.value);
  }

  /**
 * update Dropped Item
 * @param e 
 */
  updateDroppedItem(e: any): void {
    this.currentDraggedItem.dragData.placeholder = e.placeholder;
    this.droppedItems.push(this.currentDraggedItem.dragData);
  }

  /**
* Save form on Local Storage.
*/
  saveForm() {
    console.log("Form Saved Successfully.");
    localStorage.setItem('dataSource', JSON.stringify(this.droppedItems));
    alert("Form Saved Successfully.");
  }

}
