import { Selector } from 'testcafe';
process.env.NODE_ENV = "test";

fixture`Testing Student UI`
    .page`http://localhost:8080/student`;
    
test('Testing delete students', async t => {
    await t.navigateTo("/addStudent");
    await t.typeText("#student-id", "20005");
    await t.typeText("#student-name", "Hiruni Gajanayake");
    await t.typeText("#student-age", "45");
    await t.typeText("#student-Hometown", "Kandy");
    await t.click("#student-add");

    await t.navigateTo("/deleteStudent");

    await t.click (Selector('#student-delete-20005'));
    await t.navigateTo("/student");
    const table = Selector('#student-table')
    const rowCount = await table.find('td').count;

    let tdText = await table.find('td').nth(rowCount - 1).innerText;
    await t.expect(tdText).contains("");
});
