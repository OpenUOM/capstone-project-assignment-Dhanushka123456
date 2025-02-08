import { Selector } from 'testcafe';
process.env.NODE_ENV = "test";

fixture`Testing Student UI`
    .page`http://localhost:8080/student`;
     await t.expect(Selector("#id").exists).ok();

  // Enter student ID
      await t.typeText("#id", "20003");

  // Ensure delete button exists before clicking
      const deleteButton = Selector("#student-delete-20003");
      await t.expect(deleteButton.exists).ok();

  // Click delete button
      await t.click(deleteButton);

  // Verify student is deleted (adjust selector based on UI feedback)
      await t.expect(Selector("#student-20003").exists).notOk();
});
    
//test('Testing delete students', async t => {
   // await t.navigateTo("/addStudent");
   // await t.typeText("#student-id", "20003");
    //await t.typeText("#student-name", "Hiruni Gajanayake");
   // await t.typeText("#student-age", "45");
   //await t.typeText("#student-Hometown", "buddhist");
    //await t.click("#student-add");

    //await t.navigateTo("/student");
    //await t.typeText("#id","20003");
   // await t.click("#student-delete-20003");
    
    //await t.navigateTo("/student");
    //const table = Selector('#student-table')
    //const rowCount = await table.find('tr').count;

    //let tdText = await table.find('tr').nth(rowCount - 1).innerText;
    //await t.expect(tdText).notContains("Hiruni Gajanayake");
    
//});
