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
    await t.click("#student-delete");

    //await t.click("#student-delete-20004");

    //const deleteButton = Selector("#student-delete-20004");
   // await t.expect(deleteButton.exists).notOk();

    //const studentRow = Selector('#student-table tr').withText("Hasitha Fernando");
   // await t.expect(studentRow.exists).notOk();
    //const deleteButton = Selector("#student-delete-20004");
    //await t.expect(deleteButton.exists).ok();
    //await t.click(deleteButton);
    
    const table = Selector('#student-table')
    const rowCount = await table.find('tr').count;

    let tdText = await table.find('tr').nth(rowCount - 1).innerText;
    await t.expect(tdText).contains("20004");
});
