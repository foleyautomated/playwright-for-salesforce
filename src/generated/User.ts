import { Rest, RestObject, QueryOpts, SObject, sField, SalesforceFieldType, SFLocation, SFieldProperties, FieldResolver, SOQLQueryParams, buildQuery, FieldProps, PicklistConst, CalendarDate } from "ts-force";
import { Contact, Account } from "./";

export type UserFields = Partial<FieldProps<User>>;

/**
 * Generated class for User
 */
export class User extends RestObject {
    @sField({ apiName: 'Id', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.ID, salesforceLabel: 'User ID', externalId: false })
    public readonly id?: string | null;
    @sField({ apiName: 'Username', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Username', externalId: false })
    public username?: string | null;
    @sField({ apiName: 'LastName', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Last Name', externalId: false })
    public lastName?: string | null;
    @sField({ apiName: 'FirstName', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'First Name', externalId: false })
    public firstName?: string | null;
    @sField({ apiName: 'Name', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Full Name', externalId: false })
    public readonly name?: string | null;
    @sField({ apiName: 'CompanyName', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Company Name', externalId: false })
    public companyName?: string | null;
    @sField({ apiName: 'Division', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Division', externalId: false })
    public division?: string | null;
    @sField({ apiName: 'Department', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Department', externalId: false })
    public department?: string | null;
    @sField({ apiName: 'Title', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Title', externalId: false })
    public title?: string | null;
    @sField({ apiName: 'Street', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.TEXTAREA, salesforceLabel: 'Street', externalId: false })
    public street?: string | null;
    @sField({ apiName: 'City', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'City', externalId: false })
    public city?: string | null;
    @sField({ apiName: 'State', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'State/Province', externalId: false })
    public state?: string | null;
    @sField({ apiName: 'PostalCode', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Zip/Postal Code', externalId: false })
    public postalCode?: string | null;
    @sField({ apiName: 'Country', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Country', externalId: false })
    public country?: string | null;
    @sField({ apiName: 'Latitude', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DOUBLE, salesforceLabel: 'Latitude', externalId: false })
    public latitude?: number | null;
    @sField({ apiName: 'Longitude', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DOUBLE, salesforceLabel: 'Longitude', externalId: false })
    public longitude?: number | null;
    @sField({ apiName: 'GeocodeAccuracy', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PICKLIST, salesforceLabel: 'Geocode Accuracy', externalId: false })
    public geocodeAccuracy?: string | null;
    @sField({ apiName: 'Address', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.ADDRESS, salesforceLabel: 'Address', externalId: false })
    public readonly address?: string | null;
    @sField({ apiName: 'Email', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.EMAIL, salesforceLabel: 'Email', externalId: false })
    public email?: string | null;
    @sField({ apiName: 'EmailPreferencesAutoBcc', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'AutoBcc', externalId: false })
    public emailPreferencesAutoBcc?: boolean | null;
    @sField({ apiName: 'EmailPreferencesAutoBccStayInTouch', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'AutoBccStayInTouch', externalId: false })
    public emailPreferencesAutoBccStayInTouch?: boolean | null;
    @sField({ apiName: 'EmailPreferencesStayInTouchReminder', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'StayInTouchReminder', externalId: false })
    public emailPreferencesStayInTouchReminder?: boolean | null;
    @sField({ apiName: 'SenderEmail', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.EMAIL, salesforceLabel: 'Email Sender Address', externalId: false })
    public senderEmail?: string | null;
    @sField({ apiName: 'SenderName', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Email Sender Name', externalId: false })
    public senderName?: string | null;
    @sField({ apiName: 'Signature', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.TEXTAREA, salesforceLabel: 'Email Signature', externalId: false })
    public signature?: string | null;
    @sField({ apiName: 'StayInTouchSubject', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Stay-in-Touch Email Subject', externalId: false })
    public stayInTouchSubject?: string | null;
    @sField({ apiName: 'StayInTouchSignature', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.TEXTAREA, salesforceLabel: 'Stay-in-Touch Email Signature', externalId: false })
    public stayInTouchSignature?: string | null;
    @sField({ apiName: 'StayInTouchNote', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Stay-in-Touch Email Note', externalId: false })
    public stayInTouchNote?: string | null;
    @sField({ apiName: 'Phone', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PHONE, salesforceLabel: 'Phone', externalId: false })
    public phone?: string | null;
    @sField({ apiName: 'Fax', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PHONE, salesforceLabel: 'Fax', externalId: false })
    public fax?: string | null;
    @sField({ apiName: 'MobilePhone', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PHONE, salesforceLabel: 'Mobile', externalId: false })
    public mobilePhone?: string | null;
    @sField({ apiName: 'Alias', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Alias', externalId: false })
    public alias?: string | null;
    @sField({ apiName: 'CommunityNickname', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Nickname', externalId: false })
    public communityNickname?: string | null;
    @sField({ apiName: 'BadgeText', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'User Photo badge text overlay', externalId: false })
    public readonly badgeText?: string | null;
    @sField({ apiName: 'IsActive', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'Active', externalId: false })
    public isActive?: boolean | null;
    @sField({ apiName: 'TimeZoneSidKey', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PICKLIST, salesforceLabel: 'Time Zone', externalId: false })
    public timeZoneSidKey?: string | null;
    @sField({ apiName: 'UserRoleId', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.REFERENCE, salesforceLabel: 'Role ID', externalId: false })
    public userRoleId?: string | null;
    @sField({ apiName: 'LocaleSidKey', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PICKLIST, salesforceLabel: 'Locale', externalId: false })
    public localeSidKey?: string | null;
    @sField({ apiName: 'ReceivesInfoEmails', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'Info Emails', externalId: false })
    public receivesInfoEmails?: boolean | null;
    @sField({ apiName: 'ReceivesAdminInfoEmails', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'Admin Info Emails', externalId: false })
    public receivesAdminInfoEmails?: boolean | null;
    @sField({ apiName: 'EmailEncodingKey', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PICKLIST, salesforceLabel: 'Email Encoding', externalId: false })
    public emailEncodingKey?: string | null;
    @sField({ apiName: 'ProfileId', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.REFERENCE, salesforceLabel: 'Profile ID', externalId: false })
    public profileId?: string | null;
    @sField({ apiName: 'UserType', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PICKLIST, salesforceLabel: 'User Type', externalId: false })
    public readonly userType?: string | null;
    @sField({ apiName: 'LanguageLocaleKey', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PICKLIST, salesforceLabel: 'Language', externalId: false })
    public languageLocaleKey?: string | null;
    @sField({ apiName: 'EmployeeNumber', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Employee Number', externalId: false })
    public employeeNumber?: string | null;
    @sField({ apiName: 'DelegatedApproverId', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.REFERENCE, salesforceLabel: 'Delegated Approver ID', externalId: false })
    public delegatedApproverId?: string | null;
    @sField({ apiName: 'Manager', createable: false, updateable: false, required: false, reference: () => { return User }, childRelationship: false, salesforceType: SalesforceFieldType.REFERENCE, salesforceLabel: 'Manager ID', externalId: false })
    public manager?: User;
    @sField({ apiName: 'ManagerId', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.REFERENCE, salesforceLabel: 'Manager ID', externalId: false })
    public managerId?: string | null;
    @sField({ apiName: 'LastLoginDate', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DATETIME, salesforceLabel: 'Last Login', externalId: false })
    public readonly lastLoginDate?: Date | null;
    @sField({ apiName: 'LastPasswordChangeDate', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DATETIME, salesforceLabel: 'Last Password Change or Reset', externalId: false })
    public readonly lastPasswordChangeDate?: Date | null;
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
    @sField({ apiName: 'NumberOfFailedLogins', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.INT, salesforceLabel: 'Failed Login Attempts', externalId: false })
    public readonly numberOfFailedLogins?: number | null;
    @sField({ apiName: 'OfflineTrialExpirationDate', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DATETIME, salesforceLabel: 'Offline Edition Trial Expiration Date', externalId: false })
    public readonly offlineTrialExpirationDate?: Date | null;
    @sField({ apiName: 'OfflinePdaTrialExpirationDate', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DATETIME, salesforceLabel: 'Sales Anywhere Trial Expiration Date', externalId: false })
    public readonly offlinePdaTrialExpirationDate?: Date | null;
    @sField({ apiName: 'UserPermissionsMarketingUser', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'Marketing User', externalId: false })
    public userPermissionsMarketingUser?: boolean | null;
    @sField({ apiName: 'UserPermissionsOfflineUser', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'Offline User', externalId: false })
    public userPermissionsOfflineUser?: boolean | null;
    @sField({ apiName: 'UserPermissionsCallCenterAutoLogin', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'Auto-login To Call Center', externalId: false })
    public userPermissionsCallCenterAutoLogin?: boolean | null;
    @sField({ apiName: 'UserPermissionsSFContentUser', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'Salesforce CRM Content User', externalId: false })
    public userPermissionsSfContentUser?: boolean | null;
    @sField({ apiName: 'UserPermissionsKnowledgeUser', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'Knowledge User', externalId: false })
    public userPermissionsKnowledgeUser?: boolean | null;
    @sField({ apiName: 'UserPermissionsInteractionUser', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'Flow User', externalId: false })
    public userPermissionsInteractionUser?: boolean | null;
    @sField({ apiName: 'UserPermissionsSupportUser', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'Service Cloud User', externalId: false })
    public userPermissionsSupportUser?: boolean | null;
    @sField({ apiName: 'UserPermissionsJigsawProspectingUser', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'Data.com User', externalId: false })
    public userPermissionsJigsawProspectingUser?: boolean | null;
    @sField({ apiName: 'UserPermissionsSiteforceContributorUser', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'Site.com Contributor User', externalId: false })
    public userPermissionsSiteforceContributorUser?: boolean | null;
    @sField({ apiName: 'UserPermissionsSiteforcePublisherUser', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'Site.com Publisher User', externalId: false })
    public userPermissionsSiteforcePublisherUser?: boolean | null;
    @sField({ apiName: 'UserPermissionsWorkDotComUserFeature', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'WDC User', externalId: false })
    public userPermissionsWorkDotComUserFeature?: boolean | null;
    @sField({ apiName: 'ForecastEnabled', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'Allow Forecasting', externalId: false })
    public forecastEnabled?: boolean | null;
    @sField({ apiName: 'UserPreferencesActivityRemindersPopup', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'ActivityRemindersPopup', externalId: false })
    public userPreferencesActivityRemindersPopup?: boolean | null;
    @sField({ apiName: 'UserPreferencesEventRemindersCheckboxDefault', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'EventRemindersCheckboxDefault', externalId: false })
    public userPreferencesEventRemindersCheckboxDefault?: boolean | null;
    @sField({ apiName: 'UserPreferencesTaskRemindersCheckboxDefault', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'TaskRemindersCheckboxDefault', externalId: false })
    public userPreferencesTaskRemindersCheckboxDefault?: boolean | null;
    @sField({ apiName: 'UserPreferencesReminderSoundOff', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'ReminderSoundOff', externalId: false })
    public userPreferencesReminderSoundOff?: boolean | null;
    @sField({ apiName: 'UserPreferencesDisableAllFeedsEmail', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'DisableAllFeedsEmail', externalId: false })
    public userPreferencesDisableAllFeedsEmail?: boolean | null;
    @sField({ apiName: 'UserPreferencesDisableFollowersEmail', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'DisableFollowersEmail', externalId: false })
    public userPreferencesDisableFollowersEmail?: boolean | null;
    @sField({ apiName: 'UserPreferencesDisableProfilePostEmail', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'DisableProfilePostEmail', externalId: false })
    public userPreferencesDisableProfilePostEmail?: boolean | null;
    @sField({ apiName: 'UserPreferencesDisableChangeCommentEmail', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'DisableChangeCommentEmail', externalId: false })
    public userPreferencesDisableChangeCommentEmail?: boolean | null;
    @sField({ apiName: 'UserPreferencesDisableLaterCommentEmail', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'DisableLaterCommentEmail', externalId: false })
    public userPreferencesDisableLaterCommentEmail?: boolean | null;
    @sField({ apiName: 'UserPreferencesDisProfPostCommentEmail', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'DisProfPostCommentEmail', externalId: false })
    public userPreferencesDisProfPostCommentEmail?: boolean | null;
    @sField({ apiName: 'UserPreferencesContentNoEmail', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'ContentNoEmail', externalId: false })
    public userPreferencesContentNoEmail?: boolean | null;
    @sField({ apiName: 'UserPreferencesContentEmailAsAndWhen', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'ContentEmailAsAndWhen', externalId: false })
    public userPreferencesContentEmailAsAndWhen?: boolean | null;
    @sField({ apiName: 'UserPreferencesApexPagesDeveloperMode', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'ApexPagesDeveloperMode', externalId: false })
    public userPreferencesApexPagesDeveloperMode?: boolean | null;
    @sField({ apiName: 'UserPreferencesReceiveNoNotificationsAsApprover', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'ReceiveNoNotificationsAsApprover', externalId: false })
    public userPreferencesReceiveNoNotificationsAsApprover?: boolean | null;
    @sField({ apiName: 'UserPreferencesReceiveNotificationsAsDelegatedApprover', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'ReceiveNotificationsAsDelegatedApprover', externalId: false })
    public userPreferencesReceiveNotificationsAsDelegatedApprover?: boolean | null;
    @sField({ apiName: 'UserPreferencesHideCSNGetChatterMobileTask', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'HideCSNGetChatterMobileTask', externalId: false })
    public userPreferencesHideCsnGetChatterMobileTask?: boolean | null;
    @sField({ apiName: 'UserPreferencesDisableMentionsPostEmail', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'DisableMentionsPostEmail', externalId: false })
    public userPreferencesDisableMentionsPostEmail?: boolean | null;
    @sField({ apiName: 'UserPreferencesDisMentionsCommentEmail', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'DisMentionsCommentEmail', externalId: false })
    public userPreferencesDisMentionsCommentEmail?: boolean | null;
    @sField({ apiName: 'UserPreferencesHideCSNDesktopTask', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'HideCSNDesktopTask', externalId: false })
    public userPreferencesHideCsnDesktopTask?: boolean | null;
    @sField({ apiName: 'UserPreferencesHideChatterOnboardingSplash', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'HideChatterOnboardingSplash', externalId: false })
    public userPreferencesHideChatterOnboardingSplash?: boolean | null;
    @sField({ apiName: 'UserPreferencesHideSecondChatterOnboardingSplash', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'HideSecondChatterOnboardingSplash', externalId: false })
    public userPreferencesHideSecondChatterOnboardingSplash?: boolean | null;
    @sField({ apiName: 'UserPreferencesDisCommentAfterLikeEmail', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'DisCommentAfterLikeEmail', externalId: false })
    public userPreferencesDisCommentAfterLikeEmail?: boolean | null;
    @sField({ apiName: 'UserPreferencesDisableLikeEmail', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'DisableLikeEmail', externalId: false })
    public userPreferencesDisableLikeEmail?: boolean | null;
    @sField({ apiName: 'UserPreferencesSortFeedByComment', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'SortFeedByComment', externalId: false })
    public userPreferencesSortFeedByComment?: boolean | null;
    @sField({ apiName: 'UserPreferencesDisableMessageEmail', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'DisableMessageEmail', externalId: false })
    public userPreferencesDisableMessageEmail?: boolean | null;
    @sField({ apiName: 'UserPreferencesJigsawListUser', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'JigsawListUser', externalId: false })
    public userPreferencesJigsawListUser?: boolean | null;
    @sField({ apiName: 'UserPreferencesDisableBookmarkEmail', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'DisableBookmarkEmail', externalId: false })
    public userPreferencesDisableBookmarkEmail?: boolean | null;
    @sField({ apiName: 'UserPreferencesDisableSharePostEmail', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'DisableSharePostEmail', externalId: false })
    public userPreferencesDisableSharePostEmail?: boolean | null;
    @sField({ apiName: 'UserPreferencesEnableAutoSubForFeeds', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'EnableAutoSubForFeeds', externalId: false })
    public userPreferencesEnableAutoSubForFeeds?: boolean | null;
    @sField({ apiName: 'UserPreferencesDisableFileShareNotificationsForApi', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'DisableFileShareNotificationsForApi', externalId: false })
    public userPreferencesDisableFileShareNotificationsForApi?: boolean | null;
    @sField({ apiName: 'UserPreferencesShowTitleToExternalUsers', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'ShowTitleToExternalUsers', externalId: false })
    public userPreferencesShowTitleToExternalUsers?: boolean | null;
    @sField({ apiName: 'UserPreferencesShowManagerToExternalUsers', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'ShowManagerToExternalUsers', externalId: false })
    public userPreferencesShowManagerToExternalUsers?: boolean | null;
    @sField({ apiName: 'UserPreferencesShowEmailToExternalUsers', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'ShowEmailToExternalUsers', externalId: false })
    public userPreferencesShowEmailToExternalUsers?: boolean | null;
    @sField({ apiName: 'UserPreferencesShowWorkPhoneToExternalUsers', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'ShowWorkPhoneToExternalUsers', externalId: false })
    public userPreferencesShowWorkPhoneToExternalUsers?: boolean | null;
    @sField({ apiName: 'UserPreferencesShowMobilePhoneToExternalUsers', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'ShowMobilePhoneToExternalUsers', externalId: false })
    public userPreferencesShowMobilePhoneToExternalUsers?: boolean | null;
    @sField({ apiName: 'UserPreferencesShowFaxToExternalUsers', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'ShowFaxToExternalUsers', externalId: false })
    public userPreferencesShowFaxToExternalUsers?: boolean | null;
    @sField({ apiName: 'UserPreferencesShowStreetAddressToExternalUsers', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'ShowStreetAddressToExternalUsers', externalId: false })
    public userPreferencesShowStreetAddressToExternalUsers?: boolean | null;
    @sField({ apiName: 'UserPreferencesShowCityToExternalUsers', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'ShowCityToExternalUsers', externalId: false })
    public userPreferencesShowCityToExternalUsers?: boolean | null;
    @sField({ apiName: 'UserPreferencesShowStateToExternalUsers', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'ShowStateToExternalUsers', externalId: false })
    public userPreferencesShowStateToExternalUsers?: boolean | null;
    @sField({ apiName: 'UserPreferencesShowPostalCodeToExternalUsers', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'ShowPostalCodeToExternalUsers', externalId: false })
    public userPreferencesShowPostalCodeToExternalUsers?: boolean | null;
    @sField({ apiName: 'UserPreferencesShowCountryToExternalUsers', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'ShowCountryToExternalUsers', externalId: false })
    public userPreferencesShowCountryToExternalUsers?: boolean | null;
    @sField({ apiName: 'UserPreferencesShowProfilePicToGuestUsers', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'ShowProfilePicToGuestUsers', externalId: false })
    public userPreferencesShowProfilePicToGuestUsers?: boolean | null;
    @sField({ apiName: 'UserPreferencesShowTitleToGuestUsers', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'ShowTitleToGuestUsers', externalId: false })
    public userPreferencesShowTitleToGuestUsers?: boolean | null;
    @sField({ apiName: 'UserPreferencesShowCityToGuestUsers', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'ShowCityToGuestUsers', externalId: false })
    public userPreferencesShowCityToGuestUsers?: boolean | null;
    @sField({ apiName: 'UserPreferencesShowStateToGuestUsers', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'ShowStateToGuestUsers', externalId: false })
    public userPreferencesShowStateToGuestUsers?: boolean | null;
    @sField({ apiName: 'UserPreferencesShowPostalCodeToGuestUsers', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'ShowPostalCodeToGuestUsers', externalId: false })
    public userPreferencesShowPostalCodeToGuestUsers?: boolean | null;
    @sField({ apiName: 'UserPreferencesShowCountryToGuestUsers', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'ShowCountryToGuestUsers', externalId: false })
    public userPreferencesShowCountryToGuestUsers?: boolean | null;
    @sField({ apiName: 'UserPreferencesShowForecastingChangeSignals', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'ShowForecastingChangeSignals', externalId: false })
    public userPreferencesShowForecastingChangeSignals?: boolean | null;
    @sField({ apiName: 'UserPreferencesHideS1BrowserUI', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'HideS1BrowserUI', externalId: false })
    public userPreferencesHideS1BrowserUi?: boolean | null;
    @sField({ apiName: 'UserPreferencesDisableEndorsementEmail', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'DisableEndorsementEmail', externalId: false })
    public userPreferencesDisableEndorsementEmail?: boolean | null;
    @sField({ apiName: 'UserPreferencesPathAssistantCollapsed', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'PathAssistantCollapsed', externalId: false })
    public userPreferencesPathAssistantCollapsed?: boolean | null;
    @sField({ apiName: 'UserPreferencesCacheDiagnostics', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'CacheDiagnostics', externalId: false })
    public userPreferencesCacheDiagnostics?: boolean | null;
    @sField({ apiName: 'UserPreferencesShowEmailToGuestUsers', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'ShowEmailToGuestUsers', externalId: false })
    public userPreferencesShowEmailToGuestUsers?: boolean | null;
    @sField({ apiName: 'UserPreferencesShowManagerToGuestUsers', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'ShowManagerToGuestUsers', externalId: false })
    public userPreferencesShowManagerToGuestUsers?: boolean | null;
    @sField({ apiName: 'UserPreferencesShowWorkPhoneToGuestUsers', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'ShowWorkPhoneToGuestUsers', externalId: false })
    public userPreferencesShowWorkPhoneToGuestUsers?: boolean | null;
    @sField({ apiName: 'UserPreferencesShowMobilePhoneToGuestUsers', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'ShowMobilePhoneToGuestUsers', externalId: false })
    public userPreferencesShowMobilePhoneToGuestUsers?: boolean | null;
    @sField({ apiName: 'UserPreferencesShowFaxToGuestUsers', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'ShowFaxToGuestUsers', externalId: false })
    public userPreferencesShowFaxToGuestUsers?: boolean | null;
    @sField({ apiName: 'UserPreferencesShowStreetAddressToGuestUsers', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'ShowStreetAddressToGuestUsers', externalId: false })
    public userPreferencesShowStreetAddressToGuestUsers?: boolean | null;
    @sField({ apiName: 'UserPreferencesLightningExperiencePreferred', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'LightningExperiencePreferred', externalId: false })
    public userPreferencesLightningExperiencePreferred?: boolean | null;
    @sField({ apiName: 'UserPreferencesPreviewLightning', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'PreviewLightning', externalId: false })
    public userPreferencesPreviewLightning?: boolean | null;
    @sField({ apiName: 'UserPreferencesHideEndUserOnboardingAssistantModal', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'HideEndUserOnboardingAssistantModal', externalId: false })
    public userPreferencesHideEndUserOnboardingAssistantModal?: boolean | null;
    @sField({ apiName: 'UserPreferencesHideLightningMigrationModal', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'HideLightningMigrationModal', externalId: false })
    public userPreferencesHideLightningMigrationModal?: boolean | null;
    @sField({ apiName: 'UserPreferencesHideSfxWelcomeMat', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'HideSfxWelcomeMat', externalId: false })
    public userPreferencesHideSfxWelcomeMat?: boolean | null;
    @sField({ apiName: 'UserPreferencesHideBiggerPhotoCallout', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'HideBiggerPhotoCallout', externalId: false })
    public userPreferencesHideBiggerPhotoCallout?: boolean | null;
    @sField({ apiName: 'UserPreferencesGlobalNavBarWTShown', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'GlobalNavBarWTShown', externalId: false })
    public userPreferencesGlobalNavBarWtShown?: boolean | null;
    @sField({ apiName: 'UserPreferencesGlobalNavGridMenuWTShown', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'GlobalNavGridMenuWTShown', externalId: false })
    public userPreferencesGlobalNavGridMenuWtShown?: boolean | null;
    @sField({ apiName: 'UserPreferencesCreateLEXAppsWTShown', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'CreateLEXAppsWTShown', externalId: false })
    public userPreferencesCreateLexAppsWtShown?: boolean | null;
    @sField({ apiName: 'UserPreferencesFavoritesWTShown', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'FavoritesWTShown', externalId: false })
    public userPreferencesFavoritesWtShown?: boolean | null;
    @sField({ apiName: 'UserPreferencesRecordHomeSectionCollapseWTShown', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'RecordHomeSectionCollapseWTShown', externalId: false })
    public userPreferencesRecordHomeSectionCollapseWtShown?: boolean | null;
    @sField({ apiName: 'UserPreferencesRecordHomeReservedWTShown', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'RecordHomeReservedWTShown', externalId: false })
    public userPreferencesRecordHomeReservedWtShown?: boolean | null;
    @sField({ apiName: 'UserPreferencesFavoritesShowTopFavorites', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'FavoritesShowTopFavorites', externalId: false })
    public userPreferencesFavoritesShowTopFavorites?: boolean | null;
    @sField({ apiName: 'UserPreferencesExcludeMailAppAttachments', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'ExcludeMailAppAttachments', externalId: false })
    public userPreferencesExcludeMailAppAttachments?: boolean | null;
    @sField({ apiName: 'UserPreferencesSuppressTaskSFXReminders', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'SuppressTaskSFXReminders', externalId: false })
    public userPreferencesSuppressTaskSfxReminders?: boolean | null;
    @sField({ apiName: 'UserPreferencesSuppressEventSFXReminders', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'SuppressEventSFXReminders', externalId: false })
    public userPreferencesSuppressEventSfxReminders?: boolean | null;
    @sField({ apiName: 'UserPreferencesPreviewCustomTheme', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'PreviewCustomTheme', externalId: false })
    public userPreferencesPreviewCustomTheme?: boolean | null;
    @sField({ apiName: 'UserPreferencesHasCelebrationBadge', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'HasCelebrationBadge', externalId: false })
    public userPreferencesHasCelebrationBadge?: boolean | null;
    @sField({ apiName: 'UserPreferencesUserDebugModePref', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'UserDebugModePref', externalId: false })
    public userPreferencesUserDebugModePref?: boolean | null;
    @sField({ apiName: 'UserPreferencesSRHOverrideActivities', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'SRHOverrideActivities', externalId: false })
    public userPreferencesSrhOverrideActivities?: boolean | null;
    @sField({ apiName: 'UserPreferencesNewLightningReportRunPageEnabled', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'NewLightningReportRunPageEnabled', externalId: false })
    public userPreferencesNewLightningReportRunPageEnabled?: boolean | null;
    @sField({ apiName: 'UserPreferencesReverseOpenActivitiesView', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'ReverseOpenActivitiesView', externalId: false })
    public userPreferencesReverseOpenActivitiesView?: boolean | null;
    @sField({ apiName: 'UserPreferencesShowTerritoryTimeZoneShifts', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'ShowTerritoryTimeZoneShifts', externalId: false })
    public userPreferencesShowTerritoryTimeZoneShifts?: boolean | null;
    @sField({ apiName: 'UserPreferencesHasSentWarningEmail', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'HasSentWarningEmail', externalId: false })
    public userPreferencesHasSentWarningEmail?: boolean | null;
    @sField({ apiName: 'UserPreferencesHasSentWarningEmail238', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'HasSentWarningEmail238', externalId: false })
    public userPreferencesHasSentWarningEmail238?: boolean | null;
    @sField({ apiName: 'UserPreferencesHasSentWarningEmail240', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'HasSentWarningEmail240', externalId: false })
    public userPreferencesHasSentWarningEmail240?: boolean | null;
    @sField({ apiName: 'UserPreferencesNativeEmailClient', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'NativeEmailClient', externalId: false })
    public userPreferencesNativeEmailClient?: boolean | null;
    @sField({ apiName: 'Contact', createable: false, updateable: false, required: false, reference: () => { return Contact }, childRelationship: false, salesforceType: SalesforceFieldType.REFERENCE, salesforceLabel: 'Contact ID', externalId: false })
    public contact?: Contact;
    @sField({ apiName: 'ContactId', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.REFERENCE, salesforceLabel: 'Contact ID', externalId: false })
    public contactId?: string | null;
    @sField({ apiName: 'Account', createable: false, updateable: false, required: false, reference: () => { return Account }, childRelationship: false, salesforceType: SalesforceFieldType.REFERENCE, salesforceLabel: 'Account ID', externalId: false })
    public account?: Account;
    @sField({ apiName: 'AccountId', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.REFERENCE, salesforceLabel: 'Account ID', externalId: false })
    public readonly accountId?: string | null;
    @sField({ apiName: 'CallCenterId', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.REFERENCE, salesforceLabel: 'Call Center ID', externalId: false })
    public callCenterId?: string | null;
    @sField({ apiName: 'Extension', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PHONE, salesforceLabel: 'Extension', externalId: false })
    public extension?: string | null;
    @sField({ apiName: 'FederationIdentifier', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'SAML Federation ID', externalId: false })
    public federationIdentifier?: string | null;
    @sField({ apiName: 'AboutMe', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.TEXTAREA, salesforceLabel: 'About Me', externalId: false })
    public aboutMe?: string | null;
    @sField({ apiName: 'FullPhotoUrl', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.URL, salesforceLabel: 'Url for full-sized Photo', externalId: false })
    public readonly fullPhotoUrl?: string | null;
    @sField({ apiName: 'SmallPhotoUrl', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.URL, salesforceLabel: 'Photo', externalId: false })
    public readonly smallPhotoUrl?: string | null;
    @sField({ apiName: 'IsExtIndicatorVisible', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'Show external indicator', externalId: false })
    public readonly isExtIndicatorVisible?: boolean | null;
    @sField({ apiName: 'OutOfOfficeMessage', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Out of office message', externalId: false })
    public readonly outOfOfficeMessage?: string | null;
    @sField({ apiName: 'MediumPhotoUrl', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.URL, salesforceLabel: 'Url for medium profile photo', externalId: false })
    public readonly mediumPhotoUrl?: string | null;
    @sField({ apiName: 'DigestFrequency', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PICKLIST, salesforceLabel: 'Chatter Email Highlights Frequency', externalId: false })
    public digestFrequency?: string | null;
    @sField({ apiName: 'DefaultGroupNotificationFrequency', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PICKLIST, salesforceLabel: 'Default Notification Frequency when Joining Groups', externalId: false })
    public defaultGroupNotificationFrequency?: string | null;
    @sField({ apiName: 'JigsawImportLimitOverride', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.INT, salesforceLabel: 'Data.com Monthly Addition Limit', externalId: false })
    public jigsawImportLimitOverride?: number | null;
    @sField({ apiName: 'LastViewedDate', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DATETIME, salesforceLabel: 'Last Viewed Date', externalId: false })
    public readonly lastViewedDate?: Date | null;
    @sField({ apiName: 'LastReferencedDate', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DATETIME, salesforceLabel: 'Last Referenced Date', externalId: false })
    public readonly lastReferencedDate?: Date | null;
    @sField({ apiName: 'BannerPhotoUrl', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.URL, salesforceLabel: 'Url for banner photo', externalId: false })
    public readonly bannerPhotoUrl?: string | null;
    @sField({ apiName: 'SmallBannerPhotoUrl', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.URL, salesforceLabel: 'Url for IOS banner photo', externalId: false })
    public readonly smallBannerPhotoUrl?: string | null;
    @sField({ apiName: 'MediumBannerPhotoUrl', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.URL, salesforceLabel: 'Url for Android banner photo', externalId: false })
    public readonly mediumBannerPhotoUrl?: string | null;
    @sField({ apiName: 'IsProfilePhotoActive', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'Has Profile Photo', externalId: false })
    public readonly isProfilePhotoActive?: boolean | null;
    @sField({ apiName: 'IndividualId', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.REFERENCE, salesforceLabel: 'Individual ID', externalId: false })
    public individualId?: string | null;

    constructor(fields?: UserFields, restInstance?: Rest) {
        super('User', restInstance);
        this.id = void 0;
        this.username = void 0;
        this.lastName = void 0;
        this.firstName = void 0;
        this.name = void 0;
        this.companyName = void 0;
        this.division = void 0;
        this.department = void 0;
        this.title = void 0;
        this.street = void 0;
        this.city = void 0;
        this.state = void 0;
        this.postalCode = void 0;
        this.country = void 0;
        this.latitude = void 0;
        this.longitude = void 0;
        this.geocodeAccuracy = void 0;
        this.address = void 0;
        this.email = void 0;
        this.emailPreferencesAutoBcc = void 0;
        this.emailPreferencesAutoBccStayInTouch = void 0;
        this.emailPreferencesStayInTouchReminder = void 0;
        this.senderEmail = void 0;
        this.senderName = void 0;
        this.signature = void 0;
        this.stayInTouchSubject = void 0;
        this.stayInTouchSignature = void 0;
        this.stayInTouchNote = void 0;
        this.phone = void 0;
        this.fax = void 0;
        this.mobilePhone = void 0;
        this.alias = void 0;
        this.communityNickname = void 0;
        this.badgeText = void 0;
        this.isActive = void 0;
        this.timeZoneSidKey = void 0;
        this.userRoleId = void 0;
        this.localeSidKey = void 0;
        this.receivesInfoEmails = void 0;
        this.receivesAdminInfoEmails = void 0;
        this.emailEncodingKey = void 0;
        this.profileId = void 0;
        this.userType = void 0;
        this.languageLocaleKey = void 0;
        this.employeeNumber = void 0;
        this.delegatedApproverId = void 0;
        this.manager = void 0;
        this.managerId = void 0;
        this.lastLoginDate = void 0;
        this.lastPasswordChangeDate = void 0;
        this.createdDate = void 0;
        this.createdBy = void 0;
        this.createdById = void 0;
        this.lastModifiedDate = void 0;
        this.lastModifiedBy = void 0;
        this.lastModifiedById = void 0;
        this.systemModstamp = void 0;
        this.numberOfFailedLogins = void 0;
        this.offlineTrialExpirationDate = void 0;
        this.offlinePdaTrialExpirationDate = void 0;
        this.userPermissionsMarketingUser = void 0;
        this.userPermissionsOfflineUser = void 0;
        this.userPermissionsCallCenterAutoLogin = void 0;
        this.userPermissionsSfContentUser = void 0;
        this.userPermissionsKnowledgeUser = void 0;
        this.userPermissionsInteractionUser = void 0;
        this.userPermissionsSupportUser = void 0;
        this.userPermissionsJigsawProspectingUser = void 0;
        this.userPermissionsSiteforceContributorUser = void 0;
        this.userPermissionsSiteforcePublisherUser = void 0;
        this.userPermissionsWorkDotComUserFeature = void 0;
        this.forecastEnabled = void 0;
        this.userPreferencesActivityRemindersPopup = void 0;
        this.userPreferencesEventRemindersCheckboxDefault = void 0;
        this.userPreferencesTaskRemindersCheckboxDefault = void 0;
        this.userPreferencesReminderSoundOff = void 0;
        this.userPreferencesDisableAllFeedsEmail = void 0;
        this.userPreferencesDisableFollowersEmail = void 0;
        this.userPreferencesDisableProfilePostEmail = void 0;
        this.userPreferencesDisableChangeCommentEmail = void 0;
        this.userPreferencesDisableLaterCommentEmail = void 0;
        this.userPreferencesDisProfPostCommentEmail = void 0;
        this.userPreferencesContentNoEmail = void 0;
        this.userPreferencesContentEmailAsAndWhen = void 0;
        this.userPreferencesApexPagesDeveloperMode = void 0;
        this.userPreferencesReceiveNoNotificationsAsApprover = void 0;
        this.userPreferencesReceiveNotificationsAsDelegatedApprover = void 0;
        this.userPreferencesHideCsnGetChatterMobileTask = void 0;
        this.userPreferencesDisableMentionsPostEmail = void 0;
        this.userPreferencesDisMentionsCommentEmail = void 0;
        this.userPreferencesHideCsnDesktopTask = void 0;
        this.userPreferencesHideChatterOnboardingSplash = void 0;
        this.userPreferencesHideSecondChatterOnboardingSplash = void 0;
        this.userPreferencesDisCommentAfterLikeEmail = void 0;
        this.userPreferencesDisableLikeEmail = void 0;
        this.userPreferencesSortFeedByComment = void 0;
        this.userPreferencesDisableMessageEmail = void 0;
        this.userPreferencesJigsawListUser = void 0;
        this.userPreferencesDisableBookmarkEmail = void 0;
        this.userPreferencesDisableSharePostEmail = void 0;
        this.userPreferencesEnableAutoSubForFeeds = void 0;
        this.userPreferencesDisableFileShareNotificationsForApi = void 0;
        this.userPreferencesShowTitleToExternalUsers = void 0;
        this.userPreferencesShowManagerToExternalUsers = void 0;
        this.userPreferencesShowEmailToExternalUsers = void 0;
        this.userPreferencesShowWorkPhoneToExternalUsers = void 0;
        this.userPreferencesShowMobilePhoneToExternalUsers = void 0;
        this.userPreferencesShowFaxToExternalUsers = void 0;
        this.userPreferencesShowStreetAddressToExternalUsers = void 0;
        this.userPreferencesShowCityToExternalUsers = void 0;
        this.userPreferencesShowStateToExternalUsers = void 0;
        this.userPreferencesShowPostalCodeToExternalUsers = void 0;
        this.userPreferencesShowCountryToExternalUsers = void 0;
        this.userPreferencesShowProfilePicToGuestUsers = void 0;
        this.userPreferencesShowTitleToGuestUsers = void 0;
        this.userPreferencesShowCityToGuestUsers = void 0;
        this.userPreferencesShowStateToGuestUsers = void 0;
        this.userPreferencesShowPostalCodeToGuestUsers = void 0;
        this.userPreferencesShowCountryToGuestUsers = void 0;
        this.userPreferencesShowForecastingChangeSignals = void 0;
        this.userPreferencesHideS1BrowserUi = void 0;
        this.userPreferencesDisableEndorsementEmail = void 0;
        this.userPreferencesPathAssistantCollapsed = void 0;
        this.userPreferencesCacheDiagnostics = void 0;
        this.userPreferencesShowEmailToGuestUsers = void 0;
        this.userPreferencesShowManagerToGuestUsers = void 0;
        this.userPreferencesShowWorkPhoneToGuestUsers = void 0;
        this.userPreferencesShowMobilePhoneToGuestUsers = void 0;
        this.userPreferencesShowFaxToGuestUsers = void 0;
        this.userPreferencesShowStreetAddressToGuestUsers = void 0;
        this.userPreferencesLightningExperiencePreferred = void 0;
        this.userPreferencesPreviewLightning = void 0;
        this.userPreferencesHideEndUserOnboardingAssistantModal = void 0;
        this.userPreferencesHideLightningMigrationModal = void 0;
        this.userPreferencesHideSfxWelcomeMat = void 0;
        this.userPreferencesHideBiggerPhotoCallout = void 0;
        this.userPreferencesGlobalNavBarWtShown = void 0;
        this.userPreferencesGlobalNavGridMenuWtShown = void 0;
        this.userPreferencesCreateLexAppsWtShown = void 0;
        this.userPreferencesFavoritesWtShown = void 0;
        this.userPreferencesRecordHomeSectionCollapseWtShown = void 0;
        this.userPreferencesRecordHomeReservedWtShown = void 0;
        this.userPreferencesFavoritesShowTopFavorites = void 0;
        this.userPreferencesExcludeMailAppAttachments = void 0;
        this.userPreferencesSuppressTaskSfxReminders = void 0;
        this.userPreferencesSuppressEventSfxReminders = void 0;
        this.userPreferencesPreviewCustomTheme = void 0;
        this.userPreferencesHasCelebrationBadge = void 0;
        this.userPreferencesUserDebugModePref = void 0;
        this.userPreferencesSrhOverrideActivities = void 0;
        this.userPreferencesNewLightningReportRunPageEnabled = void 0;
        this.userPreferencesReverseOpenActivitiesView = void 0;
        this.userPreferencesShowTerritoryTimeZoneShifts = void 0;
        this.userPreferencesHasSentWarningEmail = void 0;
        this.userPreferencesHasSentWarningEmail238 = void 0;
        this.userPreferencesHasSentWarningEmail240 = void 0;
        this.userPreferencesNativeEmailClient = void 0;
        this.contact = void 0;
        this.contactId = void 0;
        this.account = void 0;
        this.accountId = void 0;
        this.callCenterId = void 0;
        this.extension = void 0;
        this.federationIdentifier = void 0;
        this.aboutMe = void 0;
        this.fullPhotoUrl = void 0;
        this.smallPhotoUrl = void 0;
        this.isExtIndicatorVisible = void 0;
        this.outOfOfficeMessage = void 0;
        this.mediumPhotoUrl = void 0;
        this.digestFrequency = void 0;
        this.defaultGroupNotificationFrequency = void 0;
        this.jigsawImportLimitOverride = void 0;
        this.lastViewedDate = void 0;
        this.lastReferencedDate = void 0;
        this.bannerPhotoUrl = void 0;
        this.smallBannerPhotoUrl = void 0;
        this.mediumBannerPhotoUrl = void 0;
        this.isProfilePhotoActive = void 0;
        this.individualId = void 0;
        this.__UUID = User.__UUID;
        this.initObject(fields);
        return new Proxy(this, this.safeUpdateProxyHandler);
    }

    public static API_NAME: 'User' = 'User';
    public readonly _TYPE_: 'User' = 'User';
    public static __UUID = Symbol();
    private static _fields: { [P in keyof FieldProps<User>]: SFieldProperties; };

    public static get FIELDS() {
        return this._fields = this._fields ? this._fields : User.getPropertiesMeta<FieldProps<User>, User>(User)
    }

    public static async retrieve(qryParam: ((fields: FieldResolver<User>) => SOQLQueryParams) | string, opts?: QueryOpts): Promise<User[]> {

        const qry = typeof qryParam === 'function' ? buildQuery(User, qryParam) : qryParam;
        return await RestObject.query<User>(User, qry, opts);

    }

    public static fromSFObject(sob: SObject): User {
        return new User().mapFromQuery(sob);
    }
}
