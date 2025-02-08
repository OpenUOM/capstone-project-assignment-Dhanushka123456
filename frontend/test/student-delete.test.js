import { Selector } from 'testcafe';
process.env.NODE_ENV = "test";

fixture`Testing Student UI`
    .page`http://localhost:8080/student`

test('Testing delete students', async t => {
    await t.navigateTo("/addStudent");
    await t.typeText("#student-id", "222222");
    await t.typeText("#student-name", "Hiruni Gajanayake");
    await t.typeText("#student-age", "45");
    await t.typeText("#student-Hometown", "buddhist");
    await t.click("#student-add");

    await t.navigateTo("/deleteStudent");

    await t.click(`#student-delete-${222222}`);

    // Assert after deletion
    await t.expect(addedStudent.exists).notOk('Student was not deleted');
});
