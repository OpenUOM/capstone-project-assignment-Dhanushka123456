import { Selector } from 'testcafe';
process.env.NODE_ENV = "test";

fixture`Testing Student UI`
    .page`http://localhost:8080/student`;
    
test('Testing delete students', async t => {
    await t.navigateTo("/deleteStudent");
    await t.click("#student-delete-20003");
    //const studentRow = Selector('#student-table').find('td').withText("20005");
   // await t.expect(studentRow.exists).ok('Student should be present before deletion');

    //await t.click('#student-delete');
    

    await t.navigateTo("/student");


    const table = Selector('#student-table')
    const rowCount = await table.find('tr').count;

    let tdText = await table.find('td').nth(rowCount - 1).innerText;
    await t.expect(tdText).contains("20003");

    
});
