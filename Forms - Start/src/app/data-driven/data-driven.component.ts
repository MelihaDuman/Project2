import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, ReactiveFormsModule, Validators, FormArray } from '@angular/forms';
import { Observable } from "rxjs/Rx";

@Component({
    selector: 'data-driven',
    templateUrl: 'data-driven.component.html'
})
export class DataDrivenComponent {
    myForm: FormGroup;
    genders = [
        'female',
        'male'
    ]
    constructor(private formBuilder: FormBuilder){
        // this.myForm = new FormGroup({
        //     'userData': new FormGroup({
        //         'username': new FormControl('Max', Validators.required),
        //     'email': new FormControl('', 
        //                 [Validators.required,
        //                  Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")])
        //     }),
        //     'password': new FormControl('', Validators.required),
        //     'gender': new FormControl(),
        //     'hobbies': new FormArray([
        //         new FormControl('Cooking', Validators.required)])
        // });
        this.myForm = formBuilder.group({
            'userData': formBuilder.group({
                'username': ['Max', [Validators.required]],
                'email': ['', Validators.required, 
                                            Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]
            }),
            'password': ['', Validators.required],
            'gender': [''],
            'hobbies': formBuilder.array([['Cooking', Validators.required]])
        });
        this.myForm.valueChanges.subscribe(
            (data: any) => console.log(data)
        );

    }
    onSubmit(){
        console.log(this.myForm);
    }
    onAddHobby(){
        (<FormArray>this.myForm.controls['hobbies']).push(new FormControl('', Validators.required));
    }
    onReset(){
        this.myForm.reset();
    }
    
    // exampleValidator(control: FormControl): {[s: string]: boolean}{
    //     if(control.value === 'Example'){
    //         return {example: true};
    //     }
    //     return null;
    // }
    // asyncExampleValidator(control: FormControl): Promise<any> | Observable<any> {
    //     const promise = new Promise<any>(
    //         (resolve, reject) => {
    //             setTimeout(() => {
    //                 if(control.value === 'Example'){
    //                     resolve({'invalid': true});
    //                 }else {
    //                     resolve(null)
    //                 }
    //             }, 1500)
    //         }
    //     );
    //     return promise;
    // }
}
