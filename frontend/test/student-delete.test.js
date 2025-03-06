import { Selector } from 'testcafe';
process.env.NODE_ENV = "test";

fixture`Testing Student UI`
    .page`http://localhost:8080/student`

test('Testing delete students', async t => {
    await t.navigateTo("/addStudent");
    await t.typeText("#student-id", "20001");
    await t.typeText("#student-name", "Supun Mihiranga");
    await t.typeText("#student-age", "10");
    await t.typeText("#student-Hometown", "Colombo");
    await t.click("#student-add");
    {// id: 20001, name: 'Supun Mihiranga', age: 10, hometown: 'Colombo'},
    await t.navigateTo("/student");
    await t.click("#student-delete-20001");
    
    await t.navigateTo("/student");
    const table = Selector('#student-table')
    const rowCount = await table.find('tr').count;

    let tdText = await table.find('tr').nth(rowCount - 1).innerText;
    await t.expect(tdText).contains("20001");
});
