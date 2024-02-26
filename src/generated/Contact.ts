import { Rest, RestObject, QueryOpts, SObject, sField, SalesforceFieldType, SFLocation, SFieldProperties, FieldResolver, SOQLQueryParams, buildQuery, FieldProps, PicklistConst, CalendarDate } from "ts-force";
import { User, Account } from "./";

export type ContactFields = Partial<FieldProps<Contact>>;

/**
 * Generated class for Contact
 */
export class Contact extends RestObject {
    @sField({ apiName: 'Users', createable: false, updateable: false, required: false, reference: () => { return User }, childRelationship: true, salesforceType: SalesforceFieldType.REFERENCE, salesforceLabel: 'Users', externalId: false })
    public users?: User[];
    @sField({ apiName: 'Id', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.ID, salesforceLabel: 'Contact ID', externalId: false })
    public override readonly id?: string | null;
    @sField({ apiName: 'IsDeleted', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'Deleted', externalId: false })
    public readonly isDeleted?: boolean | null;
    @sField({ apiName: 'MasterRecord', createable: false, updateable: false, required: false, reference: () => { return Contact }, childRelationship: false, salesforceType: SalesforceFieldType.REFERENCE, salesforceLabel: 'Master Record ID', externalId: false })
    public masterRecord?: Contact;
    @sField({ apiName: 'MasterRecordId', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.REFERENCE, salesforceLabel: 'Master Record ID', externalId: false })
    public readonly masterRecordId?: string | null;
    @sField({ apiName: 'Account', createable: false, updateable: false, required: false, reference: () => { return Account }, childRelationship: false, salesforceType: SalesforceFieldType.REFERENCE, salesforceLabel: 'Account ID', externalId: false })
    public account?: Account;
    @sField({ apiName: 'AccountId', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.REFERENCE, salesforceLabel: 'Account ID', externalId: false })
    public accountId?: string | null;
    @sField({ apiName: 'LastName', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Last Name', externalId: false })
    public lastName?: string | null;
    @sField({ apiName: 'FirstName', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'First Name', externalId: false })
    public firstName?: string | null;
    @sField({ apiName: 'Salutation', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PICKLIST, salesforceLabel: 'Salutation', externalId: false })
    public salutation?: string | null;
    @sField({ apiName: 'Name', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Full Name', externalId: false })
    public readonly name?: string | null;
    @sField({ apiName: 'OtherStreet', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.TEXTAREA, salesforceLabel: 'Other Street', externalId: false })
    public otherStreet?: string | null;
    @sField({ apiName: 'OtherCity', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Other City', externalId: false })
    public otherCity?: string | null;
    @sField({ apiName: 'OtherState', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Other State/Province', externalId: false })
    public otherState?: string | null;
    @sField({ apiName: 'OtherPostalCode', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Other Zip/Postal Code', externalId: false })
    public otherPostalCode?: string | null;
    @sField({ apiName: 'OtherCountry', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Other Country', externalId: false })
    public otherCountry?: string | null;
    @sField({ apiName: 'OtherLatitude', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DOUBLE, salesforceLabel: 'Other Latitude', externalId: false })
    public otherLatitude?: number | null;
    @sField({ apiName: 'OtherLongitude', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DOUBLE, salesforceLabel: 'Other Longitude', externalId: false })
    public otherLongitude?: number | null;
    @sField({ apiName: 'OtherGeocodeAccuracy', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PICKLIST, salesforceLabel: 'Other Geocode Accuracy', externalId: false })
    public otherGeocodeAccuracy?: string | null;
    @sField({ apiName: 'OtherAddress', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.ADDRESS, salesforceLabel: 'Other Address', externalId: false })
    public readonly otherAddress?: string | null;
    @sField({ apiName: 'MailingStreet', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.TEXTAREA, salesforceLabel: 'Mailing Street', externalId: false })
    public mailingStreet?: string | null;
    @sField({ apiName: 'MailingCity', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Mailing City', externalId: false })
    public mailingCity?: string | null;
    @sField({ apiName: 'MailingState', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Mailing State/Province', externalId: false })
    public mailingState?: string | null;
    @sField({ apiName: 'MailingPostalCode', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Mailing Zip/Postal Code', externalId: false })
    public mailingPostalCode?: string | null;
    @sField({ apiName: 'MailingCountry', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Mailing Country', externalId: false })
    public mailingCountry?: string | null;
    @sField({ apiName: 'MailingLatitude', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DOUBLE, salesforceLabel: 'Mailing Latitude', externalId: false })
    public mailingLatitude?: number | null;
    @sField({ apiName: 'MailingLongitude', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DOUBLE, salesforceLabel: 'Mailing Longitude', externalId: false })
    public mailingLongitude?: number | null;
    @sField({ apiName: 'MailingGeocodeAccuracy', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PICKLIST, salesforceLabel: 'Mailing Geocode Accuracy', externalId: false })
    public mailingGeocodeAccuracy?: string | null;
    @sField({ apiName: 'MailingAddress', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.ADDRESS, salesforceLabel: 'Mailing Address', externalId: false })
    public readonly mailingAddress?: string | null;
    @sField({ apiName: 'Phone', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PHONE, salesforceLabel: 'Business Phone', externalId: false })
    public phone?: string | null;
    @sField({ apiName: 'Fax', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PHONE, salesforceLabel: 'Business Fax', externalId: false })
    public fax?: string | null;
    @sField({ apiName: 'MobilePhone', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PHONE, salesforceLabel: 'Mobile Phone', externalId: false })
    public mobilePhone?: string | null;
    @sField({ apiName: 'HomePhone', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PHONE, salesforceLabel: 'Home Phone', externalId: false })
    public homePhone?: string | null;
    @sField({ apiName: 'OtherPhone', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PHONE, salesforceLabel: 'Other Phone', externalId: false })
    public otherPhone?: string | null;
    @sField({ apiName: 'AssistantPhone', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PHONE, salesforceLabel: 'Asst. Phone', externalId: false })
    public assistantPhone?: string | null;
    @sField({ apiName: 'ReportsTo', createable: false, updateable: false, required: false, reference: () => { return Contact }, childRelationship: false, salesforceType: SalesforceFieldType.REFERENCE, salesforceLabel: 'Reports To ID', externalId: false })
    public reportsTo?: Contact;
    @sField({ apiName: 'ReportsToId', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.REFERENCE, salesforceLabel: 'Reports To ID', externalId: false })
    public reportsToId?: string | null;
    @sField({ apiName: 'Email', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.EMAIL, salesforceLabel: 'Email', externalId: false })
    public email?: string | null;
    @sField({ apiName: 'Title', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Title', externalId: false })
    public title?: string | null;
    @sField({ apiName: 'Department', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Department', externalId: false })
    public department?: string | null;
    @sField({ apiName: 'AssistantName', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Assistant\'s Name', externalId: false })
    public assistantName?: string | null;
    @sField({ apiName: 'LeadSource', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PICKLIST, salesforceLabel: 'Lead Source', externalId: false })
    public leadSource?: string | null;
    @sField({ apiName: 'Birthdate', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DATE, salesforceLabel: 'Birthdate', externalId: false })
    public birthdate?: CalendarDate | null;
    @sField({ apiName: 'Description', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.TEXTAREA, salesforceLabel: 'Contact Description', externalId: false })
    public description?: string | null;
    @sField({ apiName: 'Owner', createable: false, updateable: false, required: false, reference: () => { return User }, childRelationship: false, salesforceType: SalesforceFieldType.REFERENCE, salesforceLabel: 'Owner ID', externalId: false })
    public owner?: User;
    @sField({ apiName: 'OwnerId', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.REFERENCE, salesforceLabel: 'Owner ID', externalId: false })
    public ownerId?: string | null;
    @sField({ apiName: 'CreatedDate', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DATETIME, salesforceLabel: 'Created Date', externalId: false })
    public readonly createdDate?: Date | null;
    @sField({ apiName: 'CreatedBy', createable: false, updateable: false, required: false, reference: () => { return User }, childRelationship: false, salesforceType: SalesforceFieldType.REFERENCE, salesforceLabel: 'Created By ID', externalId: false })
    public createdBy?: User;
    @sField({ apiName: 'CreatedById', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.REFERENCE, salesforceLabel: 'Created By ID', externalId: false })
    public readonly createdById?: string | null;
    @sField({ apiName: 'LastModifiedDate', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DATETIME, salesforceLabel: 'Last Modified Date', externalId: false })
    public readonly lastModifiedDate?: Date | null;
    @sField({ apiName: 'LastModifiedBy', createable: false, updateable: false, required: false, reference: () => { return User }, childRelationship: false, salesforceType: SalesforceFieldType.REFERENCE, salesforceLabel: 'Last Modified By ID', externalId: false })
    public lastModifiedBy?: User;
    @sField({ apiName: 'LastModifiedById', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.REFERENCE, salesforceLabel: 'Last Modified By ID', externalId: false })
    public readonly lastModifiedById?: string | null;
    @sField({ apiName: 'SystemModstamp', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DATETIME, salesforceLabel: 'System Modstamp', externalId: false })
    public readonly systemModstamp?: Date | null;
    @sField({ apiName: 'LastActivityDate', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DATE, salesforceLabel: 'Last Activity', externalId: false })
    public readonly lastActivityDate?: CalendarDate | null;
    @sField({ apiName: 'LastCURequestDate', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DATETIME, salesforceLabel: 'Last Stay-in-Touch Request Date', externalId: false })
    public readonly lastCuRequestDate?: Date | null;
    @sField({ apiName: 'LastCUUpdateDate', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DATETIME, salesforceLabel: 'Last Stay-in-Touch Save Date', externalId: false })
    public readonly lastCuUpdateDate?: Date | null;
    @sField({ apiName: 'LastViewedDate', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DATETIME, salesforceLabel: 'Last Viewed Date', externalId: false })
    public readonly lastViewedDate?: Date | null;
    @sField({ apiName: 'LastReferencedDate', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DATETIME, salesforceLabel: 'Last Referenced Date', externalId: false })
    public readonly lastReferencedDate?: Date | null;
    @sField({ apiName: 'EmailBouncedReason', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Email Bounced Reason', externalId: false })
    public emailBouncedReason?: string | null;
    @sField({ apiName: 'EmailBouncedDate', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DATETIME, salesforceLabel: 'Email Bounced Date', externalId: false })
    public emailBouncedDate?: Date | null;
    @sField({ apiName: 'IsEmailBounced', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'Is Email Bounced', externalId: false })
    public readonly isEmailBounced?: boolean | null;
    @sField({ apiName: 'PhotoUrl', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.URL, salesforceLabel: 'Photo URL', externalId: false })
    public readonly photoUrl?: string | null;
    @sField({ apiName: 'Jigsaw', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Data.com Key', externalId: false })
    public jigsaw?: string | null;
    @sField({ apiName: 'JigsawContactId', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Jigsaw Contact ID', externalId: false })
    public readonly jigsawContactId?: string | null;
    @sField({ apiName: 'CleanStatus', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PICKLIST, salesforceLabel: 'Clean Status', externalId: false })
    public cleanStatus?: string | null;
    @sField({ apiName: 'IndividualId', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.REFERENCE, salesforceLabel: 'Individual ID', externalId: false })
    public individualId?: string | null;
    @sField({ apiName: 'Level__c', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PICKLIST, salesforceLabel: 'Level', externalId: false })
    public level?: string | null;
    @sField({ apiName: 'Languages__c', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Languages', externalId: false })
    public languages?: string | null;

    constructor(fields?: ContactFields, restInstance?: Rest) {
        super('Contact', restInstance);
        this.users = void 0;
        this.id = void 0;
        this.isDeleted = void 0;
        this.masterRecord = void 0;
        this.masterRecordId = void 0;
        this.account = void 0;
        this.accountId = void 0;
        this.lastName = void 0;
        this.firstName = void 0;
        this.salutation = void 0;
        this.name = void 0;
        this.otherStreet = void 0;
        this.otherCity = void 0;
        this.otherState = void 0;
        this.otherPostalCode = void 0;
        this.otherCountry = void 0;
        this.otherLatitude = void 0;
        this.otherLongitude = void 0;
        this.otherGeocodeAccuracy = void 0;
        this.otherAddress = void 0;
        this.mailingStreet = void 0;
        this.mailingCity = void 0;
        this.mailingState = void 0;
        this.mailingPostalCode = void 0;
        this.mailingCountry = void 0;
        this.mailingLatitude = void 0;
        this.mailingLongitude = void 0;
        this.mailingGeocodeAccuracy = void 0;
        this.mailingAddress = void 0;
        this.phone = void 0;
        this.fax = void 0;
        this.mobilePhone = void 0;
        this.homePhone = void 0;
        this.otherPhone = void 0;
        this.assistantPhone = void 0;
        this.reportsTo = void 0;
        this.reportsToId = void 0;
        this.email = void 0;
        this.title = void 0;
        this.department = void 0;
        this.assistantName = void 0;
        this.leadSource = void 0;
        this.birthdate = void 0;
        this.description = void 0;
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
        this.lastCuRequestDate = void 0;
        this.lastCuUpdateDate = void 0;
        this.lastViewedDate = void 0;
        this.lastReferencedDate = void 0;
        this.emailBouncedReason = void 0;
        this.emailBouncedDate = void 0;
        this.isEmailBounced = void 0;
        this.photoUrl = void 0;
        this.jigsaw = void 0;
        this.jigsawContactId = void 0;
        this.cleanStatus = void 0;
        this.individualId = void 0;
        this.level = void 0;
        this.languages = void 0;
        this.__UUID = Contact.__UUID;
        this.initObject(fields);
        return new Proxy(this, this.safeUpdateProxyHandler);
    }

    public static API_NAME: 'Contact' = 'Contact';
    public readonly _TYPE_: 'Contact' = 'Contact';
    public static __UUID = Symbol();
    private static _fields: { [P in keyof FieldProps<Contact>]: SFieldProperties; };

    public static get FIELDS() {
        return this._fields = this._fields ? this._fields : Contact.getPropertiesMeta<FieldProps<Contact>, Contact>(Contact)
    }

    public static async retrieve(qryParam: ((fields: FieldResolver<Contact>) => SOQLQueryParams) | string, opts?: QueryOpts): Promise<Contact[]> {

        const qry = typeof qryParam === 'function' ? buildQuery(Contact, qryParam) : qryParam;
        return await RestObject.query<Contact>(Contact, qry, opts);

    }

    public static fromSFObject(sob: SObject): Contact {
        return new Contact().mapFromQuery(sob);
    }
}
