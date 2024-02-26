import {
    Rest,
    RestObject,
    QueryOpts,
    SObject,
    sField,
    SalesforceFieldType,
    SFLocation,
    SFieldProperties,
    FieldResolver,
    SOQLQueryParams,
    buildQuery,
    FieldProps,
    PicklistConst,
    CalendarDate,
  } from "ts-force";
  import { Contact, User } from "./";
  
  export type AccountFields = Partial<FieldProps<Account>>;
  
  /**
   * Generated class for Account
   */
  export class Account extends RestObject {
    @sField({
      apiName: "Contacts",
      createable: false,
      updateable: false,
      required: false,
      reference: () => {
        return Contact;
      },
      childRelationship: true,
      salesforceType: SalesforceFieldType.REFERENCE,
      salesforceLabel: "Contacts",
      externalId: false,
    })
    public contacts?: Contact[];
    @sField({
      apiName: "Users",
      createable: false,
      updateable: false,
      required: false,
      reference: () => {
        return User;
      },
      childRelationship: true,
      salesforceType: SalesforceFieldType.REFERENCE,
      salesforceLabel: "Users",
      externalId: false,
    })
    public users?: User[];
    @sField({
      apiName: "Id",
      createable: false,
      updateable: false,
      required: false,
      reference: undefined,
      childRelationship: false,
      salesforceType: SalesforceFieldType.ID,
      salesforceLabel: "Account ID",
      externalId: false,
    })
    public override readonly id?: string | null;
    @sField({
      apiName: "IsDeleted",
      createable: false,
      updateable: false,
      required: false,
      reference: undefined,
      childRelationship: false,
      salesforceType: SalesforceFieldType.BOOLEAN,
      salesforceLabel: "Deleted",
      externalId: false,
    })
    public readonly isDeleted?: boolean | null;
    @sField({
      apiName: "MasterRecord",
      createable: false,
      updateable: false,
      required: false,
      reference: () => {
        return Account;
      },
      childRelationship: false,
      salesforceType: SalesforceFieldType.REFERENCE,
      salesforceLabel: "Master Record ID",
      externalId: false,
    })
    public masterRecord?: Account;
    @sField({
      apiName: "MasterRecordId",
      createable: false,
      updateable: false,
      required: false,
      reference: undefined,
      childRelationship: false,
      salesforceType: SalesforceFieldType.REFERENCE,
      salesforceLabel: "Master Record ID",
      externalId: false,
    })
    public readonly masterRecordId?: string | null;
    @sField({
      apiName: "Name",
      createable: true,
      updateable: true,
      required: true,
      reference: undefined,
      childRelationship: false,
      salesforceType: SalesforceFieldType.STRING,
      salesforceLabel: "Account Name",
      externalId: false,
    })
    public name?: string | null;
    @sField({
      apiName: "Type",
      createable: true,
      updateable: true,
      required: false,
      reference: undefined,
      childRelationship: false,
      salesforceType: SalesforceFieldType.PICKLIST,
      salesforceLabel: "Account Type",
      externalId: false,
    })
    public type?: string | null;
    @sField({
      apiName: "Parent",
      createable: false,
      updateable: false,
      required: false,
      reference: () => {
        return Account;
      },
      childRelationship: false,
      salesforceType: SalesforceFieldType.REFERENCE,
      salesforceLabel: "Parent Account ID",
      externalId: false,
    })
    public parent?: Account;
    @sField({
      apiName: "ParentId",
      createable: true,
      updateable: true,
      required: false,
      reference: undefined,
      childRelationship: false,
      salesforceType: SalesforceFieldType.REFERENCE,
      salesforceLabel: "Parent Account ID",
      externalId: false,
    })
    public parentId?: string | null;
    @sField({
      apiName: "BillingStreet",
      createable: true,
      updateable: true,
      required: false,
      reference: undefined,
      childRelationship: false,
      salesforceType: SalesforceFieldType.TEXTAREA,
      salesforceLabel: "Billing Street",
      externalId: false,
    })
    public billingStreet?: string | null;
    @sField({
      apiName: "BillingCity",
      createable: true,
      updateable: true,
      required: false,
      reference: undefined,
      childRelationship: false,
      salesforceType: SalesforceFieldType.STRING,
      salesforceLabel: "Billing City",
      externalId: false,
    })
    public billingCity?: string | null;
    @sField({
      apiName: "BillingState",
      createable: true,
      updateable: true,
      required: false,
      reference: undefined,
      childRelationship: false,
      salesforceType: SalesforceFieldType.STRING,
      salesforceLabel: "Billing State/Province",
      externalId: false,
    })
    public billingState?: string | null;
    @sField({
      apiName: "BillingPostalCode",
      createable: true,
      updateable: true,
      required: false,
      reference: undefined,
      childRelationship: false,
      salesforceType: SalesforceFieldType.STRING,
      salesforceLabel: "Billing Zip/Postal Code",
      externalId: false,
    })
    public billingPostalCode?: string | null;
    @sField({
      apiName: "BillingCountry",
      createable: true,
      updateable: true,
      required: false,
      reference: undefined,
      childRelationship: false,
      salesforceType: SalesforceFieldType.STRING,
      salesforceLabel: "Billing Country",
      externalId: false,
    })
    public billingCountry?: string | null;
    @sField({
      apiName: "BillingLatitude",
      createable: true,
      updateable: true,
      required: false,
      reference: undefined,
      childRelationship: false,
      salesforceType: SalesforceFieldType.DOUBLE,
      salesforceLabel: "Billing Latitude",
      externalId: false,
    })
    public billingLatitude?: number | null;
    @sField({
      apiName: "BillingLongitude",
      createable: true,
      updateable: true,
      required: false,
      reference: undefined,
      childRelationship: false,
      salesforceType: SalesforceFieldType.DOUBLE,
      salesforceLabel: "Billing Longitude",
      externalId: false,
    })
    public billingLongitude?: number | null;
    @sField({
      apiName: "BillingGeocodeAccuracy",
      createable: true,
      updateable: true,
      required: false,
      reference: undefined,
      childRelationship: false,
      salesforceType: SalesforceFieldType.PICKLIST,
      salesforceLabel: "Billing Geocode Accuracy",
      externalId: false,
    })
    public billingGeocodeAccuracy?: string | null;
    @sField({
      apiName: "BillingAddress",
      createable: false,
      updateable: false,
      required: false,
      reference: undefined,
      childRelationship: false,
      salesforceType: SalesforceFieldType.ADDRESS,
      salesforceLabel: "Billing Address",
      externalId: false,
    })
    public readonly billingAddress?: string | null;
    @sField({
      apiName: "ShippingStreet",
      createable: true,
      updateable: true,
      required: false,
      reference: undefined,
      childRelationship: false,
      salesforceType: SalesforceFieldType.TEXTAREA,
      salesforceLabel: "Shipping Street",
      externalId: false,
    })
    public shippingStreet?: string | null;
    @sField({
      apiName: "ShippingCity",
      createable: true,
      updateable: true,
      required: false,
      reference: undefined,
      childRelationship: false,
      salesforceType: SalesforceFieldType.STRING,
      salesforceLabel: "Shipping City",
      externalId: false,
    })
    public shippingCity?: string | null;
    @sField({
      apiName: "ShippingState",
      createable: true,
      updateable: true,
      required: false,
      reference: undefined,
      childRelationship: false,
      salesforceType: SalesforceFieldType.STRING,
      salesforceLabel: "Shipping State/Province",
      externalId: false,
    })
    public shippingState?: string | null;
    @sField({
      apiName: "ShippingPostalCode",
      createable: true,
      updateable: true,
      required: false,
      reference: undefined,
      childRelationship: false,
      salesforceType: SalesforceFieldType.STRING,
      salesforceLabel: "Shipping Zip/Postal Code",
      externalId: false,
    })
    public shippingPostalCode?: string | null;
    @sField({
      apiName: "ShippingCountry",
      createable: true,
      updateable: true,
      required: false,
      reference: undefined,
      childRelationship: false,
      salesforceType: SalesforceFieldType.STRING,
      salesforceLabel: "Shipping Country",
      externalId: false,
    })
    public shippingCountry?: string | null;
    @sField({
      apiName: "ShippingLatitude",
      createable: true,
      updateable: true,
      required: false,
      reference: undefined,
      childRelationship: false,
      salesforceType: SalesforceFieldType.DOUBLE,
      salesforceLabel: "Shipping Latitude",
      externalId: false,
    })
    public shippingLatitude?: number | null;
    @sField({
      apiName: "ShippingLongitude",
      createable: true,
      updateable: true,
      required: false,
      reference: undefined,
      childRelationship: false,
      salesforceType: SalesforceFieldType.DOUBLE,
      salesforceLabel: "Shipping Longitude",
      externalId: false,
    })
    public shippingLongitude?: number | null;
    @sField({
      apiName: "ShippingGeocodeAccuracy",
      createable: true,
      updateable: true,
      required: false,
      reference: undefined,
      childRelationship: false,
      salesforceType: SalesforceFieldType.PICKLIST,
      salesforceLabel: "Shipping Geocode Accuracy",
      externalId: false,
    })
    public shippingGeocodeAccuracy?: string | null;
    @sField({
      apiName: "ShippingAddress",
      createable: false,
      updateable: false,
      required: false,
      reference: undefined,
      childRelationship: false,
      salesforceType: SalesforceFieldType.ADDRESS,
      salesforceLabel: "Shipping Address",
      externalId: false,
    })
    public readonly shippingAddress?: string | null;
    @sField({
      apiName: "Phone",
      createable: true,
      updateable: true,
      required: false,
      reference: undefined,
      childRelationship: false,
      salesforceType: SalesforceFieldType.PHONE,
      salesforceLabel: "Account Phone",
      externalId: false,
    })
    public phone?: string | null;
    @sField({
      apiName: "Fax",
      createable: true,
      updateable: true,
      required: false,
      reference: undefined,
      childRelationship: false,
      salesforceType: SalesforceFieldType.PHONE,
      salesforceLabel: "Account Fax",
      externalId: false,
    })
    public fax?: string | null;
    @sField({
      apiName: "AccountNumber",
      createable: true,
      updateable: true,
      required: false,
      reference: undefined,
      childRelationship: false,
      salesforceType: SalesforceFieldType.STRING,
      salesforceLabel: "Account Number",
      externalId: false,
    })
    public accountNumber?: string | null;
    @sField({
      apiName: "Website",
      createable: true,
      updateable: true,
      required: false,
      reference: undefined,
      childRelationship: false,
      salesforceType: SalesforceFieldType.URL,
      salesforceLabel: "Website",
      externalId: false,
    })
    public website?: string | null;
    @sField({
      apiName: "PhotoUrl",
      createable: false,
      updateable: false,
      required: false,
      reference: undefined,
      childRelationship: false,
      salesforceType: SalesforceFieldType.URL,
      salesforceLabel: "Photo URL",
      externalId: false,
    })
    public readonly photoUrl?: string | null;
    @sField({
      apiName: "Sic",
      createable: true,
      updateable: true,
      required: false,
      reference: undefined,
      childRelationship: false,
      salesforceType: SalesforceFieldType.STRING,
      salesforceLabel: "SIC Code",
      externalId: false,
    })
    public sic?: string | null;
    @sField({
      apiName: "Industry",
      createable: true,
      updateable: true,
      required: false,
      reference: undefined,
      childRelationship: false,
      salesforceType: SalesforceFieldType.PICKLIST,
      salesforceLabel: "Industry",
      externalId: false,
    })
    public industry?: string | null;
    @sField({
      apiName: "AnnualRevenue",
      createable: true,
      updateable: true,
      required: false,
      reference: undefined,
      childRelationship: false,
      salesforceType: SalesforceFieldType.CURRENCY,
      salesforceLabel: "Annual Revenue",
      externalId: false,
    })
    public annualRevenue?: number | null;
    @sField({
      apiName: "NumberOfEmployees",
      createable: true,
      updateable: true,
      required: false,
      reference: undefined,
      childRelationship: false,
      salesforceType: SalesforceFieldType.INT,
      salesforceLabel: "Employees",
      externalId: false,
    })
    public numberOfEmployees?: number | null;
    @sField({
      apiName: "Ownership",
      createable: true,
      updateable: true,
      required: false,
      reference: undefined,
      childRelationship: false,
      salesforceType: SalesforceFieldType.PICKLIST,
      salesforceLabel: "Ownership",
      externalId: false,
    })
    public ownership?: string | null;
    @sField({
      apiName: "TickerSymbol",
      createable: true,
      updateable: true,
      required: false,
      reference: undefined,
      childRelationship: false,
      salesforceType: SalesforceFieldType.STRING,
      salesforceLabel: "Ticker Symbol",
      externalId: false,
    })
    public tickerSymbol?: string | null;
    @sField({
      apiName: "Description",
      createable: true,
      updateable: true,
      required: false,
      reference: undefined,
      childRelationship: false,
      salesforceType: SalesforceFieldType.TEXTAREA,
      salesforceLabel: "Account Description",
      externalId: false,
    })
    public description?: string | null;
    @sField({
      apiName: "Rating",
      createable: true,
      updateable: true,
      required: false,
      reference: undefined,
      childRelationship: false,
      salesforceType: SalesforceFieldType.PICKLIST,
      salesforceLabel: "Account Rating",
      externalId: false,
    })
    public rating?: string | null;
    @sField({
      apiName: "Site",
      createable: true,
      updateable: true,
      required: false,
      reference: undefined,
      childRelationship: false,
      salesforceType: SalesforceFieldType.STRING,
      salesforceLabel: "Account Site",
      externalId: false,
    })
    public site?: string | null;
    @sField({
      apiName: "Owner",
      createable: false,
      updateable: false,
      required: false,
      reference: () => {
        return User;
      },
      childRelationship: false,
      salesforceType: SalesforceFieldType.REFERENCE,
      salesforceLabel: "Owner ID",
      externalId: false,
    })
    public owner?: User;
    @sField({
      apiName: "OwnerId",
      createable: true,
      updateable: true,
      required: true,
      reference: undefined,
      childRelationship: false,
      salesforceType: SalesforceFieldType.REFERENCE,
      salesforceLabel: "Owner ID",
      externalId: false,
    })
    public ownerId?: string | null;
    @sField({
      apiName: "CreatedDate",
      createable: false,
      updateable: false,
      required: false,
      reference: undefined,
      childRelationship: false,
      salesforceType: SalesforceFieldType.DATETIME,
      salesforceLabel: "Created Date",
      externalId: false,
    })
    public readonly createdDate?: Date | null;
    @sField({
      apiName: "CreatedBy",
      createable: false,
      updateable: false,
      required: false,
      reference: () => {
        return User;
      },
      childRelationship: false,
      salesforceType: SalesforceFieldType.REFERENCE,
      salesforceLabel: "Created By ID",
      externalId: false,
    })
    public createdBy?: User;
    @sField({
      apiName: "CreatedById",
      createable: false,
      updateable: false,
      required: false,
      reference: undefined,
      childRelationship: false,
      salesforceType: SalesforceFieldType.REFERENCE,
      salesforceLabel: "Created By ID",
      externalId: false,
    })
    public readonly createdById?: string | null;
    @sField({
      apiName: "LastModifiedDate",
      createable: false,
      updateable: false,
      required: false,
      reference: undefined,
      childRelationship: false,
      salesforceType: SalesforceFieldType.DATETIME,
      salesforceLabel: "Last Modified Date",
      externalId: false,
    })
    public readonly lastModifiedDate?: Date | null;
    @sField({
      apiName: "LastModifiedBy",
      createable: false,
      updateable: false,
      required: false,
      reference: () => {
        return User;
      },
      childRelationship: false,
      salesforceType: SalesforceFieldType.REFERENCE,
      salesforceLabel: "Last Modified By ID",
      externalId: false,
    })
    public lastModifiedBy?: User;
    @sField({
      apiName: "LastModifiedById",
      createable: false,
      updateable: false,
      required: false,
      reference: undefined,
      childRelationship: false,
      salesforceType: SalesforceFieldType.REFERENCE,
      salesforceLabel: "Last Modified By ID",
      externalId: false,
    })
    public readonly lastModifiedById?: string | null;
    @sField({
      apiName: "SystemModstamp",
      createable: false,
      updateable: false,
      required: false,
      reference: undefined,
      childRelationship: false,
      salesforceType: SalesforceFieldType.DATETIME,
      salesforceLabel: "System Modstamp",
      externalId: false,
    })
    public readonly systemModstamp?: Date | null;
    @sField({
      apiName: "LastActivityDate",
      createable: false,
      updateable: false,
      required: false,
      reference: undefined,
      childRelationship: false,
      salesforceType: SalesforceFieldType.DATE,
      salesforceLabel: "Last Activity",
      externalId: false,
    })
    public readonly lastActivityDate?: CalendarDate | null;
    @sField({
      apiName: "LastViewedDate",
      createable: false,
      updateable: false,
      required: false,
      reference: undefined,
      childRelationship: false,
      salesforceType: SalesforceFieldType.DATETIME,
      salesforceLabel: "Last Viewed Date",
      externalId: false,
    })
    public readonly lastViewedDate?: Date | null;
    @sField({
      apiName: "LastReferencedDate",
      createable: false,
      updateable: false,
      required: false,
      reference: undefined,
      childRelationship: false,
      salesforceType: SalesforceFieldType.DATETIME,
      salesforceLabel: "Last Referenced Date",
      externalId: false,
    })
    public readonly lastReferencedDate?: Date | null;
    @sField({
      apiName: "Jigsaw",
      createable: true,
      updateable: true,
      required: false,
      reference: undefined,
      childRelationship: false,
      salesforceType: SalesforceFieldType.STRING,
      salesforceLabel: "Data.com Key",
      externalId: false,
    })
    public jigsaw?: string | null;
    @sField({
      apiName: "JigsawCompanyId",
      createable: false,
      updateable: false,
      required: false,
      reference: undefined,
      childRelationship: false,
      salesforceType: SalesforceFieldType.STRING,
      salesforceLabel: "Jigsaw Company ID",
      externalId: false,
    })
    public readonly jigsawCompanyId?: string | null;
    @sField({
      apiName: "CleanStatus",
      createable: true,
      updateable: true,
      required: false,
      reference: undefined,
      childRelationship: false,
      salesforceType: SalesforceFieldType.PICKLIST,
      salesforceLabel: "Clean Status",
      externalId: false,
    })
    public cleanStatus?: string | null;
    @sField({
      apiName: "AccountSource",
      createable: true,
      updateable: true,
      required: false,
      reference: undefined,
      childRelationship: false,
      salesforceType: SalesforceFieldType.PICKLIST,
      salesforceLabel: "Account Source",
      externalId: false,
    })
    public accountSource?: string | null;
    @sField({
      apiName: "DunsNumber",
      createable: true,
      updateable: true,
      required: false,
      reference: undefined,
      childRelationship: false,
      salesforceType: SalesforceFieldType.STRING,
      salesforceLabel: "D-U-N-S Number",
      externalId: false,
    })
    public dunsNumber?: string | null;
    @sField({
      apiName: "Tradestyle",
      createable: true,
      updateable: true,
      required: false,
      reference: undefined,
      childRelationship: false,
      salesforceType: SalesforceFieldType.STRING,
      salesforceLabel: "Tradestyle",
      externalId: false,
    })
    public tradestyle?: string | null;
    @sField({
      apiName: "NaicsCode",
      createable: true,
      updateable: true,
      required: false,
      reference: undefined,
      childRelationship: false,
      salesforceType: SalesforceFieldType.STRING,
      salesforceLabel: "NAICS Code",
      externalId: false,
    })
    public naicsCode?: string | null;
    @sField({
      apiName: "NaicsDesc",
      createable: true,
      updateable: true,
      required: false,
      reference: undefined,
      childRelationship: false,
      salesforceType: SalesforceFieldType.STRING,
      salesforceLabel: "NAICS Description",
      externalId: false,
    })
    public naicsDesc?: string | null;
    @sField({
      apiName: "YearStarted",
      createable: true,
      updateable: true,
      required: false,
      reference: undefined,
      childRelationship: false,
      salesforceType: SalesforceFieldType.STRING,
      salesforceLabel: "Year Started",
      externalId: false,
    })
    public yearStarted?: string | null;
    @sField({
      apiName: "SicDesc",
      createable: true,
      updateable: true,
      required: false,
      reference: undefined,
      childRelationship: false,
      salesforceType: SalesforceFieldType.STRING,
      salesforceLabel: "SIC Description",
      externalId: false,
    })
    public sicDesc?: string | null;
    @sField({
      apiName: "DandbCompanyId",
      createable: true,
      updateable: true,
      required: false,
      reference: undefined,
      childRelationship: false,
      salesforceType: SalesforceFieldType.REFERENCE,
      salesforceLabel: "D&B Company ID",
      externalId: false,
    })
    public dandbCompanyId?: string | null;
    @sField({
      apiName: "OperatingHoursId",
      createable: true,
      updateable: true,
      required: false,
      reference: undefined,
      childRelationship: false,
      salesforceType: SalesforceFieldType.REFERENCE,
      salesforceLabel: "Operating Hour ID",
      externalId: false,
    })
    public operatingHoursId?: string | null;
    @sField({
      apiName: "CustomerPriority__c",
      createable: true,
      updateable: true,
      required: false,
      reference: undefined,
      childRelationship: false,
      salesforceType: SalesforceFieldType.PICKLIST,
      salesforceLabel: "Customer Priority",
      externalId: false,
    })
    public customerPriority?: string | null;
    @sField({
      apiName: "SLA__c",
      createable: true,
      updateable: true,
      required: false,
      reference: undefined,
      childRelationship: false,
      salesforceType: SalesforceFieldType.PICKLIST,
      salesforceLabel: "SLA",
      externalId: false,
    })
    public sla?: string | null;
    @sField({
      apiName: "Active__c",
      createable: true,
      updateable: true,
      required: false,
      reference: undefined,
      childRelationship: false,
      salesforceType: SalesforceFieldType.PICKLIST,
      salesforceLabel: "Active",
      externalId: false,
    })
    public active?: string | null;
    @sField({
      apiName: "NumberofLocations__c",
      createable: true,
      updateable: true,
      required: false,
      reference: undefined,
      childRelationship: false,
      salesforceType: SalesforceFieldType.DOUBLE,
      salesforceLabel: "Number of Locations",
      externalId: false,
    })
    public numberofLocations?: number | null;
    @sField({
      apiName: "UpsellOpportunity__c",
      createable: true,
      updateable: true,
      required: false,
      reference: undefined,
      childRelationship: false,
      salesforceType: SalesforceFieldType.PICKLIST,
      salesforceLabel: "Upsell Opportunity",
      externalId: false,
    })
    public upsellOpportunity?: string | null;
    @sField({
      apiName: "SLASerialNumber__c",
      createable: true,
      updateable: true,
      required: false,
      reference: undefined,
      childRelationship: false,
      salesforceType: SalesforceFieldType.STRING,
      salesforceLabel: "SLA Serial Number",
      externalId: false,
    })
    public slaSerialNumber?: string | null;
    @sField({
      apiName: "SLAExpirationDate__c",
      createable: true,
      updateable: true,
      required: false,
      reference: undefined,
      childRelationship: false,
      salesforceType: SalesforceFieldType.DATE,
      salesforceLabel: "SLA Expiration Date",
      externalId: false,
    })
    public slaExpirationDate?: CalendarDate | null;
  
    constructor(fields?: AccountFields, restInstance?: Rest) {
      super("Account", restInstance);
      this.contacts = void 0;
      this.users = void 0;
      this.id = void 0;
      this.isDeleted = void 0;
      this.masterRecord = void 0;
      this.masterRecordId = void 0;
      this.name = void 0;
      this.type = void 0;
      this.parent = void 0;
      this.parentId = void 0;
      this.billingStreet = void 0;
      this.billingCity = void 0;
      this.billingState = void 0;
      this.billingPostalCode = void 0;
      this.billingCountry = void 0;
      this.billingLatitude = void 0;
      this.billingLongitude = void 0;
      this.billingGeocodeAccuracy = void 0;
      this.billingAddress = void 0;
      this.shippingStreet = void 0;
      this.shippingCity = void 0;
      this.shippingState = void 0;
      this.shippingPostalCode = void 0;
      this.shippingCountry = void 0;
      this.shippingLatitude = void 0;
      this.shippingLongitude = void 0;
      this.shippingGeocodeAccuracy = void 0;
      this.shippingAddress = void 0;
      this.phone = void 0;
      this.fax = void 0;
      this.accountNumber = void 0;
      this.website = void 0;
      this.photoUrl = void 0;
      this.sic = void 0;
      this.industry = void 0;
      this.annualRevenue = void 0;
      this.numberOfEmployees = void 0;
      this.ownership = void 0;
      this.tickerSymbol = void 0;
      this.description = void 0;
      this.rating = void 0;
      this.site = void 0;
      this.owner = void 0;
      this.ownerId = void 0;
      this.createdDate = void 0;
      this.createdBy = void 0;
      this.createdById = void 0;
      this.lastModifiedDate = void 0;
      this.lastModifiedBy = void 0;
      this.lastModifiedById = void 0;
      this.systemModstamp = void 0;
      this.lastActivityDate = void 0;
      this.lastViewedDate = void 0;
      this.lastReferencedDate = void 0;
      this.jigsaw = void 0;
      this.jigsawCompanyId = void 0;
      this.cleanStatus = void 0;
      this.accountSource = void 0;
      this.dunsNumber = void 0;
      this.tradestyle = void 0;
      this.naicsCode = void 0;
      this.naicsDesc = void 0;
      this.yearStarted = void 0;
      this.sicDesc = void 0;
      this.dandbCompanyId = void 0;
      this.operatingHoursId = void 0;
      this.customerPriority = void 0;
      this.sla = void 0;
      this.active = void 0;
      this.numberofLocations = void 0;
      this.upsellOpportunity = void 0;
      this.slaSerialNumber = void 0;
      this.slaExpirationDate = void 0;
      this.__UUID = Account.__UUID;
      this.initObject(fields);
      return new Proxy(this, this.safeUpdateProxyHandler);
    }
  
    public static API_NAME: "Account" = "Account";
    public readonly _TYPE_: "Account" = "Account";
    public static __UUID = Symbol();
    private static _fields: {
      [P in keyof FieldProps<Account>]: SFieldProperties;
    };
  
    public static get FIELDS() {
      return (this._fields = this._fields
        ? this._fields
        : Account.getPropertiesMeta<FieldProps<Account>, Account>(Account));
    }
  
    public static async retrieve(
      qryParam: ((fields: FieldResolver<Account>) => SOQLQueryParams) | string,
      opts?: QueryOpts
    ): Promise<Account[]> {
      const qry =
        typeof qryParam === "function" ? buildQuery(Account, qryParam) : qryParam;
      return await RestObject.query<Account>(Account, qry, opts);
    }
  
    public static fromSFObject(sob: SObject): Account {
      return new Account().mapFromQuery(sob);
    }
  }
  