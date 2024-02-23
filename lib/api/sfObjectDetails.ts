import SfConnection from "./jsforceauth";


export default async function GenerateModuleCode(sfObjectName: string)
{
    // Create a jsforce connection
    const conn = await SfConnection.open();

    // Get the Account object
    var account = conn.sobject("Account");
    // Describe the object and its fields
    account.describe(function(err, result) {
    if (err) { return console.error(err); }
    // Get the fields array
    var fields = result.fields;
    // Loop through the fields and print their properties
    for (var i = 0; i < fields.length; i++) {
        var field = fields[i];
        console.log("Display name: " + field.label);
        console.log("Data-type: " + field.type);
        console.log("API name: " + field.name);
        console.log("--------------------");
    }
    });


}
