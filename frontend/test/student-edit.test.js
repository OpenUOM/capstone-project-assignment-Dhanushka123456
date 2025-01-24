import { Selector } from 'testcafe';
process.env.NODE_ENV = "test";

fixture`Testing Student UI`
    .page`http://localhost:8080/student`;

test('Testing edit students', async t => {
    await t.navigateTo("/addStudent");
    await t.typeText("#student-id", "222222");
    await t.typeText("#student-name", "Isuri De Silva");
    await t.typeText("#student-age", "27");
    await t.typeText("#student-Hometown", "buddhist");
    await t.click("#student-add");

    await t.navigateTo("/editStudent");
    await t.typeText("#student-name", "Isuri Sugathadasa");
    await t.typeText("#student-age", "28");
    await t.typeText("#student-Hometown", "catholic");
    await t.click("#student-edit");

    await t.navigateTo("/student");

    const table = Selector('#student-table')
    const rowCount = await table.find('tr').count;

    let tdText = await table.find('td').nth(rowCount - 1).innerText;
    await t.expect(tdText).contains("Isuri Sugathadasa");

    await t.navigateTo("/student");
    await t.click("#student-delete-222222");
});
