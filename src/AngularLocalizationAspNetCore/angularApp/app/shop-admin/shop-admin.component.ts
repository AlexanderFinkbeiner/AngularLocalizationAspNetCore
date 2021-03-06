import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ProductCreateEdit } from '../services/ProductCreateEdit';
import { LocaleService, TranslationService, Language } from 'angular-l10n';
import { ProductService } from '../services/ProductService';

@Component({
    selector: 'app-shop-admincomponent',
    templateUrl: 'shop-admin.component.html'
})

export class ShopAdminComponent implements OnInit  {

    @Language() lang = '';
    public message: string;
    public Product: ProductCreateEdit = new ProductCreateEdit();
    public Currency = '';

    public Name_de = '';
    public Name_fr = '';
    public Name_it = '';
    public Name_en = '';
    public Description_de = '';
    public Description_fr = '';
    public Description_it = '';
    public Description_en = '';

    submitted = false;
    // Reset the form with a new hero AND restore 'pristine' class state
    // by toggling 'active' flag which causes the form
    // to be removed/re-added in a tick via NgIf
    // TODO: Workaround until NgForm has a reset method (#6822)
    active = true;
    saving = false;

    constructor(
        private router: Router,
        public locale: LocaleService,
        public translation: TranslationService,
        private _productService: ProductService
    ) {
        this.message = 'shop-admin.component';

        this.locale.defaultLocaleChanged.subscribe(
            (item: string) => { this.onLanguageCodeChangedDataRecieved(item); }
        );
    }

    onSubmit() {
        this.submitted = true;
        this.Create();
    }

    ngOnInit() {
        console.log('ngOnInit ShopAdminComponent');
        // TODO Get product if Id exists
        this.initProduct();

        this.Currency = this.locale.getCurrentCurrency();
        if (!(this.Currency === 'CHF' || this.Currency === 'EUR')) {
            this.Currency = 'CHF';
        }
    }

    public Create() {

        this.submitted = true;

        this.saving = true;

        this.Product.LocalizationRecords = [];
        this.Product.LocalizationRecords.push({ Key: this.Product.Name, LocalizationCulture: 'de-CH', Text: this.Name_de });
        this.Product.LocalizationRecords.push({ Key: this.Product.Name, LocalizationCulture: 'fr-CH', Text: this.Name_fr });
        this.Product.LocalizationRecords.push({ Key: this.Product.Name, LocalizationCulture: 'it-CH', Text: this.Name_it });
        this.Product.LocalizationRecords.push({ Key: this.Product.Name, LocalizationCulture: 'en-US', Text: this.Name_en });

        this.Product.LocalizationRecords.push({ Key: this.Product.Description, LocalizationCulture: 'de-CH', Text: this.Description_de });
        this.Product.LocalizationRecords.push({ Key: this.Product.Description, LocalizationCulture: 'fr-CH', Text: this.Description_fr });
        this.Product.LocalizationRecords.push({ Key: this.Product.Description, LocalizationCulture: 'it-CH', Text: this.Description_it });
        this.Product.LocalizationRecords.push({ Key: this.Product.Description, LocalizationCulture: 'en-US', Text: this.Description_en });

        this._productService.CreateProduct(this.Product)
            .subscribe(() => {
                this.saving = false;
                this.router.navigate(['/shop']);
            }, error => {
                this.saving = false;
                console.log(error);
            },
            () => this.saving = false);
    }

    private onLanguageCodeChangedDataRecieved(item: string) {
        console.log('onLanguageCodeChangedDataRecieved Shop Admin');
        console.log(item + ' : ' + this.locale.getCurrentLanguage());
    }

    private initProduct() {
        this.Product = new ProductCreateEdit();
    }
}
