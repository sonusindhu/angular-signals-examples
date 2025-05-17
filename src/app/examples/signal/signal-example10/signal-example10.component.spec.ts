import { TestBed } from '@angular/core/testing';
import SignalExample10Component from './signal-example10.component';


describe('Example 10', () => {

    let component: SignalExample10Component;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [SignalExample10Component]
        }).compileComponents();

        component = TestBed.createComponent(SignalExample10Component).componentInstance;

    });

    it('Intial component', () => {
        expect(component).toBeTruthy();
    });

})