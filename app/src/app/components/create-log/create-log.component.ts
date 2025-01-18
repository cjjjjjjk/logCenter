import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";


@Component({
    selector: 'create-log',
    imports: [CommonModule, FormsModule],
    templateUrl: './create-log.component.html',
    styleUrl: './create-log.component.css'
})

export class CreateLogComponent {
    // Handler
    isFocusHeader: boolean = false;
    isFocusDescription: boolean = false;
    isDiscard = false;

    // Values
    postHeader: string = "";
    postDescription: string = "";


    constructor() { }

    handleBlurHeader() {
        setTimeout(() => {
            if (!this.isFocusDescription) {
                this.isFocusHeader = false;
            }
        }, 100)
    }
    handleBlurDescription() {
        this.isFocusDescription = false
        this.handleBlurHeader()
    }

    textAreaShowHandle(): boolean {
        if (this.isFocusHeader) return true;
        if (this.isDiscard) return false;
        if (this.postDescription || this.postHeader) return true;
        return false;
    }


    createNewLog() {
        console.log("submit")
        if (!this.isFocusHeader) {
            this.isFocusHeader = true;
        }
    }
    discardNewLog() {
        this.isDiscard = true;
        this.postDescription = "";
        this.postHeader = ""
    }
}