import { Selector } from 'testcafe';
process.env.NODE_ENV = "test";

fixture`Testing Student UI`
    .page`http://localhost:8080/student`;
    
test('Testing delete students', async t => {
    await t.navigateTo("/addStudent");
    await t.typeText("#student-id", "20004");
    await t.typeText("#student-name", "Hiruni Gajanayake");
    await t.typeText("#student-age", "45");
    await t.typeText("#student-Hometown", "Kandy");
    await t.click("#student-add");

    await t.navigateTo("/student");
    const deleteButton = Selector('[id^="student-delete-"]').withText("20004");
    await t.click(deleteButton);

    await t.wait(1000);


    //await t.click("#student-delete-20004");
    //await t.click(Selector("td[role='gridcell'] span").nth(33));    
    
    const table = Selector('#student-table')
    const rowCount = await table.find('tr').count;

    let tdText = await table.find('tr').nth(rowCount - 1).innerText;
    await t.expect(tdText).notContains("20004");
});
