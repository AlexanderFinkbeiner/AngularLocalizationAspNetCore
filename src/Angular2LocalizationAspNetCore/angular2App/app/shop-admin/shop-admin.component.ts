import { Component, OnInit } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Product } from '../services/Product';
import { ProductCreateEdit } from  '../services/ProductCreateEdit';
import { Locale, LocaleService, LocalizationService} from 'angular2localization/angular2localization';
import { ProductService } from '../services/ProductService';
import { TranslatePipe } from 'angular2localization/angular2localization';

@Component({
    selector: 'shopadmincomponent',
    template: require('./shop-admin.component.html'),
    pipes: [TranslatePipe]
})

export class ShopAdminComponent extends Locale implements OnInit  {

    public message: string;
    public Product: ProductCreateEdit = new ProductCreateEdit();
    public Currency: string;

    public Name_de: string;
    public Name_fr: string;
    public Name_it: string;
    public Name_en: string;
    public Description_de: string;
    public Description_fr: string;
    public Description_it: string;
    public Description_en: string;

    submitted = false;

    onSubmit() {
        this.submitted = true;
        this.Create();
    }

    // Reset the form with a new hero AND restore 'pristine' class state
    // by toggling 'active' flag which causes the form
    // to be removed/re-added in a tick via NgIf
    // TODO: Workaround until NgForm has a reset method (#6822)
    active = true;
    saving: boolean = false;

    constructor(
        private router: Router,
        public _localeService: LocaleService,
        public localization: LocalizationService,
        private _productService: ProductService
    ) {

        super(null, localization);

        this.message = "shop-admin.component";

        this._localeService.languageCodeChanged.subscribe(item => this.onLanguageCodeChangedDataRecieved(item));
        
    }

    ngOnInit() {
        console.log("ngOnInit ShopAdminComponent");
        // TODO Get product if Id exists
        this.initProduct();

        this.Currency = this._localeService.getCurrentCurrency();
        if (!(this.Currency === "CHF" || this.Currency === "EUR")) {
            this.Currency = "CHF";
        }
    }

    public Create() {

        this.submitted = true;

        this.saving = true;

        this.Product.LocalizationRecords = [];
        this.Product.LocalizationRecords.push({ Key: this.Product.Name, LocalizationCulture: "de-CH", Text: this.Name_de });
        this.Product.LocalizationRecords.push({ Key: this.Product.Name, LocalizationCulture: "fr-CH", Text: this.Name_fr });
        this.Product.LocalizationRecords.push({ Key: this.Product.Name, LocalizationCulture: "it-CH", Text: this.Name_it });
        this.Product.LocalizationRecords.push({ Key: this.Product.Name, LocalizationCulture: "en-US", Text: this.Name_en });

        this.Product.LocalizationRecords.push({ Key: this.Product.Description, LocalizationCulture: "de-CH", Text: this.Description_de });
        this.Product.LocalizationRecords.push({ Key: this.Product.Description, LocalizationCulture: "fr-CH", Text: this.Description_fr });
        this.Product.LocalizationRecords.push({ Key: this.Product.Description, LocalizationCulture: "it-CH", Text: this.Description_it });
        this.Product.LocalizationRecords.push({ Key: this.Product.Description, LocalizationCulture: "en-US", Text: this.Description_en });

        this._productService.CreateProduct(this.Product)
            .subscribe(data => {
                this.saving = false;
                this.router.navigate(['/shop']);
            }, error => {
                this.saving = false;
                console.log(error)
            },
            () => this.saving = false);
    }
 

    private onLanguageCodeChangedDataRecieved(item) {
        console.log("onLanguageCodeChangedDataRecieved Shop Admin");
        console.log(item + " : "+ this._localeService.getCurrentLanguage());
    }


    private initProduct() {
        this.Product = new ProductCreateEdit();      
    }

}
