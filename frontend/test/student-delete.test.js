import { Selector } from 'testcafe';
process.env.NODE_ENV = "test";

fixture`Testing Student UI`
    .page`http://localhost:8080/student`;
    
test('Testing delete students', async t => {
    await t.navigateTo("/addStudent");
    await t.typeText("#student-id", "20008");
    await t.typeText("#student-name", "Hiruni Gajanayake");
    await t.typeText("#student-age", "45");
    await t.typeText("#student-Hometown", "buddhist");
    await t.click("#student-add");

    await t.navigateTo("/deleteStudent");
    await t.typeText("id", "20008");
    await t.click("#student-delete);
    
    await t.navigateTo("/student");
    const table = Selector('#student-table')
    const rowCount = await table.find('tr').count;

    let tdText = await table.find('tr').nth(rowCount - 1).innerText;
    await t.expect(tdText).notContains("Hiruni Gajanayake");
    
});
