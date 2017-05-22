import { Component, OnInit, OnDestroy, AfterContentChecked, AfterViewInit, AfterViewChecked, OnChanges, DoCheck, AfterContentInit, Input } from '@angular/core';

@Component({
    selector: 'app-ciclo',
    templateUrl: './ciclo.component.html',
    styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit, OnChanges,
    DoCheck, AfterContentInit, AfterContentChecked,
    AfterViewInit, AfterViewChecked, OnDestroy {
    
    @Input() valorInicial: number = 10;


    constructor() {
        this.log('constructor');
    }

    ngOnDestroy(): void {
        this.log('ngOnDestroy');
    }
    ngAfterViewChecked(): void {
        this.log('ngAfterViewChecked');
    }
    ngAfterViewInit(): void {
        this.log('ngAfterViewInit');
    }
    ngAfterContentInit(): void {
        this.log('ngAfterContentInit');
    }

    ngOnChanges() {
        this.log('ngOnChanges');
    }

    ngOnInit() {
        this.log('ngOnInit');
    }

    ngDoCheck() {
        this.log('ngDoCheck');
    }

    ngAfterContentChecked() {
        this.log('ngAfterContentChecked');
    }

    private log(hook: string) {
        console.log(hook);
    }

}
