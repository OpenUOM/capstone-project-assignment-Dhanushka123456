import { Selector } from 'testcafe';
process.env.NODE_ENV = "test";

fixture`Testing Student UI`
    .page`http://localhost:8080/student`;

test('Testing edit students', async t => {
    await t.navigateTo("/editStudent");
    await t.typeText("#student-id", "20002");
    await t.typeText("#student-name", "Chamara ranawaka");
    await t.typeText("#student-age", "46");
    await t.typeText("#student-Hometown", "galle");
    await t.click("#student-edit");
    
    await t.navigateTo("/student");

    const table = Selector('#student-table')
    const rowCount = await table.find('tr').count;

    let tdText = await table.find('tr').nth(rowCount - 1).innerText;
    await t.expect(tdText).notcontains("Chamara ranawaka");

    await t.navigateTo("/student");
    await t.click("#student-delete-20004");
});
